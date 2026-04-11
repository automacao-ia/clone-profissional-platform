import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getProfile, getUserClones } from '@/lib/supabase/queries'
import { Header } from '@/components/layout/header'
import { EmptyState } from '@/components/clone/empty-state'
import { buttonVariants } from '@/components/ui/button'
import { canCreateClone, getUpgradeMessage } from '@/lib/plans'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const [profile, clones] = await Promise.all([
    getProfile(user.id),
    getUserClones(user.id),
  ])

  const activeCount = clones.filter(c => c.status !== 'archived').length
  const canCreate = canCreateClone(profile.plan, activeCount)
  const upgradeMessage = !canCreate ? getUpgradeMessage(profile.plan) : null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Meus Clones</h1>
            <p className="text-gray-500 text-sm mt-1">
              {activeCount} clone{activeCount !== 1 ? 's' : ''} ativo{activeCount !== 1 ? 's' : ''}
            </p>
          </div>

          {canCreate ? (
            <Link href="/clones/new" className={buttonVariants()}>+ Novo clone</Link>
          ) : (
            <Link href="/pricing" className={buttonVariants({ variant: 'outline' })}>Fazer upgrade</Link>
          )}
        </div>

        {upgradeMessage && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
            {upgradeMessage}
          </div>
        )}

        {clones.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clones.map(clone => (
              <Link
                key={clone.id}
                href={`/clones/${clone.id}`}
                className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 truncate">{clone.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ml-2 shrink-0 ${
                    clone.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {clone.status === 'active' ? 'Ativo' : 'Rascunho'}
                  </span>
                </div>
                {clone.turing_score !== null && (
                  <p className="text-sm text-gray-500">
                    Turing Score: <strong className="text-gray-900">{clone.turing_score}/50</strong>
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  v{clone.version} · Atualizado {new Date(clone.updated_at).toLocaleDateString('pt-BR')}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

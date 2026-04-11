import { createClient } from '@/lib/supabase/server'
import { getProfile } from '@/lib/supabase/queries'
import { PLAN_LABELS, PLAN_COLORS } from '@/lib/plans'
import { LogoutButton } from './logout-button'

export async function Header() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const profile = await getProfile(user.id)

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg text-gray-900">Clone Profissional</span>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${PLAN_COLORS[profile.plan]}`}>
            {PLAN_LABELS[profile.plan]}
          </span>

          <div className="flex items-center gap-2">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.name ?? 'Avatar'}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                {(profile.name ?? user.email ?? 'U')[0].toUpperCase()}
              </div>
            )}
            <span className="text-sm text-gray-700 hidden sm:block">
              {profile.name ?? user.email}
            </span>
          </div>

          <LogoutButton />
        </div>
      </div>
    </header>
  )
}

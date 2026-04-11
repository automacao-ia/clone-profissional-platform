import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 text-6xl select-none" aria-hidden="true">🧬</div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Nenhum clone criado ainda
      </h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        Crie seu primeiro clone cognitivo usando a metodologia Clone Profissional.
        Com protocolo forense, sistema de 3 camadas e Turing Test 2.0.
      </p>
      <Link href="/clones/new" className={buttonVariants({ size: 'lg' })}>
        Criar meu primeiro clone
      </Link>
    </div>
  )
}

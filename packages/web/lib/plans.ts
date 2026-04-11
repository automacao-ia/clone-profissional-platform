import type { Plan } from '@/types/database'

export const PLAN_LIMITS: Record<Plan, number> = {
  free: 1,
  pro: 10,
  agency: Infinity,
}

export const PLAN_LABELS: Record<Plan, string> = {
  free: 'Free',
  pro: 'Pro',
  agency: 'Agency',
}

export const PLAN_COLORS: Record<Plan, string> = {
  free: 'bg-gray-100 text-gray-700',
  pro: 'bg-blue-100 text-blue-700',
  agency: 'bg-purple-100 text-purple-700',
}

export function canCreateClone(plan: Plan, activeCount: number): boolean {
  return activeCount < PLAN_LIMITS[plan]
}

export function getUpgradeMessage(plan: Plan): string {
  if (plan === 'free') {
    return 'Você atingiu o limite do plano Free (1 clone). Faça upgrade para Pro e crie até 10 clones.'
  }
  if (plan === 'pro') {
    return 'Você atingiu o limite do plano Pro (10 clones). Faça upgrade para Agency e crie clones ilimitados.'
  }
  return ''
}

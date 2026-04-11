import { createClient } from './server'
import { canCreateClone } from '@/lib/plans'
import type { Plan, Database } from '@/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']
type Clone = Database['public']['Tables']['clones']['Row']

export async function getProfile(userId: string): Promise<Profile> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data as Profile
}

export async function getActiveCloneCount(userId: string): Promise<number> {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from('clones')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .neq('status', 'archived')

  if (error) return 0
  return count ?? 0
}

export async function checkCanCreateClone(userId: string, plan: Plan): Promise<boolean> {
  const count = await getActiveCloneCount(userId)
  return canCreateClone(plan, count)
}

export async function getUserClones(userId: string): Promise<Clone[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('clones')
    .select('*')
    .eq('user_id', userId)
    .neq('status', 'archived')
    .order('updated_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as Clone[]
}

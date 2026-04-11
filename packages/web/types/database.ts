export type Plan = 'free' | 'pro' | 'agency'
export type CloneStatus = 'draft' | 'active' | 'archived'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          avatar_url: string | null
          plan: Plan
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          avatar_url?: string | null
          plan?: Plan
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string | null
          avatar_url?: string | null
          plan?: Plan
          updated_at?: string
        }
      }
      clones: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          status: CloneStatus
          persona: Record<string, unknown>
          layers: Record<string, unknown>
          tfr_config: Record<string, unknown>
          signature: Record<string, unknown>
          turing_score: number | null
          turing_level: string | null
          version: number
          parent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          status?: CloneStatus
          persona?: Record<string, unknown>
          layers?: Record<string, unknown>
          tfr_config?: Record<string, unknown>
          signature?: Record<string, unknown>
          turing_score?: number | null
          turing_level?: string | null
          version?: number
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string | null
          status?: CloneStatus
          persona?: Record<string, unknown>
          layers?: Record<string, unknown>
          tfr_config?: Record<string, unknown>
          signature?: Record<string, unknown>
          turing_score?: number | null
          turing_level?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      user_clone_counts: {
        Row: {
          user_id: string
          active_count: number
        }
      }
    }
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}

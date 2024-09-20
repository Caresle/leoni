'use server'

import { createClient } from "@/lib/supabase"

export const getRecords = async (id) => {
    try {
        const supabase = createClient()
        const res = await supabase.from('registro_det').select('*').eq('registro_id', id)

        if (res?.error) {
            return null
        }

        return res?.data ?? []
    } catch (error) {
        console.error(error)
        return null
    }
}
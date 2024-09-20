'use server'

import { createClient } from "@/lib/supabase"

export const insertRecord = async (records) => {
    try {
        console.log('records')
        console.log(records)
        const supabase = createClient()
        const res = await supabase.from('registro').insert([{name: Date.now()}]).select('id')

        if (res?.error) {
            return null
        }

        const id = res?.data?.[0]?.id ?? null

        if (!id) {
            console.log('id not created')
            return null
        }

        const recordsToInsert = records.map((record) => {
            return {
                carrete: record,
                registro_id: id
            }
        })

        const data = await supabase.from('registro_det').insert(recordsToInsert).select('*')

        if (data?.error) {
            return null
        }
        
        return id
    } catch (error) {
        console.error(error)
        return null
    }
}
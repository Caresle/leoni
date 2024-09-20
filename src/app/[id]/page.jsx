import React from 'react'
import { getRecords } from './_actions/getRecords'

const RecordList = ({ data }) => {
    return (
        <>
            {
                data?.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <div className='w-full bg-white p-2 rounded-lg'>{item?.carrete}</div>
                    </div>
                ))
            }
        </>
    )
}

export default async function Page({ params: { id }}) {
    const data = await getRecords(id) 
    return (
        <div className='bg-slate-200 w-full h-screen p-4'>
            <div className='bg-white p-4 rounded-lg'>
                <h1 className='text-2xl font-semibold underline'>Registro {id}</h1>
            </div>
            <div className='mt-4 flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-full bg-white p-2 rounded-lg'>
                        <h1 className='text-xl font-semibold'>Lista de Carretes</h1>
                        <div className='bg-slate-200 p-2 flex flex-col gap-2 rounded-lg min-h-[50vh]'>
                            {data?.length > 0 ? <RecordList data={data} /> : <div className='text-center text-2xl font-semibold animate-pulse'>No hay registros</div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

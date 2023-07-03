import React from 'react'
import dummyLogos from "../rawData/DummyLogos";
import Image from 'next/image';

export default function FeaturedCompanies() {
    return (
        <>
            <div className='bg-gray-300'>
                <div className='p-2'>
                    <h1 className='font-bold'>Featured Companies</h1>
                </div>
                <div className='grid grid-cols-10 gap-3 bg-slate-400 p-3'>
                    {dummyLogos.map((s) => (
                        <div key={s.id} className=''>
                            <Image alt='' src={s.url} className='w-20 h-20 sm:w-16 sm:h-16'></Image>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

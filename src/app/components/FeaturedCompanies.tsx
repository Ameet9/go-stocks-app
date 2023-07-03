import React, { useEffect, useState } from 'react'
import dummyLogos from "../rawData/DummyLogos";
import Image from 'next/image';

export default function FeaturedCompanies() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <div className='bg-gray-300'>
                {isClient && window.innerWidth >= 768 &&
                    <div className='p-2'>
                        <h1 className='font-bold text-red-500'>FEATURED COMPANIES</h1>
                    </div>
                }
                <div className='grid grid-cols-5 md:grid-cols-10 gap-2 sm:gap-3 bg-cyan-100 p-3'>
                    {dummyLogos.slice(0, isClient && window.innerWidth >= 768 ? 10 : 5).map((s) => (
                        <div key={s.id} className=''>
                            <Image alt='' src={s.url} className='w-20 h-20 sm:w-16 sm:h-16'></Image>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

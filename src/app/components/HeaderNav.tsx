import React, { useEffect, useState } from 'react'
import goLogo from "../../../public/logewithname.png";
import profileImageUrl from "../../../public/profile.png";
import searchImg from "../../../public/search.svg";
import Image from 'next/image';
import dummyStocks from "../rawData/DummyData";

export default function HeaderNav() {
    return (
        <>
            <div className='grid grid-rows-3'>
                <div className='row-span-2 flex gap-4 p-2'>
                    <div className='flex-none'>
                        <Image src={goLogo} alt='' width={60}></Image>
                    </div>
                    <div className='grow'>
                        <div className='search-tag bg-gray-300 shadow-xl p-1 sm:w-3/4'>
                            <input type="search" name="" id="" className='w-full' />
                            <Image alt='' src={searchImg} className='search-icon opacity-10 mx-1' width={20}></Image>
                        </div>
                    </div>
                    <div className='flex-none justify-center items-center'>
                        {/* <Image src={profileImageUrl} alt='' width={30}></Image> */}
                        <div className='grid grid-cols-3 gap-4 '>
                            <div className='p-2'>
                                <h1>Contact Us</h1>
                            </div>
                            <button className='border border-black p-2  px-4 rounded shadow-lg'>SIGN UP</button>
                            <button className='border border-black p-2  px-4 rounded shadow-lg'>SIGN IN</button>
                        </div>
                    </div>
                </div>
                <div className='row-span-1 bg-blue-950 h-8 ' >
                    <div className='stock '>
                        <div className="max-w-full grid grid-flow-col auto-cols-max gap-4 mt-1">
                            {dummyStocks.map((s) => (
                                <div key={s.id} className='px-4 grid grid-flow-col auto-cols-max gap-4'>
                                    <p className='text-yellow-200 '>{s.name.toUpperCase()} </p>
                                    <p className='text-yellow-200 '>{s.price}</p>
                                    <p className={s.profitLoss > 0 ? 'text-green-400 ' : 'text-red-400'}> {s.profitLoss}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


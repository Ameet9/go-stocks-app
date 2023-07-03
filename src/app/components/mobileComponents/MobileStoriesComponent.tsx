import React from 'react'
import stories from "../../rawData/DummyStories";
import Image from 'next/image';
import PropTypes from 'prop-types'

export default function MobileStoriesComponent() {
    return (
        <>
            <div className='mt-3 m-4 h-screen overflow-auto'>
                <div className={`grid grid-cols-1 gap-4`}>
                    {stories.map((i) => (
                        <div
                            key={i.id}
                            className='rounded shadow-lg'
                        >
                            <Image src={i.imageUrl} alt='' className='w-full' height={300} />
                            <div className='bottom-0 left-0 w-full bg-opacity-50 bg-black text-white p-2'>
                                <p className='text-sm font-bold'>{i.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

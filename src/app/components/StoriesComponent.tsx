import React from 'react'
import stories from "../rawData/DummyStories";
import Image from 'next/image';
import PropTypes from 'prop-types'

export default function StoriesComponent({ isOpen }) {
    return (
        <>
            <div className='h-[800px] mt-3 custom-scroll m-4'>
                <div className={`grid grid-cols-1 gap-4 ${isOpen ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
                    {stories.map((i) => (
                        <div
                            key={i.id}
                            className='rounded   shadow-lg relative overflow-hidden h-[300px]'
                        >
                            <Image src={i.imageUrl} alt='' className='storiesImg w-full' height={400} />
                            <div className='absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white p-2'>
                                <p className='text-sm font-bold'>{i.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

StoriesComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired
}
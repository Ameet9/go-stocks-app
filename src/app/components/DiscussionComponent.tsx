import React from 'react'
import PropTypes from 'prop-types'
import AllForumComponent from './AllForumComponent';
import forums from "../rawData/DummyForum";

export default function DiscussionComponent() {
    return (
        <>
            <div className='m-1 sm:m-4 '>
                <div className='p-1 sm:p-2'>
                    <h1 className='font-bold'>Filters</h1>
                </div>
                <div className='flex rounded p-2 shadow-lg gap-3 '>
                    <button className='sm:grow bg-red-400 text-white rounded-full p-1 sm:rounded-3xl whitespace-nowrap'>Sector 1</button>
                    <button className='sm:grow bg-blue-400 text-white rounded-full p-1 sm:rounded-3xl whitespace-nowrap'>Sector 2</button>
                    <button className='sm:grow bg-yellow-400 text-white rounded-full p-1 sm:rounded-3xl whitespace-nowrap'>Sector 3</button>
                    <div className='sm:grow'>
                        <input type="search" name="" id="" placeholder='Search here' className='rounded-3xl p-2 searchForum w-32 sm:w-full' />
                    </div>
                </div>
                <div>
                    <div className="overflow-y-scroll h-[600px] sm:h-screen mt-4 pr-2 customScrollForums">
                        {forums.map((item, index) => (
                            <div
                                key={index}
                                className="w-full p-4 border mb-4 border-gray-200 shadow-xl rounded-lg"
                            >
                                <AllForumComponent item={item}></AllForumComponent>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
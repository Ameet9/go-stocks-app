import React from 'react'
import PropTypes from 'prop-types'
import AllForumComponent from './AllForumComponent';
import forums from "../rawData/DummyForum";

export default function DiscussionComponent() {
    return (
        <>
            <div className='m-4'>
                <div className='p-2'>
                    <h1>Filters</h1>
                </div>
                <div className='flex rounded p-2 shadow-lg gap-3'>
                    <button className='grow bg-red-400 text-white rounded-3xl'>Sector 1</button>
                    <button className='grow bg-blue-400 text-white rounded-3xl'>Sector 2</button>
                    <button className='grow bg-yellow-400 text-white rounded-3xl'>Sector 3</button>
                    <div className='grow'>
                        <input type="search" name="" id="" placeholder='Search here' className='rounded-3xl p-2 searchForum' />
                    </div>
                </div>
                <div>
                    <div className="overflow-y-scroll h-screen mt-4 pr-2 customScrollForums">
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
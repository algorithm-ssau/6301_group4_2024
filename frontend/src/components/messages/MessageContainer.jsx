import React from 'react'

function MessageContainer() {
  return (
    <div className='md:min-w-[450 px] flex flex-col'>
        <>
        {/*Header*/}
        <div className='bg-stale-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'> John Doe</span>
        </div>
        </>
    </div>
  )
}

export default MessageContainer
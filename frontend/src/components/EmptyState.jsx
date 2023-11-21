import React from 'react'
// import { InformationCircleIcon } from '@heroicons/react';

function EmptyState() {
  return (
    <div className="flex items-center justify-center h-40 w-1/2 px-5 py-5 border border-dashed border-gray-300 rounded-md">
      <div className="flex-col items-center justify-center">
        {/* <InformationCircleIcon className="h-6 w-6 text-gray-500" /> */}
        <p className="text-gray-500">No Paper Found</p>
       <a href='/createpaper'> <button className='rounded-md bg-reelobg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-reelobg-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Create Paper</button></a>
      </div>
    </div>
  )
}

export default EmptyState
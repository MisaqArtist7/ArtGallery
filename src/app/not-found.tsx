import React from 'react'
import Image from 'next/image'
export default function NotFoundPage() {
  return (
    <div className='bg-[#381E71] min-h-screen flex-row-center'>
      <div className='flex-col-center gap-7'>
        <Image src="/images/404.svg" alt="Not Found" width={777} height={777} />
        <a href="./" className='border rounded-full px-6 py-1.5 text-white flex-row-center gap-x-2 hover:bg-white hover:text-[#381E71]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
          Back To Home
        </a>
      </div>
    </div>
  )
}

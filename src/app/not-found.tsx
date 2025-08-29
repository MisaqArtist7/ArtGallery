import React from 'react'
import Image from 'next/image'
export default function NotFoundPage() {
  return (
    <div className='bg-[#381E71] min-h-screen flex-row-center'>
      <div className='flex-col-center gap-7'>
        <Image src="/images/404.svg" alt="Not Found" width={777} height={777} />
        <a href="./" className='border rounded-full px-6 py-1.5 text-white flex-row-center gap-x-2 hover:bg-white hover:text-[#381E71]'>
          <svg className="w-6 h-6">
            <use href="#leftArrow" />
          </svg>
          Back To Home
        </a>
      </div>
    </div>
  )
}

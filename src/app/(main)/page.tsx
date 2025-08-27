import React from 'react'
import Carousel from '@/components/shared/Carousel/Carousel'
import Link from 'next/link'
import Image from 'next/image'
export default function page() {
  return (
    <>
      <section className='heroSection'> 
        <Carousel />
      </section>

      <section className='my-24 container w-full flex justify-center items-center mx-auto'>
        <div className='grid grid-cols-12 gap-11 items-center w-full'>

          <div className='col-span-6 flex flex-col justify-center items-start gap-5 w-[70%] ml-11'>
            <h2 className='uppercase text-4xl'>What&apos;s your Art Personality?</h2>
            <p className='text-gray-500 text-sm'>
              See how your personality can shape your journey as a collector. Take our simple test to learn your art personality type, and get instant recommendations tailored to you
            </p>
            <Link href="" className='btnSecoundary'>TAKE THE TEST</Link>
          </div>

          <div className="col-span-6 relative w-full h-[400px]">
            <Image src="/images/Personality.webp" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

    </>
  )
}
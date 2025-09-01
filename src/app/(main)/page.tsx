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
      <section className='bg-[var(--mainGray)]'>
        <div className='container py-16 w-full flex justify-center items-center mx-auto'>
          <div>
            <h2 className='uppercase text-[var(--title)] text-center pb-5'>Last Editorial</h2>
            <div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className='shadow bg-white flex flex-col justify-between'>
                  <Image src="/images/Editorial/1.jpg" alt="Personality" width={369} height={369} />
                  <div className='p-4 flex flex-col justify-between gap-7 h-full'>

                    <div className='flex flex-col justify-center gap-1'>
                      <span className='text-gray-500 uppercase text-sm'>Artists</span>
                      <h3 className='text-lg'>Tenderbeing: Ariadna Dane</h3>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-500 uppercase text-sm'>By Sophie Heatley | 06 Aug 2025</span>
                      <svg className='w-6 h-6'>
                        <use href="#share" />
                      </svg>
                    </div>

                  </div>
                </div>

                <div className='shadow bg-white flex flex-col justify-between'>
                  <Image src="/images/Editorial/2.jpg" alt="Personality" width={369} height={369} />
                  <div className='p-4 flex flex-col justify-between gap-7 h-full'>

                    <div className='flex flex-col justify-center gap-1'>
                      <span className='text-gray-500 uppercase text-sm'>Artists</span>
                      <h3 className='text-lg'>Valentin Renner on String Art: &quot;I&apos;m exploring order, chaos, and the spaces in between.&quot;</h3>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-500 uppercase text-sm'>By Sophie Heatley | 06 Aug 2025</span>
                      <svg className='w-6 h-6'>
                        <use href="#share" />
                      </svg>
                    </div>

                  </div>
                </div>

                <div className='shadow bg-white flex flex-col justify-between'>
                  <Image src="/images/Editorial/3.jpg" alt="Personality" width={369} height={369} />
                  <div className='p-4 flex flex-col justify-between gap-7 h-full'>

                    <div className='flex flex-col justify-center gap-1'>
                      <span className='text-gray-500 uppercase text-sm'>Artists</span>
                      <h3 className='text-lg'>Tenderbeing: Ariadna Dane</h3>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-500 uppercase text-sm'>By Sophie Heatley | 06 Aug 2025</span>
                      <svg className='w-6 h-6'>
                        <use href="#share" />
                      </svg>
                    </div>

                  </div>
                </div>

                <div className='shadow bg-white flex flex-col justify-between'>
                  <Image src="/images/Editorial/4.jpg" alt="Personality" width={369} height={369} />
                  <div className='p-4 flex flex-col justify-between gap-7 h-full'>

                    <div className='flex flex-col justify-center gap-1'>
                      <span className='text-gray-500 uppercase text-sm'>Artists</span>
                      <h3 className='text-lg'>Tenderbeing: Ariadna Dane</h3>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-500 uppercase text-sm'>By Sophie Heatley | 06 Aug 2025</span>
                      <svg className='w-6 h-6'>
                        <use href="#share" />
                      </svg>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </section>

      <section className='bg-red-200 container w-full flex justify-center items-center mx-auto'>
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
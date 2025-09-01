'use client'
import React from 'react'
import Carousel from '@/components/shared/Carousel/Carousel'
import editorals from '@/data/Editorials'
import Link from 'next/link'
import Image from 'next/image'
export default function HomePage() {
  const [blogs] = React.useState(editorals)
  return (
    <>
      <section className='heroSection'> 
        <Carousel />
      </section>

      <section className='bg-[#222222] container w-full flex justify-center items-center mx-auto py-7'>
        <div className='grid grid-cols-12 gap-11 items-center w-full'>

          <div className='col-span-6 flex flex-col justify-center items-start gap-5 w-[70%] ml-11 text-white'>
            <h2 className='uppercase text-4xl'>THE SOUND OF FORM: REPRISE</h2>
            <p className='text-sm'>
              Featuring works by Kevin Jackson and Andrew Crane, Reprise explores the boundless ways in which form, rhythm, silence, and resonance coexist on canvas.
            </p>
            <Link href="" className='fourthBtn'>view exhibition</Link>
          </div>

          <div className="col-span-6 relative w-full h-[400px]">
            <Image src="/images/Exhibition.webp" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <section className='bg-[var(--mainGray)]'>
        <div className='container py-16 w-full flex justify-center items-center mx-auto'>
          <div>
            <h2 className='uppercase text-[var(--title)] text-center pb-5'>Last Editorial</h2>
            <div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
              {blogs.map((item, index) => (
                <div key={index} className='shadow bg-white flex flex-col justify-between'>
                    <Image src={item.src} alt="Personality" width={369} height={369} />
                    <div className='p-4 flex flex-col justify-between gap-7 h-full'>

                      <div className='flex flex-col justify-center gap-1'>
                        <span className='text-gray-500 uppercase text-sm'>{item.field}</span>
                        <h3 className='text-lg'>{item.title}</h3>
                      </div>
                      
                      <div className='flex items-center justify-between'>
                        <span className='text-gray-500 uppercase text-sm'>{item.date}</span>
                        <a href="">
                          <svg className='w-5 h-5'>
                            <use href="#share" />
                          </svg>
                        </a>
                      </div>

                    </div>
                </div>
              ))}
              </div>

              <div className='py-6 flex-row-center'>
                <a href="" className='uppercase btnSecoundary'>Show All</a>
              </div>
            </div>
            <div className='py-5 flex-row-center gap-3'>
              <a href="" className='thirdBtn'>Artist Interviews</a>
              <a href="" className='thirdBtn'>Art News</a>
              <a href="" className='thirdBtn'>Art Exhibitions</a>
              <a href="" className='thirdBtn'>Art Movements</a>
              <a href="" className='thirdBtn'>Art Guides</a>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white container w-full flex justify-center items-center mx-auto'>
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
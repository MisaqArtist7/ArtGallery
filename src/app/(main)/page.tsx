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

      <section className='bg-[var(--mainGray)] container w-full flex justify-center items-center mx-auto py-7'>
        <div className='grid grid-cols-12 gap-11 items-center w-full'>

          <div className='col-span-6 flex flex-col justify-center items-start gap-5 w-[70%] ml-11'>
            <h2 className='uppercase text-4xl'>THE SOUND OF FORM: REPRISE</h2>
            <p className='text-sm'>
              Featuring works by Kevin Jackson and Andrew Crane, Reprise explores the boundless ways in which form, rhythm, silence, and resonance coexist on canvas.
            </p>
            <Link href="" className='btnSecoundary'>view exhibition</Link>
          </div>

          <div className="col-span-6 relative w-full h-[400px]">
            <Image src="/images/Exhibition.webp" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <section className='bg-white container w-full flex justify-center items-center mx-auto py-7'>
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
            <h2 className='uppercase text-4xl'>Soho Home x Rise Art</h2>
            <p className='text-gray-500 text-sm'>
              Fine art meets contemporary interiors. We&apos;re pleased to collaborate with Soho Home to provide original artwork from emerging and celebrated artists for their UK and US studios.
            </p>
            <Link href="" className='btnSecoundary'>Find out more</Link>
            <div>
              <span className='uppercase text-gray-600'>Featured Collections</span>
              <div className='flex items-center flex-wrap gap-3 pt-4'>
                <a href="" className='fifthBtn'>Curators Picks</a>
                <a href="" className='fifthBtn'>Statement Pieces</a>
                <a href="" className='fifthBtn'>Wall Gallery</a>
                <a href="" className='fifthBtn'>Textiles & Tapestries</a>
                <a href="" className='fifthBtn'>Timeless Masters</a>
              </div>
            </div>
          </div>

          <div className="col-span-6 relative w-full h-[500px]">
            <Image src="/images/Personality.webp" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <section className='bg-[#222222] py-11'>
        <div className='flex-row-center text-white flex-col-center container w-[90%]'> 
          <h2 className='uppercase py-5'>We bridge the digital and physical realms of art acquisition</h2>

          <div className='flex flex-col justify-center text-justify gap-3 text-gray-300'>
            <p>A distinguished platform among online art galleries, Rise Art offers a thoughtful approach to discovering and collecting fine art. Our bespoke curatorial services, tailored consultations, and seamless logistical processes mean you can purchase fine art online—whether original or limited-edition—with ease.</p>
            <p>We understand that art is deeply personal, which is why we offer unique try-before-you-buy opportunities and host private showcases, allowing you to engage with select pieces in an intimate setting. Whether you’re a discerning collector seeking a significant investment or an art enthusiast pursuing your first acquisition, Rise Art transcends the conventional online art marketplace—it’s a cultivated community where you can confidently buy fine art online.</p>
            <p><a href="" className='underline'>Discover contemporary art for sale</a> online and explore our curated selections.</p>
          </div>

          <div className='flex items-center justify-between gap-11 w-full py-11'>
            <div className='flex-col-center gap-3'>
              <svg className='w-16 h-16'>
                <use href='#tick'></use>
              </svg>
              <div className='flex-col-center text-center'>
                <span>Satisfaction guaranteed</span>
                <p>Free 14 day worldwide returns. If its not perfect, return with ease</p>
              </div>
              <a href="" className='underline'>Learn More</a>
            </div>
            <div className='flex-col-center gap-3'>
              <svg className='w-16 h-16'>
                <use href='#pointer'></use>
              </svg>
              <div className='flex-col-center text-center'>
                <span>Buy with confidence</span>
                <p>Original, unique artwork from a curated selection of outstanding artists.</p>
              </div>
              <a href="" className='underline'>Learn More</a>
            </div>
            <div className='flex-col-center gap-3'>
              <svg className='w-16 h-16'>
                <use href='#lock'></use>
              </svg>
              <div className='flex-col-center text-center'>
                <span>Complimentary art advisory service</span>
                <p>Trusted, 5 Star service from selection to delivery. Questions? Get help from our curators.</p>
              </div>
              <a href="" className='underline'>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
import React from 'react'
import Carousel from '@/components/shared/Carousel/Carousel'
import editorals from '@/data/Editorials'
import Link from 'next/link'
import Image from 'next/image'
export default function HomePage() {
  return (
    <>
      <section className='heroSection'> 
        <Carousel />
      </section>

      <section className='bg-[var(--mainGray)] w-full flex justify-center items-center mx-auto py-7'>
        <div className='grid grid-cols-12 gap-11 container items-center w-full'>

          <div className='col-span-6 flex flex-col justify-center items-start gap-5 w-[70%] ml-11'>
            <h2 className='uppercase text-4xl'>THE SOUND OF FORM: REPRISE</h2>
            <p className='text-sm'>
              Featuring works by Kevin Jackson and Andrew Crane, Reprise explores the boundless ways in which form, rhythm, silence, and resonance coexist on canvas.
            </p>
            <Link href="" className='btnSecoundary'>view exhibition</Link>
          </div>

          <div className="col-span-6 relative w-full h-[400px]">
            <Image src="/images/Personality.webp" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <section className='my-5'>
        <div className='container py-16 w-full flex justify-center items-center mx-auto'>
          <div className='flex flex-col gap-1'>
            <p className='uppercase text-[var(--title)] text-center font-semibold '>Browse by Medium and Style</p>
            <p className='uppercase text-[var(--title)] text-center font-semibold '>Browse by Medium and Style</p>
              
            <div>
              <h2 className='uppercase text-[var(--title)] text-center font-semibold'>Browse by Medium and Style</h2>
              <p className='text-center text-sm text-gray-700'>Discover New Art from our curated selection of international artists</p>
            </div>

            <div className='py-5 flex-row-center gap-3'>
              <a href="" className='fifthBtn'>All Art</a>
              <a href="" className='fifthBtn'>Paintings</a>
              <a href="" className='fifthBtn'>Abstract Art</a>
              <a href="" className='fifthBtn'>Oil Paintings</a>
              <a href="" className='fifthBtn'>New In</a>
              <a href="" className='fifthBtn'>Landscapes</a>
              <a href="" className='fifthBtn'>Prints & Editions</a>
              <a href="" className='fifthBtn'>Pop Art</a>
              <a href="" className='fifthBtn'>Nudes</a>
              <a href="" className='fifthBtn'>Sculptures</a>
              <a href="" className='fifthBtn'>Visual Search</a>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold uppercase text-[var(--title)] text-2xl tracking-widest'>New In Paintings</h2>
            <a href="" className='text-xl underline hover:no-underline'>all paintings</a>
          </div>
          <div className='grid grid-cols-5 gap-3 my-5'>
            <div className="bg-white shadow h-[464px] flex flex-col justify-between">
              <div className="h-[444px] w-full overflow-hidden">
                <Image
                  src="/images/products/1.png"
                  alt="To Be With You #80"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3>To Be With You #80</h3>
                <div className="flex items-center justify-between">
                  <p>Corinne Natel</p>
                  <span>€2,475</span>
                </div>
                <span>Paintings - 104x104 cm</span>
              </div>
            </div>

            <div className="bg-white shadow h-[464px] flex flex-col justify-between">
              <div className="h-[444px] w-full overflow-hidden">
                <Image
                  src="/images/products/2.jpg"
                  alt="To Be With You #80"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3>To Be With You #80</h3>
                <div className="flex items-center justify-between">
                  <p>Corinne Natel</p>
                  <span>€2,475</span>
                </div>
                <span>Paintings - 104x104 cm</span>
              </div>
            </div>

            <div className="bg-white shadow h-[464px] flex flex-col justify-between">
              <div className="h-[444px] w-full overflow-hidden">
                <Image
                  src="/images/products/3.jpg"
                  alt="To Be With You #80"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3>To Be With You #80</h3>
                <div className="flex items-center justify-between">
                  <p>Corinne Natel</p>
                  <span>€2,475</span>
                </div>
                <span>Paintings - 104x104 cm</span>
              </div>
            </div>

            <div className="bg-white shadow h-[464px] flex flex-col justify-between">
              <div className="h-[444px] w-full overflow-hidden">
                <Image
                  src="/images/products/4.jpg"
                  alt="To Be With You #80"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3>To Be With You #80</h3>
                <div className="flex items-center justify-between">
                  <p>Corinne Natel</p>
                  <span>€2,475</span>
                </div>
                <span>Paintings - 104x104 cm</span>
              </div>
            </div>

            <div className="bg-white shadow h-[464px] flex flex-col justify-between">
              <div className="h-[444px] w-full overflow-hidden">
                <Image
                  src="/images/products/5.jpeg"
                  alt="To Be With You #80"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3>To Be With You #80</h3>
                <div className="flex items-center justify-between">
                  <p>Corinne Natel</p>
                  <span>€2,475</span>
                </div>
                <span>Paintings - 104x104 cm</span>
              </div>
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
            <Image src="/images/desk.jpg" alt="Personality" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      <section className='bg-[var(--mainGray)]'>
        <div className='container py-16 w-full flex justify-center items-center mx-auto'>
          <div>
            <h2 className='uppercase text-[var(--title)] text-center pb-5'>Last Editorial</h2>
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
              {editorals.map((item, index) => (
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

      <section className='bg-[var(--mainGray)] py-11'>
        <h2 className="uppercase text-[var(--title)] pb-5 text-center">Be in the know</h2>
        <div>
          <div className='flex-row-center'>
            <form action="" className='flex items-center justify-between h-22 gap-x-5 w-[70%]'>
              <div className='flex-col-center gap-2 h-full'>
                <input type="email" placeholder='Email Address *' className='py-2 w-full h-full border-b px-4 outline-none bg-white/40 hover:bg-white hover:border-b-[#0500E8] transition-colors duration-150 ease-in-out'/>
                <p className='text-gray-700 text-xs text-justify'>By giving us your email address you agree to receive (thrilling) email updates, including special offers, new pieces and arty news. If you want you can unsubscribe at any time.</p>
              </div>
              <button type="submit" className='btnSecoundary px-16 cursor-pointer'>Join</button>
            </form>
          </div>

          <div className='py-4 w-[80%] mx-auto'>
            <div className='flex justify-between'>

              <div className='flex items-center justify-around h-40 w-[80%]'>
                <div className="flex flex-col h-full gap-3">
                  <h3>FOR ARTISTS</h3>
                  <ul className="text-sm text-gray-600 space-y-2 *:hover:underline">
                    <li><Link href="">Submit Your Art</Link></li>
                    <li><Link href="">Seller Console</Link></li>
                  </ul>
                </div>

                <div className='flex flex-col h-full gap-3'>
                  <h3>FOR COLLECTORS</h3>
                  <ul className='text-sm text-gray-600 space-y-2 *:hover:underline'>
                    <li><Link href="">Customer reviews</Link></li>
                    <li><Link href="">How we curate</Link></li>
                    <li><Link href="">Returns</Link></li>
                    <li><Link href="">Framing your artwork</Link></li>
                    <li><Link href="">Customer&apos;s FAQ</Link></li>
                  </ul>
                </div>

                <div className='flex flex-col h-full gap-3'>
                  <h3>ABOUT US</h3>
                  <ul className='text-sm text-gray-600 space-y-2 *:hover:underline'>
                    <li><Link href="">About Us</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                    <li><Link href="">Gift Cards</Link></li>
                    <li><Link href="">Legal</Link></li>
                  </ul>
                </div>
              </div>

              <div className='w-[20%] flex flex-col justify-center gap-3'>
                <h3 className='font-semibold text-center'>CONNECT WITH</h3>
                <div className='flex items-center'>
                  <svg>
                    <use href='#twitter'></use>
                  </svg> 
                  <svg>
                    <use href='#instagram'></use>
                  </svg> 
                  <svg>
                    <use href='#facebook'></use>
                  </svg> 
                  <svg>
                    <use href='#pinterest'></use>
                  </svg> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import paintings from '@/data/Painting'
export default function PaintingPage() {
  const paintingsData = paintings
  return (
    <>
    <section className='bg-[var(--mainGray)]'>
      <div className='flex flex-col items-center gap-2 container py-11'>
        <h1 className='text-2xl font-semibold uppercase text-[var(--title)] flex-row-center'>Paintings For Sale</h1>
        <p className='text-gray-600 text-justify hyphens-auto'>Browse our curated selection of paintings for sale, featuring contemporary artists from around the world. Whether you&apos;re searching for a bold statement piece or a delicate, intimate composition, our collection spans oil paintings, watercolours, acrylic works, and mixed media creations. With a wide range of styles, from expressive abstracts to intricate figurative works, you&apos;ll find contemporary art paintings that speak to your taste and transform your space.</p>
      </div>
    </section>

    <section className='container my-11'>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <span className='uppercase'>Sort</span>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <span className='text-gray-600'>showing 28,615 pieces</span>
            <span>
              <svg className='w-7 h-7'>
                <use href="#squares" />
              </svg>
            </span>
          </div>
        </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-5'>
            {paintingsData.map((paint, index) => (
            <Link key={index} href={`/paintings/${paint.slug}`}>
              <div className="bg-white shadow h-[404px] flex flex-col justify-between">
                <div className="h-[444px] w-full overflow-hidden">
                  <Image
                    src={paint.imageUrl}
                    alt={paint.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3>{paint.title}</h3>
                  <div className="flex items-center justify-between">
                    <p>{paint.artist}</p>
                    <span>€{paint.price.toLocaleString()}</span>
                  </div>
                  <span>Paintings - {paint.dimensions}</span>
                </div>
              </div>
            </Link>
            ))}
          </div>
      </div>
    </section>
    </>
  )
}

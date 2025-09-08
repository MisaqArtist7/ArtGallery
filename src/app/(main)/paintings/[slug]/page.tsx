import React from 'react'
import Image from 'next/image'
import paintings from '@/data/Painting'
import Link from 'next/link'


export default function CurrentPainting({ params }: { params: { slug: string } }){
  const { slug } = params
  const painting = paintings.find(item => item.slug.toLowerCase() === slug.toLowerCase())
  
  if (!painting) {
    return(
      <section className='flex-row-center my-24'>
        <div className='flex-col-center gap-5'>
          <h1 className='text-5xl font-semibold'>No Painting Found</h1>
          <Link href='/paintings' className='btnSecoundary flex-row-center gap-2'>
            <svg className='w-7 h-7'>
              <use href='#leftArrow'></use>
            </svg>
            Go back to Paintings page
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='container my-11'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-4'>
          <Image
            src={painting.imageUrl}
            alt={painting.title}
            width={400}
            height={400}
            className="h-full w-full object-cover rounded"
          />
        </div>
        <div className='col-span-8 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>{painting.title}</h1>
          <p className='text-lg'>Artist: {painting.artist}</p>
          <p className='text-lg'>Dimensions: {painting.dimensions}</p>
          <p className='text-lg font-semibold'>Price: ${painting.price}</p>
        </div>
      </div>
    </section>
  )
}

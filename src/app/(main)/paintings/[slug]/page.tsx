import Image from 'next/image'
import paintings from '@/data/Painting'
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export default async function CurrentPainting({ params }: BlogPageProps){
  console.log(params)
  const { slug } = await params
  const painting = paintings.find(item => item.slug.toLowerCase() === slug.toLowerCase())
  
  if (!painting) notFound()
  
  return (
    <section className='container my-7 w-full'>
      <div className='flex flex-col lg:flex-row w-full justify-center gap-5 lg:gap-1'>

        <div className='w-full lg:w-1/2 xl:w-1/3'>
          <Image
            src={painting.imageUrl}
            alt={painting.title}
            width={555}
            height={555}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className=' flex flex-col justify-between gap-2 lg:px-7 lg:py-1'>
          <h1 className='text-2xl font-bold'>{painting.title}</h1>
          <p className='text-lg text-gray-900'>Artist: {painting.artist}</p>
          <p className='text-lg text-gray-900'>Dimensions: {painting.dimensions}</p>
          <div className='flex justify-between items-center w-full mt-5'>
            <p className='text-lg '>Price: €{painting.price}</p>
            <div className='flex-row-center'>
              <Image
                src="/images/painting/reviews.png"
                alt="painting.title"
                width={101}
                height={101}
                className="w-full h-full object-cover rounded"
              />
              <Image
                src="/images/painting/feedback.png"
                alt="painting.title"
                width={101}
                height={101}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          <div className='flex flex-col gap-3 my-4'>
            <button className='flex-row-center w-full btn2'>ADD TO BASKET</button>
            <div className='flex justify-between items-center gap-1 hover:*:cursor-pointer'>
              <button className='btnSecoundary w-full'>MAKE AN OFFER</button>
              <button className='btnSecoundary hover:*:fill-white'>
                <svg className='w-6 h-6'>
                  <use href="#favorite" />
                </svg>
              </button>
            </div>
          </div>
          <div className='bg-[var(--mainGray)] flex flex-col gap-2 px-3 py-4 shadow'>
            <div>
              <div className='flex items-center gap-1'>
                <span>
                  <svg className='w-4 h-4'>
                    <use href="#clock" className='fill-gray-600'/>
                  </svg>
                </span>
                <span>Don’t miss out</span>
              </div>
              <p className='pl-5 text-gray-600'>Only 1 left of this edition</p>
            </div>

            <div className='flex items-center gap-2'>
              <span>
                <svg className='w-4 h-4 text-gray-600'>
                  <use href="#check"/>
                </svg>
              </span>
              <div>
                <p>Free & easy 14 days returns <a href="#" className='text-sm underline text-gray-600'>Learn more</a></p>
              </div>  
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <svg className='w-4 h-4 text-gray-600'>
                  <use href="#check"/>
                </svg>
              </span>
              <div>
                <p>Worldwide safe shipping <a href="#" className='text-sm underline text-gray-600'>Learn more</a></p>
              </div>  
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <svg className='w-4 h-4 text-gray-600'>
                  <use href="#check"/>
                </svg>
              </span>
              <div>
                <p>Trusted by leading brands including <a href="#" className='text-sm underline text-gray-600'>Soho Home</a></p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

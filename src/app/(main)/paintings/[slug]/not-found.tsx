import Link from 'next/link'
export default function NotFoundPaintingPage(){
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
import React from 'react'
import Image from 'next/image'
import SearchIcon from '@/components/icons/SearchIcon'    
import LenzIcon from '@/components/icons/LenzIcon'
import './header.css'
export default function Header() {
  return (
    <header className='bg-white shadow p-4'>
      <div className='header__wrapper container'>
        <div className='flex items-center gap-7'>
          <div>
            <Image src="./images/logo.svg" alt="Description" width={133} height={133} />
          </div>

          <div className='bg-amber-500 w-full'>
            <form action="">
              <div className='flex items-center justify-between gap-x-2 border-b border-b-black p-2 bg-[var(--mainGray)]'>
                <div className='flex items-center gap-x-2'>
                  <SearchIcon />
                  <input type="text" placeholder='Artist, category, topic...' className=' outline-none'/>
                </div>
                <LenzIcon />
              </div>
            </form>
          </div>

          <div>

          </div>
        </div>

        <div></div>
      </div>
    </header>
  )
}

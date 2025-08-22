import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '@/components/icons/SearchIcon'    
import LenzIcon from '@/components/icons/LenzIcon'
import UserIcon from '@/components/icons/UserIcon'
import WishListIcon from '@/components/icons/WishListIcon'
import GiftCart from '@/components/icons/GiftCart'
import Basket from '@/components/icons/Basket'
import './header.css'
export default function Header() {
  return (
    <header className='bg-white shadow'>
      <div className='header__wrapper px-11 py-4 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between gap-7'>

          <div className='flex items-center gap-x-7 w-full'>
            <div>
              <Image src="./images/logo.svg" alt="Description" width={133} height={133} />
            </div>
            <div className='flex-1'>
              <form action="">
                <div className='flex items-center justify-between gap-x-2 border-b border-b-black p-2 bg-[var(--mainGray)]  w-full'>
                  <div className='flex items-center gap-x-2 w-full'>
                    <SearchIcon />
                    <input type="text" placeholder='Artist, category, topic...' className=' outline-none w-full'/>
                  </div>
                  <LenzIcon />
                </div>
              </form>
            </div>
          </div>


          <div className='flex items-center gap-x-4'>
            <span><UserIcon /></span>
            <span><WishListIcon /></span>
            <span><GiftCart /></span>
            <span><Basket /></span>
            <div className='flex items-center justify-between gap-x-2 w-22'>
              <div className='w-5 h-5 rounded-full overflow-hidden'>
                <Image src="/images/German.png" alt="Description" width={20} height={20} className='object-cover w-full h-full' />
              </div>
              <span>€ (EUR)</span>
            </div>
          </div>

        </div>

        <div className='border-t border-t-gray-200'>
          <nav className='flex-row-center pt-3'>
            <ul className='flex items-center gap-x-3 text-gray-700'>
              <li>
                <Link href="./" className='link'>Home</Link>
              </li>
              <li>
                <Link href="painting" className='link'>Paintings</Link>
              </li>
              <li>
                <Link href="" className='link'>Prints</Link>
              </li>
              <li>
                <Link href="" className='link'>Photography</Link>
              </li>
              <li>
                <Link href="" className='link'>Sculpture</Link>
              </li>
              <li>
                <Link href="" className='link'>Artists</Link>
              </li>
              <li>
                <Link href="" className='link'>Inspiration</Link>
              </li>
              <li>
                <Link href="" className='link'>Exhibitions</Link>
              </li>
              <li>
                <Link href="" className='link'>Art Advisory</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

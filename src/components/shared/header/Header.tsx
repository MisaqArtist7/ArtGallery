import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import SearchIcon from '@/components/icons/SearchIcon'    
import LenzIcon from '@/components/icons/LenzIcon'
import UserIcon from '@/components/icons/UserIcon'
import WishListIcon from '@/components/icons/WishListIcon'
import GiftCart from '@/components/icons/GiftCart'
import Basket from '@/components/icons/Basket'
import './header.css'
export default function Header() {
  return (
    <header className='bg-white shadow sticky z-50 w-full top-0'>
      <div className='header__wrapper px-11 py-4 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between gap-7'>

          <div className='flex items-center gap-x-7 w-full'>
            <div>
              <Image src="/images/logo.svg" alt="Description" width={133} height={133} priority/>
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
            <ul className='flex items-center gap-x-5 text-gray-700'>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/paintings">Paintings</NavLink>
              </li>
              <li>
                <NavLink href="/prints">Prints</NavLink>
              </li>
              <li>
                <NavLink href="/photography">Photography</NavLink>
              </li>
              <li>
                <NavLink href="/sculpture">Sculpture</NavLink>
              </li>
              <li>
                <NavLink href="/artists">Artists</NavLink>
              </li>
              <li>
                <NavLink href="/inspiration">Inspiration</NavLink>
              </li>
              <li>
                <NavLink href="/exhibitions">Exhibitions</NavLink>
              </li>
              <li>
                <NavLink href="/art-advisory">Art Advisory</NavLink>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

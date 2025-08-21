import React from 'react'
import Image from 'next/image'
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
      <div className='header__wrapper px-7 py-4'>
        <div className='flex items-center justify-between gap-7'>

          <div className='flex items-center gap-x-5 w-full'>
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


          <div className='flex items-center gap-x-6'>
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

        <div></div>
      </div>
    </header>
  )
}

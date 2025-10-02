'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import Link from 'next/link'
import SearchIcon from '@/components/icons/SearchIcon'    
import LenzIcon from '@/components/icons/LenzIcon'
import UserIcon from '@/components/icons/UserIcon'
import WishListIcon from '@/components/icons/WishListIcon'
import GiftCart from '@/components/icons/GiftCart'
import Basket from '@/components/icons/Basket'
import './header.css'


export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) {
        setBurgerMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (index: number) => {
    // setOpenIndex(index) // just open
    setOpenIndex(prev => prev === index ? null : index) 
  }
  return (
    <header className='bg-white shadow sticky z-50 w-full top-0'>
      <div className='header__wrapper px-3 md:px-11 py-4 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between gap-7'>
          {/* Logo and search bar wrapper*/}
          <div className='flex items-center gap-x-4 md:gap-x-7 w-full'>

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

          <div className='hidden md:flex items-center gap-x-4'>
            <Link href="./register"><UserIcon /></Link>
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

          <div onClick={() => setBurgerMenu((prevState) => !prevState)}
          className='md:hidden border border-gray-300 bg-gray-100 hover:*:text-white hover:bg-black cursor-pointer rounded-full p-2'>
            <svg className='w-8 h-8'>
              <use href='#burgerMenu'></use>
            </svg>
          </div>
          
        </div>
        {/* Mobile menu wrapper*/}
        <div className={`${burgerMenu ? 'translate-x-0' : 'translate-x-full'} z-50 md:hidden bg-white shadow w-xs p-4 fixed top-0 right-0 bottom-0 transition-all duration-300 ease-in-out`}>
          <div className='flex items-center justify-between border-b border-gray-300 pb-2'> 
            <Image src="/images/mobileLogo.svg" alt="mobile logo" width={55} height={55}></Image>

            <div onClick={() => setBurgerMenu((prevState) => !prevState)}
            className='md:hidden border border-gray-300 bg-gray-100 hover:*:text-white hover:bg-black cursor-pointer rounded-full p-1.5'>
              <svg className='w-8 h-8'>
                <use href='#close'></use>
              </svg>
            </div>

          </div> 
          {/* mobile links */}
          <div>
            <ul className='flex flex-col p-1'>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)]'>
                <Link href="/" className='text-gray-800 uppercase'>Home</Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='border-b border-gray-200 py-3'>
                <div onClick={() => toggleMenu(0)}
                className='flex items-center justify-between *:hover:text-[var(--primaryBlue)] cursor-pointer'>
                  <span className='text-gray-800 uppercase'>Paintings</span>
                  <span>
                    <svg className='w-6 h-6 cursor-pointer'>
                      <use href='#chevronDown'></use>
                    </svg>
                  </span>
                </div>

                <div className={`overflow-hidden transition-all duration-75 ease-in-out px-1 
                   ${openIndex === 0 ? "max-h-96 opacity-100 translate-y-0 pt-3" : "max-h-0 opacity-0 -translate-y-1"} `}>
                  <ul className='flex flex-col gap-3 text-gray-700'>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="/paintings">All paintings</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Abstract paintings</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Figurative paintings</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Oil paintings</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Landscape paintings</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='border-b border-gray-200 py-3'>
                <div onClick={() => toggleMenu(1)}
                className='flex items-center justify-between *:hover:text-[var(--primaryBlue)] cursor-pointer'>
                  <Link href="#" className='text-gray-800 uppercase'>Prints</Link>
                  <span>
                    <svg className='w-6 h-6 cursor-pointer'>
                      <use href='#chevronDown'></use>
                    </svg>
                  </span>
                </div>

                <div className={`overflow-hidden transition-all duration-75 ease-in-out px-1 
                   ${openIndex === 1 ? "max-h-96 opacity-100 translate-y-0 pt-3" : "max-h-0 opacity-0 -translate-y-1"} `}>
                  <ul className='flex flex-col gap-3 text-gray-700'>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Abstract paintings</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Animal prints</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Limo prints</Link>
                    </li>
                    <li className='*:hover:text-[var(--primaryBlue)]'>
                      <Link href="">Landscape prints</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)]'>
                <Link href="#" className='text-gray-800 uppercase'>Photography</Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)]'>
                <Link href="#" className='text-gray-800 uppercase'>Sculpture</Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)] ` capitalizexxxx'>
                <Link href="#" className='text-gray-800 uppercase'>Exhibition</Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)] ` capitalizexxxx'>
                <Link href="#" className='text-gray-800 flex items-center justify-center gap-2 uppercase'>
                  <svg className='w-5 h-5'>
                    <use href='#favorite'></use>
                  </svg>
                  Wishlist
                </Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)] ` capitalizexxxx'>
                <Link href="#" className='text-gray-800 flex items-center justify-center gap-2 uppercase'>
                  <UserIcon />
                  My profile
                </Link>
                <span>
                  <svg className='w-6 h-6 cursor-pointer'>
                    <use href='#chevronDown'></use>
                  </svg>
                </span>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)] ` capitalizexxxx'>
                <Link href="#" className='text-gray-800 flex items-center justify-center gap-2 uppercase'>
                  <Basket />
                  Basket
                </Link>
              </li>
              <li className='flex items-center justify-between border-b border-gray-200 py-3 *:hover:text-[var(--primaryBlue)] ` capitalizexxxx'>
                <Link href="#" className='text-gray-800 flex items-center justify-center gap-2 uppercase'>
                  <GiftCart />
                  Gift cart
                </Link>
              </li>
              <div className='flex items-center gap-2 py-3'>
                <div className='w-5 h-5 rounded-full overflow-hidden'>
                  <Image src="/images/German.png" alt="Description" width={20} height={20} className='object-cover w-full h-full' />
                </div>
                <span>€ (EUR)</span>
            </div>
            </ul>
          </div>
          <div>

          </div>
        </div>

        <div className='border-t border-t-gray-200 hidden md:block'>
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
            </ul>
          </nav>
        </div>

      </div>
      {burgerMenu && (
        <div className={`bg-black/55 md:hidden fixed top-0 bottom-0 left-0 right-0`}> </div>
      )}
    </header>
  )
}

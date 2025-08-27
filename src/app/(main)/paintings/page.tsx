import React from 'react'
import Link from 'next/link'
export default function Painting() {
  return (
    <div className='flex-row-center text-6xl my-11 gap-x-11'>
        <Link href="/painting/id-1">1</Link>
        <Link href="/painting/id-2">2</Link>
        <Link href="/painting/id-3">3</Link>
    </div>
  )
}

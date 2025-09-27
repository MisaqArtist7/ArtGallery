'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type NavLinksProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({href, children}: NavLinksProps) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? "active" : "link"}>
        {children}
    </Link>
  )
}

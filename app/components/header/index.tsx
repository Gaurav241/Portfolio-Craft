'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: 'https://gauravblog.vercel.app'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Skill',
    href: '/#skills'
  },
  {
    label: 'Experience',
    href: '/#experiences'
  },
  {
    label: 'Contact',
    href: '/#contact'
  }
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className='absolute top-0 w-full z-10 h-24 flex items-center justify-center'
    >
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <Image
            width={100}
            height={100}
            src='/images/KGG.png'
            alt='Logo Gaurav Govinda'
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-gray-400 hover:text-gray-50 focus:outline-none'
          aria-label='Toggle menu'
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center'>
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-4 lg:gap-10'>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-24 left-0 w-full bg-gray-900 bg-opacity-95 md:hidden'
          >
            <div className='container py-4'>
              <div className='flex flex-col gap-4'>
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.label} {...item} onClick={() => setIsOpen(false)} />
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

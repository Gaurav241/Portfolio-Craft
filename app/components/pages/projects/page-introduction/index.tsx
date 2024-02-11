'use client'

import { Link } from '@/app/components/link'
import { SectionsTitle } from '@/app/components/sections-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className='w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2'>
      <SectionsTitle
        subtitle='projects'
        title='My Projects'
        className='text-center items-center [&>h3]:text-4xl'
      />
      <motion.div
        className='flex flex-col items-center'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base'>
          Here you can see some of the work I developed. Navigate to
          want and explore the projects to see how they were created, the
          technologies used and functionalities implemented.
        </p>
        <Link href='/'>
          <HiArrowNarrowLeft size={20} />
          Return to Home
        </Link>
      </motion.div>
    </section>
  )
}

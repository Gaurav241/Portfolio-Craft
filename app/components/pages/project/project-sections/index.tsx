'use client'

import { fadeUpAnimation } from '@/app/lib/animations'
import { ProjectSection } from '@/app/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectSectionProps = {
  sections: ProjectSection[]
}

export const ProjectSections = ({ sections }: ProjectSectionProps) => {
  return (
    <section className='container my-12 md:my-32 flex flex-col gap-8 md:gap-32'>
      {sections.map((section) => (
        <motion.div
          key={`section-${section.title}`}
          className='flex flex-col items-center gpa-6 md:gap-12'
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl md:text-3xl font-medium text-gray-300'>
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            alt={`Section Image ${section.title}`}
            width={1080}
            height={372}
            className='w-full aspect-auto rounded-lg object-cover'
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}

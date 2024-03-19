'use client'

import { SectionsTitle } from '@/app/components/sections-title'
import { KnownTech } from './known-tech'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnownTechsProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section id='skills' className='container py-16'>
      <SectionsTitle title='Knowledge' subtitle='skills' />
      <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]'>
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.25, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

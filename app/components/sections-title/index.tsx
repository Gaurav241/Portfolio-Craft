'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'

type SectionsTitleProps = {
  title: string
  subtitle: string
  className?: string
}

export const SectionsTitle = ({
  title,
  subtitle,
  className
}: SectionsTitleProps) => {
  const animProps = {
    inital: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className='font-mono text-sm text-emerald-400'
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        className='text-3xl font-medium'
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}

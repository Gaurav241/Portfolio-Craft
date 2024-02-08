import { cn } from '@/app/lib/utils'

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
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className='font-mono text-sm text-emerald-400'>
        {`../${subtitle}`}
      </span>
      <h3 className='text-3xl font-medium'>{title}</h3>
    </div>
  )
}

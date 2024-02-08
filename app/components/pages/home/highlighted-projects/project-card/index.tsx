import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image
          src=''
          alt='Project Thumbnail'
          width={420}
          height={304}
          className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
        />
      </div>
      <div>
        <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
          <Image
            src='/images/icons/project-title-icon.svg'
            alt='Icon to decorate the project title'
            width={20}
            height={20}
          />
          Project title
        </h3>
        <p className='text-gray-400 my-6'>
          The company itself is a very successful company. Similarly
          the pleasure of laborious pleasure from the expedient truth of the free pleasure
          resilience Therefore, I will explain that we do not gain any hatred for our suffering
          will be followed. Or consider them as necessary! Nothing really
        </p>
        <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
          <TechBadge name='Node.js' />
        </div>
        <Link href='/projects/book-wise'>
          View Project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

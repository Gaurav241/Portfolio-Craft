import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'

export const ExperienceItem = () => {
  return (
    <div className='grid grid-cols-[40px,1fr] gap-4 md:gap-10'>
      <div className='flex flex-col items-center gap-4'>
        <div className='rounded-full border border-gray-500 p-0.5'>
          <Image
            src=''
            alt='Company Logo'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
        <div className='h-full w-[1px] bg-gray-800' />
      </div>
      <div>
        <div className='flex flex-col gap-2 text-sm sm:text-base'>
          <a
            href='https://linkedin.com/krgauravgovinda'
            target='_blank'
            className='text-gray-500 hover:text-emerald-500 transition-colors'
          >
            @ Company Name
          </a>
          <h4 className='text-gray-300'>Company Position</h4>
          <span className='text-gray-500'>
            Oct 2022 - The Moment - (6 months)
          </span>
          <p className='text-gray-400'>
            The company itself is a very successful company.
            Hate necessities, pleasures to the wise do not trouble,
            something great with the desire to be free from these pains and troubles
            times Like the pleasures he wanted the troubles of an easy mind?
          </p>
        </div>
        <p className='text-gray-400 text-sm mb-3 mt-6 font-semibold'>
          Skills
        </p>
        <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
          <TechBadge name='PHP' />
        </div>
      </div>
    </div>
  )
}

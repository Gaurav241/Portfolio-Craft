import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'

const CONTACTS = [
  {
    url: 'https://github.com/Gaurav241',
    icon: <TbBrandGithub />
  },
  {
    url: 'https://linkedin.com/in/krgauravgovinda',
    icon: <TbBrandLinkedin />
  },
  {
    url: 'https://whatsapp.com',
    icon: <TbBrandWhatsapp />
  }
]

export const HeroSection = () => {
  return (
    <section className='w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]'>
      <div className='container flex items-start justify-between flex-col-reverse lg:flex-row'>
        <div className='w-full lg:max-w-[530px]'>
          <p className='font-mono text-emerald-400'>Hello, my name is</p>
          <h2 className='text-4xl font-medium mt-2'>Kumar Gaurav Govinda</h2>
          <p className='text-gray-400 my-6 text-sm sm:text-base'>
            Hello, I'm Kumar Gaurav Govinda, a passionate Full-Stack Developer with 2+ years of
            experience in crafting beautiful, functional user interfaces. My tech journey is fueled
            by a desire to innovate and create intuitive solutions that simplify complex challenges.
            I excel in leading technical teams through the exciting hurdles of our dynamic industry,
            aiming to inspire with vision and drive excellence. Eager to tackle new challenges, I'm
            on a quest to transform ideas into digital realities. Let's connect and explore the
            potential of creative collaboration!
          </p>
          <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name='Next.js' />
            ))}
          </div>
          <div className='mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
            <Button className='w-max shadow-button'>
              Contact
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className='text-gray-600 text-2xl flex items-center h-20 gap-3'>
              {CONTACTS.map((contact, index) => (
                <a key={`contact-${index}`} href={contact.url} target='_blank' className='hover:text-gray-100 transition-all'>
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src=''
          alt='Gaurav Govinda Profile Photo'
          className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover'
        />
      </div>
    </section>
  )
}

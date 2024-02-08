import Image from 'next/image'

const SECTIONS = [
  {
    title: 'Login',
    image: 'https://media.graphassets.com/ZsK2GK0HTru6pi0WwEpc'
  },
  {
    title: 'Home',
    image: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw'
  }
]

export const ProjectSections = () => {
  return (
    <section className='container my-12 md:my-32 flex flex-col gap-8 md:gap-32'>
      {SECTIONS.map((section) => (
        <div
          key={`section-${section.title}`}
          className='flex flex-col items-center gpa-6 md:gap-12'
        >
          <h2 className='text-2xl md:text-3xl font-medium text-gray-300'>
            {section.title}
          </h2>
          <Image
            src={section.image}
            alt={`Section Image ${section.title}`}
            width={1080}
            height={372}
            className='w-full aspect-auto rounded-lg object-cover'
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}

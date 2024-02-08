import Image from 'next/image'
import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import { Project } from '@/app/types/projects'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image
          src={project.thumbnail.url}
          alt={`Project Thumbnail ${project.title}`}
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
          {project.title}
        </h3>
        <p className='text-gray-400 my-6'>{project.shortDescription}</p>
        <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          View Project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

import { Button } from '@/app/components/button'
import { SectionsTitle } from '@/app/components/sections-title'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { RichText } from '@graphcms/rich-text-react-renderer'

type ProjectDetailsProps = {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className='w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden'>
      <div
        className='absolute inset-0 z-[-1]'
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`
        }}
      />
      <SectionsTitle
        subtitle='projects'
        title={project.title}
        className='text-center items-center sm:[&>h3]:text-4xl'
      />
      <div className='text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base'>
        <RichText content={project.description.raw} />
      </div>
      <div className='w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center'>
        {project.technologies.map((technology) => (
          <TechBadge key={technology.name} name={technology.name} />
        ))}
      </div>
      <div className='my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row'>
        {project.githubUrl && (
          <a href={project.githubUrl} target='_blank'>
            <Button className='min-w-[180px]'>
              <TbBrandGithub size={20} />
              Repository
            </Button>
          </a>
        )}
        {project.liveProjectUrl && (
          <a href={project.liveProjectUrl} target='_blank'>
            <Button className='min-w-[180px]'>
              <FiGlobe size={20} />
              Online Project
            </Button>
          </a>
        )}
      </div>
      <Link href='/projects'>
        <HiArrowNarrowLeft size={20} />
        Back to Projects
      </Link>
    </section>
  )
}

import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionsTitle } from '@/app/components/sections-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { Button } from '@/app/components/button'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className='container py-16'>
      <SectionsTitle subtitle='highlights' title='Featured Projects' />
      <HorizontalDivider className='mb-16' />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className='my-16' />
          </div>
        ))}
        <p className='flex items-center gap-1.5'>
          <span className='text-gray-400'>Interested?</span>
          <Link className='inline-flex' href='/projects'>
            <Button className='w-max shadow-button'>
              See all
              <HiArrowNarrowRight />
            </Button>
          </Link>
        </p>
      </div>
    </section>
  )
}

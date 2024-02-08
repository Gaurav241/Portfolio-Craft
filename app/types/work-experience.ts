import { KnownTech } from './projects'
import type { RichTextContent } from '@graphcms/rich-text-types'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: KnownTech[]
  description: {
    raw: RichTextContent
  }
}

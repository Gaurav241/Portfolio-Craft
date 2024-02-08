import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className='text-gray-50 font-medium'>{children}</b>
        ),
        a: ({ children }) => (
          <a
            className='text-emerald-500 hover:text-emerald-600/90 transition-all cursor-pointer'
            href='https://betrybe.com'
            target='_blank'
          >
            {children}
          </a>
        )
      }}
    />
  )
}

'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../button'
import { SectionsTitle } from '../sections-title'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const ContactForm = () => {
  const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500)
  })

  type ContactFormData = z.infer<typeof contactFormSchema>

  const { register, handleSubmit } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
  }

  return (
    <section id='contact' className='py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950'>
      <div className='w-full max-w-[420px] mx-auto'>
        <SectionsTitle
          subtitle='contact'
          title='Lets work together? Contact'
        className='items-center text-center'
         />
        <form
          className='mt-12 w-full flex flex-col gap-4'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            autoComplete='off'
            type='text'
            placeholder='Name'
            className='w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 transition-all '
            {...register('name')}
          />
          <input
            autoComplete='off'
            type='email'
            placeholder='Email'
            className='w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600 transition-all '
            {...register('email')}
          />
          <textarea
            autoComplete='off'
            placeholder='Message...'
            className='resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald -600 transition-all'
            maxLength={500}
            {...register('message')}
          />
          <Button className='mt-6 w-max mx-auto shadow-button'>
            Send Message
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}

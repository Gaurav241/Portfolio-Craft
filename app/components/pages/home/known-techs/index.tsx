import { SectionsTitle } from '@/app/components/sections-title';
import { KnownTech } from './known-tech';
import { TbBrandNextjs } from 'react-icons/tb';

export const KnownTechs = () => {
  return (
    <section className='container py-16'>
      <SectionsTitle title='skills' subtitle='Knowledge' />
      <div className='grid grid-cols-[repeat(auto-fit),minmax(264px,1fr)] gap-3 mt-[60px]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <KnownTech key={index} tech={{
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            startDate: '2022-01-01'
          }} />
        ))}
      </div>
    </section>
  );
}

import { HeroSection } from './components/pages/home/hero-section';
import { HighlightedProjects } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { WorksExperience } from './components/pages/home/works-experience';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorksExperience />
    </>
  )
}

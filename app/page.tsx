import { Footer, MainSection, SideBar, SocialBar } from '@/components/organism/Sections';
import { Cards, PortfolioCards} from '@/components/organism/lists/Cards';
import EducationList from '@/components/organism/lists/EducationList';
import { Hero } from '@/components/organism/Sections';

import { Languages, ProgLanguages, Frameworks, EducationHistory, 
       SkillCards, Portfolios, MyPersonalData, Social} from '@/utils/data';

export default function Home() {
  const me = {
    myName:"Andrés Flórez",
    specialty:"Student",
    profesion:"Software Engineering"
  }

  const techSkills = [
    { title:"Languages", data:Languages },
    { title:"Programming Languages", data:ProgLanguages }
  ]

  return (
    
    <div className="h-screen w-full overflow-hidden flex ">
      
      <SideBar name="Andrés F. Flórez C." 
             profession="Software Engineering Student" personalData={MyPersonalData} 
             skills={techSkills} extraSkills={Frameworks}/>

      <section className="min-w-0 h-full flex flex-col">
          <main className='relative flex flex-col gap-10 pl-10 pr-10 pb-25 items-center justify-start 
                          overflow-y-auto scrollbar-none'>

          <Hero title={me} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. lorem ipsum" />
          
          <MainSection title="Knowledge" description="Amet minim mollit non deserunt ullaco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" >
            <Cards cards={SkillCards} />
          </MainSection>

          <MainSection title="Knowledge" description="Amet minim mollit non deserunt ullaco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" >
            <EducationList studies={EducationHistory}/>
          </MainSection>

          <MainSection title="Portfolio" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" >
            <PortfolioCards portfolios={Portfolios}/>
          </MainSection>

        </main>

        <Footer />
      </section>
    
      <SocialBar icons={Social}/>

    </div>
  );
}

"use client";

import { useState } from 'react';

import { Footer, MainSection, PersonalDetails, SideBar, SocialBar } from '@/components/organism/Sections';
import { Cards, PortfolioCards} from '@/components/organism/lists/Cards';
import EducationList from '@/components/organism/lists/EducationList';
import { Hero } from '@/components/organism/Sections';

import { Portfolios } from '@/utils/data/portfolio-data';

import { Avatar, ProfileDetails, MyPersonalData, Social } from '@/utils/data/personal-data';
import { EducationHistory } from '@/utils/data/education-data';
import { SkillsTitles, Languages, ProgLanguages, Frameworks } from '@/utils/data/skills-data';
import { ButtonsTexts, KnowledgeIntro, 
          SkillTexts, SkillsIcons, EducationIntro, PortfolioIntro } from '@/utils/data/ui-data';

export default function Home() {
  const [ language, setLanguage ] = useState<keyof typeof Avatar>("ES");

  const me = {
    myName:Avatar[language].myName,
    specialty:Avatar[language].role,
    profesion:Avatar[language].profession
  }

  const techSkills = [
    { title:SkillsTitles[language].languages, data:Languages[language] },
    { title:SkillsTitles[language].prog, data:ProgLanguages }
  ]

  const SkillCards = SkillsIcons.map((icon, index) => ({
      icon:icon,
      title: SkillTexts[language][index].title,
      description:SkillTexts[language][index].description
  }));

  const extraSkills = { title:SkillsTitles[language].extra, data:Frameworks}

  return (
    
    <div className="h-screen w-full overflow-hidden flex ">
      
      <SideBar name={Avatar[language].fullName} 
             profession={Avatar[language].fullProfession} personalData={MyPersonalData[language]} 
             skills={techSkills} extraSkills={extraSkills}/>

      <section className="min-w-0 h-full flex flex-col">
        <main className='relative flex flex-col gap-10 px-6 pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10 items-center justify-start 
                          overflow-y-auto scrollbar-none'>

          <Hero title={me} description={ProfileDetails[language].profile}
                fullDescription={ProfileDetails[language].message} messageTitle={ButtonsTexts[language].heroButton}
                 buttonText={ButtonsTexts[language].heroButton} />
          
          <PersonalDetails personalData={MyPersonalData[language]} icons={Social} skills={techSkills} extraSkills={extraSkills}/>

          <MainSection title={KnowledgeIntro[language].title} 
                          description={KnowledgeIntro[language].text} >

            <Cards cards={SkillCards} />
          </MainSection>

          <MainSection title={EducationIntro[language].title}
                     description={EducationIntro[language].text} >
            <EducationList studies={EducationHistory[language]}/>
          </MainSection>

          <MainSection title={PortfolioIntro[language].title} 
                     description={PortfolioIntro[language].text} >

            <PortfolioCards detailLinkText={ButtonsTexts[language].portfolioButton} portfolios={Portfolios[language]}/>
          </MainSection>

        </main>

        <Footer />
      </section>
    
      <SocialBar icons={Social}/>

    </div>
  );
}

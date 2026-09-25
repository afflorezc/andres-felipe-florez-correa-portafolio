import SocialNetworkLink from '@/components/atoms/icons/SocialNetworkLink';
import CardIcon from '@/components/atoms/icons/CardIcon';
import SkillBar from '@/components/atoms/bars/SkillLevel';
import { MainTitle, SectionTitle, SideBarTitle } from '../components/atoms/texts/Titles';
import { SectionIntro, Text, PersonalInfo, AccentedText, Date } from '@/components/atoms/texts/Parragraphs';
import { MainButton, PortfolioLink } from '@/components/atoms/Buttons';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 p-2 items-center justify-start'>
      <MainTitle myName="I'm Andrés Flórez" specialty="Student" profession=" of Software Engineering" />
      <SectionTitle title="Education" />
      <SideBarTitle title="Languages" />
      <div className="w-109">
        <SectionIntro text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. lorem ipsum"/>
      </div>

      <div className='w-120'>
          <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. lorem ipsum"/>
      </div>

      <div className='w-60 flex flex-col gap-2 justify-start items-center'>
        <div className='w-full flex flex-row justify-between items-center'>
            <PersonalInfo text="age:" />
            <AccentedText text="39" />
            <Date date="Dec 15 2026" />
        </div>
      </div>

      <MainButton text="HIRE ME" />
      <PortfolioLink text="Learn More" />

      <SideBarTitle title="Links" primary={false} />

      <SocialNetworkLink link='https://www.linkedin.com/in/afflorezc' icon='akar-icons:linkedin-fill' />
      <SocialNetworkLink link='https://www.facebook.com' icon='la:facebook-f' />
      <SocialNetworkLink link='https://www.github.com/afflorezc' icon='griddy-icons:github-filled' />
      <CardIcon icon='streamline-ultimate:coding-apps-website-apps-browser' />
      <CardIcon icon='bxl:figma' />
      <CardIcon icon='streamline-ultimate:responsive-design' />
      <SkillBar perc={35} />
    </div>
  );
}

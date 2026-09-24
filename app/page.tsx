import SocialNetworkLink from '@/app/components/atoms/icons/SocialNetworkLink';
import CardIcon from '@/app/components/atoms/icons/CardIcon';
import SkillBar from '@/app/components/atoms/bars/SkillLevel';

export default function Home() {
  return (
    <div className='flex flex-col gap-2 p-2'>
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

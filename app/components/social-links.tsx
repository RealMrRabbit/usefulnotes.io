import Image from 'next/image'
import Coffee from '@/public/logos/coffee-svgrepo-com.svg';
import Reddit from '@/public/logos/reddit-icon.svg';

export default function SocialLinks() {
    return (
      <div className='flex min-w-fit min-h-fit bg-component rounded-default shadow-default'>
        <a href="www.google.com">
            <Image className='h-10 w-10 filter-white' src={Coffee} alt="Arch" />
        </a>
        <a href="www.google.com">
            <Image className='h-10 w-10 filter-white' src={Reddit} alt="Arch" />
        </a>
      </div>
    );
  }
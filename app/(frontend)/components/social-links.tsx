import Image from 'next/image';
import Coffee from '@/public/icons/coffee-svgrepo-com.svg';
import Reddit from '@/public/icons/reddit-icon.svg';

export default function SocialLinks() {

  const heightWidth = 30

  return (
    <div className="flex px-2 py-2 bg-component rounded-default shadow-default gap-4">
      <a href="https://buymeacoffee.com/" className="flex items-center justify-center">
        <Image
          src={Coffee}
          alt="Coffee Icon"
          width={heightWidth}
          height={heightWidth} // Adjust based on your box size
        />
      </a>
      <a href="https://www.reddit.com" className="flex items-center justify-center">
        <Image
          src={Reddit}
          alt="Reddit Icon"
          width={heightWidth}
          height={heightWidth} // Adjust based on your box size
        />
      </a>
    </div>
  );
}

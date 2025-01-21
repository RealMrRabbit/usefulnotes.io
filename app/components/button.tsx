import styles from '@/app/components/button/button.module.css'

interface ButtonProps {
  text?: string;
  href?: string;
}

export default function Button({ text = "text", href = "/" }: ButtonProps) {
  return (
    <button className='bg-button min-w-fit max-h-fit rounded-default shadow-default'>
      <a href={href} type="text" className='text-text-dark bg-opacity-100 m-2 bg-button'> 
        {text}
      </a>
    </button>
  );
}
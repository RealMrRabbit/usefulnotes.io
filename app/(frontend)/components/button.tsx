import styles from '@/app/components/button/button.module.css'

interface ButtonProps {
  text?: string;
  href?: string;
}

export default function Button({ text = "text", href = "/" }: ButtonProps) {
  return (
    <a href={href} type="text" className='text-text-dark p-2 bg-button rounded-default text-center text-nowrap'> 
      {text}
    </a>
  );
}
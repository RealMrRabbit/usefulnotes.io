import styles from '@/app/components/button/button.module.css'

export default function Button() {
  return (
    <button className='bg-[#a7c080] rounded-[5px] shadow-[4px_4px_4px_0_#00000033]'>
      <a type="text" className='text-[#3a515d] bg-opacity-100 m-2 bg-[#a7c080]'> 
        Button
      </a>
    </button>
  );
}
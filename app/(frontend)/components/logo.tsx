import Link from "next/link";

export default function Logo() {
    return (
      <Link href="/home" className='hover:cursor-pointer min-w-fit min-h-fit text-text-light text-4xl text-center'>
        usefulnotes.io
      </Link>
    );
  }
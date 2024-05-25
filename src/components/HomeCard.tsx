import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
interface HomeCardProps {
    img: string;
    title: string;
    description: string;
    className?: string;
    handleClick: () => void
}
const HomeCard = ({ img, title, className, description, handleClick }: HomeCardProps) => {
    return (
        <div onClick={handleClick} className={cn('bg-orange-1 h-[260px] shadow-sm cursor-pointer rounded-md p-4 flex flex-col justify-between', className)}>
            <div className='p-2 w-[56px] h-[56px] flex rounded-md justify-center items-center bg-white/30'>
                <Image src={img} alt={title} width={50} height={50} />
            </div>
            <div className='flex flex-col space-y-[2px]'>
                <h3 className='text-white font-bold'>{title}</h3>
                <p className='text-[14px] text-white/80'>{description}</p>
            </div>
        </div>
    )
}

export default HomeCard
import type { ImgHTMLAttributes } from 'react';
import Tag from './Tag'
import Text from './Text'

interface CardProps {
 img: ImgHTMLAttributes<HTMLImageElement>['src'];
 tag: string;
 date: string;
 title: string;
 className?: string
 children: string;
}

function Card({img, tag, date, title, children, className}: CardProps) {
  return (
    <div className={`bg-graphite max-w-70.5 ${className}`}>
        <img src={img} alt="" />
        <div className='px-4 py-6'>
            <Tag className={'mb-2'}>{tag}</Tag>
            <div className='flex flex-col gap-2'>
                <Text as='time' dateTime={date} className='text-body-s text-white'>{date.split('-').reverse().join('/')}</Text>
                <Text as='h3' className='text-mix text-white'>{title}</Text>
                <Text as='p' className='text-body-base text-white'>{children}</Text>
            </div>
        </div>
    </div>
  )
}

export default Card
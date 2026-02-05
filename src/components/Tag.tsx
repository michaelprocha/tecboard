import type { ComponentProps } from 'react'
import Text from './Text'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'

const tagVariant = cva(['bg-medium-gray', 'text-white', 'p-2', 'rounded-sm', 'w-fit', 'text-[0.625rem]'])

interface TagProps extends ComponentProps<'h6'>, VariantProps<typeof tagVariant>{}

function Tag({children, className, ...props}: TagProps) {
  return (
    <Text as={'h6'} className={cn(tagVariant({className}))} {...props}>{children}</Text>
  )
}

export default Tag
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const iconVariant = cva([''], {
    variants: {
        variant: {
            primary: ["fill-graphite"],
            secondary: ["fill-white"],
            tertiary: ["fill-medium-gray"]
        },
        size: {
            sm: ['w-4', 'h-4'],
            md: ['w-6', 'h-7.5']
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})

interface IconProps extends Omit<React.ComponentProps<"svg">, "size">, VariantProps<typeof iconVariant>{
    svg: React.FC<React.ComponentProps<"svg">>
}

function Icon({svg: SvgComponent, variant, size, className, ...props}: IconProps) {
  return <SvgComponent className={iconVariant({variant, size, className})} {...props}/>
}

export default Icon
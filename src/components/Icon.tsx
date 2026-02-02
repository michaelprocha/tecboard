import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const iconVariant = cva(['w-6', 'h-7.5'], {
    variants: {
        variant: {
            primary: ["fill-graphite"],
            secondary: ["fill-white"]
        }
    }
})

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariant>{
    svg: React.FC<React.ComponentProps<"svg">>
}

function Icon({svg: SvgComponent, variant, className, ...props}: IconProps) {
  return <SvgComponent className={iconVariant({variant, className})} {...props}/>
}

export default Icon
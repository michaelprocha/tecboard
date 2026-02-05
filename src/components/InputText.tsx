import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '../utils/cn';

const inputVariant = cva(
    [
        'flex', 'items-center', 'px-4', 'py-2', 'border', 'rounded-md', 'text-white', 
        'outline-none', 'placeholder:text-medium-gray', 'active:border-green', 'focus:border-white'
    ],
    {
        variants: {
            variant: {
                primary: ['border-medium-gray']
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)

interface inputProps extends Omit<ComponentProps<'input'>, "size">, VariantProps<typeof inputVariant>{
    name: string;
    id: string;
}

function Input({ name, id, className, placeholder, ...props}: inputProps) {
  return (
    <input type='text' name={name} id={id} placeholder={placeholder} className={cn(inputVariant({className}))} {...props}/>
  )
}

export default Input
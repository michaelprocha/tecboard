import type { ComponentProps } from 'react'
import logoMarcaImg from '../assets/images/LogoMarca.svg'
import { cn } from '../utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import Text from './Text'

const footerVariant = cva(['flex', 'justify-center', 'items-center', 'w-full'], 
    {
        variants: {
            variant: {
                primary: ['bg-default-bg']
            },
            size: {
                md: ['h-23']
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md'
        }
    }
)

interface FooterProps extends ComponentProps<'footer'>, VariantProps<typeof footerVariant> {
    className?: string;
}

function Footer({className, variant, size, ...props}: FooterProps) {
  return (
    <footer className={cn(footerVariant({variant, size}), className)} {...props}>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h6>
                <img src={logoMarcaImg} alt="logo marca" />
            </h6>
            <Text as='p' className={'text-white text-body-s text-center'}>
                Desenvolvido por Alura. Projeto fictício  sem fins comerciais.
            </Text>
        </div>
    </footer>
  )
}

export default Footer
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import logoMarcaImg from "../assets/images/LogoMarca.svg";
import logoImg from "../assets/images/Logo.svg";
import { cn } from "../utils/cn";

const variantHeader = cva(["w-full", "flex", "items-center", "justify-center"], {
	variants: {
		variant: {
			primary: ["bg-default-bg"],
		},
		size: {
			md: ["h-23"],
		},
	},
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
});

interface HeaderProps extends ComponentProps<"header">, VariantProps<typeof variantHeader> {
	className?: string;
}

function Header({variant, size, className, ...props }: HeaderProps) {
	return (
		<header className={cn(variantHeader({variant, size}), className)} {...props}>
			<div>
				<h1>
					<img src={logoImg} srcSet={`${logoImg} 768w, ${logoMarcaImg}`} sizes="(max-width: 768px) 768px" alt="Logo Marca" />
				</h1>
			</div>
		</header>
	);
}

export default Header;

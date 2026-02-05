import type { ComponentProps, ReactNode} from "react";
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariant = cva(
	[
		"flex", "items-center", "justify-center", "rounded-md", "px-4", 
		"py-2", "gap-2.5", "text-base", "font-semibold", 'min-w-fit', 'cursor-pointer'
	],
	{
		variants: {
			variant: {
				primary: ["bg-green", "text-graphite"],
				secondary: ["bg-medium-gray", "text-white"],
				tertiary: ["bg-medium-gray", "text-white", "border", "border-white"],
				Quaternary: ["bg-graphite", "text-white"]
			},
			size: {
				sm: ['min-h-9'],
				md: ['min-h-11.5']
			},
		},
		defaultVariants: {
			variant: "primary",
			size: 'sm'
		}
	},
);

interface ButtonProps extends Omit<ComponentProps<'button'>, "size">, VariantProps<typeof buttonVariant>{
  children: ReactNode;
  icon?: ComponentProps<typeof Icon>["svg"];
  className?: string;
}

function Button({children, icon, size, variant, className, ...props}: ButtonProps) {
	return (
		<button className={cn(buttonVariant({variant, size, className}))} {...props}>
      		{icon && (<Icon svg={icon} variant={variant === 'primary' ? 'primary' : 'secondary'} className={'w-6 h-7.5'}/>)}
			{children}
		</button>
	);
}

export default Button;

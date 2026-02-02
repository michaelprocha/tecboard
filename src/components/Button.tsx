import type React from "react";
import Text from "./Text";
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariant = cva(
	["flex", "items-center", "justify-center", "rounded-md", "px-4", "py-2", "gap-2.5", "text-base", "font-semibold"],
	{
		variants: {
			variant: {
				primary: ["bg-green", "text-graphite"],
				secondary: ["bg-medium-gray", "text-white"],
				tertiary: ["bg-medium-gray", "text-white", "border", "border-white"],
				Quaternary: ["bg-graphite", "text-white"]
			},
		},
	},
);

interface ButtonProps extends VariantProps<typeof buttonVariant>{
  children: React.ReactNode;
  icon?: React.FC<React.ComponentProps<"svg">>;
  className?: string;
}

function Button({children, icon, variant, className, ...props}: ButtonProps) {
	return (
		<Text as={"button"} className={buttonVariant({variant, className})}>
      {!icon ? "" : (<Icon svg={icon} variant={variant === 'primary' ? 'primary' : 'secondary'} className={'w-6 h-7.5'} { ...props }/>)}
			{children}
		</Text>
	);
}

export default Button;

import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import { cn } from "../utils/cn";

const dateVariant = cva(
	[
		"px-4",
		"py-2",
		"border",
		"border-medium-gray",
		"rounded-md",
        "text-medium-gray",
        "outline-none",
		'active:border-green',
		'focus:border-white'
	],
	{
		variants: {
			size: {
				md: ["w-82"],
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

interface DateProps extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof dateVariant> {
	id: string;
	name: string;
}

function InputDate({ id, name, size, className, ...props }: DateProps) {
	return (
    	<input id={id} name={name}	type="date"	required className={cn(dateVariant({ size, className }))} {...props} />
	);
}

export default InputDate;

import { useState } from "react";
import Icon from "./Icon";
import upIcon from "../assets/icons/arrow_up.svg?react";
import downIcon from "../assets/icons/arrow_down.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const selectProps = cva(['relative', 'text-body-bas'], {
    variants: {
        size: {
            md: ['w-82']
        }
    },
    defaultVariants: {
        size: 'md'
    }
})

interface SelectProps extends VariantProps<typeof selectProps> {
	options: string[];
    className?: string;
}

function Select({ options, size, className }: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Selecione uma opção");

	return (
		<div className={cn(selectProps({size, className}))}>
			{isOpen || (<button
				onClick={() => setIsOpen(!isOpen)}
				className="outline-none flex items-center justify-between w-full px-4 py-2 border 
                border-medium-gray rounded-md text-medium-gray text-body-base 
                focus:border-white active:border-white cursor-pointer"
			>
				{selected}
				<Icon svg={downIcon} size={'sm'} variant={'tertiary'}/>
			</button>)}

			{isOpen && (
				<ul className="absolute z-10 w-full px-4 border border-medium-gray 
                rounded-md">
                    <li className="text-medium-gray border-b border-medium-gray py-2 mb-2.5 flex 
                    justify-between items-center cursor-pointer" onClick={() => setIsOpen(false)}>
                        Selecione uma opção
                        <Icon svg={upIcon} size={'sm'} variant={'tertiary'}/>
                    </li>
					{options.map((opt) => (
						<li
							key={opt}
							onClick={() => {
								setSelected(opt);
								setIsOpen(false);
							}}
							className="text-white py-1.5 my-2 cursor-pointer hover:bg-medium-gray capitalize"
						>
							{opt}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Select;

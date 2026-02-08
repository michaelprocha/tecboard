// import { useState } from "react";
// import Icon from "./Icon";
// import upIcon from "../assets/icons/arrow_up.svg?react";
// import downIcon from "../assets/icons/arrow_down.svg?react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "../utils/cn";

// const selectProps = cva(['relative', 'text-body-bas'], {
//     variants: {
//         size: {
//             md: ['w-82']
//         }
//     },
//     defaultVariants: {
//         size: 'md'
//     }
// })

// interface SelectProps extends VariantProps<typeof selectProps> {
// 	options: string[];
//     className?: string;
// }

// function Select({ options, size, className }: SelectProps) {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [selected, setSelected] = useState("Selecione uma opção");

// 	return (
// 		<div className={cn(selectProps({size}), className)}>
// 			{!isOpen && (<button
// 				type="button"
// 				onClick={() => setIsOpen(!isOpen)}
// 				className="outline-none flex items-center justify-between w-full px-4 py-2 border 
//                 border-medium-gray rounded-md text-medium-gray text-body-base 
//                 focus:border-white active:border-white cursor-pointer"
// 			>
// 				{selected}
// 				<Icon svg={downIcon} size={'sm'} variant={'tertiary'}/>
// 			</button>)}

// 			{isOpen && (
// 				<ul className="absolute z-10 w-full px-4 border border-medium-gray 
//                 rounded-md bg-graphite">
//                     <li className="text-medium-gray border-b border-medium-gray py-2 mb-2.5 flex 
//                     justify-between items-center cursor-pointer" onClick={() => setIsOpen(false)}>
//                         Selecione uma opção
//                         <Icon svg={upIcon} size={'sm'} variant={'tertiary'}/>
//                     </li>
// 					{options.map((opt) => (
// 						<li
// 							key={opt}
// 							onClick={() => {
// 								setSelected(opt);
// 								setIsOpen(false);
// 							}}
// 							className="text-white py-1.5 my-2 cursor-pointer hover:bg-medium-gray capitalize"
// 						>
// 							{opt}
// 						</li>
// 					))}
// 				</ul>
// 			)}
// 		</div>
// 	);
// }

// export default Select;


import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import upIcon from "../assets/icons/arrow_up.svg?react";
import downIcon from "../assets/icons/arrow_down.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const selectProps = cva(["relative", "text-body-base"], {
  variants: {
    size: {
      md: ["w-82"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SelectProps extends VariantProps<typeof selectProps> {
  options: string[];
  placeholder?: string;
  className?: string;
}

function Select({
  options,
  size,
  placeholder = "Selecione uma opção",
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn(selectProps({ size }), className)}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between w-full px-4 py-2 border
        border-medium-gray rounded-md text-body-base cursor-pointer
        focus:border-white"
      >
        <span className={selected ? "text-white" : "text-medium-gray"}>
          {selected ?? placeholder}
        </span>
        <Icon svg={downIcon} size="sm" variant="tertiary" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 w-full px-4 border border-medium-gray 
          rounded-md bg-graphite mt-1"
        >
          <li className="flex justify-between items-center text-medium-gray border-b border-medium-gray py-2 mb-2.5">
            {placeholder}
            <button type="button" onClick={() => setIsOpen(false)}>
              <Icon svg={upIcon} size="sm" variant="tertiary" />
            </button>
          </li>

          {options.map((opt, index) => (
            <li key={`${opt}-${index}`}>
              <button
                type="button"
                role="option"
                onClick={() => {
                  setSelected(opt);
                  setIsOpen(false);
                }}
                className="w-full text-left text-white py-1.5 my-2
                hover:bg-medium-gray capitalize"
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;

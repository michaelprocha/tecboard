import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

// 1. Definimos as props base do nosso componente
interface TextBaseProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
}

// 2. Combinamos com as props nativas da tag T, excluindo conflitos
type TextProps<T extends ElementType> = TextBaseProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof TextBaseProps<T>>;

function Text<T extends ElementType = "span">({ as, children, className, ...props }: TextProps<T>) {
  const Component = as || "span";
  return (
    <Component className={className} {...props} >{children}</Component>
  );
}

export default Text;
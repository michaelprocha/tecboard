import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

interface TextBaseProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
}

type TextProps<T extends ElementType> = TextBaseProps<T> & 
  Omit<ComponentPropsWithoutRef<T>, keyof TextBaseProps<T>>;

export default function Text<T extends ElementType = "span">({
  as,
  children,
  className,
  ...props
}: TextProps<T>) {
  const Component = as || "span";
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
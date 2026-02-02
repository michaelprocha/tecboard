import { createElement } from "react"

interface TextProps {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

function Text({as = 'span', className, children, ...props}: TextProps) {
    return createElement(as, {className, ...props}, children)
}

export default Text

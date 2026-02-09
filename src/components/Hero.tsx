import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import Text from "./Text";

const variantHero = cva([
	"w-full",
	"flex",
	"items-end",
	"justify-center",
	`bg-heroS`,
	`md:bg-heroM`,
	`lg:bg-heroL`,
	"h-100",
	"md:h-120",
	"lg:h-150",
	"bg-no-repeat",
	"bg-bottom",
]);

interface HeroProps extends Omit<ComponentProps<"section">, 'size'>, VariantProps<typeof variantHero> {
	className?: string;
}

function Hero({ className, ...props }: HeroProps) {
	return (
		<section className={cn(variantHero({}), className)} {...props}>
			<Text
				as="h2"
				className="text-white mb-6 lg:mb-20 text-mix md:text-title-s lg:text-title-base 
                lg:max-w-148 text-center md:max-w-118 max-w-78"
			>
				Seu hub de eventos de tecnologia
			</Text>
		</section>
	);
}

export default Hero;

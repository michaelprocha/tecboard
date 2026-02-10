import { useId, type ComponentProps, type FormEvent } from "react";
import Text from "./Text";
import Select from "./Select";
import InputDate from "./InputDate";
import InputText from "./InputText";
import { cva } from "class-variance-authority";
import Button from "./Button";
import { cn } from "../utils/cn";

const variantForm = cva(["rounded-md", "bg-graphite", "px-7", "py-8", 'text-white', 'w-fit']);

interface formProps extends ComponentProps<"form"> {
	className?: string;
}

function Form({ className, ...props }: formProps) {
	const id = useId();

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

	return (
		<form onSubmit={sendForm} className={cn(variantForm(), className)} {...props}>
			<Text as="h3" className="text-body-md pb-8">Preencha para criar um evento:</Text>
			<div className="flex flex-col gap-4">
				<label className="flex flex-col gap-2 text-body-base">
                    Qual o nome do evento?
					<InputText name="eventName" id={`${id}eventName`} placeholder="Summer dev hits" />
				</label>
				<label className="flex flex-col gap-2 text-body-base">
                    Data do evento
					<InputDate name="eventDate" id={`${id}eventDate`} />
				</label>
				<label className="flex flex-col gap-2 text-body-base">
                    Tema do evento
					<Select options={["IA", "Front-end", "Backend", "Devops", "Data Science", "Cloud"]} />
				</label>
                <Button type="submit" variant={'primary'} size={'sm'} className="w-fit mx-auto mt-8">Criar evento</Button>
			</div>
		</form>
	);
}

export default Form;

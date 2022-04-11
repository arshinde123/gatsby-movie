/** External imports */
import * as React from "react";

/** Types and interfaces */
export enum ButtonTypes {
	PRIMARY = "primary",
	SUCCESS = "success",
	DANGER = "danger",
}

export interface ButtonProps {
	value: string;
	type: ButtonTypes;
	classes?: string;
	outlined?: boolean;
	onClick: (e: React.SyntheticEvent) => void;
}

/** React FC */
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const { value, type, classes, outlined, onClick } = props;

	const getClassNames = () => {
		return outlined
			? `btn btn-outline-${type} ${classes}`
			: `btn btn-${type} ${classes}`;
	};

	return (
		<button type="button" className={getClassNames()} onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;

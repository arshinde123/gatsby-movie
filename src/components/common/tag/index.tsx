/** External imports */
import * as React from "react";

/** Types and interfaces */
interface TagProps {
	value: string;
	type?: 'dark' | 'danger'
}

/** React FC */
const Tag: React.FC<TagProps> = (props: TagProps) => {
	const { value, type = "dark" } = props;
	return (
		<>
			<span className={`badge rounded-pill bg-${type} me-1`}>{value}</span>
		</>
	);
};

export default Tag;

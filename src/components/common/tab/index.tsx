/** External imports */
import * as React from "react";

/** Style imports */
import "./style.scss";

/** Types and interfaces */
export type tab = {
	id: number;
	label: string;
};

export interface TabsProps {
	tabs: tab[];
	selectedTabId: number;
	classes?: string;
	onClick: (id: number) => void;
}

/** React FC */
const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
	const { classes = "", tabs, selectedTabId, onClick } = props;
	return (
		<div className={`tabs ${classes}`}>
			<ul className="nav nav-pills">
				{tabs?.map(tab => (
					<li key={tab.id} className="nav-item">
						<span
							className={`nav-link ${selectedTabId === tab.id ? "active" : ""}`}
							onClick={() => onClick(tab.id)}>
							{tab.label}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tabs;

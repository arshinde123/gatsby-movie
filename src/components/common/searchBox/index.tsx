/** External imports */
import * as React from "react";

/** Types and interfaces */
export interface SearchBoxProps {
	value: string;
	badgeLabel?: string;
	badgeValue?: number | string;
	placeholder?: string;
	onChange: (value: string) => void;
	onFocus?: (e: React.SyntheticEvent) => void;
}

/** React FC */
const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps) => {
	const {
		value, badgeLabel, badgeValue, placeholder, onChange, onFocus
	} = props;
	return (
		<>
			<div className="input-group mb-3">
				<input
					type="text"
					value={value}
					className="form-control"
					placeholder={placeholder}
					onChange={e => onChange(e.currentTarget.value)}
					onFocus={e => onFocus && onFocus(e)}
				/>
				{(badgeLabel || badgeValue) && (
					<span className="input-group-text">
						{badgeLabel && <span>{badgeLabel}&nbsp;&nbsp;</span>}
						{badgeValue && (
							<span className="badge bg-primary">{badgeValue}</span>
						)}
					</span>
				)}
			</div>
		</>
	);
};

export default SearchBox;

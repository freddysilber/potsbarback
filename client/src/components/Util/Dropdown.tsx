import React from 'react'

interface DropdownProps {
	default: string,
	values: string[]
}

const Dropdown = (props: DropdownProps) => {
	return (
		<select defaultValue={props.default}>
			{props.values.map((value: string) => <option key={value}>{value}</option>)}
		</select>
	)
}

export default Dropdown
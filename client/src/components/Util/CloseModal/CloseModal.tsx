import React, { useState } from 'react'

export const CloseModal: () => JSX.Element = () => {

	const [closeModal] = useState()

	return (
		<>
			<button className="button is-primary" onClick={closeModal}>Cancel</button>
			<button className="button is-primary" onClick={closeModal}>Do something</button>
		</>
	)
}
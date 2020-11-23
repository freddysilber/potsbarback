import React, { useState } from 'react'

const CloseModal: () => JSX.Element = () => {

	const [closeModal] = useState()

	return (
		<>
			<button className="button is-primary" onClick={closeModal}>Cancel</button>
			<button className="button is-primary" onClick={closeModal}>Do something</button>
		</>
	)
}

export default CloseModal
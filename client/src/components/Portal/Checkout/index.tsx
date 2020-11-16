import React from "react";
import "./Checkout.scss";
// Components
import CloseModal from '../index'

interface ModalProps {
	children: any,
	closeModal: any,
	modalState: any,
	title: any
}

const Modal = ({ children, closeModal, modalState, title }: ModalProps) => {
	if (!modalState) {
		return null;
	}

	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={closeModal} />
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{title}</p>
					<button className="delete" onClick={closeModal} />
				</header>
				<section className="modal-card-body">
					<div className="content">
						{children}
					</div>
				</section>
				<footer className="modal-card-foot">
					<CloseModal />
				</footer>
			</div>
		</div>
	);
}

// Modal.propTypes = {
// 	closeModal: React.PropTypes,
// 	modalState: React.PropTypes,
// 	title: React.PropTypes
// }


class Checkout extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			modalState: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState((prev, props) => {
			// const newState = !prev.modalState;
			// return { modalState: newState };
		});
	}

	render() {
		return (
			<div className="container">
				<div className="checkout-title">
					[user.name], please complete this form for your checkout process.
				</div>
				<div className="card checkout-input-form">
					<div className="checkout-user-static">
						<div className="checkout-form-head">[user.name]</div>
						<div className="checkout-form-head">[user.position]</div>
						<div className="checkout-form-head">[user.cashcenter]</div>
						<div className="checkout-form-head">[user.startingcash]</div>
					</div>
					<div className="checkout-form-head">Daily Cash Sales:</div>
					<input
						className="input checkout-input is-primary is-medium"
						type="text"
						placeholder="$250.00"
					/>
					<div className="checkout-form-head">Daily Credit Sales:</div>
					<input
						className="input checkout-input is-primary is-medium"
						type="text"
						placeholder="$250.00"
					/>
					<div className="checkout-form-head">Cash Owed to House:</div>
					<input
						className="input checkout-input is-primary is-medium"
						type="text"
						placeholder="$250.00"
					/>
					<div className="checkout-button-div">
						<a href="/portal/management">
							<button className="button login-button is-primary" onClick={this.toggleModal}>Verify</button>
						</a>
					</div>
					{/* <Modal
						closeModal={this.toggleModal}
						modalState={this.state.modalState}
						title="Closeout Summary"
					>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet justo in arcu efficitur malesuada nec ut diam. Aenean a iaculis eros. Proin nec purus congue, rutrum sapien id, sodales ante. Nam imperdiet sapien pretium leo dapibus euismod. Ut ac venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta a a augue. Proin rhoncus tempus leo sed ultricies. In luctus aliquam placerat. Cras efficitur enim vitae vulputate consequat. Nulla tellus est, fringilla quis nisi eu, aliquam finibus eros.</p>
						<p>Aliquam est dui, varius eu tempor ac, ornare vel magna. Suspendisse potenti. Nullam gravida fermentum turpis, at ultricies risus bibendum sit amet. Nulla et arcu id nisi semper ullamcorper cursus sed magna. Phasellus pulvinar ligula vehicula consequat sagittis. Donec tristique tellus sed ex euismod ullamcorper. Vivamus nibh metus, scelerisque sed lorem eget, auctor lobortis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin congue auctor diam, efficitur dignissim neque. Pellentesque vitae odio ut odio auctor feugiat. Curabitur eget mauris nibh. Vestibulum massa nunc, iaculis at purus venenatis, mollis tincidunt tortor.</p>
					</Modal> */}
				</div>
			</div>
		)
	}
}

export default Checkout;

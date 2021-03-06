import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "./Checkout.scss";
// Components
// import CloseModal from "../index";
// Routes
import { Routes } from "../../../constants";
// Redux
import { connect } from "react-redux";
// Types/ Interfaces
// import { Auth } from "../../Auth/index.js";

// interface ModalProps {
// 	children: any;
// 	closeModal: any;
// 	modalState: any;
// 	title: any
// }

// const Modal = ({ children, closeModal, modalState, title }: ModalProps) => {
// 	if (!modalState) {
// 		return null;
// 	}

// return (
// 	<div className="modal is-active">
// 		<div className="modal-background" onClick={closeModal} />
// 		<div className="modal-card">
// 			<header className="modal-card-head">
// 				<p className="modal-card-title">{title}</p>
// 				<button className="delete" onClick={closeModal} />
// 			</header>
// 			<section className="modal-card-body">
// 				<div className="content">{children}</div>
// 			</section>
// 			<footer className="modal-card-foot">
// 				<button className="button is-primary" onClick={closeModal}>Cancel</button>
// 				<button className="button is-primary" onClick={closeModal}>Do something</button>
// 			</footer>
// 		</div>
// 	</div>
// );
// };

// Modal.propTypes = {
// 	closeModal: React.PropTypes,
// 	modalState: React.PropTypes,
// 	title: React.PropTypes
// }

interface CheckoutProps {
  auth: any;
  // auth: Auth;
  history: any;
  errors: any;
}

const Checkout = (props: CheckoutProps) => {
  // const [modalState] = useState()
  const { user } = props.auth;
  // class Checkout extends React.Component {
  // constructor(props: any) {
  // 	super(props);
  // 	this.state = {
  // 		modalState: false,
  // 	};
  // 	this.toggleModal = this.toggleModal.bind(this);
  // }

  const dummyData =
  {
    id: 0,
    first_name: "Andrew",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: "Bartender",
    active_shift: true,
    check_out: {
      cash_sales: 476.98,
      credit_sales: 9889.0,
      credit_tips: 976.89,
      is_closed: true,
      is_verified: true,
      is_recieved: false,
      cost_center: "Garden Bar",
      starting_cash: 250.0,
    },
  }


  const toggleModal = () => {
    console.log("toggle modal");
    // 	this.setState((prev: any, props: any) => {
    // 		const newState = !prev.modalState;
    // 		return { modalState: newState };
    // 	});
  };

  return (
    <div>
      <div className="card checkout-input-form">
        <div className="checkout-user-static">
          <div className="checkout-title">
            {user.firstName}, please complete this form for your checkout
            process.
          </div>
          <div className="checkout-form-head">{dummyData.job_role}</div>
          <div className="checkout-form-head">{dummyData.check_out.cost_center}</div>
          <div className="checkout-form-head">Starting Cash: ${dummyData.check_out.starting_cash}.00</div>
        </div>
        <div className="checkout-form-head">Daily Cash Sales:</div>
        <input
          className="input checkout-input is-black is-medium mt-0"
          type="text"
          placeholder="$250.00"
        />
        <div className="checkout-form-head">Daily Credit Sales:</div>
        <input
          className="input checkout-input is-black is-medium mt-0"
          type="text"
          placeholder="$250.00"
        />
        <div className="checkout-form-head">Cash Owed to House:</div>

        <input
          className="input is-black is-medium mt-0"
          type="text"
          placeholder="$250.00"
        />
        <span className="exerptText mt-1">
          Use "-xx.xx" to denote if cash is owed to you (ex: -26.00)
        </span>

        <div className="checkout-form-head mt-4">
          Verify to complete Checkout:
        </div>
        <Link to={Routes.verification}>
          <div className="staff-button-div">
            <button
              className="button login-button is-danger"
              onClick={toggleModal}
            >
              Verify
            </button>
          </div>
        </Link>
        {/* <Modal
						closeModal={this.toggleModal}
						modalState={this.modalState}
						title="Closeout Summary"
					>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet justo in arcu efficitur malesuada nec ut diam. Aenean a iaculis eros. Proin nec purus congue, rutrum sapien id, sodales ante. Nam imperdiet sapien pretium leo dapibus euismod. Ut ac venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta a a augue. Proin rhoncus tempus leo sed ultricies. In luctus aliquam placerat. Cras efficitur enim vitae vulputate consequat. Nulla tellus est, fringilla quis nisi eu, aliquam finibus eros.</p>
						<p>Aliquam est dui, varius eu tempor ac, ornare vel magna. Suspendisse potenti. Nullam gravida fermentum turpis, at ultricies risus bibendum sit amet. Nulla et arcu id nisi semper ullamcorper cursus sed magna. Phasellus pulvinar ligula vehicula consequat sagittis. Donec tristique tellus sed ex euismod ullamcorper. Vivamus nibh metus, scelerisque sed lorem eget, auctor lobortis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin congue auctor diam, efficitur dignissim neque. Pellentesque vitae odio ut odio auctor feugiat. Curabitur eget mauris nibh. Vestibulum massa nunc, iaculis at purus venenatis, mollis tincidunt tortor.</p>
					</Modal> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(Checkout);

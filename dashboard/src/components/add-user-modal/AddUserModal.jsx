import React from "react";
import "./addusermodal.css";
import { Modal, Button, Radio, Input } from "antd";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { handleCancel, createUser } from "../../store/actions/actions";

class AddUserModal extends React.Component {
	state = { visible: false };

	handleOk = e => {
		this.props.createUser(this.state);
		this.props.handleCancel();
	};

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	onChangeRadio(e) {
		this.setState({
			radioValue: e.target.value
		});
	}
	render() {
		return (
			<div>
				<Modal
					title="Add User"
					visible={this.props.showAddUserModal}
					onOk={this.handleOk}
					onCancel={this.props.handleCancel}
				>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="name"
							placeholder="Name"
						></input>
					</div>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="email"
							placeholder="Email"
						></input>
					</div>
					<div className="input-fields ">
						<Radio.Group
							onChange={e => this.onChangeRadio(e)}
							id="radioValue"
							value={this.state.value}
						>
							<Radio buttonStyle="solid" value={"ad"}>
								Admin
							</Radio>
							<Radio buttonStyle="solid" value={"ce"}>
								Customer Executive
							</Radio>
						</Radio.Group>
					</div>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="mobileNumber"
							placeholder="Mobile Number(Optional)"
						></input>
					</div>
					<div className="input-fields">
						<div>
							<button
								onClick={this.handleOk}
								className="add-button"
							>
								<span className="add-button-text">
									ADD USER
								</span>
							</button>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state
	};
};
const mapDispatchToProps = dispatch => {
	return {
		handleCancel: () => dispatch(handleCancel()),
		createUser: e => dispatch(createUser(e))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);

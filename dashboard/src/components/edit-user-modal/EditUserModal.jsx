import React from "react";
import "./editusermodal.css";
import { Modal, Radio } from "antd";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { handleCancel, editUser } from "../../store/actions/actions";

class EditUserModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			radioValue: "ce",
			radioValueStatus: "ina"
		};
	}

	handleOk = e => {
		console.log("after ok ", this.state);
		let data = { key: this.props.editRecord["key"], userData: this.state };
		this.props.editUser(data);
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
		console.log("state ", this.state);
	}
	onChangeRadioStatus(e) {
		this.setState({
			radioValueStatus: e.target.value
		});
		console.log("state ", this.state);
	}

	componentDidMount() {
		if (this.props.editRecord["roletype"] == "Customer Executive") {
			this.setState({
				radioValue: "ce"
			});
		} else {
			this.setState({
				radioValue: "ad"
			});
		}
		// if (this.props.editRecord["status"][0] == "Active") {
		// 	this.setState({
		// 		radioValueStatus: "act"
		// 	});
		// } else if (this.props.editRecord["status"][0] == "Pending") {
		// 	this.setState({
		// 		radioValueStatus: "pen"
		// 	});
		// } else {
		// 	this.setState({
		// 		radioValueStatus: "ina"
		// 	});
		// }
	}

	render() {
		console.log("**", this.state);
		return (
			<div>
				<Modal
					title="Edit User"
					visible={this.props.showEditUserModal}
					onOk={this.handleOk}
					onCancel={this.props.handleCancel}
				>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="name"
							placeholder={this.props.editRecord["name"]}
						></input>
					</div>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="email"
							placeholder={this.props.editRecord["email"]}
						></input>
					</div>
					<div className="input-fields ">
						<Radio.Group
							onChange={e => this.onChangeRadio(e)}
							id="radioValue"
							// value={this.state.radioValue}
						>
							<Radio buttonStyle="solid" value={"ad"}>
								Admin
							</Radio>
							<Radio buttonStyle="solid" value={"ce"}>
								Customer Executive
							</Radio>
						</Radio.Group>
					</div>
					<div className="input-fields ">
						<Radio.Group
							onChange={e => this.onChangeRadioStatus(e)}
							id="radioValueStatus"
							// value={this.state.radioValueStatus}
						>
							<Radio buttonStyle="solid" value={"act"}>
								Active
							</Radio>
							<Radio buttonStyle="solid" value={"pen"}>
								Pending
							</Radio>
							<Radio buttonStyle="solid" value={"ina"}>
								Inactive
							</Radio>
						</Radio.Group>
					</div>
					<div className="input-fields">
						<input
							onChange={e => this.onChange(e)}
							id="mobileNumber"
							placeholder={this.props.editRecord["mobileNumber"]}
						></input>
					</div>
					<div className="input-fields">
						<div>
							<button
								onClick={this.handleOk}
								className="add-button"
							>
								<span className="add-button-text">
									EDIT USER
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
		editUser: e => dispatch(editUser(e))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);

import React from "react";
import "./tableheader.css";
import { Input, Button } from "antd";
import { showAddUserModal } from "../../store/actions/actions";
import { connect } from "react-redux";

const { Search } = Input;

class TableHeader extends React.Component {
	render() {
		return (
			<div className="header-container">
				<div className="header-item">
					<div className="header-left-menu">
						<img
							className="header-item"
							src={require("../../Assets/ico_users.svg")}
						></img>

						<span className="header-item">Users</span>
					</div>
					<div className="header-right-menu">
						<div className="input-box-style">
							<input placeholder="Search"></input>
						</div>
						<button
							onClick={this.props.showAddUserModal}
							className="search-button-style"
							type="primary"
							size="large"
						>
							<img
								src={require("../../Assets/ico_add.svg")}
								className="add-button-items"
							></img>
							<span className="add-button-items">Add User</span>
						</button>
					</div>
				</div>
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
		showAddUserModal: () => dispatch(showAddUserModal())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);

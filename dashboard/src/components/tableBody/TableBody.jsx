import React from "react";
import axios from "axios";
import { Table, Divider, Tag } from "antd";
import "./tablebody.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import EditUserModal from "../edit-user-modal/EditUserModal";

import {
	populatePersonas,
	showEditUserModal
} from "../../store/actions/actions";

class TableBody extends React.Component {
	componentDidMount() {
		axios({
			method: "post",
			url: "http://127.0.0.1:8000/fetch-personas/",
			data: {}
		}).then(res => {
			let tempPersonas = [];
			res.data.personas.map(k => {
				tempPersonas.push(k);
			});
			this.props.populatePersonas(tempPersonas);
		});
	}

	render() {
		const data = this.props.personas;

		const columns = [
			{
				title: (
					<div>
						<b>NAME</b>
						<img
							src={require("../../Assets/ico_sorting.svg")}
						></img>
					</div>
				),
				dataIndex: "name",
				key: "name"
			},
			{
				title: <b>EMAIL</b>,
				dataIndex: "email",
				key: "email"
			},
			{
				title: <b>ROLE TYPE</b>,
				dataIndex: "roletype",
				key: "roletype"
			},
			{
				title: <b>STATUS</b>,
				key: "status",
				dataIndex: "status",
				render: status => (
					<span>
						{status.map(status => {
							let indicator = (
								<img
									src={require("../../Assets/ico_active.svg")}
								></img>
							);
							if (status === "Inactive") {
								indicator = (
									<img
										src={require("../../Assets/ico_inactive.svg")}
									></img>
								);
							}
							if (status === "Pending") {
								indicator = (
									<img
										src={require("../../Assets/ico_pending.svg")}
									></img>
								);
							}
							return (
								<div>
									{indicator}
									<span>{status}</span>
								</div>
							);
						})}
					</span>
				)
			},
			{
				title: "",
				dataIndex: "action",
				key: "action",
				render: action => (
					<a onClick={e => this.props.showEditUser(e)}>
						<img
							style={{ float: "right" }}
							src={require("../../Assets/ico_edit.svg")}
							recordid={action}
						></img>
					</a>
				)
			}
		];

		return (
			<div>
				<Table columns={columns} dataSource={data} pagination={false} />
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
		populatePersonas: e => dispatch(populatePersonas(e)),
		showEditUser: e =>
			dispatch(showEditUserModal(e.target.getAttribute("recordid")))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);

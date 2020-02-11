import React from "react";
import TableHeader from "../tableHeader/TableHeader";
import TableBody from "../tableBody/TableBody";
import "./tableview.css";
import AddUserModal from "../add-user-modal/AddUserModal";
import EditUserModal from "../edit-user-modal/EditUserModal";

class TableView extends React.Component {
	render() {
		return (
			<div className="table-view-style">
				<TableHeader />
				<TableBody />
				<AddUserModal />
				<EditUserModal />
			</div>
		);
	}
}

export default TableView;

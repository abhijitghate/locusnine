import React from "react";
import "./listing.css";
import TableView from "../tableView/TableView";

class Listing extends React.Component {
	render() {
		return (
			<div className="set-background">
				<TableView />
			</div>
		);
	}
}

export default Listing;

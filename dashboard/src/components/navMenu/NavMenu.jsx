import React from "react";
import "./navmenu.css";

class NavMenu extends React.Component {
	render() {
		return (
			<div className="nav-container">
				<div className="nav-items">
					<a href="#">
						<img
							className="nav-icons"
							src={require("../../Assets/ico_dashboard.svg")}
						></img>
						<span className="nav-item">Dashboard</span>
					</a>

					<a href="#">
						<img
							className="nav-icons"
							src={require("../../Assets/ico_users.svg")}
						></img>
						<span className="nav-item">Users</span>
					</a>

					<a href="#">
						<img
							className="nav-icons"
							src={require("../../Assets/ico_sessionmanager.svg")}
						></img>
						<span className="nav-item">Session Manager</span>
					</a>
					<div className="nav-right-menu-container">
						<img
							className="notification nav-right-menu-item"
							src={require("../../Assets/ico_notification.svg")}
						></img>
						<div className="user nav-right-menu-item">
							<img
								className=""
								src={require("../../Assets/ico_user.svg")}
							></img>
							<span className="">
								John Smith
							</span>
						</div>
						<img
							className="dropdown nav-right-menu-item"
							src={require("../../Assets/ico_downarrow.svg")}
						></img>
					</div>
				</div>
			</div>
		);
	}
}
export default NavMenu;

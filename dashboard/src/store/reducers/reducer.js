import axios from "axios";
const initialState = {
	showAddUserModal: false,
	showEditUserModal: false,
	editRecordId: "",
	editRecord: "",
	personas: []
};

const reducer = (state = initialState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case "SHOW_ADD_USER_MODAL":
			newState.showAddUserModal = true;

			return { ...newState };

		case "POPULATE_PERSONAS":
			action.payload.map(k => {
				newState.personas.push({
					key: parseInt(k["id"]),
					name: k["name"],
					email: k["email"],
					roletype: k["roleType"],
					status: k["status"],
					mobileNumber: k["mobileNumber"],
					action: k["action"]
				});
			});

			return { ...state, newState };
		case "HANDLE_CANCEL":
			console.log("Handle cancel");
			newState.showAddUserModal = false;
			newState.showEditUserModal = false;

			return { ...newState };

		case "CREATE_USER":
			axios({
				method: "post",
				url: "http://127.0.0.1:8000/create-persona/",
				data: action.payload
			}).then(res => {
				console.log(res);
			});

			return { ...newState };
		case "SHOW_EDIT_USER_MODAL":
			newState.showEditUserModal = true;
			newState.editRecordId = action.payload;

			newState.personas.map(k => {
				if (k["key"] == action.payload) {
					newState.editRecord = k;
				}
			});

			return { ...newState };
		case "EDIT_USER":
			axios({
				method: "post",
				url: "http://127.0.0.1:8000/edit-persona/",
				data: action.payload
			}).then(res => {
				console.log(res);
			});
			return { ...newState };
		default:
			return state;
	}
};

export default reducer;

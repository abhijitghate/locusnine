export const showAddUserModal = payload => {
	return {
		type: "SHOW_ADD_USER_MODAL",
		payload
	};
};

export const populatePersonas = payload => {
	return {
		type: "POPULATE_PERSONAS",
		payload
	};
};

export const handleCancel = payload => {
	return {
		type: "HANDLE_CANCEL",
		payload
	};
};

export const createUser = payload => {
	return {
		type: "CREATE_USER",
		payload
	};
};

export const showEditUserModal = payload => {
	return {
		type: "SHOW_EDIT_USER_MODAL",
		payload
	};
};


export const editUser = payload => {
	return {
		type: "EDIT_USER",
		payload
	};
};
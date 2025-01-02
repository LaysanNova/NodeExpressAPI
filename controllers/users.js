let users = [];


export const getUsers = (req, res) => {
    console.info("GET request to endpoint '/users' received");

    res.send(users.length ? users : "No users.");
};

// postUsers();
//
// getUserById();
// deleteUserById();
// patchUserById();
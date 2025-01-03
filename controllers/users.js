import { v4 as uuid} from "uuid";
import log from "../logger/logger.js";

let users = []; //real DB

export const getUsers = (req, res) => {
    console.info("GET request to endpoint '/users/' received");

    res.send(users.length ? users : "No users.");
};

export const postUsers = (req, res) => {
    log.info("POST request to endpoint '/users/' received");

    //create user
    const user = req.body;
    users.push({...user, id: uuid()});

    res.send("user created successfully.");
};

export const getUserById = (req, res) => {
    log.info("GET request to endpoint '/users/id/' received");

    const userID = req.params.id;
    const foundUser = users.find((user) => user.id === userID);

    res.send(foundUser ? foundUser : "user not found");

};

export const deleteUserById = (req, res) => {
    log.info("DELETE request to endpoint '/users/id/' received");

    const userID = req.params.id;
    users = users.filter((user) => user.id !== userID);
    res.send("user deleted successfully.");
};

export const patchUserById = (req, res) => {
    log.info("PATCH request to endpoint '/users/id/' received");

    const userID = req.params.id;
    const newFirstName = req.body.firstname;
    const newLastName = req.body.lastName;
    const newAge = req.body.age;

    const foundUser = users.find((user) => user.id === userID);

    if (newFirstName) {
        foundUser.firstName = newFirstName;
    }
    if (newLastName) {
        foundUser.firstName = newLastName;
    }
    if (newAge) {
        foundUser.firstName = newAge;
    }

    res.send("user updated successfully.");
};
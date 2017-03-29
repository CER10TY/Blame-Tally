let fs = require("fs");

class UserManager {
    constructor(data) {
        this.data = require(data); // users.json, file path specified in userRouter.js
        this.path = data; // actual file path to users.json, for fs
    }

    // Stringifies JSON object, updates file in sync
    _updateFile() {
        let jsonString = JSON.stringify(this.data);
        fs.writeFileSync(this.path, jsonString);
    }

    // Returns all users
    getUsers() {
        return this.data
    }

    // Creates new user (specified as JSON object)
    createUser(user) {
        // Get available user ID by iterating through all user IDs
        let userId = 0;
        for (var id in this.data) {
            userId++;
        }
        userId = userId.toString();
        
        // Prep JSON object to assign
        let json = {
            [userId] : {
                "name": user
            }
        };

        // Assign new user and update file
        Object.assign(this.data, json);
        this._updateFile();
    }

    // Deletes user with specified id
    deleteUser(id) {
        delete this.data[id];
        this._updateFile();
    }
}

module.exports   = UserManager;
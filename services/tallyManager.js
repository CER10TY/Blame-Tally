let fs = require("fs");

class TallyManager {

    constructor (data) {
        this.data = require(data); // blame-tally.json, file path specified in tallyRouter.js
        this.path = data; // actual file path to blame-tally.json, for fs
    }

    // Stringifies JSON and updates file in sync
    _updateFile() {
        let jsonString = JSON.stringify(this.data);
        fs.writeFileSync(this.path, jsonString);
    }

    // Returns entire JSON object
    getTallies() {
        return this.data
    }

    // Returns specified tally list as JSON object
    getTally(list) {
        return this.data[list]
    }

    // Adds new tally specified as JSON object
    addTally(list) {
        // Gets name of list (not key-value pair) and checks if it exists in blame-tally.json
        if (typeof this.data[Object.keys(list)[0]] !== "undefined"){
            throw err;
        };
        // If list undefined, assign to blame-tally.json and update file.
        Object.assign(this.data, list);
        this._updateFile();
    }

    // Removes specified tally list in blame-tally.json and updates file
    removeTally(list) {
        delete this.data[list];
        this._updateFile();
    }

    // Replaces entire content of specified list with specified content and updates file
    updateTally(list, content) {
        this.data[list] = content;
        this._updateFile();
    }
}

module.exports = TallyManager;
let fs = require("fs");

class TallyParsing {

    constructor (data) {
        this.data = require(data);
        this.path = data;
    }

    _updateTally() {
        let jsonString = JSON.stringify(this.data);
        fs.writeFileSync(this.path, jsonString);
    }

    getTallies() {
        return this.data
    }
    getTally(list) {
        return this.data[list]
    }

    addTally(list) {
        Object.assign(this.data, list);
        _updateTally();
    }

    removeTally(list) {
        delete this.data[list];
        let jsonString = JSON.stringify(this.data);
        _updateTally();
    }
}

module.exports = TallyParsing;
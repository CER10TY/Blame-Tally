let fs = require("fs");


class JSONParsing {

    _getJSONArg(arg) {
        let jsonFile = fs.readFileSync(path);
        jsonFile = JSON.parse(jsonFile);
        if (jsonFile.arg != null) {
            return jsonFile.arg;
        } else {
            return undefined;
        };
    }

    // Gets JSON Argument from specified JSON File 
    // PARAMETERS:
    // 0: STRING - Absolute path to JSON file 
    // 1: ANY - Argument to write to JSON file 
    // RETURNS:
    // 0: NONE

    _writeJSONArg(path, arg) {
        let jsonFile = fs.readFileSync(path);
        jsonFile = JSON.parse(jsonFile);
        jsonFile.arg = arg;
        jsonFile = JSON.stringify(jsonFile);
        fs.writeFileSync(path,jsonFile);
    }
}

module.exports = JSONParsing;
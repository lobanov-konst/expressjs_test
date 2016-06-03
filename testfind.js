var start = new Date(), output = '';

var db = require('./libs/mongoose');

var user = db.model('user', {data: {}});

//var query = {data: {AssetType: {id: 99407}}};

var query = {}; // ALL
var query = {'data.AssetType.name': /AssetType_9940/i}; // REGEX
var query = {'data.AssetType.name': 'AssetType_99407'}; // STRICT MATCH
var query = {
    $or: [
        {'data.AssetType.name': 'AssetType_99407'},
        {'data.AssetType.name': 'AssetType_99409'}
    ]
}; // OR STATEMENT

//var query = {data: {$ne: null}};
//var query = {data: {AssetType: {name: 'AssetType_1'}}};

user.find(query, function(err, res) {
    console.log(res.length);
    output += 'exec time: ' + (new Date() - start) / 1000 + ' sec';
    console.log(output);

    process.exit(1);
});



var db = require('./libs/mongoose');

db.model('user', {data: {}})

var start = new Date(),
    output = '';

var user = db.model('user'),
    userData = null;

for (var i = 1; i < 100000; i++) {
    userData = new user({
        data: {
            id: i,
            name: 'user_name' + i,
            roles: {
                'Role': {
                    id: i, name: 'Role_' + i
                }
            },
            'AssetType': {
                id: i,
                name: 'AssetType_' + i
            },
            'AssetStrategy': {
                id: i,
                name: 'AssetStrategy_' + i * 2
            },
            'BuildingClass': {
                id: i,
                name: 'BuildingClass_' + i * 3
            }
        }
    });
    userData.markModified('data');
    userData.save();
}


output += 'exec time: ' + (new Date() - start) / 1000 + ' sec';

console.log(output);
//process.exit(1);

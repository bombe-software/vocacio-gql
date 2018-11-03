//Comentar o descomentar segun sea el caso

//Variables de deploy
exports.api = 'http://localhost:9000';
exports.ws = "ws://localhost:9000";
exports.web = "http://localhost:3000";
exports.status = true;
exports.MONGO_URI = `mongodb://admin:n0m3l0@ds147233.mlab.com:47233/nullname`;



/**
 * Variables de desarrollo

exports.api = 'http://localhost:9000';
exports.ws = "ws://localhost:9000";
exports.web = "http://localhost:3000";
exports.status = false;
mongodump -h ds147233.mlab.com:47233 -d nullname -u admin -p n0m3l0 -o C:\Users\drasa\Desktop\NullName\api_nullname
mongorestore -d nullname C:\U sers\drasa\Desktop\NullName\api_nullname\nullname
exports.MONGO_URI = `mongodb://localhost/nullname`;
*/
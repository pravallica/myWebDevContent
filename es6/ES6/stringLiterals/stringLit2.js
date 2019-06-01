const device_id = 4;
const username ="new";

const data = '{"device_id":"'+device_id+ '","username":"'+username+'","}';

// changing into string literal
/* first single quote to `
*/
const data = `{"device_id" : "${device_id}" , "username": "${username}"," }`


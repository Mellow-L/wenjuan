const { execSync } = require('child_process');

console.log("Login request:");
const loginResp = execSync('curl -sS -X POST -H "Content-Type: application/json" -d "{\"username\":\"testuser1\",\"password\":\"password123\"}" http://localhost:3005/api/auth/login').toString();
console.log(loginResp);
const parsed = JSON.parse(loginResp);
const token = parsed.data.token;
console.log("Extracted token:", token);

console.log("\nInfo request:");
const infoResp = execSync(`curl -sS -H "Authorization: Bearer ${token}" http://localhost:3005/api/user/info`).toString();
console.log(infoResp);


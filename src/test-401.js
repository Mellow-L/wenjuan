const { execSync } = require('child_process');
try {
  const out = execSync('curl -sS -I  http://localhost:3005/api/user/info').toString();
  console.log(out);
} catch (e) {
  console.log("Error running curl", e);
}

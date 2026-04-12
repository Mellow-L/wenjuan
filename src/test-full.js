fetch('http://localhost:3005/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({username: "testuser1", password: "password123"})
}).then(r => r.json()).then(res => {
  const token = res.data.token;
  console.log("Token:", token);
  return fetch('http://localhost:3005/api/user/info', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
}).then(r => r.json())
.then(res => console.log("User Info:", res))
.catch(e => console.log(e));

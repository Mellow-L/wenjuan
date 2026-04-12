fetch('http://localhost:3005/api/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({username: "testuser1", password: "password123"}),
  redirect: 'follow'
}).then(r => r.text()).then(t => console.log(t)).catch(e => console.log(e));

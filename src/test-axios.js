const axios = require('axios');
axios.post('http://localhost:3005/api/user/login', {username: "testuser1", password: "password123"})
  .then(res => console.log("Success:", res.data))
  .catch(err => console.log("Error:", err.response ? err.response.data : err.message));

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(3001, () => {
    console.log(`Server listening on 3001`);
  });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.post('/', (req, res) => {
    res.send('Hello POST express!');
});

 
const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

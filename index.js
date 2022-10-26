const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagory = require('./Data/class.json')

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.get('/courses', (req, res) => {
    res.send(catagory)
})
app.get('/course/:id', (req, res) => {
    res.send(catagory?.find(n => n.id == req.params.id))

})
module.exports = app;
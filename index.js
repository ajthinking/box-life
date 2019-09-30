const express = require('express')
const _ = require('lodash')
const app = express()
var mustacheExpress = require('mustache-express')

app.use(express.static('public'))
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname +  '/views')

const port = 3000

app.get('/', (req, res) => {
    res.render('report', { 
        points: Array.from('1'.repeat(12410)).map(i=>1),
        upcoming_points: Array.from('1'.repeat(25000)).map(i=>1),
        name: "Box Life"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
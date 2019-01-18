const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')

const app = express()

const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoute)

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('index', { screenName: 'Home' }))

app.listen(port, () => console.log(`Listening on port ${port}`))
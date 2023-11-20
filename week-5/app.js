// Imports
const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us: Home'
    })
})

app.get('/grooming', function(req, res) {
    res.render('grooming', {
        title: 'Pets-R-Us: Grooming'
    })
})

app.get('/boarding', function(req, res) {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding'
    })
})

app.get('/training', function(req, res) {
    res.render('training', {
        title: 'Pets-R-Us: Training'
    })
})


//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))

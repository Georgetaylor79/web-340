// imports
const express = require('express')
const path = require('path');
const mongoose = require("mongoose")
const app = express()
const port = 3000

const conn = "mongodb+srv://taylor79:<AtlasDB19>@cluster0.f36akkm.mongodb.net/web340DB/?retryWrites=true&w=majority"
mongoose.connect(conn)
.then(() => {
    console.log("connected to mongodb")
})
.catch(err => {
    console.log("error connecting to mongodb", err)
})

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

app.get('/training', function(req, res) {
    res.render('training', {
        title: 'Pets-R-Us: Training'
    })
})

app.get('/registration', function(req, res) {
    res.render('registration', {
        title: 'Pets-R-Us: Registration'
    })
})

app.get('/customer', function(req, res) {
    res.render('customer-list', {
        title: 'Pets-R-Us: Customer List'
    })
})

app.get('/appointment', function(req, res) {
    res.render('appointment', {
        title: 'Pets-R-Us: Appointment'
    })
})

app.get('/boarding', function(req, res) {
    res.render('boarding', {
        title: 'Pets-R-Us: Boarding'
    })

app.post('/register', (req, res, next) =>{
    const newCustomer = new CustomElementRegistry({
        customerId: req.body.customerId,
        email: req.body.email
    })

    console.log(newCustomer);

    Customer.create(newCustomer, function (err, cus) {
        if (err) {
            console.log(err);
            next(err);
        }else {
            res.render('index', {
                pageHeader: 'Welcome to Pets-R-Us',
                title: 'Pets-R-Us: Home'
            })
        }

    })
})   

})

app.get('/customers', (req, res)=> {
    Customer.find({}, function(err, customers)  {
        if (err) {
            console.log(err);
            next(err);
        } else {
            console.log(customers);
            res.render('customer-list', {
                title: 'Pets-R-Us: Customer List',
                customers: customers
            })
        }
    })
})

app.get('/booking', (req, res) =>  {
    let jsonFile = fs.readFileSync('./public/data/services.json');
    let service = JSON.parse(jsonFile);

    console.log(services);

    res.render('booking', {
        title: 'Pets-R-Us: Booking',
        services: services
    })

})

app.post('/booking', (req, res) => {
    const customerId = req.body.customerId;
    const firstName = req.body.firstName;
    const email = req.body.email;
    const service = req.body.service;

    console.log(`CustomerId: ${customerId}; First name: ${firstName}; Last name: ${lastName}; Email: ${email}; Service: ${service}`)

    let scheduledAppointment = new Appointment({
        customerId,
        firstName, 
        lastName,
        email,
        service
    });
        
   

    Appointment.create(scheduledAppointment, function(err, appointment){
        if (err) {
            console.log(err);
            next(err);

        }else {
            console.log('Your appointment has been scheduled.')
            console.log(appointment);
            res.redirect('/');
        }
    })
})

app.get('/my-appointments', (req, res)=> {
    res.render('my-appointments',{
        title: 'Pets-R-Us: My Appointments'
    })
})

app.get('/api/appointments/:email', async(req, res, next) => {
    Appointment.find({'email': req.params.email}, function(err, appointments){
        if (err) {
            console.log(err);
            next(err);
        }else {
            res.json(appointments);
        }
    })
})

//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
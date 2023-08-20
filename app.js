const express = require('express');
const session = require("express-session");
const cors = require('cors');
const DBConnection = require('./config/DBConnection');
const Chart = require('./models/chart');
const app = express();


app.set('view engine', 'ejs');

DBConnection();

// firsty creation session 
app.use(session({
    secret: 'e2e2e2eb@t3434873',
    resave: false,
    saveUninitialized: true
}));

//secondly creation router
app.use(express.json());
app.options("/data", cors());
app.options("/list",cors());


//get data 
app.get('/list',cors(), async(req, res) => {
    try { 
       //title: req.params.title
       savedChart.find((err, savedChart) =>{
          if(err)
             throw err;
          res.status(200).json({ Count: savedChart.length, Result: savedChart });  
          //all product show in <Result>
       });
    } catch(e) {
       res.status(500).send(e);
    }
 });


//  post data 
app.post("/data", cors(), async (req, res) => {
    console.log("Request received signup")
    console.log(req.body)

    let { year, amount, colorcode } = req.body
    const chart = new Chart({
        year: year,
        amount: amount,
        colorcode: colorcode
    });
    try {
        let savedChart = await chart.save();
            console.log(savedChart)
        res.status(200).json({ savedChart })
    } catch (error) {
        console.error(error);
    }
});

app.listen(4000, () => {
    console.log("Online Shop App is started on port no. 4000")
})


// npm i express
//npm i nodemon
//npm i mongoose dotenv cors
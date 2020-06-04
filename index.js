

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')




const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Yes, Request has been accepted! Now lets begin......");
});

app.get('/name/tayef',(req,res) =>{
    res.send({name:"Tayef", age:24, home:"Sylhet", study:"CSE", email:"makt.official@gmail.com"});
})

app.get('/users/:id', (req,res)=>{
    const users = ['Tayef','Foysol','Rafid','Afsana','Foiza'];

    const userId = req.params.id;
    const name = users[userId];
    // res.send(name);

    // in case of JSON return

    res.send({userId,name});
})

//post

app.post('/addUser',(req,res)=>{
    console.log("Data Received",req.body);

    const user = req.body;
    user.id = "172-115-030";
    res.send(user);
})


app.listen(3000, ()=> console.log('listening to port 3000 '));
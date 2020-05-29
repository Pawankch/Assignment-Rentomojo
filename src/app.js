const express = require('express')
const path = require('path')
const app = express()
require('../database/mongodb')
const contacts = require('../models/contacts')

const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')
app.use(express.json())

app.use(express.static(publicDir))
app.post('/contacts', (req, res)=>{
    const contact = new contacts(req.body)
    contact.save()
    res.send(contact)
})
app.get('/contacts/all',(req,res)=>{
    contacts.find({}).then((user)=>{ 
        res.send(user)
    })
})
app.patch('/contacts/update',async (req, res)=>{
    const updates = Object.keys(req.body)       //Convert object into array
    const allowedUpdates = ['Name', 'password', 'email']
    const isValidOperation = updates.every((update)=> {       //To check if keys is available in database, if yes it return true
        return allowedUpdates.includes(update)})
    if(!isValidOperation)  //if   it becomes failes below code will run
    {
        return res.status(404).send("This key is not defined")
    }
    try{     
    const user = contacts.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!user)
    {
        return res.status(404).send()
    }
    res.send(user)
    }catch(e)
    {
     res.status(400).send(e)
    }
})

app.delete('/contact/delete',async (req, res)=>{
    try{
       const user =  await users.findByIdAndDelete(req.params.id)
       if(!user){
           return res.send().status(404)
       }
       res.send(user)
    }catch(e){
     res.status(500).send(e)
    }
})


app.listen(port, ()=>{
    console.log('Server started on port no. $(port)!')
})
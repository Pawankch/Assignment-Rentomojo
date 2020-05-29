const mongoose = require('mongoose');
const connectionUrl = "mongodb+srv://Pawansays:lpu@11708503@cluster0-c66cu.mongodb.net/test?retryWrites=true&w=majority/user-collection";
mongoose.connect(connectionUrl, {useNewUrlParser : true, useCreateIndex: true})



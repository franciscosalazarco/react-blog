const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://franciscosalazarco:76242Pocha31@react-blog-zzqof.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true}).then(() =>console.log('DB connected'))
                            .catch(err => console.error(err));

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(5000);
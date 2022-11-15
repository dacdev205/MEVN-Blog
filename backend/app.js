//import
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("uploads"));
//database connection
mongoose.connect(process.env.DB_URL,  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
}).then(() => console.log("Connected to database"))
.catch((err) => console.log(err));
app.use(bodyParser.urlencoded({ extended: true }));
//routes prefix
app.use("/api/blog", require("./routes/routes"))

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
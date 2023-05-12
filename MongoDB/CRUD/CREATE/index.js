const expresss = require('express');
const mongoose = require('mongoose');
const app = expresss();
const PORT = 3003;

app.use(expresss.json());
app.use(expresss.urlencoded({extended: true}));

//create mongo schema
const studentSchema= new mongoose.Schema({
    name: String,
    roll: String,
})

//create mongo model
const studentModel = mongoose.model("studentInfo", studentSchema);

//connect mongodb
const dbConnect = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/acoe");
        console.log('db is connected');
    } catch (error) {
        console.log('db is not connected');
        console.log(error.message);
        process.exit(1);
    }
};


app.get('/',(req, res)=>{
    res.send("Welcome to home page!");
});

app.post('/register',async (req, res)=>{
    try {
        const newStudent = new studentModel({
            name: 'asif',
            roll: 'req.body.roll',
        });
        const showData = await newStudent.save();
        console.log(showData);
    } catch (error) {
        
    }
    
});



app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await dbConnect();
});
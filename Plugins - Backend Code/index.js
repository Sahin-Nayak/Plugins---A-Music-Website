import { app } from "./app.js";
import connectDB from "./db/connection.db.js";
import dotenv from "dotenv"
import { User } from "./models/user.model.js";

dotenv.config({
    path:'./.env'
})

app.get("/",(req,res)=>{
    res.json({
        msg:"server is running"
    })
})

app.get('/getUsers', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
// app.post('/register', (req, res) => {
//     const user = req.body; 
//     console.log('Registered User:', user);
//     res.status(201).json({ message: 'User received successfully', user });
// });

// app.post('/login', (req, res) => {
//     const user = req.body; 
//     console.log('Registered User:', user);
//     res.status(201).json({ message: 'User received successfully', user });
// });


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
const express=require('express');
require('dotenv').config();
const cookieSession = require("cookie-session");
const cors=require('cors');
const cookieParser=require('cookie-parser');
//const bodyParser=require('body-parser');

const mongoose=require('mongoose');
const app=express();
// app.use(
//     cookieSession({
//       name: "session",
//       keys: [process.env.COOKIE_KEY],
//       maxAge: 24 * 60 * 60 * 100,
//       secure:false
//     })
//   );
app.use(cors(
    {
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    }
  ));
// app.use(cors());
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   }))
app.use(cookieParser());

//app.use(bodyParser.json());

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
// app.use(express.cookieParser());
const port=process.env.PORT||8000;
const databaseUrl=process.env.databaseUrl;

//Database connection

mongoose.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log("Unable to connect to database!"))


//Creating server

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});


//userAuthFiles
const loginRoutes=require('./routes/login');
const registerRoutes=require('./routes/register');
const logoutRoutes=require('./routes/logout')
const forgotPasswordRoutes=require('./routes/forgotPassword');
const updatePasswordRoutes=require('./routes/updatePassword')

//userWorkFiles
const searchTrains=require('./routes/searchTrain');
const trainTicket=require('./routes/ticket');
const ticketHistory=require('./routes/userHistory');

//adminAuthFiles
const adminAuthRoutes=require('./routes/adminAuth');

//adminWorksFiles
const addStationRoutes=require('./routes/station');
const addRailInfoRoutes=require('./routes/rail');
const adminStationRoutes=require('./routes/station');
// const adminFairRoutes=require('./routes/fair');
//const adminTrainRoutes=require('./routes/train');

//userAuthRoutes
app.use('/user/register',registerRoutes);
app.use('/user/login',loginRoutes);
app.use('/user/logout',logoutRoutes);
app.use('/user/forgotPassword',forgotPasswordRoutes);
app.use('/user/updatePassword',updatePasswordRoutes);

//userWorkRoutes
app.use('/user/train',searchTrains);
app.use('/user/ticket',trainTicket);
app.use('/user/history',ticketHistory)


//adminAuthRoutes
app.use('/admin/auth',adminAuthRoutes);
app.use('/admin/station',addStationRoutes);

//adminWorksRoutes
app.use('/admin/addRail',addRailInfoRoutes);
app.use('/admin/addStation',adminStationRoutes);
// app.use('/admin/addFair',adminFairRoutes);
//app.use('/admin/getAllTrains',adminTrainRoutes);

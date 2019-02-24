/*
  This is a simple server - few basic commands. 
*/

const express = require('express'),
  path = require('path'),
  bdParser = require('body-parser'),
  exphps = require('express-handlebars'),
  nodemailer = require('nodemailer'),
  cookieSession = require('cookie-session'),
  flash = require('connect-flash');

//instance of express
const app = express();
// parse incoming body strings
app.use(
  bdParser.urlencoded({extended: false})
);
app.use(bdParser.json());

app.use(
  cookieSession({
    //maximum time cookie stays in browser in ms - 30 days
    maxAge: 30*24*60*60*1000,
    //keys is used to encrpyt the cookie
    keys:["weknow12365fsf6rwfg"]
  })
);

// set to use handlebars
app.engine('handlebars',exphps({defaultLayout:'main'}));
app.set('view engine','handlebars');
// use handlebars
app.use(express.static(path.join(__dirname,'public')));

// use flash for errors
app.use(flash());
// set errors
app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next()
});

// home page link
app.get('/',(req,res)=>{
  res.render('index/index');
});
// youtube page
app.get('/youtube',(req,res)=>{
  res.render('index/youtube');
});
// get projects
app.get('/projects',(req,res)=>{
  res.render('index/projects');
});
// about me
app.get('/aboutme',(req,res)=>{
  res.render('index/aboutme');
});
// contact
app.get('/contactme',(req,res)=>{
  res.render('index/contact');
});
//photos
app.get('/photos',(req,res)=>{
  res.render('index/photos');
});
// post form with nodemailer
app.post('/postform', (req, res) => {
  const { name, email, find_us, content } = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "kb22324134@gmail.com", // generated ethereal user
      pass: "Baba1988@tal", // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: email, // sender address
    to: "devappbot@gmail.com", // list of receivers
    subject: "["+find_us+"]" + ' from ' + name+' @'+email, // Subject line
    html: {content}, // plain text body
    //html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    req.flash('success_msg', 'You should hear back soon');
    res.redirect("/");

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
  console.log(`Server listen at door:${PORT}`);
});
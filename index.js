const express = require('express');

// const handleAllRequsts = (requstObjects, reponseObjects)=>{
//     console.log("Request recieved")
    
//     const url= requstObjects.url;
//     reponseObjects.setHeader("content.type", "text/html")
//     if(url==="/"){
//         reponseObjects.write("<h1>Feel at home</h1>")
//     } else if(url==='/services'){
//         reponseObjects.write("<h1>This is our services</h1>");
//     } else if(url==='/login'){
//         reponseObjects.write("<h1>Feel free to login</h1>")
//     }
//      else if(url==='/signup'){
//         reponseObjects.write("<h1>Register with us</h1>")
//     }
//     else if(url==='/logout'){
//         reponseObjects.write("<h1>Nice to have you. Looking forward to see you again</h1>")
//     } else{
//         reponseObjects.write("<h1>Page note found</h1>")
//     }

//     reponseObjects.end();
// }


const handleHomeRequests=(request, response)=>{
       response.send("<h1>Feel at home</h1>")                                        
}
const handleSignupRequests=(request, response)=>{
       response.send("<h1>Register with us</h1>")                                        
}
const handleLoginRequests=(request, response)=>{
       response.send("<h1>Feel free to log in</h1>")                                        
}
const handleErrorRequests=(request, response)=>{
       response.send("<h1>ooooOOOO Page not found</h1>")                                        
}

const server = express();

server.use('/signup', handleSignupRequests);
server.use('/login', handleLoginRequests);
server.use('*', handleErrorRequests);
server.use('/', handleHomeRequests);


server.listen(3000, '127.0.0.1', ()=>{
console.log("well done your server is ready")
})


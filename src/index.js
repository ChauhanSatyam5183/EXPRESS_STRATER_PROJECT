const express=require('express');

const ServerConfig=require('./config/servercofig');

const app=express();

app.listen(ServerConfig.PORT,()=>{
      console.log(`server started at PORT ${ServerConfig.PORT}..`);
      console.log(ServerConfig.PORT);
})
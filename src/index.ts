import express from "express";

const app = express();

app.get('/',(req, res)=>{
    return res.json({
        "message":"You are in backend2.nishant.com"
    });
});

app.listen(3001, ()=>{

});


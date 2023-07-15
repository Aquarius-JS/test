const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('融销通测试');
})
app.post('/register',(req,res)=>{
    console.log(req);
    res.send({
        code:200,
        message:'注册成功'
    })
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send({
        code:200,
        message:'登录成功'
    })
})
app.listen(3000,()=>{
    console.log('服务已开启...')
})
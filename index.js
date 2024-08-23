const express = require("express");
const mongoose = require('mongoose');
const app = express();
const todoSchema = require("./model/todoSchema")

// VtHsYyfldMiHdVfM
// problem
// mongodb+srv://problem:<db_password>@cluster0.jj1gxts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// imran.cit.bd@gmail.com

mongoose.connect('mongodb+srv://problem:VtHsYyfldMiHdVfM@cluster0.jj1gxts.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected! database'));
  
  app.use(express.json())
  app.post("/api/v1/todo/createtodo", (req,res)=>{
      const {name,priority} = req.body
      let task = new todoSchema({
        name:name,
        priority:priority
      })
      task.save()
      res.send(task)
  })


//   app.get("", async function (req,res)=>{
//     console.log(res)
//   })


  app.get('/api/v1/todo/alldata',async(req, res) => {
    let data = await todoSchema.find()
    res.send(data);
  });

app.listen(8000, ()=>{
    console.log("connected port")
})


// hOWeXHgkPoEDUoLl
// problem
// mongodb+srv://problem:hOWeXHgkPoEDUoLl@cluster0.vchy7fz.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0



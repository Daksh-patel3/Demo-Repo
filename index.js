const express=require("express");

const app=express()

app.listen(3000);

app.use(express.json())

const users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]

app.get("/",(req,res)=>{
 let johnkedneys=users[0].kidneys;
 let TotalJohnKidneys=johnkedneys.length

 let HealthyJohnKidneys=0;
 for(i=0;i<johnkedneys.length;i++){
    if(johnkedneys[i].healthy){
        HealthyJohnKidneys=HealthyJohnKidneys+1;
    }
 }

 let UnhealthyJohnKidneys=TotalJohnKidneys-HealthyJohnKidneys;

 res.json({TotalJohnKidneys,HealthyJohnKidneys,UnhealthyJohnKidneys})
})

app.post("/",(req,res)=>{
    let isHealthy=req.body.isHealthy
    users[0].kidneys.push({healthy:isHealthy})

    res.json({
        "msg":"Done!"
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }

    res.json({})
})

app.delete("/",(req,res)=>{
    let newArr=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newArr.push(users[0].kidneys[i])
        }
    }
    users[0].kidneys=newArr;
    res.json({})
})
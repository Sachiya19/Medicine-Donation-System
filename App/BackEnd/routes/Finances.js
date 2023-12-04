const router = require("express").Router();
const { response } = require("express");
let Finance = require("../models/Finance");

http://Localhost:8070/Finance/add

router.route("/add").post((req,res)=>{


    const name = req.body.name;
    const ID = req.body.ID;
    const Hold = req.body.Hold;
    

    const newFinance = new Finance({

       name,
       ID,
       Hold,
       
       

    })
    

    newFinance.save().then(()=>{

        res.json("Finance Success Addes")
    }).catch((err)=>{

        console.log(err);
    })
})    


http://localhost:8070/Finance

router.route("/").get((req,res)=>{

   Finance.find().then((Finance)=>{
        res.json(Finance)

    }).catch((err)=>{

        console.log(err);
    })

})




http://localhost:8070/Finance/update/5ffffffhf

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {name, ID,Hold} = req.body;

    const upadatepdetails = {

        name,
        ID,
        Hold,
    }

    const update = awaitFinance.findByIdAndUpdate(userId, upadatepdetails).then(() =>{

        res.status(200).send({status: "user updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating date", error:err.message})
    })


   })

   http://localhost:8070/delete/5ffffffhf

   router.route("/delete/:id").delete(async (req,res) => {
//console.log("check1")
    let userId = req.params.id;

    await Finance.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "user deleted"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete user", error:err.message})
    })

   })


   router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = awaitFinance.findById(userId).then( (Finance) =>{

        res.status(200).send({status: "user fetched", user :Finance})

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Erroe with get user", error:err.message})
    })

})






module.exports = router;
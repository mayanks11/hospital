const router = require('express').Router();
const register = require('../models/doctor');

router.post('/api/doctor', async (req, res)=>{
    try{
        console.log(req.body);
        const newItem = new register({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            speciality: req.body.speciality,
            location: req.body.location,
            area: req.body.area
        })
        // save
        const save = await newItem.save()
        res.status(200).json(newItem);
    } catch (error) {
        res.json(error)
        
    }
})
router.post('/api/doctors', async(req, res)=>{
    try {
        const spec = req.body.spec;
        
        const location = req.body.state;
        console.log(spec);
        console.log(location);
        //const item = {};
        if(spec === " "){
            const item = await register.find({location: location});
            console.log(item);
            res.status(200).json(item);
        }else{
            
            const item = await register.find({location: location, speciality: spec});
            console.log(item);
            res.status(200).json(item);
        }
        //const item = await register.find({location: location});
        
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;

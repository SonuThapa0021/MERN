const jwt = require('jsonwebtoken');
const express = require('express');
const { Router } = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

require('../db/conn');
const User = require('../models/userSchema');


router.get('/', (req, res) => {
    res.send(`Hello Word From the Router;`)
});


// Using Promisses
// router.post('/register', (req, res) => {
//     // object distructing
//     const { name, email, phone, password, cpasswprd } = req.body;
//     // if (!name || !email || !phone || !password || !cpasswprd) {
//     //     return res.status(422).json({ error: "Plz Filled the field properly" });
//     // }

//     var name2 = "test" + name;
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "E-mail Already Exist" })
//             }
//             const user = new User({ name: name2, email, phone, password, cpasswprd });
//             user.save().then(() => {
//                 res.status(201).json({
//                     message: "User reogistered sucessfully"
//                 }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
//             }).catch(err => { console.log(err); });
//         })
// })


// Using Async Awit
router.post('/register', async (req, res) => {
    // object distructing
    const { name, email, phone, password, cpassword } = req.body;
    // if (!name || !email || !phone || !password || !cpasswprd) {
    //     return res.status(422).json({ error: "Plz Filled the field properly" });
    // }


    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "E-mail Already Exist" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "E-mail Already Exist" })
        }
        else {

            // Weather Api test -----------------
            var ApiData;
            const axios = require('axios');

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://api.weatherapi.com/v1/current.json?q=London&aqi=no&key=c91c51620d514cbf8cf112217242302',
                headers: { "content-type": "application/json" }
            };

            axios.request(config)
                .then((response) => {
                    ApiData = JSON.stringify(response.data.location.name);
                    console.log(JSON.stringify(response.data.location.name));
                    var name2 = ApiData + name;
                    console.log(name2)
                    const user = new User({ name: name2, email, phone, password, cpassword });
                    user.save();
                    res.status(201).json({ message: "User reogistered sucessfully" })
                })
                .catch((error) => {
                    console.log(error);
                });
                
            // Api end--------------------

            // const user = new User({ name: name2, email, phone, password, cpassword });
            // await user.save();
            // res.status(201).json({ message: "User reogistered sucessfully" })

        }

    } catch (err) {
        console.log(err);
    }


})

// Login Routr
router.post('/signin', async (req, res) => {
    try {
        // let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill Data" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token)

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({ error: "invalid credentials Pass" })
            } else {


                res.json({ message: `User Signin sucessfully` })
                // res.json({DemoWeatherApiData:  })
            }
        } else {
            res.status(400).json({ error: "invalid credentials Email" })
        }



    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
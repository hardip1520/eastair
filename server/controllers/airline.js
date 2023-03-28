let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let Airline = require('../model/airlines');
module.exports.displayairlineList = (req,res,next)=>{
    Airline.find((err,airlineList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         res.render('airline/list', {title:'Incidents', AirlineList:airlineList});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('airline/add',{title:'Add Incident'})

}

module.exports.processAddPage = (req,res,next)=>{
    let newAirline = Airline({
        "date": req.body.name,
        "flight number":req.body.departure,
        "description":req.body.arrival,
        "severity":req.body.class,
        "status":req.body.price
    });
    Airline.create(newAirline,(err,Airline)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/airlineList');
        }
    });
    }
    
        module.exports.displayEditPage = (req,res,next)=>{
            let id = req.params.id;
            Airline.findById(id,(err,airlineToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('airline/edit',{title:'Edit Incident', airline: airlineToEdit});
                    
                }
            });
            }

        module.exports.processEditPage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedAirline = Airline({
                "_id":id,
                "date": req.body.name,
                "flight number":req.body.departure,
                "description":req.body.arrival,
                "severity":req.body.class,
                "status":req.body.price
            });
            Airline.updateOne({_id:id}, updatedAirline,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/airlineList');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            Airline.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/airlineList');
                }
            });
            }
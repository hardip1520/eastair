let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

//connect to our airline model
let Airline = require('../model/airlines');
let airlineController = require('../controllers/airline');

//GET ROUTE for the airline page - READ OPERATION
router.get('/',requireAuth, airlineController.displayairlineList);

/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add', requireAuth, airlineController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,airlineController.processAddPage);

//*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id', requireAuth, airlineController.displayEditPage);

//*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',requireAuth, airlineController.processEditPage);

//*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,airlineController.performDelete);
module.exports = router;
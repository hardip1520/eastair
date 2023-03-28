let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our airline model
let Airline = require('../model/airlines');
let airlineController = require('../controllers/airline');
//GET ROUTE for the airline page - READ OPERATION
router.get('/',airlineController.displayairlineList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',airlineController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',airlineController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',airlineController.displayEditPage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',airlineController.processEditPage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',airlineController.performDelete);
module.exports = router;
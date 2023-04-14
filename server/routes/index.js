let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage); 
/* GET home page. */
router.get('/home', indexController.displayHomePage); 
/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);
/* GET products page. */
router.get('/products', indexController.displayProductsPage);
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);




/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
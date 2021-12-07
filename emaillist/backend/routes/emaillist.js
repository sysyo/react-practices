const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').options((req, res, next) => {
    console.log('options request!');

    res
        .set('Access-Control-Allow-Origin', req.headers.origin)
        // .set('Access-Control-Allow-Origin', 'http://localhost:9999')
        .set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'))
        .set('Access-Control-Allow-Methods', req.get('Access-Control-Request-Methods'))
        .set('Access-Control-Allow-Credentials', true)
        .send();
});
router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;




// res
// .set('Access-Control-Allow-Origin', 'http://localhost:9999')
// localhost/:1 Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
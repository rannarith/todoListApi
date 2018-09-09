'use strict';
module.exports = function(app) {
    var user = require('../controllers/userController');


    // User Routes
    app.route('/users')
        .get(user.list_all_users)
        .post(user.create_a_user);

    
   
};
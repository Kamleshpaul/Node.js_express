module.exports = function(app) {
    var User = require('../controllers/UserController');
  
    // todoList Routes
    app.route('/user')
      .get(User.list_all_users)
      .post(User.create_a_user);
  
  
    app.route('/user/:Id')
      .get(User.read_a_user)
      .put(User.update_a_user)
      .delete(User.delete_a_user);
  };
  
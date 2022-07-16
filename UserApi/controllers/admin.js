
const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render('admin/add-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
    editing: false
  });
};

exports.postUser = (req, res, next) => {
  const id = req.body.id;
  const name= req.body.name;
  const email = req.body.email;
  req.user
    .createUser({
      id :id,
      name:name,
      email:email
      
    })
    .then(result => {
      // console.log(result);
      console.log('Created User');
      res.redirect('/admin/users');
    })
    .catch(err => {
      console.log(err);
    });

}



exports.getUsers = (req, res, next) => {
  User.fetchAll(users => {
    res.render('admin/users', {
      prods: users,
      pageTitle: 'Admin Users',
      path: '/admin/users'
    });
  });
};


exports.postDeleteUser= (req, res, next) => {
  const UserId = req.body.id;
  User.findById(UserId)
    .then(user=> {
      return user.destroy();
    })
    .then(result => {
      console.log('DELETED USER');
      res.redirect('/admin/users');
    })
    .catch(err => console.log(err));
};

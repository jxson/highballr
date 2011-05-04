var Highballr = Backbone.Controller.extend({
  routes: {
    '': 'home',
    // 'posts/new': 'newPost'
    'login': 'login'
  },

  home: function(){
    var authenticator = new Authenticator(),
        loginView = new LoginView({
          model: authenticator
        });

    loginView.render();
  },

  login: function(){
    console.debug('login');
  }
});
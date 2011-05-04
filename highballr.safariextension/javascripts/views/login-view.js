var LoginView = Backbone.View.extend({
  initialize:function(){
    view = this;

    $.ajax({
      type: 'GET',
      url: 'templates/login.mustache',
      dataType: 'text',
      success: function(template) {
        view.template = template;
      }
    });
    // this.el = $('#login-form');
    // this.template = ich.login(this.model.toJSON);
  },

  // TODO: make this fire an xhr if the temeplate isn't loaded
  render: function(){
    var view = this;

    // something funny here, maybe xhrs for the templates are getting called
    // async
    ich.refresh();

    this.el = ich.login(this.model.toJSON);

    $('body').append(this.el)

    this.delegateEvents();

    return this;
  },

  events: {
    'submit': 'onSubmit'
  },

  onSubmit: function(event){
    event.preventDefault();
    event.stopPropagation();

    console.debug('heyo!')
    //
    // var model = this.model,
    //     $ = this.$;
    //
    // model.set({
    //   email: $('input[name="login"]').val(),
    //   password: $('input[name="password"]').val()
    // });
    //
    // // console.debug('handleSubmit')
    // // console.debug(this.$('#login').val())
    // // console.debug(model.attributes)
    //
    // model.authenticate();
  }
});

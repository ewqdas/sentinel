
(function(){
	// "use strict"

	var reminders = Backbone.Model.extend({
		urlRoot : "core/newTodo.php"
	})

	var UserData = Backbone.View.extend({
		el : "#remind",
		render : function(){
			var temp = _.template($("#todo-form-template").html(),{});
			this.$el.html(temp);
		},
		events: {
			'submit .new_remainder' : "newTodo"
		},
		newTodo : function(ev){
			var formData = $(ev.currentTarget).serialize();
			console.log(formData)
			var rm = new reminders();
			rm.save(formData , {
				success : function(data){
					alert("shit");
					console.log(data);
				},
				error : function(er){
					console.log(er);
				}
			});
			return false;
		}
	});

	var Router = Backbone.Router.extend({
		routes : {
			"" : "home"
		}
	});

	userData = new UserData();

	var router = new Router();
	// Home or Root of the app

	router.on("route:home" , function(){
		userData.render();
	});





	Backbone.history.start();
})()
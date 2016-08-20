
(function(){
	// "use strict"

	$.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

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
			var formData = $(ev.currentTarget).serializeObject();
			var rm = new reminders();
			rm.save(formData , {
				success : function(data){
					alert("Success");
					router.navigate("",{trigger : true});
				},
				error : function(er){
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
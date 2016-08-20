
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
		el : "#cal-type-1",
		render : function(){
			var temp = _.template($("#todo-form-template").html(),{});
			this.$el.find("#remind").html(temp);
		},
		events: {
			'submit .new_remainder' : "newTodo",
			'click #days > li' : "daySelect",
			'click #months > li' : "monthSelect",
			'change #year' : "yearSelect"
		},

		yearSelect : function(ev){
			$("#ihy").attr("value",$(ev.currentTarget).value);
		},

		newTodo : function(ev){
			router.navigate("home",{});
			var formData = $(ev.currentTarget).serializeObject();
			var rm = new reminders();
			rm.save(formData , {
				success : function(data){
					alert("Success");
					// $(".popup.reminder").addClass("active");
					$(".popup.remainder").fadeIn();
					router.navigate("",{trigger : true});
				},
				error : function(er){
				}
			});
			return false;
		},

		daySelect : function(ev){

			var ele = $(ev.currentTarget).children(".date")[0]
			var vl = ele.innerHTML;
			
			temp = $("#days li.active");
			$(temp).removeClass("active")

			$(ele).parent().addClass("active");
			$("#ihd").attr("value" , vl);

			console.log(vl)

		},

		monthSelect : function(ev){

			var ele = $(ev.currentTarget);
			var temp = $("#months li.active");
			$(temp).removeClass("active");
			$(ele).addClass("active");

			$("#ihm").attr("value" , $(ele).attr("data-id"));

		},

	});

	var todayStuff = Backbone.Collection.extend({
		url : "core/getTimeline.php"
	})

	var todayModel = Backbone.Model.extend({
		urlRoot : "core/getTimeline.php"
	})

	var Timeline = Backbone.View.extend({
		el : "#thisday",
		render  : function(){
			$("#thisday").addClass("active");
			var temp = _.template($("#timeline-template").html(),{});
			$("#thisday").html(temp)
			var todaystuff = new todayStuff();
			var that = this;
				todaystuff.fetch({
					success : function(data){
						// var temp = _.template($("#timeline-template").html(),{data : data.models});
						// that.$el.html($temp);
						console.log("Yeah")
					},
					error : function(er){
						alert("error");
						console.log(er);
					}
				});
		}
	})

	var Router = Backbone.Router.extend({
		routes : {
			"" : "home",
			"today": "timeline"
		}
	});

	userData = new UserData();

	var router = new Router();
	// Home or Root of the app

	router.on("route:home" , function(){
		userData.render();
	});

	var timeline = new Timeline();

	router.on("route:timeline",function(){
		userData.render();
		timeline.render();
	})




	Backbone.history.start();
})()
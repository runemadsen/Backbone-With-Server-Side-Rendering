/*	Car Model
__________________________________________________________ */

var Car = Backbone.Model.extend({
	defaults: {
    "running" :  0,
    "on_message" : "This will be overridden",
		"off_message" : "This will be overriden"
  }
});

/*	Car Collection
__________________________________________________________ */

var CarList = Backbone.Collection.extend({
	model : Car
});

var cars = new CarList();

/*	Car View
_________________________________________________________ */

var CarView = Backbone.View.extend({
  
	events: {
    "click a" : "toggle_state"
  },

	toggle_state : function()
	{
		var running = this.model.get("running") == 0 ? 1 : 0;
		
		if(running == 0)
			this.$("span").text(this.model.get("off_message"));
		else
			this.$("span").text(this.model.get("on_message"));
		
		this.model.set({ running : running });
		return false;
	},
	
	render : function()
	{
		
	}
	
});

/*	App View
_________________________________________________________ */

var App = Backbone.View.extend({
  
	initialize: function() 
	{
		cars.bind('add', this.add_car_view, this);
  },

	add_car_view : function(car)
	{
		var view = new CarView({model: car, el : "#car" + cars.length});
	}
	
});

window.app = new App();


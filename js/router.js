var Router = Backbone.Router.extend({
	routes: {
		'' : 'home'
	}
});

var router = new Router();
router.on(route:'home', function(){
	userView.render();
});
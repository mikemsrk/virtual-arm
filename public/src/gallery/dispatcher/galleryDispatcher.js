var Dispatcher = require('flux').Dispatcher;
var GalleryDispatcher = new Dispatcher();

GalleryDispatcher.handleAction = function(action){
	this.dispatch({
		source: "VIEW_ACTION",
		action: action
	})
}

module.exports = GalleryDispatcher;
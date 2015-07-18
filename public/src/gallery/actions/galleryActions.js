var galleryDispatcher = require("../dispatcher/galleryDispatcher")
var galleryConstants = require('../constants/galleryConstants')

var galleryAction = {
	addItem: function(item){
		galleryDispatcher.handleAction({
			actionType: galleryConstants.ADD_ITEM,
			data: item
		})	
	},
	removeItem: function(index){
		galleryDispatcher.handleAction({
			actionType: galleryConstants.REMOVE_ITEM,
			data: index
		})
	}
		
}

// should handle AJAX calls to server.   First show "LOADING" action, then "LOADED" action


module.exports = galleryAction;
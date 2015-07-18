var GalleryDispatcher = require("../dispatcher/galleryDispatcher")
var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;
var fakeData = require('../assets/fakeData')
var galleryConstants = require('../constants/galleryConstants')

var CHANGE_EVENT = 'change'

var _gallery = {
	list: fakeData
};
var addItem = function(item){
	_gallery.list.push(item);
} 

var removeItem = function(index){
  console.log("remove triggered")
	_gallery.list.splice(index, 1);
} 

var galleryStore = _.extend({}, EventEmitter.prototype, {
	getList: function(){
		return _gallery.list
	},

	addChangeListener: function(cb){
		console.log("store addChangeListener execute", cb)
		galleryStore.on(CHANGE_EVENT, cb);
	},

	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb)
	}

})

GalleryDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case galleryConstants.ADD_ITEM:
      console.log("Store Adding", action.data)
      addItem(action.data);
      galleryStore.emit(CHANGE_EVENT);
      break;
    case galleryConstants.REMOVE_ITEM:
      removeItem(action.data);
      galleryStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});




module.exports = galleryStore
window.gS = galleryStore
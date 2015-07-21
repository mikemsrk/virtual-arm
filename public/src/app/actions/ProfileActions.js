var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProfileConstants = require('../constants/ProfileConstants');

var ProfileActions = {
  fetch: function(){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.FETCH
    });
  },
  update: function(data){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.UPDATE,
      data: data
    });
  },
  delete: function(){
    AppDispatcher.handleAction({
      actionType: ProfileConstants.DELETE,
      data: null
    });
  }
};

module.exports = ProfileActions;
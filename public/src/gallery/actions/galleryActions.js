var galleryDispatcher = require("../dispatcher/galleryDispatcher")
var galleryConstants = require('../constants/galleryConstants')

var galleryAction = {
	addItem: function(item){
		galleryDispatcher.handleAction({
			actionType: galleryConstants.ADD_ITEM,
			data: {
        title: item,
        description: "bryan new item" // NEED TO FIX
      }
		})
		console.log("Posting now");
    $.ajax({
      type: 'POST',
      url: '/galleryp',
      data: JSON.stringify({
        title: item,
        description: "bryan new item" // need to fix
      }),  //input box
    });

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

/*
  $.ajax({
    type: 'POST',
    url: '/authenticate',
    data: JSON.stringify({
      username: username,
      password: password
    }),
    crossDomain: true,
    success: function(resp) { // NOT WORKING
      console.log('success',resp);
      callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){
        callback({
          authenticated: true,
          token: resp.auth_token
        });
      }else{
        callback({
          authenticated: false
        });
      }
    }
  });

*/
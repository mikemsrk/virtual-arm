(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {
  signup: function(data){
    AppDispatcher.handleAction({
      actionType: AuthConstants.SIGNUP,
      data: data
    });
  },
  login: function(data){
    AppDispatcher.handleAction({
      actionType: AuthConstants.LOGIN,
      data: data
    });
  },
  logout: function(){
    AppDispatcher.handleAction({
      actionType: AuthConstants.LOGOUT,
      data: null
    });
  }
};

module.exports = AuthActions;
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');

var CommentActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_ADD,
      data: data
    });
  },
  // Fetches a page of Comments
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHPAGE,
      data: data
    });
  },

  fetchUserPage: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHUSERPAGE,
      data: data
    });
  },

  // Fetches one Comment only
  fetchComment: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_FETCHCOMMENT,
      data: data
    });
  },
  // Rate a Comment up or down
  upVote: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_UPVOTE,
      data: data
    });
  },

  downVote: function(data){
    AppDispatcher.handleAction({
      actionType: CommentConstants.POST_DOWNVOTE,
      data: data
    });
  }

};

module.exports = CommentActions;
},{"../constants/CommentConstants":"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js":[function(require,module,exports){
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
},{"../constants/ProfileConstants":"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');

var ThreadActions = {
  add: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.ADD,
      data: data
    });
  },
  // Fetches a page of threads
  fetchPage: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHPAGE,
      data: data
    });
  },

  fetchUserPage: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHUSERPAGE,
      data: data
    });
  },

  // Fetches one thread only
  fetchThread: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.FETCHTHREAD,
      data: data
    });
  },
  // Rate a thread up or down
  upVote: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.UPVOTE,
      data: data
    });
  },

  downVote: function(data){
    AppDispatcher.handleAction({
      actionType: ThreadConstants.DOWNVOTE,
      data: data
    });
  }

};

module.exports = ThreadActions;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js"}],"/Users/mikemsrk/goflux/pub/app/app.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');

var Navbar = require('./components/navbar/navbar');
var Profile = require('./components/profile/profile');
var Front = require('./components/front/front');
var Login = require('./components/login/login');
var Logout = require('./components/logout/logout');
var Signup = require('./components/signup/signup');
var NewThread = require('./components/thread/new');
var Thread = require('./components/thread/thread');
var User = require('./components/user/user');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;
var Link = Router.Link;

var App = React.createClass({displayName: "App",

  getInitialState: function(){
    return {
      // loggedIn: Auth.loggedIn()
    };
  },

  setStateOnAuth: function(loggedIn){
    // this.setState({
    //   loggedIn: loggedIn
    // });
  },

  componentWillMount: function(){
    // Auth.onChange = this.setStateOnAuth;
  },
  
  render: function(){
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement(Navbar, null), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});

// TODO: Setup thread routes
var routes = (
  React.createElement(Route, {path: "/", handler: App}, 
    React.createElement(DefaultRoute, {handler: Front}), 
    React.createElement(Route, {path: "profile", handler: Profile}), 
    React.createElement(Route, {path: "login", handler: Login}), 
    React.createElement(Route, {path: "logout", handler: Logout}), 
    React.createElement(Route, {path: "signup", handler: Signup}), 
    React.createElement(Route, {path: "new", handler: NewThread}), 
    React.createElement(Route, {path: "thread/:id", handler: Thread}), 
    React.createElement(Route, {path: "user/:id", handler: User})
  )
);


Router.run(routes, Router.HashLocation, function(Root){
  React.render(
    React.createElement(Root, {locales: ['en-US']}),
    document.getElementById('app')
  );
});
	
module.exports = App;

},{"./components/front/front":"/Users/mikemsrk/goflux/pub/app/components/front/front.js","./components/login/login":"/Users/mikemsrk/goflux/pub/app/components/login/login.js","./components/logout/logout":"/Users/mikemsrk/goflux/pub/app/components/logout/logout.js","./components/navbar/navbar":"/Users/mikemsrk/goflux/pub/app/components/navbar/navbar.js","./components/profile/profile":"/Users/mikemsrk/goflux/pub/app/components/profile/profile.js","./components/signup/signup":"/Users/mikemsrk/goflux/pub/app/components/signup/signup.js","./components/thread/new":"/Users/mikemsrk/goflux/pub/app/components/thread/new.js","./components/thread/thread":"/Users/mikemsrk/goflux/pub/app/components/thread/thread.js","./components/user/user":"/Users/mikemsrk/goflux/pub/app/components/user/user.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js":[function(require,module,exports){
var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');
var AuthStore = require('../../stores/AuthStore');

var NewComment = React.createClass({displayName: "NewComment",

  addComment: function(e){

    e.preventDefault();
    // Send action to update user information
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!body){
      return;
    }

    this.props.onAddComment(body);
    React.findDOMNode(this.refs.body).value = '';

  },

  render: function() {
    return (
      React.createElement("div", {className: "newComment"}, 
        React.createElement("form", {onSubmit: this.addComment}, 
          React.createElement("input", {type: "textarea", className: "form-control", placeholder: "comment...", ref: "body"}), 
          React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
        )
      )
    );
  }
});

module.exports = NewComment;
},{"../../actions/CommentActions":"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/CommentStore":"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-item.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

//  Thread comment item
var CommentItem = React.createClass({displayName: "CommentItem",

  upVote: function(e){
    e.preventDefault();
    this.props.onUpVote(this.props.item.post_id);
    React.findDOMNode(this.refs.up).className = '';
    React.findDOMNode(this.refs.down).className="glyphicon glyphicon-chevron-down"
    this.props.item.rating++;
  },

  downVote: function(e){
    e.preventDefault();
    this.props.onDownVote(this.props.item.post_id);
    React.findDOMNode(this.refs.down).className = '';
    React.findDOMNode(this.refs.up).className = "glyphicon glyphicon-chevron-up";
    this.props.item.rating--;
  },

  render: function() {
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, 
          React.createElement("a", {href: "#", ref: "down", className: "glyphicon glyphicon-chevron-down", "aria-hidden": "true", onClick: this.downVote}), " ", this.props.item.rating, " ", React.createElement("a", {href: "#", ref: "up", className: "glyphicon glyphicon-chevron-up", "aria-hidden": "true", onClick: this.upVote})), 
        React.createElement("td", null, this.props.item.contents), 
        React.createElement("td", null, this.props.item.user_name), 

        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
        React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = CommentItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/comment/comment-list.js":[function(require,module,exports){
var React = require('react');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');
var CommentItem = require('./comment-item');
var NewComment = require('./comment-input');

// Front page Comments
// Fetch Comments by rating by page

var CommentList = React.createClass({displayName: "CommentList",
  getInitialState: function(){
    return {
      page: 1,
      comments: [{
        body: 'fake body',
        rating: 5,
        creation_time: "2015-07-19T10:31:04Z",
        last_update_time: "2015-07-20T12:31:00Z",
        comment_id: 4,
        user_id: 1,
        user_name: ''
      }]
    };
  },

  componentDidMount: function(){
    CommentActions.fetchPage({threadId: this.props.threadId, page:this.state.page});
    CommentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    CommentStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      comments: CommentStore.getComments().threadPosts
    });
  },

  addComment: function(body){
    CommentActions.add({threadId:this.props.threadId, body:body});
    CommentActions.fetchPage({threadId: this.props.threadId, page:this.state.page});
  },

  upVote: function(id){
    // TODO: call Comment action to upvote
    console.log('upvoting...',id);
    CommentActions.upVote({post_id:id});
  },

  downVote: function(id){
    // TODO: call Comment action to downvote
    CommentActions.downVote({post_id:id});
  },

  render: function() {
    return (
      React.createElement("div", {className: "Comments"}, 
        
          React.createElement(NewComment, {onAddComment: this.addComment}), 
          React.createElement("h3", null, "Comments"), 
          React.createElement("table", {className: "table table-hover"}, 
          
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "Rating"), 
                React.createElement("th", null, "Body"), 
                React.createElement("th", null, "Submitted"), 
                React.createElement("th", null, "Created"), 
                React.createElement("th", null, "Updated")
              )
            ), 

            React.createElement("tbody", null, 
              
                this.state.comments.map(function(item){
                  return (
                    React.createElement(CommentItem, {
                      ref: "comment", 
                      onGoThread: this.goThread, 
                      onUpVote: this.upVote, 
                      onDownVote: this.downVote, 
                      key: item.post_id, 
                      item: item})
                  );
                },this)
              
            )

          )
          
      )
    );
  }
});

module.exports = CommentList;
},{"../../actions/CommentActions":"/Users/mikemsrk/goflux/pub/app/actions/CommentActions.js","../../stores/CommentStore":"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js","./comment-input":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js","./comment-item":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-item.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threaditem.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

// Front page thread list
var ThreadItem = React.createClass({displayName: "ThreadItem",

  upVote: function(){
    this.props.onUpVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.up).className = '';
    React.findDOMNode(this.refs.down).className="glyphicon glyphicon-chevron-down"
    this.props.item.rating++;
  },

  downVote: function(){
    this.props.onDownVote(this.props.item.thread_id);
    React.findDOMNode(this.refs.down).className = '';
    React.findDOMNode(this.refs.up).className = "glyphicon glyphicon-chevron-up";
    this.props.item.rating--;
  },

  render: function() {
    // TODO: Clicking on title takes you to individual thread page
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);
    var body = formatBody(this.props.item.body);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, 
          React.createElement("a", {href: "#", ref: "down", className: "glyphicon glyphicon-chevron-down", "aria-hidden": "true", onClick: this.downVote}), " ", this.props.item.rating, " ", React.createElement("a", {href: "#", ref: "up", className: "glyphicon glyphicon-chevron-up", "aria-hidden": "true", onClick: this.upVote})), 
        React.createElement("td", null, React.createElement("a", {href: "#/thread/"+this.props.item.thread_id}, this.props.item.title)), 
        React.createElement("td", null, body), 
        React.createElement("td", null, React.createElement("a", {href: "#/user/"+this.props.item.user_id}, " ", this.props.item.user_name, " "), " "), 

        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
        React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = ThreadItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ThreadItem = require('./front-threaditem');

// Front page threads
// Fetch threads by rating by page

var Threads = React.createClass({displayName: "Threads",
  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      threads: ThreadStore.getThreads().forumThreads
    });
    console.log(this.state.threads);
  },

  upVote: function(id){
    // TODO: call thread action to upvote
    ThreadActions.upVote({thread_id:id});
  },

  downVote: function(id){
    // TODO: call thread action to downvote
    ThreadActions.downVote({thread_id:id});
  },

  goThread: function(id){
    console.log('transitioning to...thread',id);
  },

  render: function() {
    return (
      React.createElement("div", {className: "threads"}, 
        
          React.createElement("h3", null, "Front Page"), 
          React.createElement("table", {className: "table table-hover"}, 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "Rating"), 
                React.createElement("th", null, "Title"), 
                React.createElement("th", null, "Body"), 
                React.createElement("th", null, "Submitted"), 
                React.createElement("th", null, "Created"), 
                React.createElement("th", null, "Updated")
              )
            ), 

            React.createElement("tbody", null, 
              
                this.state.threads.map(function(item){
                  return (
                    React.createElement(ThreadItem, {
                      ref: "thread", 
                      onGoThread: this.goThread, 
                      onUpVote: this.upVote, 
                      onDownVote: this.downVote, 
                      key: item.thread_id, 
                      item: item})
                  );
                },this)
              
            )

          )
          
      )
    );
  }
});

module.exports = Threads;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","./front-threaditem":"/Users/mikemsrk/goflux/pub/app/components/front/front-threaditem.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/front/front.js":[function(require,module,exports){
var React = require('react');
var Threads = require('./front-threads');
var Link = require('react-router').Link;
var AuthStore = require('../../stores/AuthStore');

var Front = React.createClass({displayName: "Front",

  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn()
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        this.state.loggedIn ? (
        React.createElement(Link, {className: "btn btn-info", to: "/new"}, "New")
        ): null, 
        React.createElement(Threads, null)
      )
    );
  }
});

module.exports = Front;
},{"../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./front-threads":"/Users/mikemsrk/goflux/pub/app/components/front/front-threads.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/login/login-form.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginForm = React.createClass({displayName: "LoginForm",
  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!username || !password){
      return;
    }
    // Send request back up to Login
    this.props.onLoginSubmit({username: username, password: password});
    
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },
  render: function(){
    return (
      React.createElement("form", {className: "loginForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Password", ref: "password"}), 
        React.createElement(Link, {className: "btn btn-info", to: "/signup"}, "Register"), 
        React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
      )
    );
  }
});

module.exports = LoginForm;
},{"react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/login/login.js":[function(require,module,exports){
var React = require('react');
var LoginForm = require('./login-form');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var Login = React.createClass({displayName: "Login",
  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  handleLoginSubmit: function(user){
    AuthActions.login({username:user.username,pass:user.password});
  },

  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
        React.createElement("h2", null, "Login"), 
        this.state.loggedIn ? (
            React.createElement("p", null, " You are already logged in ")
          ) : (
            React.createElement(LoginForm, {onLoginSubmit: this.handleLoginSubmit})
          ), 
        this.state.error && (React.createElement("p", {className: "error"}, "Bad login information"))
      )
    );
  }
});

module.exports = Login;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./login-form":"/Users/mikemsrk/goflux/pub/app/components/login/login-form.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/logout/logout.js":[function(require,module,exports){
var React = require('react');

var Logout = React.createClass({displayName: "Logout",
  getInitialState: function(){
    // TODO: Move to Auth Store?
    // if(Auth.loggedIn()){
    //   Auth.logout(function(){
    //     location.hash = '/login';
    //   });
    // }
    return {
      // loggedIn: Auth.loggedIn()
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
          React.createElement("p", null, "Logout Successful.")
      )
    );
  }
});

module.exports = Logout;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/navbar/navbar.js":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');
var Link = Router.Link;

// TODO - factor out navbar login form

var Navbar = React.createClass({displayName: "Navbar",

  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn()
    };
  },

  componentWillMount: function(){
    // _onChange is cb function.
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  navlogout: function(){
    AuthActions.logout();
  },

  handleSubmit: function(e){
    e.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if(!username || !password){
      return;
    }
    // TODO: send request to server
    this.handleLoginSubmit({username: username, password: password});
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    return;
  },

  handleLoginSubmit: function(user){
    AuthActions.login({username:user.username,pass:user.password});
  },

  render: function(){
    return (
    React.createElement("nav", {className: "navbar navbar-inverse"}, 
      React.createElement("div", {className: "container-fluid"}, 

        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"})
          ), 
          React.createElement("a", {className: "navbar-brand", href: "#"}, "App")
        ), 
        
        React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
          React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 

          this.state.loggedIn ? (
            React.createElement("form", {className: "navbar-form navbar-right", role: "login"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement(Link, {className: "btn btn-warning", to: "/logout", onClick: this.navlogout}, "Log out")
              )
            )
          ) : (
            React.createElement("form", {className: "navbar-form navbar-right", role: "login", onSubmit: this.handleSubmit}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Password", ref: "password"}), 
                React.createElement("button", {type: "submit", className: "btn btn-success hidden", value: "Submit"}, "Submit")
              )
            )
          ), 

            React.createElement("li", {className: "dropdown"}, 
              React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {className: "caret"})), 
              React.createElement("ul", {className: "dropdown-menu"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                React.createElement("li", {role: "separator", className: "divider"}), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                React.createElement("li", {role: "separator", className: "divider"}), 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
              )
            ), 
            this.state.loggedIn ? (
              null
            ) : (
              React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "Register"))
            ), 

            this.state.loggedIn ? (
              React.createElement("li", null, React.createElement(Link, {to: "/profile"}, "Profile"))
            ) : (
              React.createElement("li", null, React.createElement(Link, {to: "/login"}, "Login"))
            )

          )
        )

      )
    )
    )
  }
});

module.exports = Navbar;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","react":"react","react-router":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-bio.js":[function(require,module,exports){
var React = require('react');

var Bio = React.createClass({displayName: "Bio",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      editing: false
    };
  },

  // TODO: Bubble this up to profile parent
  enableEdit: function(){
    // make the bio field editable
      // replace it with a form.
    this.setState({
      editing: true
    })
  },

  cancelEdit: function(){
    // make the bio field editable
      // replace it with a form.
    this.setState({
      editing: false
    })
  },

  saveEdit: function(){
    var avatar = React.findDOMNode(this.refs.avatar).value.trim();
    var bio = React.findDOMNode(this.refs.bio).value.trim();

    var data = this.props.item;
    data.avatar_link = avatar;
    data.bio = bio;

    // Bubble up request to parent
    this.props.onEditSubmit(data);

    this.setState({
      editing: false
    })
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("h3", null, this.props.item.user_name), 
        React.createElement("h3", null, this.props.item.first_name, " ", this.props.item.last_name), 

        !this.state.editing ? (
          React.createElement("img", {src: this.props.item.avatar_link, className: "img-thumbnail"})
        ) : (
          React.createElement("p", null, "Avatar Link: ", React.createElement("input", {type: "text", ref: "avatar"}))
        ), 

        React.createElement("p", null, "Rep: ", this.props.item.rep), 
        React.createElement("p", null, "Id: ", this.props.item.user_id), 

        !this.state.editing ? (
          React.createElement("p", null, "Bio: ", this.props.item.bio)
        ) : (
          React.createElement("p", null, "Bio: ", React.createElement("input", {type: "text", ref: "bio"}))
        ), 
        
        !this.state.editing ? (
          React.createElement("a", {className: "btn btn-warning", onClick: this.enableEdit}, "Edit")
        ) : (
          React.createElement("a", {className: "btn btn-success", onClick: this.saveEdit}, "Save")
        ), 

        !this.state.editing ? (
          React.createElement("a", {className: "btn btn-success hidden"})
        ) : (
          React.createElement("a", {className: "btn btn-info", onClick: this.cancelEdit}, "Cancel")
        )

      )
    );
  }
});

module.exports = Bio;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threaditem.js":[function(require,module,exports){
var React = require('react');
var ReactIntl = require('react-intl');
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedDate = ReactIntl.FormattedDate;

// MySQL Date -> JS Date
var formatDate = function(str){
  var dateParts = str.split("-");
  var times = dateParts[2].split(":");
  var hour = times[0].substr(3);
  var minutes = times[1];
  var seconds = times[2].substr(0,2);

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0,2),hour,minutes,seconds);
};

// Shortens the body to fit in the table
var formatBody = function(str){
  var shortStr = str.substr(0,40);
  if(str.length >= 40){
    shortStr += '...';
  }
  return shortStr;
};

// Front page thread list
var ProfileThreadItem = React.createClass({displayName: "ProfileThreadItem",

  render: function() {
    // TODO: Clicking on title takes you to individual thread.
    var created = formatDate(this.props.item.creation_time);
    var updated = formatDate(this.props.item.last_update_time);
    var body = formatBody(this.props.item.body);

    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.item.rating), 
        React.createElement("td", null, React.createElement("a", {href: "#/thread/"+this.props.item.thread_id}, this.props.item.title)), 
        React.createElement("td", null, body), 
        React.createElement("td", null, this.props.item.user_name), 
        
        React.createElement("td", null, 
          React.createElement(FormattedDate, {
            value: created, 
            day: "numeric", 
            month: "long", 
            year: "numeric"})
        ), 

        React.createElement("td", null, 
          React.createElement(FormattedRelative, {
            value: updated})
        )

      )
    );
  }
});

module.exports = ProfileThreadItem;
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threads.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ProfileThreadItem = require('./profile-threaditem');

var BioThreads = React.createClass({displayName: "BioThreads",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchUserPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      threads: ThreadStore.getUserThreads().forumThreads
    });
    console.log(this.state.threads);
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-9"}, 
        React.createElement("h3", null, "My Threads"), 
        React.createElement("table", {className: "table table-hover"}, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "Rating"), 
              React.createElement("th", null, "Title"), 
              React.createElement("th", null, "Body"), 
              React.createElement("th", null, "Submitted"), 
              React.createElement("th", null, "Created"), 
              React.createElement("th", null, "Updated")
            )
          ), 

          React.createElement("tbody", null, 
            this.state.threads.map(function(item){
              return (
                React.createElement(ProfileThreadItem, {key: item.thread_id, item: item})
              );
            })
          )

        )
      )
    );
  }
});

module.exports = BioThreads;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","./profile-threaditem":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threaditem.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/profile/profile.js":[function(require,module,exports){
var React = require('react');
var AuthStore = require('../../stores/AuthStore');
var ProfileStore = require('../../stores/ProfileStore');
var ProfileActions = require('../../actions/ProfileActions');
var Bio = require('./profile-bio');
var BioThreads = require('./profile-threads');

var Profile = React.createClass({displayName: "Profile",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    if(!AuthStore.loggedIn()){
      location.hash = '/login';
    }
    return {
      avatar_link: "",
      bio: "",
      first_name: "",
      last_name: "",
      user_name: "",
      user_id: 0,
      rep: 0
    };
  },

  componentDidMount: function(){
    ProfileActions.fetch();
    ProfileStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ProfileStore.removeChangeListener(this._onChange);
  },

  editProfile: function(data){
    // Send action to update user information
    ProfileActions.update({
      avatar_link: data.avatar_link,
      bio: data.bio
    });
  },

  _onChange: function(){
      this.setState({
        first_name: ProfileStore.getBio().first_name,
        last_name: ProfileStore.getBio().last_name,
        user_name: ProfileStore.getBio().user_name,
        user_id: ProfileStore.getBio().user_id,
        bio: ProfileStore.getBio().bio,
        avatar_link: ProfileStore.getBio().avatar_link,
        rep: ProfileStore.getBio().rep
      });
  },

  render: function() {
    return (
      React.createElement("div", {className: "profile"}, 
        React.createElement(Bio, {onEditSubmit: this.editProfile, item: this.state}), 
        React.createElement(BioThreads, null)
      )
    );
  }
});

module.exports = Profile;
},{"../../actions/ProfileActions":"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/ProfileStore":"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js","./profile-bio":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-bio.js","./profile-threads":"/Users/mikemsrk/goflux/pub/app/components/profile/profile-threads.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/signup/signup-form.js":[function(require,module,exports){
var React = require('react');

var SignupForm = React.createClass({displayName: "SignupForm",
  handleSubmit: function(e){
    e.preventDefault();
    var firstname = React.findDOMNode(this.refs.firstname).value.trim();
    var lastname = React.findDOMNode(this.refs.lastname).value.trim();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var passconf = React.findDOMNode(this.refs.passconf).value.trim();

    var error = false;
    if(!firstname || !lastname || !username || !password || !passconf){
      error = true;
    }
    if(passconf !== password){
      error = true;
    }
    // Bubble this up to parent
    this.props.onSignupSubmit({firstname: firstname, lastname: lastname, username: username, password: password, error: error});
    
    React.findDOMNode(this.refs.firstname).value = '';
    React.findDOMNode(this.refs.lastname).value = '';
    React.findDOMNode(this.refs.username).value = '';
    React.findDOMNode(this.refs.password).value = '';
    React.findDOMNode(this.refs.passconf).value = '';
    return;
  },
  render: function(){
    return (
      React.createElement("form", {className: "signupForm", onSubmit: this.handleSubmit}, 
        React.createElement("div", {className: "nameField"}, 
          React.createElement("input", {name: "first", type: "text", className: "form-control", placeholder: "First", ref: "firstname"}), 
          React.createElement("input", {name: "last", type: "text", className: "form-control", placeholder: "Last", ref: "lastname"})
        ), 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Username", ref: "username"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Password", ref: "password"}), 
        React.createElement("input", {type: "password", className: "form-control", placeholder: "Confirm", ref: "passconf"}), 
        React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
      )
    );
  }
});

module.exports = SignupForm;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/signup/signup.js":[function(require,module,exports){
var React = require('react');
var SignupForm = require('./signup-form');
var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var Signup = React.createClass({displayName: "Signup",
  getInitialState: function(){
    return {
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    };
  },

  componentWillMount: function(){
    AuthStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AuthStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      loggedIn: AuthStore.loggedIn(),
      error: AuthStore.error()
    });
    if(this.state.loggedIn){
      location.hash = '/';
    }
  },

  handleSignupSubmit: function(user){
    AuthActions.signup({
      firstname: user.firstname, 
      lastname: user.lastname, 
      username: user.username, 
      password: user.password, 
      error: user.error
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "Auth center-block"}, 
        React.createElement("h2", null, "Sign up"), 
          React.createElement(SignupForm, {onSignupSubmit: this.handleSignupSubmit}), 
          this.state.error && (React.createElement("p", {className: "error"}, "Bad signup information"))
      )
    );
  }
});

module.exports = Signup;
},{"../../actions/AuthActions":"/Users/mikemsrk/goflux/pub/app/actions/AuthActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","./signup-form":"/Users/mikemsrk/goflux/pub/app/components/signup/signup-form.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/thread/new.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var AuthStore = require('../../stores/AuthStore');

var NewThread = React.createClass({displayName: "NewThread",
  getInitialState: function(){
    if(!AuthStore.loggedIn()){
      location.hash = '/login';
    }
    return {
      success: false
    };
  },

  componentDidMount: function(){
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  addThread: function(){
    // Send action to update user information
    var title = React.findDOMNode(this.refs.title).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!title || !body){
      return;
    }

    ThreadActions.add({
      title: title,
      body: body
    });

  },

  _onChange: function(){
    location.hash = '/';
  },


  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement("h3", null, "New Thread"), 
        React.createElement("div", {className: "newThread center-block"}, 
            React.createElement("form", {onSubmit: this.addThread}, 
              React.createElement("input", {type: "text", className: "form-control", placeholder: "Title", ref: "title"}), 
              React.createElement("input", {type: "textarea", className: "form-control", placeholder: "Body", ref: "body"}), 
              React.createElement("button", {type: "submit", className: "btn btn-success", value: "Submit"}, "Submit")
            )
        )
      )
    );
  }
});

module.exports = NewThread;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/thread/thread.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');

var CommentList = require('../comment/comment-list');
var CommentInput = require('../comment/comment-input');

var Thread = React.createClass({displayName: "Thread",

  getInitialState: function(){
    return {
      id:this.props.params.id,
      title: '',
      body: '',
      rating: null
    };
  },

  componentDidMount: function(){
    ThreadActions.fetchThread({id:this.state.id});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      title: ThreadStore.getThread().forumThreads[0].title,
      body: ThreadStore.getThread().forumThreads[0].body,
      rating: ThreadStore.getThread().forumThreads[0].rating
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-12"}, 
        React.createElement("h3", null, " ", this.state.title, " "), 
        React.createElement("div", {className: "card"}, 
          React.createElement("p", null, " ", this.state.body, " ")
        ), 
        React.createElement("p", null, " Rating: ", this.state.rating, " "), 

        React.createElement(CommentList, {threadId: this.state.id})
      )
    );
  }
});

module.exports = Thread;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","../comment/comment-input":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-input.js","../comment/comment-list":"/Users/mikemsrk/goflux/pub/app/components/comment/comment-list.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/user/user-bio.js":[function(require,module,exports){
var React = require('react');

var Bio = React.createClass({displayName: "Bio",
  // TODO: Incorporate Later when Auth is in.

  render: function() {
    return (
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("h3", null, this.props.item.user_name), 
        React.createElement("h3", null, this.props.item.first_name, " ", this.props.item.last_name), 

          React.createElement("img", {src: this.props.item.avatar_link, className: "img-thumbnail"}), 


        React.createElement("p", null, "Rep: ", this.props.item.rep), 
        React.createElement("p", null, "Id: ", this.props.item.user_id), 
        React.createElement("p", null, "Bio: ", this.props.item.bio)

      )
    );
  }
});

module.exports = Bio;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/user/user-threaditem.js":[function(require,module,exports){
arguments[4]["/Users/mikemsrk/goflux/pub/app/components/profile/profile-threaditem.js"][0].apply(exports,arguments)
},{"react":"react","react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js"}],"/Users/mikemsrk/goflux/pub/app/components/user/user-threads.js":[function(require,module,exports){
var React = require('react');
var ThreadStore = require('../../stores/ThreadStore');
var ThreadActions = require('../../actions/ThreadActions');
var ProfileThreadItem = require('./user-threaditem');

var BioThreads = React.createClass({displayName: "BioThreads",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      page: 1,
      threads: []
    };
  },

  componentDidMount: function(){
    // TODO: Fetch User Page by ID
    // ThreadActions.fetchUserPage({page:this.state.page});
    ThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ThreadStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    // TODO: Get User Threads by ID
    // this.setState({
    //   threads: ThreadStore.getUserThreads().forumThreads
    // });
  },

  render: function() {
    return (
      React.createElement("div", {className: "col-md-9"}, 
        React.createElement("h3", null, "User Threads"), 
        React.createElement("table", {className: "table table-hover"}, 
          React.createElement("thead", null, 
            React.createElement("tr", null, 
              React.createElement("th", null, "Rating"), 
              React.createElement("th", null, "Title"), 
              React.createElement("th", null, "Body"), 
              React.createElement("th", null, "Submitted"), 
              React.createElement("th", null, "Created"), 
              React.createElement("th", null, "Updated")
            )
          ), 

          React.createElement("tbody", null, 
            this.state.threads.map(function(item){
              return (
                React.createElement(ProfileThreadItem, {key: item.thread_id, item: item})
              );
            })
          )

        )
      )
    );
  }
});

module.exports = BioThreads;
},{"../../actions/ThreadActions":"/Users/mikemsrk/goflux/pub/app/actions/ThreadActions.js","../../stores/ThreadStore":"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js","./user-threaditem":"/Users/mikemsrk/goflux/pub/app/components/user/user-threaditem.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/components/user/user.js":[function(require,module,exports){
var React = require('react');
var AuthStore = require('../../stores/AuthStore');
var ProfileStore = require('../../stores/ProfileStore');
var ProfileActions = require('../../actions/ProfileActions');
var Bio = require('./user-bio');
var BioThreads = require('./user-threads');

var User = React.createClass({displayName: "User",
  // TODO: Incorporate Later when Auth is in.

  getInitialState: function(){
    return {
      avatar_link: "",
      bio: "",
      first_name: "",
      last_name: "",
      user_name: "",
      user_id: this.props.params.id,
      rep: 0
    };
  },

  componentDidMount: function(){
    // TODO: fetch by user ID
    // ProfileActions.fetch();
    ProfileStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ProfileStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    // TODO: Set by getUser()
      // this.setState({
      //   first_name: ProfileStore.getBio().first_name,
      //   last_name: ProfileStore.getBio().last_name,
      //   user_name: ProfileStore.getBio().user_name,
      //   user_id: ProfileStore.getBio().user_id,
      //   bio: ProfileStore.getBio().bio,
      //   avatar_link: ProfileStore.getBio().avatar_link,
      //   rep: ProfileStore.getBio().rep
      // });
  },

  render: function() {
    return (
      React.createElement("div", {className: "profile"}, 
        React.createElement(Bio, {item: this.state}), 
        React.createElement(BioThreads, null)
      )
    );
  }
});

module.exports = User;
},{"../../actions/ProfileActions":"/Users/mikemsrk/goflux/pub/app/actions/ProfileActions.js","../../stores/AuthStore":"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js","../../stores/ProfileStore":"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js","./user-bio":"/Users/mikemsrk/goflux/pub/app/components/user/user-bio.js","./user-threads":"/Users/mikemsrk/goflux/pub/app/components/user/user-threads.js","react":"react"}],"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js":[function(require,module,exports){
var AuthConstants = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

module.exports = AuthConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js":[function(require,module,exports){
var CommentConstants = {
  POST_ADD: 'POST_ADD',
  POST_FETCHPAGE: 'POST_FETCHPAGE',
  POST_FETCHUSERPAGE: 'POST_FETCHUSERPAGE',
  POST_UPVOTE: 'POST_UPVOTE',
  POST_DOWNVOTE: 'POST_DOWNVOTE',
  POST_UPDATE: 'POST_UPDATE',
  POST_DELETE: 'POST_DELETE'
};

module.exports = CommentConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js":[function(require,module,exports){
var ProfileConstants = {
  FETCH: 'FETCH', // fetches user data to display on view
  UPDATE: 'UPDATE', // updates user data
  DELETE: 'DELETE' // TODO: delete account
};

module.exports = ProfileConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js":[function(require,module,exports){
var ThreadConstants = {
  ADD: 'ADD',
  FETCHTHREAD: 'FETCHTHREAD',
  FETCHPAGE: 'FETCHPAGE',
  FETCHUSERPAGE: 'FETCHUSERPAGE',
  UPVOTE: 'UPVOTE',
  DOWNVOTE: 'DOWNVOTE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

module.exports = ThreadConstants;
},{}],"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js":[function(require,module,exports){
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
},{"flux":"/Users/mikemsrk/goflux/pub/node_modules/flux/index.js"}],"/Users/mikemsrk/goflux/pub/app/services/AuthService.js":[function(require,module,exports){
var authenticateUser = function(username, password, callback) {
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
};

var createUser = function(username, password, firstname, lastname, callback) {
  return $.ajax({
    type: 'POST',
    url: '/createUser',
    data: JSON.stringify({
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback({
          authenticated: true,
          token: resp.auth_token
        });
      }else{         // if error msg
        callback({
          authenticated: false
        });
      }
    }
  });
};

var Auth = {
  login: function(username, pass, callback) {
    var that = this;

    if (this.loggedIn()) {
      // console.log('already logged in');
      // if (callback) {
      //   callback(true);
      // }
      // this.onChange(true);
      // return;
    }
    authenticateUser(username, pass, (function(res) {
        var authenticated = false;
        if (res.authenticated) {
          console.log('login successful');
          authenticated = true;
        }
        if (callback) {
          callback(authenticated);
        }
        that.onChange(authenticated);
    }));
  },
  signup: function(username, password, firstname, lastname, callback) {
    var that = this;
    
    if (this.loggedIn()) {
      // if (callback) {
      //   callback(true);
      // }
      // this.onChange(true);
      // return;
    }
    createUser(username, password, firstname, lastname, function(res) {
        var authenticated = false;
        if (res.authenticated) {
          console.log('signup and login successful!');
          authenticated = true;
        }
        if (callback) {
          callback(authenticated);
        }
        that.onChange(authenticated);
    });
  },

  logout: function(callback) {
    deleteAllCookies();

    function deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    };

    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  loggedIn: function() {
    // check the flash session cookie
    var good = false;
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("flash-session=");
      if(eqPos > -1) good = true;
    }

    return good;
  },

  onChange: function() {}
};

module.exports = Auth;
},{}],"/Users/mikemsrk/goflux/pub/app/services/CommentService.js":[function(require,module,exports){
var addComment = function(threadId,body,callback) {
  return $.ajax({
    type: 'POST',
    url: '/createThreadPost',
    data: JSON.stringify({
      "thread_id": parseInt(threadId),
      "contents": body
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};


var fetchComment = function(id,callback) {
  $.ajax({
    type: 'GET',
    url: '/getUserInfo',
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

// Grabs Comments for page number
var fetchPage = function(threadId, page, callback) {
  $.ajax({
    type: 'POST',
    url: '/getThreadPostsByRating',
    data: JSON.stringify({"thread_id": parseInt(threadId), "page_number" : parseInt(page)}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });

};

var fetchUserPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByUserId',
    data: JSON.stringify({"page_number" : page}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

var updateComment = function(bio,avatar,callback) {
  return $.ajax({
    type: 'POST',
    url: '/updateUserInfo',
    data: JSON.stringify({
      "bio": bio,
      "avatar_link": avatar
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

var upVote = function(post_id, callback) {
  console.log('upvoting...',post_id);
  $.ajax({
    type: 'POST',
    url: '/upvoteThreadPost',
    data: JSON.stringify({"post_id" : parseInt(post_id)}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });

};

var downVote = function(post_id, callback) {
  console.log('downvoting...',post_id);
  $.ajax({
    type: 'POST',
    url: '/downvoteThreadPost',
    data: JSON.stringify({"post_id" : parseInt(post_id)}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });

};

var Comment = {

  fetchPage: function(threadId, page, callback) {
    var that = this;
    fetchPage(threadId, page ,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchUserPage: function(page,callback) {
    var that = this;
    fetchUserPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  add: function(threadId, body, callback) {
    var that = this;

    addComment(threadId, body, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    updateComment(bio, avatar, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  delete: function(callback) {
    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  upVote: function(post_id,callback){
    var that = this;

    upVote(post_id, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },

  downVote: function(post_id,callback){
    var that = this;

    downVote(post_id, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },


  onChange: function() {}
};

module.exports = Comment;
},{}],"/Users/mikemsrk/goflux/pub/app/services/ProfileService.js":[function(require,module,exports){
var fetchUser = function(callback) {
  $.ajax({
    type: 'GET',
    url: '/getUserInfo',
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

var updateUser = function(bio,avatar,callback) {
  return $.ajax({
    type: 'POST',
    url: '/updateUserInfo',
    data: JSON.stringify({
      "bio": bio,
      "avatar_link": avatar
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

var Profile = {
  fetch: function(callback) {
    var that = this;
    fetchUser((function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    }));
  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    console.log(JSON.stringify({bio:bio,avatar_link:avatar}));
    updateUser(bio, avatar, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  delete: function(callback) {
    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  onChange: function() {}
};

module.exports = Profile;
},{}],"/Users/mikemsrk/goflux/pub/app/services/ThreadService.js":[function(require,module,exports){
var addThread = function(title,body,callback) {
  return $.ajax({
    type: 'POST',
    url: '/createForumThread',
    data: JSON.stringify({
      "title": title,
      "body": body
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};


var fetchThread = function(id,callback) {
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByThreadId',
    data: JSON.stringify({"thread_id" : parseInt(id), "page_number" : 1}),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

// Grabs threads for page number
var fetchPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByRating',
    data: JSON.stringify({"page_number" : page}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

var fetchUserPage = function(page, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/getForumThreadsByUserId',
    data: JSON.stringify({"page_number" : page}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });
};

var updateThread = function(bio,avatar,callback) {
  return $.ajax({
    type: 'POST',
    url: '/updateUserInfo',
    data: JSON.stringify({
      "bio": bio,
      "avatar_link": avatar
    }),
    crossDomain: true,
    success: function(resp) {
      console.log('success',resp);
      return callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      if(resp.responseText === ""){ // if no error msg
        callback(resp);
      }else{         // if error msg
        callback(null);
      }
    }
  });
};

var upVote = function(thread_id, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/upvoteForumThread',
    data: JSON.stringify({"thread_id" : thread_id}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });

};

var downVote = function(thread_id, callback) {
  
  $.ajax({
    type: 'POST',
    url: '/downvoteForumThread',
    data: JSON.stringify({"thread_id" : thread_id}),
    crossDomain: true,
    success: function(resp) { // WORKING for fetchuser?
      // console.log('success',resp);
      callback(resp);
    },
    error: function(resp) {
      // TODO: Fix this, this always goes to error - not sure.
      // Found out - jQuery 1.4.2 works with current go server, but breaks with newer ver.
      console.log('error',resp);
      callback(null);
    }
  });

};

var Thread = {
  fetchThread: function(id,callback) {
    var that = this;
    fetchThread(id,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchPage: function(page,callback) {
    var that = this;
    fetchPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  fetchUserPage: function(page,callback) {
    var that = this;
    fetchUserPage(page,function(res) {
        if (callback) {
          callback(res);
        }
        that.onChange(res);
    });
  },

  add: function(title, body, callback) {
    var that = this;

    addThread(title, body, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });

  },
  
  update: function(bio, avatar, callback) {
    var that = this;
    updateThread(bio, avatar, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  delete: function(callback) {
    if (callback) {
      callback();
    }
    this.onChange(false);
  },

  upVote: function(thread_id,callback){
    var that = this;

    upVote(thread_id, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  downVote: function(thread_id,callback){
    var that = this;

    downVote(thread_id, function(res) {
      if (callback) {
        callback(res);
      }
      that.onChange(res);
    });
  },

  onChange: function() {}
};

module.exports = Thread;
},{}],"/Users/mikemsrk/goflux/pub/app/stores/AuthStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var Auth = require('../services/AuthService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = null;
var _loggedIn = null;
var _error = null;

var AuthStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  error: function(){
    return _error;
  },

  login: function(username,pass){
    var that = this;
    _error = false;
    Auth.login(username,pass,function(success){

      if(success){
        _loggedIn = true;
      }else{
        _loggedIn = false;
        _error = true;
      }
      that.emitChange();

    });
  },
  // log out user
  logout: function() {
    var that = this;
    Auth.logout(function(){
      _loggedIn = false;
      that.emitChange();
    });
  },

  loggedIn: function() {
    return Auth.loggedIn();
  },

  signup: function(username,password,firstname,lastname){
    var that = this;
    _error = false;
    Auth.signup(username, password, firstname, lastname, function(success) {

      if(success){
        _loggedIn = true;
      }else{
        _loggedIn = false;
        _error = true;
      }
      that.emitChange();

    });
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AuthConstants.SIGNUP:
      AuthStore.signup(action.data.username,action.data.password,action.data.firstname,action.data.lastname);
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGIN:
      AuthStore.login(action.data.username,action.data.pass);
      AuthStore.emitChange();
      break;
    case AuthConstants.LOGOUT:
      AuthStore.logout();
      // RouterContainer.get().transitionTo('/login');
      break;
    default:
      return true;
  }

  AuthStore.emitChange();
  return true;
});

module.exports = AuthStore;
},{"../constants/AuthConstants":"/Users/mikemsrk/goflux/pub/app/constants/AuthConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/AuthService":"/Users/mikemsrk/goflux/pub/app/services/AuthService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/CommentStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');
var Comment = require('../services/CommentService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _comments = [];
var _userComments = [];
var _comment = null;

var CommentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getComment: function(){
    return _comment;
  },

  getComments: function(){
    return _comments;
  },

  getUserComments: function(){
    return _userComments;
  },

  fetchPage: function(threadId, page){
    var that = this;
    Comment.fetchPage(threadId, page, function(data){
      _comments = data;
      console.log(data);
      that.emitChange();
    });
  },

  fetchUserPage: function(page){
    var that = this;
    Comment.fetchUserPage(page, function(data){
      _userComments = data;
      that.emitChange();
    });
  },

  add: function(threadId,body){
    var that = this;
    Comment.add(threadId,body,function(data){
      that.emitChange();
    });
  },

  upVote: function(post_id){
    var that = this;
    Comment.upVote(post_id,function(data){
      that.emitChange();
    });
  },

  downVote: function(post_id){
    var that = this;
    Comment.downVote(post_id,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Comment.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case CommentConstants.POST_FETCHPAGE:
      CommentStore.fetchPage(action.data.threadId, action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.POST_FETCHUSERPAGE:
      CommentStore.fetchUserPage(action.data.page);
      CommentStore.emitChange();
      break;
    case CommentConstants.POST_ADD:
      CommentStore.add(action.data.threadId,action.data.body);
      break;
    case CommentConstants.POST_UPDATE:
      // TODO: Updating a Comment

      break;
    case CommentConstants.POST_DELETE:
      // TODO: Deleting a Comment
      break;
    case CommentConstants.POST_UPVOTE:
      CommentStore.upVote(action.data.post_id);
      break;
    case CommentConstants.POST_DOWNVOTE:
      CommentStore.downVote(action.data.post_id);
      break;

    default:
      return true;
  }

  CommentStore.emitChange();
  return true;
});

module.exports = CommentStore;
},{"../constants/CommentConstants":"/Users/mikemsrk/goflux/pub/app/constants/CommentConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/CommentService":"/Users/mikemsrk/goflux/pub/app/services/CommentService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/ProfileStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProfileConstants = require('../constants/ProfileConstants');
var Profile = require('../services/ProfileService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store = {
  avatar_link: "",
  bio: "",
  first_name: "",
  last_name: "",
  user_name: "",
  id: 0,
  rep: 0
};

var ProfileStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getBio: function(){
    return _store;
  },

  fetch: function(){
    var that = this;
    Profile.fetch(function(data){
      _store = data;
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    var that = this;
    Profile.update(bio,avatar,function(data){
      console.log('update successful');
      that.fetch();
    });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case ProfileConstants.FETCH:
      ProfileStore.fetch();
      ProfileStore.emitChange();
      break;
    case ProfileConstants.UPDATE:
      ProfileStore.update(action.data.bio,action.data.avatar_link);
      ProfileStore.emitChange();
      break;
    case ProfileStore.DELETE:
      ProfileStore.delete();
      break;
    default:
      return true;
  }

  ProfileStore.emitChange();
  return true;
});

module.exports = ProfileStore;
},{"../constants/ProfileConstants":"/Users/mikemsrk/goflux/pub/app/constants/ProfileConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/ProfileService":"/Users/mikemsrk/goflux/pub/app/services/ProfileService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/app/stores/ThreadStore.js":[function(require,module,exports){
var AppDispatcher = require('../dispatchers/AppDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var Thread = require('../services/ThreadService');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _threads = [];
var _userThreads = [];
var _thread = null;

var ThreadStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

  getThread: function(){
    return _thread;
  },

  getThreads: function(){
    return _threads;
  },

  getUserThreads: function(){
    return _userThreads;
  },

  fetchThread: function(id){
    var that = this;
    Thread.fetchThread(id, function(data){
      _thread = data;
      that.emitChange();
    });
  },

  fetchPage: function(page){
    var that = this;
    Thread.fetchPage(page, function(data){
      _threads = data;
      that.emitChange();
    });
  },

  fetchUserPage: function(page){
    var that = this;
    Thread.fetchUserPage(page, function(data){
      _userThreads = data;
      that.emitChange();
    });
  },

  add: function(title,body){
    var that = this;
    Thread.add(title,body,function(data){
      that.emitChange();
    });
  },

  upVote: function(thread_id){
    var that = this;
    Thread.upVote(thread_id,function(data){
      that.emitChange();
    });
  },

  downVote: function(thread_id){
    var that = this;
    Thread.downVote(thread_id,function(data){
      that.emitChange();
    });
  },

  update: function(bio,avatar){
    // var that = this;
    // Thread.update(bio,avatar,function(data){
    //   console.log('update successful');
    //   that.fetch();
    // });
  },

  delete: function(){


  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});


AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case ThreadConstants.FETCHPAGE:
      ThreadStore.fetchPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHUSERPAGE:
      ThreadStore.fetchUserPage(action.data.page);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.FETCHTHREAD:
      ThreadStore.fetchThread(action.data.id);
      ThreadStore.emitChange();
      break;
    case ThreadConstants.ADD:
      ThreadStore.add(action.data.title,action.data.body);
      break;
    case ThreadConstants.UPDATE:
      // TODO: Updating a thread

      break;
    case ThreadConstants.DELETE:
      // TODO: Deleting a thread

      break;
    case ThreadConstants.UPVOTE:
      ThreadStore.upVote(action.data.thread_id);
      break;
    case ThreadConstants.DOWNVOTE:
      ThreadStore.downVote(action.data.thread_id);
      break;
    default:
      return true;
  }

  ThreadStore.emitChange();
  return true;
});

module.exports = ThreadStore;
},{"../constants/ThreadConstants":"/Users/mikemsrk/goflux/pub/app/constants/ThreadConstants.js","../dispatchers/AppDispatcher":"/Users/mikemsrk/goflux/pub/app/dispatchers/AppDispatcher.js","../services/ThreadService":"/Users/mikemsrk/goflux/pub/app/services/ThreadService.js","events":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js","object-assign":"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/mikemsrk/goflux/pub/node_modules/flux/index.js":[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher')

},{"./lib/Dispatcher":"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/Dispatcher.js"}],"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/Dispatcher.js":[function(require,module,exports){
/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */

"use strict";

var invariant = require('./invariant');

var _lastID = 1;
var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   *
   * @param {function} callback
   * @return {string}
   */
  Dispatcher.prototype.register=function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   *
   * @param {string} id
   */
  Dispatcher.prototype.unregister=function(id) {
    invariant(
      this.$Dispatcher_callbacks[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.$Dispatcher_callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   *
   * @param {array<string>} ids
   */
  Dispatcher.prototype.waitFor=function(ids) {
    invariant(
      this.$Dispatcher_isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(
          this.$Dispatcher_isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.$Dispatcher_callbacks[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.$Dispatcher_invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   *
   * @param {object} payload
   */
  Dispatcher.prototype.dispatch=function(payload) {
    invariant(
      !this.$Dispatcher_isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   *
   * @return {boolean}
   */
  Dispatcher.prototype.isDispatching=function() {
    return this.$Dispatcher_isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };


module.exports = Dispatcher;

},{"./invariant":"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/flux/lib/invariant.js":[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/object-assign/index.js":[function(require,module,exports){
'use strict';
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/index.js":[function(require,module,exports){
(function (global){
/* jshint node:true */
'use strict';

// Expose `React` as a global, because the ReactIntlMixin assumes it's global.
var oldReact = global.React;
global.React = require('react');

// Require the lib and add all locale data to `ReactIntl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
var ReactIntl = require('./lib/react-intl');
require('./lib/locales');

// Export the Mixin as the default export for back-compat with v1.0.0. This will
// be changed to simply re-exporting `ReactIntl` as the default export in v2.0.
exports = module.exports = ReactIntl.IntlMixin;

// Define non-enumerable expandos for each named export on the default export --
// which is the Mixin for back-compat with v1.0.0.
Object.keys(ReactIntl).forEach(function (namedExport) {
    Object.defineProperty(exports, namedExport, {
        enumerable: true,
        value     : ReactIntl[namedExport]
    });
});

// Put back `global.React` to how it was.
if (oldReact) {
    global.React = oldReact;
} else {
    // IE < 9 will throw when trying to delete something off the global object,
    // `window`, so this does the next best thing as sets it to `undefined`.
    try {
        delete global.React;
    } catch (e) {
        global.React = undefined;
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/react-intl":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react-intl.js","react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/date.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedDate = src$react$$["default"].createClass({
    displayName: 'FormattedDate',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('date', format);
        var options  = FormattedDate.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatDate(value, options));
    }
});

exports["default"] = FormattedDate;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/html-message.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$escape$$ = require("../escape"), src$mixin$$ = require("../mixin");

var FormattedHTMLMessage = src$react$$["default"].createClass({
    displayName: 'FormattedHTMLMessage',
    mixins     : [src$mixin$$["default"]],

    propTypes: {
        tagName: src$react$$["default"].PropTypes.string,
        message: src$react$$["default"].PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props   = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Process all the props before they are used as values when formatting
        // the ICU Message string. Since the formatted message will be injected
        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
        // React Elements that are passed as props will be rendered to a static
        // markup string that is presumed to be safe.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];

            if (typeof value === 'string') {
                value = src$escape$$["default"](value);
            } else if (src$react$$["default"].isValidElement(value)) {
                value = src$react$$["default"].renderToStaticMarkup(value);
            }

            values[name] = value;
            return values;
        }, {});

        // Since the message presumably has HTML in it, we need to set
        // `innerHTML` in order for it to be rendered and not escaped by React.
        // To be safe, all string prop values were escaped before formatting the
        // message. It is assumed that the message is not UGC, and came from
        // the developer making it more like a template.
        //
        // Note: There's a perf impact of using this component since there's no
        // way for React to do its virtual DOM diffing.
        return src$react$$["default"].DOM[tagName]({
            dangerouslySetInnerHTML: {
                __html: this.formatMessage(message, values)
            }
        });
    }
});

exports["default"] = FormattedHTMLMessage;


},{"../escape":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/escape.js","../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/message.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedMessage = src$react$$["default"].createClass({
    displayName: 'FormattedMessage',
    mixins     : [src$mixin$$["default"]],

    propTypes: {
        tagName: src$react$$["default"].PropTypes.string,
        message: src$react$$["default"].PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {tagName: 'span'};
    },

    render: function () {
        var props   = this.props;
        var tagName = props.tagName;
        var message = props.message;

        // Creates a token with a random guid that should not be guessable or
        // conflict with other parts of the `message` string.
        var guid       = Math.floor(Math.random() * 0x10000000000).toString(16);
        var tokenRegex = new RegExp('(@__ELEMENT-' + guid + '-\\d+__@)', 'g');
        var elements   = {};

        var generateToken = (function () {
            var counter = 0;
            return function () {
                return '@__ELEMENT-' + guid + '-' + (counter += 1) + '__@';
            };
        }());

        // Iterates over the `props` to keep track of any React Element values
        // so they can be represented by the `token` as a placeholder when the
        // `message` is formatted. This allows the formatted message to then be
        // broken-up into parts with references to the React Elements inserted
        // back in.
        var values = Object.keys(props).reduce(function (values, name) {
            var value = props[name];
            var token;

            if (src$react$$["default"].isValidElement(value)) {
                token           = generateToken();
                values[name]    = token;
                elements[token] = value;
            } else {
                values[name] = value;
            }

            return values;
        }, {});

        // Formats the `message` with the `values`, including the `token`
        // placeholders for React Element values.
        var formattedMessage = this.formatMessage(message, values);

        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while keeping
        // React's virtual diffing working properly.
        var children = formattedMessage.split(tokenRegex)
            .filter(function (part) {
                // Ignore empty string parts.
                return !!part;
            })
            .map(function (part) {
                // When the `part` is a token, get a ref to the React Element.
                return elements[part] || part;
            });

        var elementArgs = [tagName, null].concat(children);
        return src$react$$["default"].createElement.apply(null, elementArgs);
    }
});

exports["default"] = FormattedMessage;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/number.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedNumber = src$react$$["default"].createClass({
    displayName: 'FormattedNumber',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'style', 'currency', 'currencyDisplay',
            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
            'maximumFractionDigits', 'minimumSignificantDigits',
            'maximumSignificantDigits'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('number', format);
        var options  = FormattedNumber.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatNumber(value, options));
    }
});

exports["default"] = FormattedNumber;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/relative.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedRelative = src$react$$["default"].createClass({
    displayName: 'FormattedRelative',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'style', 'units'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired,
        now   : src$react$$["default"].PropTypes.any
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('relative', format);
        var options  = FormattedRelative.filterFormatOptions(props, defaults);

        var formattedRelativeTime = this.formatRelative(value, options, {
            now: props.now
        });

        return src$react$$["default"].DOM.span(null, formattedRelativeTime);
    }
});

exports["default"] = FormattedRelative;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/time.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("../react"), src$mixin$$ = require("../mixin");

var FormattedTime = src$react$$["default"].createClass({
    displayName: 'FormattedTime',
    mixins     : [src$mixin$$["default"]],

    statics: {
        formatOptions: [
            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
            'timeZoneName'
        ]
    },

    propTypes: {
        format: src$react$$["default"].PropTypes.string,
        value : src$react$$["default"].PropTypes.any.isRequired
    },

    render: function () {
        var props    = this.props;
        var value    = props.value;
        var format   = props.format;
        var defaults = format && this.getNamedFormat('time', format);
        var options  = FormattedTime.filterFormatOptions(props, defaults);

        return src$react$$["default"].DOM.span(null, this.formatTime(value, options));
    }
});

exports["default"] = FormattedTime;


},{"../mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","../react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js":[function(require,module,exports){
// GENERATED FILE
"use strict";
exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/escape.js":[function(require,module,exports){
/* jshint esnext:true */

/*
HTML escaping implementation is the same as React's (on purpose.) Therefore, it
has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/
"use strict";
var ESCAPED_CHARS = {
    '&' : '&amp;',
    '>' : '&gt;',
    '<' : '&lt;',
    '"' : '&quot;',
    '\'': '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

exports["default"] = function (str) {
    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
        return ESCAPED_CHARS[match];
    });
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js":[function(require,module,exports){
/* jshint esnext:true */

// TODO: Use `import React from "react";` when external modules are supported.
"use strict";
var src$react$$ = require("./react"), intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), intl$format$cache$$ = require("intl-format-cache");

// -----------------------------------------------------------------------------

var typesSpec = {
    locales: src$react$$["default"].PropTypes.oneOfType([
        src$react$$["default"].PropTypes.string,
        src$react$$["default"].PropTypes.array
    ]),

    formats : src$react$$["default"].PropTypes.object,
    messages: src$react$$["default"].PropTypes.object
};

function assertIsDate(date, errMsg) {
    // Determine if the `date` is valid by checking if it is finite, which is
    // the same way that `Intl.DateTimeFormat#format()` checks.
    if (!isFinite(date)) {
        throw new TypeError(errMsg);
    }
}

exports["default"] = {
    statics: {
        filterFormatOptions: function (obj, defaults) {
            if (!defaults) { defaults = {}; }

            return (this.formatOptions || []).reduce(function (opts, name) {
                if (obj.hasOwnProperty(name)) {
                    opts[name] = obj[name];
                } else if (defaults.hasOwnProperty(name)) {
                    opts[name] = defaults[name];
                }

                return opts;
            }, {});
        }
    },

    propTypes        : typesSpec,
    contextTypes     : typesSpec,
    childContextTypes: typesSpec,

    getNumberFormat  : intl$format$cache$$["default"](Intl.NumberFormat),
    getDateTimeFormat: intl$format$cache$$["default"](Intl.DateTimeFormat),
    getMessageFormat : intl$format$cache$$["default"](intl$messageformat$$["default"]),
    getRelativeFormat: intl$format$cache$$["default"](intl$relativeformat$$["default"]),

    getChildContext: function () {
        var context = this.context;
        var props   = this.props;

        return {
            locales:  props.locales  || context.locales,
            formats:  props.formats  || context.formats,
            messages: props.messages || context.messages
        };
    },

    formatDate: function (date, options) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatDate()');
        return this._format('date', date, options);
    },

    formatTime: function (date, options) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatTime()');
        return this._format('time', date, options);
    },

    formatRelative: function (date, options, formatOptions) {
        date = new Date(date);
        assertIsDate(date, 'A date or timestamp must be provided to formatRelative()');
        return this._format('relative', date, options, formatOptions);
    },

    formatNumber: function (num, options) {
        return this._format('number', num, options);
    },

    formatMessage: function (message, values) {
        var locales = this.props.locales || this.context.locales;
        var formats = this.props.formats || this.context.formats;

        // When `message` is a function, assume it's an IntlMessageFormat
        // instance's `format()` method passed by reference, and call it. This
        // is possible because its `this` will be pre-bound to the instance.
        if (typeof message === 'function') {
            return message(values);
        }

        if (typeof message === 'string') {
            message = this.getMessageFormat(message, locales, formats);
        }

        return message.format(values);
    },

    getIntlMessage: function (path) {
        var messages  = this.props.messages || this.context.messages;
        var pathParts = path.split('.');

        var message;

        try {
            message = pathParts.reduce(function (obj, pathPart) {
                return obj[pathPart];
            }, messages);
        } finally {
            if (message === undefined) {
                throw new ReferenceError('Could not find Intl message: ' + path);
            }
        }

        return message;
    },

    getNamedFormat: function (type, name) {
        var formats = this.props.formats || this.context.formats;
        var format  = null;

        try {
            format = formats[type][name];
        } finally {
            if (!format) {
                throw new ReferenceError(
                    'No ' + type + ' format named: ' + name
                );
            }
        }

        return format;
    },

    _format: function (type, value, options, formatOptions) {
        var locales = this.props.locales || this.context.locales;

        if (options && typeof options === 'string') {
            options = this.getNamedFormat(type, options);
        }

        switch(type) {
            case 'date':
            case 'time':
                return this.getDateTimeFormat(locales, options).format(value);
            case 'number':
                return this.getNumberFormat(locales, options).format(value);
            case 'relative':
                return this.getRelativeFormat(locales, options).format(value, formatOptions);
            default:
                throw new Error('Unrecognized format type: ' + type);
        }
    }
};


},{"./react":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js","intl-format-cache":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/index.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js","intl-relativeformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react-intl.js":[function(require,module,exports){
/* jshint esnext: true */

"use strict";
exports.__addLocaleData = __addLocaleData;
var intl$messageformat$$ = require("intl-messageformat"), intl$relativeformat$$ = require("intl-relativeformat"), src$en$$ = require("./en"), src$mixin$$ = require("./mixin"), src$components$date$$ = require("./components/date"), src$components$time$$ = require("./components/time"), src$components$relative$$ = require("./components/relative"), src$components$number$$ = require("./components/number"), src$components$message$$ = require("./components/message"), src$components$html$message$$ = require("./components/html-message");
function __addLocaleData(data) {
    intl$messageformat$$["default"].__addLocaleData(data);
    intl$relativeformat$$["default"].__addLocaleData(data);
}

__addLocaleData(src$en$$["default"]);
exports.IntlMixin = src$mixin$$["default"], exports.FormattedDate = src$components$date$$["default"], exports.FormattedTime = src$components$time$$["default"], exports.FormattedRelative = src$components$relative$$["default"], exports.FormattedNumber = src$components$number$$["default"], exports.FormattedMessage = src$components$message$$["default"], exports.FormattedHTMLMessage = src$components$html$message$$["default"];


},{"./components/date":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/date.js","./components/html-message":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/html-message.js","./components/message":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/message.js","./components/number":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/number.js","./components/relative":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/relative.js","./components/time":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/components/time.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js","./mixin":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/mixin.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js","intl-relativeformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/react.js":[function(require,module,exports){
/* global React */
/* jshint esnext:true */

// TODO: Remove the global `React` binding lookup once the ES6 Module Transpiler
// supports external modules. This is a hack for now that provides the local
// modules a referece to React.
"use strict";
exports["default"] = React;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/index.js":[function(require,module,exports){
'use strict';

exports = module.exports = require('./lib/memoizer')['default'];
exports['default'] = exports;

},{"./lib/memoizer":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/memoizer.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/es5.js":[function(require,module,exports){
"use strict";

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var hop = Object.prototype.hasOwnProperty;

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/memoizer.js":[function(require,module,exports){
"use strict";
var src$es5$$ = require("./es5");
exports["default"] = createFormatCache;

// -----------------------------------------------------------------------------

function createFormatCache(FormatConstructor) {
    var cache = src$es5$$.objCreate(null);

    return function () {
        var args    = Array.prototype.slice.call(arguments);
        var cacheId = getCacheId(args);
        var format  = cacheId && cache[cacheId];

        if (!format) {
            format = src$es5$$.objCreate(FormatConstructor.prototype);
            FormatConstructor.apply(format, args);

            if (cacheId) {
                cache[cacheId] = format;
            }
        }

        return format;
    };
}

// -- Utilities ----------------------------------------------------------------

function getCacheId(inputs) {
    // When JSON is not available in the runtime, we will not create a cache id.
    if (typeof JSON === 'undefined') { return; }

    var cacheId = [];

    var i, len, input;

    for (i = 0, len = inputs.length; i < len; i += 1) {
        input = inputs[i];

        if (input && typeof input === 'object') {
            cacheId.push(orderedProps(input));
        } else {
            cacheId.push(input);
        }
    }

    return JSON.stringify(cacheId);
}

function orderedProps(obj) {
    var props = [],
        keys  = [];

    var key, i, len, prop;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    var orderedKeys = keys.sort();

    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
        key  = orderedKeys[i];
        prop = {};

        prop[key] = obj[key];
        props[i]  = prop;
    }

    return props;
}


},{"./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-format-cache/lib/es5.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js":[function(require,module,exports){
/* jshint node:true */

'use strict';

var IntlMessageFormat = require('./lib/main')['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
require('./lib/locales');

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/main":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/compiler.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value) {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/core.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var src$utils$$ = require("./utils"), src$es5$$ = require("./es5"), src$compiler$$ = require("./compiler"), intl$messageformat$parser$$ = require("intl-messageformat-parser");
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
        return messageFormat._format(pattern, values);
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
            throw new Error('A value must be provided for: ' + id);
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};


},{"./compiler":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/compiler.js","./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/es5.js","./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js","intl-messageformat-parser":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/en.js":[function(require,module,exports){
// GENERATED FILE
"use strict";
exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/es5.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var src$utils$$ = require("./utils");

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate;


},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js":[function(require,module,exports){
/* jslint esnext: true */

"use strict";
var src$core$$ = require("./core"), src$en$$ = require("./en");

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];


},{"./core":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/core.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/en.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/utils.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js":[function(require,module,exports){
'use strict';

exports = module.exports = require('./lib/parser')['default'];
exports['default'] = exports;

},{"./lib/parser":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js":[function(require,module,exports){
"use strict";

exports["default"] = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements
                };
            },
        peg$c2 = peg$FAILED,
        peg$c3 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c4 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText
                };
            },
        peg$c5 = /^[^ \t\n\r,.+={}#]/,
        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c7 = "{",
        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c9 = null,
        peg$c10 = ",",
        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
        peg$c12 = "}",
        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c14 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2]
                };
            },
        peg$c15 = "number",
        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c17 = "date",
        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c19 = "time",
        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c21 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2]
                };
            },
        peg$c22 = "plural",
        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options
                };
            },
        peg$c25 = "selectordinal",
        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c27 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options
                }
            },
        peg$c28 = "select",
        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c30 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options
                };
            },
        peg$c31 = "=",
        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c33 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern
                };
            },
        peg$c34 = "offset:",
        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c36 = function(number) {
                return number;
            },
        peg$c37 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options
                };
            },
        peg$c38 = { type: "other", description: "whitespace" },
        peg$c39 = /^[ \t\n\r]/,
        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c41 = { type: "other", description: "optionalWhitespace" },
        peg$c42 = /^[0-9]/,
        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c44 = /^[0-9a-f]/i,
        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c46 = "0",
        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c48 = /^[1-9]/,
        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c50 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c2;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c2;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$c2;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c2;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c3(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c4(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c5.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c6); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c5.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
          }
        } else {
          s1 = peg$c2;
        }
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c7;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c10;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c11); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$c2;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$c2;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$c2;
              }
              if (s5 === peg$FAILED) {
                s5 = peg$c9;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c12;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c14(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c15) {
        s1 = peg$c15;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c17) {
          s1 = peg$c17;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c19) {
            s1 = peg$c19;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c10;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c2;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c2;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c2;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c9;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c21(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c28) {
        s1 = peg$c28;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$c2;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c30(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c31;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c2;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c7;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c8); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c12;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c33(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c34) {
        s1 = peg$c34;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c36(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = peg$c9;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$c2;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c37(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c39.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c39.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c40); }
          }
        }
      } else {
        s0 = peg$c2;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c42.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c44.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c46;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c48.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c2;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c50(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c51.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c52); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c53) {
          s1 = peg$c53;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c55();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c56) {
            s1 = peg$c56;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c57); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c58();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c59) {
              s1 = peg$c59;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c60); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c61();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c62) {
                s1 = peg$c62;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c63); }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$currPos;
                s4 = peg$parsehexDigit();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsehexDigit();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parsehexDigit();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parsehexDigit();
                      if (s7 !== peg$FAILED) {
                        s4 = [s4, s5, s6, s7];
                        s3 = s4;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$c2;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$c2;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$c2;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$c2;
                }
                if (s3 !== peg$FAILED) {
                  s3 = input.substring(s2, peg$currPos);
                }
                s2 = s3;
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c64(s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/index.js":[function(require,module,exports){
/* jshint node:true */

'use strict';

var IntlRelativeFormat = require('./lib/main')['default'];

// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
require('./lib/locales');

// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlRelativeFormat;
exports['default'] = exports;

},{"./lib/locales":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/browser-resolve/empty.js","./lib/main":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/main.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/core.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
var intl$messageformat$$ = require("intl-messageformat"), src$diff$$ = require("./diff"), src$es5$$ = require("./es5");
exports["default"] = RelativeFormat;

// -----------------------------------------------------------------------------

var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
var STYLES = ['best fit', 'numeric'];

// -- RelativeFormat -----------------------------------------------------------

function RelativeFormat(locales, options) {
    options = options || {};

    // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.
    if (src$es5$$.isArray(locales)) {
        locales = locales.concat();
    }

    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
    src$es5$$.defineProperty(this, '_options', {value: {
        style: this._resolveStyle(options.style),
        units: this._isValidUnits(options.units) && options.units
    }});

    src$es5$$.defineProperty(this, '_locales', {value: locales});
    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var relativeFormat = this;
    this.format = function format(date, options) {
        return relativeFormat._format(date, options);
    };
}

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlRelativeFormat is missing a ' +
            '`locale` property value'
        );
    }

    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;

    // Add data to IntlMessageFormat.
    intl$messageformat$$["default"].__addLocaleData(data);
}});

// Define public `defaultLocale` property which can be set by the developer, or
// it will be set when the first RelativeFormat instance is created by
// leveraging the resolved locale from `Intl`.
src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

// Define public `thresholds` property which can be set by the developer, and
// defaults to relative time thresholds from moment.js.
src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,

    value: {
        second: 45,  // seconds to minute
        minute: 45,  // minutes to hour
        hour  : 22,  // hours to day
        day   : 26,  // days to month
        month : 11   // months to year
    }
});

RelativeFormat.prototype.resolvedOptions = function () {
    return {
        locale: this._locale,
        style : this._options.style,
        units : this._options.units
    };
};

RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales        = this._locales;
    var resolvedLocale = this._locale;

    var field        = this._fields[units];
    var relativeTime = field.relativeTime;
    var future       = '';
    var past         = '';
    var i;

    for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
            future += ' ' + i + ' {' +
                relativeTime.future[i].replace('{0}', '#') + '}';
        }
    }

    for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
            past += ' ' + i + ' {' +
                relativeTime.past[i].replace('{0}', '#') + '}';
        }
    }

    var message = '{when, select, future {{0, plural, ' + future + '}}' +
                                 'past {{0, plural, ' + past + '}}}';

    // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.
    return new intl$messageformat$$["default"](message, locales);
};

RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages;

    // Create a new synthetic message based on the locale data from CLDR.
    if (!messages[units]) {
        messages[units] = this._compileMessage(units);
    }

    return messages[units];
};

RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];

    if (field.relative) {
        return field.relative[diff];
    }
};

RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.
    while (data) {
        if (data.fields) {
            return data.fields;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
        locale
    );
};

RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();

    if (date === undefined) {
        date = now;
    }

    // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.
    if (!isFinite(now)) {
        throw new RangeError(
            'The `now` option provided to IntlRelativeFormat#format() is not ' +
            'in valid range.'
        );
    }

    if (!isFinite(date)) {
        throw new RangeError(
            'The date value provided to IntlRelativeFormat#format() is not ' +
            'in valid range.'
        );
    }

    var diffReport  = src$diff$$["default"](now, date);
    var units       = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];

    if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
        if (relativeUnits) {
            return relativeUnits;
        }
    }

    return this._getMessage(units).format({
        '0' : Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
    });
};

RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
    }

    if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
            throw new Error(
                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
                'value, did you mean: ' + suggestion
            );
        }
    }

    throw new Error(
        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
        'must be one of: "' + FIELDS.join('", "') + '"'
    );
};

RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(RelativeFormat.defaultLocale);

    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlRelativeFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
        return STYLES[0];
    }

    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
        return style;
    }

    throw new Error(
        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
        'must be one of: "' + STYLES.join('", "') + '"'
    );
};

RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;

    for (i = 0, l = FIELDS.length; i < l; i += 1) {
        units = FIELDS[i];

        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
            break;
        }
    }

    return units;
};


},{"./diff":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/diff.js","./es5":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/es5.js","intl-messageformat":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/diff.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";

var round = Math.round;

function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
}

exports["default"] = function (from, to) {
    // Convert to ms timestamps.
    from = +from;
    to   = +to;

    var millisecond = round(to - from),
        second      = round(millisecond / 1000),
        minute      = round(second / 60),
        hour        = round(minute / 60),
        day         = round(hour / 24),
        week        = round(day / 7);

    var rawYears = daysToYears(day),
        month    = round(rawYears * 12),
        year     = round(rawYears);

    return {
        millisecond: millisecond,
        second     : second,
        minute     : minute,
        hour       : hour,
        day        : day,
        week       : week,
        month      : month,
        year       : year
    };
};


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/en.js":[function(require,module,exports){
arguments[4]["/Users/mikemsrk/goflux/pub/node_modules/react-intl/lib/en.js"][0].apply(exports,arguments)
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/es5.js":[function(require,module,exports){
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var hop = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
        return -1;
    }

    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
            return i;
        }
    }

    return -1;
};

var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};

var dateNow = Date.now || function () {
    return new Date().getTime();
};
exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;


},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/main.js":[function(require,module,exports){
arguments[4]["/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-messageformat/lib/main.js"][0].apply(exports,arguments)
},{"./core":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/core.js","./en":"/Users/mikemsrk/goflux/pub/node_modules/react-intl/node_modules/intl-relativeformat/lib/en.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js":[function(require,module,exports){
/**
 * Represents a cancellation caused by navigating away
 * before the previous transition has fully resolved.
 */
"use strict";

function Cancellation() {}

module.exports = Cancellation;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

var History = {

  /**
   * The current number of entries in the history.
   *
   * Note: This property is read-only.
   */
  length: 1,

  /**
   * Sends the browser back one entry in the history.
   */
  back: function back() {
    invariant(canUseDOM, 'Cannot use History.back without a DOM');

    // Do this first so that History.length will
    // be accurate in location change listeners.
    History.length -= 1;

    window.history.back();
  }

};

module.exports = History;
},{"react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Match.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/* jshint -W084 */
var PathUtils = require('./PathUtils');

function deepSearch(route, pathname, query) {
  // Check the subtree first to find the most deeply-nested match.
  var childRoutes = route.childRoutes;
  if (childRoutes) {
    var match, childRoute;
    for (var i = 0, len = childRoutes.length; i < len; ++i) {
      childRoute = childRoutes[i];

      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

      if (match = deepSearch(childRoute, pathname, query)) {
        // A route in the subtree matched! Add this route and we're done.
        match.routes.unshift(route);
        return match;
      }
    }
  }

  // No child routes matched; try the default route.
  var defaultRoute = route.defaultRoute;
  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, defaultRoute]);
  } // Does the "not found" route match?
  var notFoundRoute = route.notFoundRoute;
  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, notFoundRoute]);
  } // Last attempt: check this route.
  var params = PathUtils.extractParams(route.path, pathname);
  if (params) {
    return new Match(pathname, params, query, [route]);
  }return null;
}

var Match = (function () {
  function Match(pathname, params, query, routes) {
    _classCallCheck(this, Match);

    this.pathname = pathname;
    this.params = params;
    this.query = query;
    this.routes = routes;
  }

  _createClass(Match, null, [{
    key: 'findMatch',

    /**
     * Attempts to match depth-first a route in the given route's
     * subtree against the given path and returns the match if it
     * succeeds, null if no match can be made.
     */
    value: function findMatch(routes, path) {
      var pathname = PathUtils.withoutQuery(path);
      var query = PathUtils.extractQuery(path);
      var match = null;

      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

      return match;
    }
  }]);

  return Match;
})();

module.exports = Match;
},{"./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Navigation.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: function makePath(to, params, query) {
    return this.context.router.makePath(to, params, query);
  },

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: function makeHref(to, params, query) {
    return this.context.router.makeHref(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: function transitionTo(to, params, query) {
    this.context.router.transitionTo(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: function replaceWith(to, params, query) {
    this.context.router.replaceWith(to, params, query);
  },

  /**
   * Transitions to the previous URL.
   */
  goBack: function goBack() {
    return this.context.router.goBack();
  }

};

module.exports = Navigation;
},{"./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var assign = require('object-assign');
var qs = require('qs');

var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
var queryMatcher = /\?(.*)$/;

var _compiledPatterns = {};

function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    var paramNames = [];
    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
      if (paramName) {
        paramNames.push(paramName);
        return '([^/?#]+)';
      } else if (match === '*') {
        paramNames.push('splat');
        return '(.*?)';
      } else {
        return '\\' + match;
      }
    });

    _compiledPatterns[pattern] = {
      matcher: new RegExp('^' + source + '$', 'i'),
      paramNames: paramNames
    };
  }

  return _compiledPatterns[pattern];
}

var PathUtils = {

  /**
   * Returns true if the given path is absolute.
   */
  isAbsolute: function isAbsolute(path) {
    return path.charAt(0) === '/';
  },

  /**
   * Joins two URL paths together.
   */
  join: function join(a, b) {
    return a.replace(/\/*$/, '/') + b;
  },

  /**
   * Returns an array of the names of all parameters in the given pattern.
   */
  extractParamNames: function extractParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  },

  /**
   * Extracts the portions of the given URL path that match the given pattern
   * and returns an object of param name => value pairs. Returns null if the
   * pattern does not match the given path.
   */
  extractParams: function extractParams(pattern, path) {
    var _compilePattern = compilePattern(pattern);

    var matcher = _compilePattern.matcher;
    var paramNames = _compilePattern.paramNames;

    var match = path.match(matcher);

    if (!match) {
      return null;
    }var params = {};

    paramNames.forEach(function (paramName, index) {
      params[paramName] = match[index + 1];
    });

    return params;
  },

  /**
   * Returns a version of the given route path with params interpolated. Throws
   * if there is a dynamic segment of the route path for which there is no param.
   */
  injectParams: function injectParams(pattern, params) {
    params = params || {};

    var splatIndex = 0;

    return pattern.replace(paramInjectMatcher, function (match, paramName) {
      paramName = paramName || 'splat';

      // If param is optional don't check for existence
      if (paramName.slice(-1) === '?') {
        paramName = paramName.slice(0, -1);

        if (params[paramName] == null) return '';
      } else {
        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
      }

      var segment;
      if (paramName === 'splat' && Array.isArray(params[paramName])) {
        segment = params[paramName][splatIndex++];

        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
      } else {
        segment = params[paramName];
      }

      return segment;
    }).replace(paramInjectTrailingSlashMatcher, '/');
  },

  /**
   * Returns an object that is the result of parsing any query string contained
   * in the given path, null if the path contains no query string.
   */
  extractQuery: function extractQuery(path) {
    var match = path.match(queryMatcher);
    return match && qs.parse(match[1]);
  },

  /**
   * Returns a version of the given path without the query string.
   */
  withoutQuery: function withoutQuery(path) {
    return path.replace(queryMatcher, '');
  },

  /**
   * Returns a version of the given path with the parameters in the given
   * query merged into the query string.
   */
  withQuery: function withQuery(path, query) {
    var existingQuery = PathUtils.extractQuery(path);

    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

    if (queryString) {
      return PathUtils.withoutQuery(path) + '?' + queryString;
    }return PathUtils.withoutQuery(path);
  }

};

module.exports = PathUtils;
},{"object-assign":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/object-assign/index.js","qs":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/index.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
'use strict';

var assign = require('react/lib/Object.assign');
var ReactPropTypes = require('react').PropTypes;
var Route = require('./Route');

var PropTypes = assign({}, ReactPropTypes, {

  /**
   * Indicates that a prop should be falsy.
   */
  falsy: function falsy(props, propName, componentName) {
    if (props[propName]) {
      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
    }
  },

  /**
   * Indicates that a prop should be a Route object.
   */
  route: ReactPropTypes.instanceOf(Route),

  /**
   * Indicates that a prop should be a Router object.
   */
  //router: ReactPropTypes.instanceOf(Router) // TODO
  router: ReactPropTypes.func

});

module.exports = PropTypes;
},{"./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
/**
 * Encapsulates a redirect to the given route.
 */
"use strict";

function Redirect(to, params, query) {
  this.to = to;
  this.params = params;
  this.query = query;
}

module.exports = Redirect;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var assign = require('react/lib/Object.assign');
var invariant = require('react/lib/invariant');
var warning = require('react/lib/warning');
var PathUtils = require('./PathUtils');

var _currentRoute;

var Route = (function () {
  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);

    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }

  _createClass(Route, [{
    key: 'appendChild',

    /**
     * Appends the given route to this route's child routes.
     */
    value: function appendChild(route) {
      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

      if (!this.childRoutes) this.childRoutes = [];

      this.childRoutes.push(route);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = '<Route';

      if (this.name) string += ' name="' + this.name + '"';

      string += ' path="' + this.path + '">';

      return string;
    }
  }], [{
    key: 'createRoute',

    /**
     * Creates and returns a new route. Options may be a URL pathname string
     * with placeholders for named params or an object with any of the following
     * properties:
     *
     * - name                     The name of the route. This is used to lookup a
     *                            route relative to its parent route and should be
     *                            unique among all child routes of the same parent
     * - path                     A URL pathname string with optional placeholders
     *                            that specify the names of params to extract from
     *                            the URL when the path matches. Defaults to `/${name}`
     *                            when there is a name given, or the path of the parent
     *                            route, or /
     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
     *                            the scroll behavior of the router
     * - isDefault                True to make this route the default route among all
     *                            its siblings
     * - isNotFound               True to make this route the "not found" route among
     *                            all its siblings
     * - onEnter                  A transition hook that will be called when the
     *                            router is going to enter this route
     * - onLeave                  A transition hook that will be called when the
     *                            router is going to leave this route
     * - handler                  A React component that will be rendered when
     *                            this route is active
     * - parentRoute              The parent route to use for this route. This option
     *                            is automatically supplied when creating routes inside
     *                            the callback to another invocation of createRoute. You
     *                            only ever need to use this when declaring routes
     *                            independently of one another to manually piece together
     *                            the route hierarchy
     *
     * The callback may be used to structure your route hierarchy. Any call to
     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
     * inside the callback automatically uses this route as its parent.
     */
    value: function createRoute(options, callback) {
      options = options || {};

      if (typeof options === 'string') options = { path: options };

      var parentRoute = _currentRoute;

      if (parentRoute) {
        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
      } else {
        parentRoute = options.parentRoute;
      }

      var name = options.name;
      var path = options.path || name;

      if (path && !(options.isDefault || options.isNotFound)) {
        if (PathUtils.isAbsolute(path)) {
          if (parentRoute) {
            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
          }
        } else if (parentRoute) {
          // Relative paths extend their parent.
          path = PathUtils.join(parentRoute.path, path);
        } else {
          path = '/' + path;
        }
      } else {
        path = parentRoute ? parentRoute.path : '/';
      }

      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

      if (parentRoute) {
        if (route.isDefault) {
          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

          parentRoute.defaultRoute = route;
        } else if (route.isNotFound) {
          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

          parentRoute.notFoundRoute = route;
        }

        parentRoute.appendChild(route);
      }

      // Any routes created in the callback
      // use this route as their parent.
      if (typeof callback === 'function') {
        var currentRoute = _currentRoute;
        _currentRoute = route;
        callback.call(route, route);
        _currentRoute = currentRoute;
      }

      return route;
    }
  }, {
    key: 'createDefaultRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL.
     */
    value: function createDefaultRoute(options) {
      return Route.createRoute(assign({}, options, { isDefault: true }));
    }
  }, {
    key: 'createNotFoundRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL but none of its siblings do.
     */
    value: function createNotFoundRoute(options) {
      return Route.createRoute(assign({}, options, { isNotFound: true }));
    }
  }, {
    key: 'createRedirect',

    /**
     * Creates and returns a route that automatically redirects the transition
     * to another route. In addition to the normal options to createRoute, this
     * function accepts the following options:
     *
     * - from         An alias for the `path` option. Defaults to *
     * - to           The path/route/route name to redirect to
     * - params       The params to use in the redirect URL. Defaults
     *                to using the current params
     * - query        The query to use in the redirect URL. Defaults
     *                to using the current query
     */
    value: function createRedirect(options) {
      return Route.createRoute(assign({}, options, {
        path: options.path || options.from || '*',
        onEnter: function onEnter(transition, params, query) {
          transition.redirect(options.to, options.params || params, options.query || query);
        }
      }));
    }
  }]);

  return Route;
})();

module.exports = Route;
},{"./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/ScrollHistory.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var getWindowScrollPosition = require('./getWindowScrollPosition');

function shouldUpdateScroll(state, prevState) {
  if (!prevState) {
    return true;
  } // Don't update scroll position when only the query has changed.
  if (state.pathname === prevState.pathname) {
    return false;
  }var routes = state.routes;
  var prevRoutes = prevState.routes;

  var sharedAncestorRoutes = routes.filter(function (route) {
    return prevRoutes.indexOf(route) !== -1;
  });

  return !sharedAncestorRoutes.some(function (route) {
    return route.ignoreScrollBehavior;
  });
}

/**
 * Provides the router with the ability to manage window scroll position
 * according to its scroll behavior.
 */
var ScrollHistory = {

  statics: {

    /**
     * Records curent scroll position as the last known position for the given URL path.
     */
    recordScrollPosition: function recordScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      this.scrollHistory[path] = getWindowScrollPosition();
    },

    /**
     * Returns the last known scroll position for the given URL path.
     */
    getScrollPosition: function getScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      return this.scrollHistory[path] || null;
    }

  },

  componentWillMount: function componentWillMount() {
    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
  },

  componentDidMount: function componentDidMount() {
    this._updateScroll();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this._updateScroll(prevState);
  },

  _updateScroll: function _updateScroll(prevState) {
    if (!shouldUpdateScroll(this.state, prevState)) {
      return;
    }var scrollBehavior = this.constructor.getScrollBehavior();

    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
  }

};

module.exports = ScrollHistory;
},{"./getWindowScrollPosition":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/getWindowScrollPosition.js","react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/State.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ Router.State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.DOM.a({ className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns the current URL path.
   */
  getPath: function getPath() {
    return this.context.router.getCurrentPath();
  },

  /**
   * Returns the current URL path without the query string.
   */
  getPathname: function getPathname() {
    return this.context.router.getCurrentPathname();
  },

  /**
   * Returns an object of the URL params that are currently active.
   */
  getParams: function getParams() {
    return this.context.router.getCurrentParams();
  },

  /**
   * Returns an object of the query params that are currently active.
   */
  getQuery: function getQuery() {
    return this.context.router.getCurrentQuery();
  },

  /**
   * Returns an array of the routes that are currently active.
   */
  getRoutes: function getRoutes() {
    return this.context.router.getCurrentRoutes();
  },

  /**
   * A helper method to determine if a given route, params, and query
   * are active.
   */
  isActive: function isActive(to, params, query) {
    return this.context.router.isActive(to, params, query);
  }

};

module.exports = State;
},{"./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Transition.js":[function(require,module,exports){
/* jshint -W058 */

'use strict';

var Cancellation = require('./Cancellation');
var Redirect = require('./Redirect');

/**
 * Encapsulates a transition to a given path.
 *
 * The willTransitionTo and willTransitionFrom handlers receive
 * an instance of this class as their first argument.
 */
function Transition(path, retry) {
  this.path = path;
  this.abortReason = null;
  // TODO: Change this to router.retryTransition(transition)
  this.retry = retry.bind(this);
}

Transition.prototype.abort = function (reason) {
  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
};

Transition.prototype.redirect = function (to, params, query) {
  this.abort(new Redirect(to, params, query));
};

Transition.prototype.cancel = function () {
  this.abort(new Cancellation());
};

Transition.from = function (transition, routes, components, callback) {
  routes.reduce(function (callback, route, index) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onLeave) {
        try {
          route.onLeave(transition, components[index], callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onLeave.length < 3) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

Transition.to = function (transition, routes, params, query, callback) {
  routes.reduceRight(function (callback, route) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onEnter) {
        try {
          route.onEnter(transition, params, query, callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onEnter.length < 4) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

module.exports = Transition;
},{"./Cancellation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js","./Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js":[function(require,module,exports){
/**
 * Actions that modify the URL.
 */
'use strict';

var LocationActions = {

  /**
   * Indicates a new location is being pushed to the history stack.
   */
  PUSH: 'push',

  /**
   * Indicates the current location should be replaced.
   */
  REPLACE: 'replace',

  /**
   * Indicates the most recent entry should be removed from the history stack.
   */
  POP: 'pop'

};

module.exports = LocationActions;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        window.scrollTo(0, 0);
        break;
      case LocationActions.POP:
        if (position) {
          window.scrollTo(position.x, position.y);
        } else {
          window.scrollTo(0, 0);
        }
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
},{"../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js":[function(require,module,exports){
/**
 * A scroll behavior that always scrolls to the top of the page
 * after a transition.
 */
"use strict";

var ScrollToTopBehavior = {

  updateScrollPosition: function updateScrollPosition() {
    window.scrollTo(0, 0);
  }

};

module.exports = ScrollToTopBehavior;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/ContextWrapper.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

/**
 * This component is necessary to get around a context warning
 * present in React 0.13.0. It sovles this by providing a separation
 * between the "owner" and "parent" contexts.
 */

var React = require('react');

var ContextWrapper = (function (_React$Component) {
  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ContextWrapper, _React$Component);

  _createClass(ContextWrapper, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
})(React.Component);

module.exports = ContextWrapper;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <DefaultRoute> component is a special kind of <Route> that
 * renders when its parent matches but none of its siblings do.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var DefaultRoute = (function (_Route) {
  function DefaultRoute() {
    _classCallCheck(this, DefaultRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(DefaultRoute, _Route);

  return DefaultRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

DefaultRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

DefaultRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = DefaultRoute;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Link.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to="showPost" params={{ postID: "123" }} />
 *
 * In addition to params, links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
 */

var Link = (function (_React$Component) {
  function Link() {
    _classCallCheck(this, Link);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Link, _React$Component);

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var allowTransition = true;
      var clickResult;

      if (this.props.onClick) clickResult = this.props.onClick(event);

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

      event.preventDefault();

      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getHref',

    /**
     * Returns the value of the "href" attribute to use on the DOM element.
     */
    value: function getHref() {
      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getClassName',

    /**
     * Returns the value of the "class" attribute to use on the DOM element, which contains
     * the value of the activeClassName property when this <Link> is active.
     */
    value: function getClassName() {
      var className = this.props.className;

      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

      return className;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState() {
      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = assign({}, this.props, {
        href: this.getHref(),
        className: this.getClassName(),
        onClick: this.handleClick.bind(this)
      });

      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

      return React.DOM.a(props, this.props.children);
    }
  }]);

  return Link;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Link.contextTypes = {
  router: PropTypes.router.isRequired
};

Link.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  activeStyle: PropTypes.object,
  onClick: PropTypes.func
};

Link.defaultProps = {
  activeClassName: 'active',
  className: ''
};

module.exports = Link;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <NotFoundRoute> is a special kind of <Route> that
 * renders when the beginning of its parent's path matches
 * but none of its siblings do, including any <DefaultRoute>.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var NotFoundRoute = (function (_Route) {
  function NotFoundRoute() {
    _classCallCheck(this, NotFoundRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(NotFoundRoute, _Route);

  return NotFoundRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

NotFoundRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

NotFoundRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = NotFoundRoute;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var Route = require('./Route');

/**
 * A <Redirect> component is a special kind of <Route> that always
 * redirects to another route when it matches.
 */

var Redirect = (function (_Route) {
  function Redirect() {
    _classCallCheck(this, Redirect);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(Redirect, _Route);

  return Redirect;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string, // Alias for path.
  to: PropTypes.string,
  handler: PropTypes.falsy
};

// Redirects should not have a default handler
Redirect.defaultProps = {};

module.exports = Redirect;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var invariant = require('react/lib/invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * <Route> components specify components that are rendered to the page when the
 * URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 *
 * The preferred way to configure a router is using JSX. The XML-like syntax is
 * a great way to visualize how routes are laid out in an application.
 *
 *   var routes = [
 *     <Route handler={App}>
 *       <Route name="login" handler={Login}/>
 *       <Route name="logout" handler={Logout}/>
 *       <Route name="about" handler={About}/>
 *     </Route>
 *   ];
 *   
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 *
 * Handlers for Route components that contain children can render their active
 * child route using a <RouteHandler> element.
 *
 *   var App = React.createClass({
 *     render: function () {
 *       return (
 *         <div class="application">
 *           <RouteHandler/>
 *         </div>
 *       );
 *     }
 *   });
 *
 * If no handler is provided for the route, it will render a matched child route.
 */

var Route = (function (_React$Component) {
  function Route() {
    _classCallCheck(this, Route);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Route, _React$Component);

  _createClass(Route, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return Route;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Route.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool
};

Route.defaultProps = {
  handler: RouteHandler
};

module.exports = Route;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js","react":"react","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var ContextWrapper = require('./ContextWrapper');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

var REF_NAME = '__routeHandler__';

/**
 * A <RouteHandler> component renders the active child route handler
 * when routes are nested.
 */

var RouteHandler = (function (_React$Component) {
  function RouteHandler() {
    _classCallCheck(this, RouteHandler);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(RouteHandler, _React$Component);

  _createClass(RouteHandler, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routeDepth: this.context.routeDepth + 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateRouteComponent(null);
    }
  }, {
    key: '_updateRouteComponent',
    value: function _updateRouteComponent(component) {
      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
    }
  }, {
    key: 'getRouteDepth',
    value: function getRouteDepth() {
      return this.context.routeDepth;
    }
  }, {
    key: 'createChildRouteHandler',
    value: function createChildRouteHandler(props) {
      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

      if (route == null) {
        return null;
      }var childProps = assign({}, props || this.props, {
        ref: REF_NAME,
        params: this.context.router.getCurrentParams(),
        query: this.context.router.getCurrentQuery()
      });

      return React.createElement(route.handler, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handler = this.createChildRouteHandler();
      // <script/> for things like <CSSTransitionGroup/> that don't like null
      return handler ? React.createElement(
        ContextWrapper,
        null,
        handler
      ) : React.createElement('script', null);
    }
  }]);

  return RouteHandler;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

RouteHandler.contextTypes = {
  routeDepth: PropTypes.number.isRequired,
  router: PropTypes.router.isRequired
};

RouteHandler.childContextTypes = {
  routeDepth: PropTypes.number.isRequired
};

module.exports = RouteHandler;
},{"../PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./ContextWrapper":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/ContextWrapper.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js":[function(require,module,exports){
(function (process){
/* jshint -W058 */
'use strict';

var React = require('react');
var warning = require('react/lib/warning');
var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var LocationActions = require('./actions/LocationActions');
var ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
var HashLocation = require('./locations/HashLocation');
var HistoryLocation = require('./locations/HistoryLocation');
var RefreshLocation = require('./locations/RefreshLocation');
var StaticLocation = require('./locations/StaticLocation');
var ScrollHistory = require('./ScrollHistory');
var createRoutesFromReactChildren = require('./createRoutesFromReactChildren');
var isReactChildren = require('./isReactChildren');
var Transition = require('./Transition');
var PropTypes = require('./PropTypes');
var Redirect = require('./Redirect');
var History = require('./History');
var Cancellation = require('./Cancellation');
var Match = require('./Match');
var Route = require('./Route');
var supportsHistory = require('./supportsHistory');
var PathUtils = require('./PathUtils');

/**
 * The default location for new routers.
 */
var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

/**
 * The default scroll behavior for new routers.
 */
var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

function hasProperties(object, properties) {
  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
    return false;
  }return true;
}

function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
  return routes.some(function (r) {
    if (r !== route) return false;

    var paramNames = route.paramNames;
    var paramName;

    // Ensure that all params the route cares about did not change.
    for (var i = 0, len = paramNames.length; i < len; ++i) {
      paramName = paramNames[i];

      if (nextParams[paramName] !== prevParams[paramName]) return false;
    }

    // Ensure the query hasn't changed.
    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
  });
}

function addRoutesToNamedRoutes(routes, namedRoutes) {
  var route;
  for (var i = 0, len = routes.length; i < len; ++i) {
    route = routes[i];

    if (route.name) {
      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

      namedRoutes[route.name] = route;
    }

    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
  }
}

function routeIsActive(activeRoutes, routeName) {
  return activeRoutes.some(function (route) {
    return route.name === routeName;
  });
}

function paramsAreActive(activeParams, params) {
  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
    return false;
  }return true;
}

function queryIsActive(activeQuery, query) {
  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
    return false;
  }return true;
}

/**
 * Creates and returns a new router using the given options. A router
 * is a ReactComponent class that knows how to react to changes in the
 * URL and keep the contents of the page in sync.
 *
 * Options may be any of the following:
 *
 * - routes           (required) The route config
 * - location         The location to use. Defaults to HashLocation when
 *                    the DOM is available, "/" otherwise
 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
 *                    when the DOM is available, null otherwise
 * - onError          A function that is used to handle errors
 * - onAbort          A function that is used to handle aborted transitions
 *
 * When rendering in a server-side environment, the location should simply
 * be the URL path that was used in the request, including the query string.
 */
function createRouter(options) {
  options = options || {};

  if (isReactChildren(options)) options = { routes: options };

  var mountedComponents = [];
  var location = options.location || DEFAULT_LOCATION;
  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
  var state = {};
  var nextState = {};
  var pendingTransition = null;
  var dispatchHandler = null;

  if (typeof location === 'string') location = new StaticLocation(location);

  if (location instanceof StaticLocation) {
    warning(!canUseDOM || process.env.NODE_ENV === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
  } else {
    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
  }

  // Automatically fall back to full page refreshes in
  // browsers that don't support the HTML history API.
  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

  var Router = React.createClass({

    displayName: 'Router',

    statics: {

      isRunning: false,

      cancelPendingTransition: function cancelPendingTransition() {
        if (pendingTransition) {
          pendingTransition.cancel();
          pendingTransition = null;
        }
      },

      clearAllRoutes: function clearAllRoutes() {
        Router.cancelPendingTransition();
        Router.namedRoutes = {};
        Router.routes = [];
      },

      /**
       * Adds routes to this router from the given children object (see ReactChildren).
       */
      addRoutes: function addRoutes(routes) {
        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

        addRoutesToNamedRoutes(routes, Router.namedRoutes);

        Router.routes.push.apply(Router.routes, routes);
      },

      /**
       * Replaces routes of this router from the given children object (see ReactChildren).
       */
      replaceRoutes: function replaceRoutes(routes) {
        Router.clearAllRoutes();
        Router.addRoutes(routes);
        Router.refresh();
      },

      /**
       * Performs a match of the given path against this router and returns an object
       * with the { routes, params, pathname, query } that match. Returns null if no
       * match can be made.
       */
      match: function match(path) {
        return Match.findMatch(Router.routes, path);
      },

      /**
       * Returns an absolute URL path created from the given route
       * name, URL parameters, and query.
       */
      makePath: function makePath(to, params, query) {
        var path;
        if (PathUtils.isAbsolute(to)) {
          path = to;
        } else {
          var route = to instanceof Route ? to : Router.namedRoutes[to];

          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

          path = route.path;
        }

        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
      },

      /**
       * Returns a string that may safely be used as the href of a link
       * to the route with the given name, URL parameters, and query.
       */
      makeHref: function makeHref(to, params, query) {
        var path = Router.makePath(to, params, query);
        return location === HashLocation ? '#' + path : path;
      },

      /**
       * Transitions to the URL specified in the arguments by pushing
       * a new URL onto the history stack.
       */
      transitionTo: function transitionTo(to, params, query) {
        var path = Router.makePath(to, params, query);

        if (pendingTransition) {
          // Replace so pending location does not stay in history.
          location.replace(path);
        } else {
          location.push(path);
        }
      },

      /**
       * Transitions to the URL specified in the arguments by replacing
       * the current URL in the history stack.
       */
      replaceWith: function replaceWith(to, params, query) {
        location.replace(Router.makePath(to, params, query));
      },

      /**
       * Transitions to the previous URL if one is available. Returns true if the
       * router was able to go back, false otherwise.
       *
       * Note: The router only tracks history entries in your application, not the
       * current browser session, so you can safely call this function without guarding
       * against sending the user back to some other site. However, when using
       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
       * don't support HTML5 history) this method will *always* send the client back
       * because we cannot reliably track history length.
       */
      goBack: function goBack() {
        if (History.length > 1 || location === RefreshLocation) {
          location.pop();
          return true;
        }

        warning(false, 'goBack() was ignored because there is no router history');

        return false;
      },

      handleAbort: options.onAbort || function (abortReason) {
        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

        if (abortReason instanceof Cancellation) {
          return;
        } else if (abortReason instanceof Redirect) {
          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
        } else {
          location.pop();
        }
      },

      handleError: options.onError || function (error) {
        // Throw so we don't silently swallow async errors.
        throw error; // This error probably originated in a transition hook.
      },

      handleLocationChange: function handleLocationChange(change) {
        Router.dispatch(change.path, change.type);
      },

      /**
       * Performs a transition to the given path and calls callback(error, abortReason)
       * when the transition is finished. If both arguments are null the router's state
       * was updated. Otherwise the transition did not complete.
       *
       * In a transition, a router first determines which routes are involved by beginning
       * with the current route, up the route tree to the first parent route that is shared
       * with the destination route, and back down the tree to the destination route. The
       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
       * all route handlers we're transitioning to.
       *
       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
       * transition. To resolve asynchronously, they may use the callback argument. If no
       * hooks wait, the transition is fully synchronous.
       */
      dispatch: function dispatch(path, action) {
        Router.cancelPendingTransition();

        var prevPath = state.path;
        var isRefreshing = action == null;

        if (prevPath === path && !isRefreshing) {
          return;
        } // Nothing to do!

        // Record the scroll position as early as possible to
        // get it before browsers try update it automatically.
        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

        var match = Router.match(path);

        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

        if (match == null) match = {};

        var prevRoutes = state.routes || [];
        var prevParams = state.params || {};
        var prevQuery = state.query || {};

        var nextRoutes = match.routes || [];
        var nextParams = match.params || {};
        var nextQuery = match.query || {};

        var fromRoutes, toRoutes;
        if (prevRoutes.length) {
          fromRoutes = prevRoutes.filter(function (route) {
            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });

          toRoutes = nextRoutes.filter(function (route) {
            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });
        } else {
          fromRoutes = [];
          toRoutes = nextRoutes;
        }

        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
        pendingTransition = transition;

        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

        Transition.from(transition, fromRoutes, fromComponents, function (error) {
          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
            dispatchHandler.call(Router, error, transition, {
              path: path,
              action: action,
              pathname: match.pathname,
              routes: nextRoutes,
              params: nextParams,
              query: nextQuery
            });
          });
        });
      },

      /**
       * Starts this router and calls callback(router, state) when the route changes.
       *
       * If the router's location is static (i.e. a URL path in a server environment)
       * the callback is called only once. Otherwise, the location should be one of the
       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
       */
      run: function run(callback) {
        invariant(!Router.isRunning, 'Router is already running');

        dispatchHandler = function (error, transition, newState) {
          if (error) Router.handleError(error);

          if (pendingTransition !== transition) return;

          pendingTransition = null;

          if (transition.abortReason) {
            Router.handleAbort(transition.abortReason);
          } else {
            callback.call(Router, Router, nextState = newState);
          }
        };

        if (!(location instanceof StaticLocation)) {
          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

          Router.isRunning = true;
        }

        // Bootstrap using the current path.
        Router.refresh();
      },

      refresh: function refresh() {
        Router.dispatch(location.getCurrentPath(), null);
      },

      stop: function stop() {
        Router.cancelPendingTransition();

        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

        Router.isRunning = false;
      },

      getLocation: function getLocation() {
        return location;
      },

      getScrollBehavior: function getScrollBehavior() {
        return scrollBehavior;
      },

      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
        var routes = state.routes;
        return routes && routes[routeDepth];
      },

      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
        mountedComponents[routeDepth] = component;
      },

      /**
       * Returns the current URL path + query string.
       */
      getCurrentPath: function getCurrentPath() {
        return state.path;
      },

      /**
       * Returns the current URL path without the query string.
       */
      getCurrentPathname: function getCurrentPathname() {
        return state.pathname;
      },

      /**
       * Returns an object of the currently active URL parameters.
       */
      getCurrentParams: function getCurrentParams() {
        return state.params;
      },

      /**
       * Returns an object of the currently active query parameters.
       */
      getCurrentQuery: function getCurrentQuery() {
        return state.query;
      },

      /**
       * Returns an array of the currently active routes.
       */
      getCurrentRoutes: function getCurrentRoutes() {
        return state.routes;
      },

      /**
       * Returns true if the given route, params, and query are active.
       */
      isActive: function isActive(to, params, query) {
        if (PathUtils.isAbsolute(to)) {
          return to === state.path;
        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
      }

    },

    mixins: [ScrollHistory],

    propTypes: {
      children: PropTypes.falsy
    },

    childContextTypes: {
      routeDepth: PropTypes.number.isRequired,
      router: PropTypes.router.isRequired
    },

    getChildContext: function getChildContext() {
      return {
        routeDepth: 1,
        router: Router
      };
    },

    getInitialState: function getInitialState() {
      return state = nextState;
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.setState(state = nextState);
    },

    componentWillUnmount: function componentWillUnmount() {
      Router.stop();
    },

    render: function render() {
      var route = Router.getRouteAtDepth(0);
      return route ? React.createElement(route.handler, this.props) : null;
    }

  });

  Router.clearAllRoutes();

  if (options.routes) Router.addRoutes(options.routes);

  return Router;
}

module.exports = createRouter;
}).call(this,require('_process'))

},{"./Cancellation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Cancellation.js","./History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./Match":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Match.js","./PathUtils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PathUtils.js","./PropTypes":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Redirect.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./ScrollHistory":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/ScrollHistory.js","./Transition":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Transition.js","./actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js","./behaviors/ImitateBrowserBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./createRoutesFromReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js","./isReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/isReactChildren.js","./locations/HashLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js","./supportsHistory":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/supportsHistory.js","_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js","react":"react","react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js":[function(require,module,exports){
/* jshint -W084 */
'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var warning = require('react/lib/warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) warning(false, error.message);
    }
  }
}

function createRouteOptions(props) {
  var options = assign({}, props);
  var handler = options.handler;

  if (handler) {
    options.onEnter = handler.willTransitionTo;
    options.onLeave = handler.willTransitionFrom;
  }

  return options;
}

function createRouteFromReactElement(element) {
  if (!React.isValidElement(element)) {
    return;
  }var type = element.type;
  var props = assign({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

  if (type === DefaultRoute) {
    return Route.createDefaultRoute(createRouteOptions(props));
  }if (type === NotFoundRoute) {
    return Route.createNotFoundRoute(createRouteOptions(props));
  }if (type === Redirect) {
    return Route.createRedirect(createRouteOptions(props));
  }return Route.createRoute(createRouteOptions(props), function () {
    if (props.children) createRoutesFromReactChildren(props.children);
  });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children) {
  var routes = [];

  React.Children.forEach(children, function (child) {
    if (child = createRouteFromReactElement(child)) routes.push(child);
  });

  return routes;
}

module.exports = createRoutesFromReactChildren;
},{"./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./components/DefaultRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js","./components/NotFoundRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js","react":"react","react/lib/Object.assign":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js","react/lib/warning":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/getWindowScrollPosition.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

/**
 * Returns the current scroll position of the window as { x, y }.
 */
function getWindowScrollPosition() {
  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

module.exports = getWindowScrollPosition;
},{"react/lib/ExecutionEnvironment":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/index.js":[function(require,module,exports){
'use strict';

exports.DefaultRoute = require('./components/DefaultRoute');
exports.Link = require('./components/Link');
exports.NotFoundRoute = require('./components/NotFoundRoute');
exports.Redirect = require('./components/Redirect');
exports.Route = require('./components/Route');
exports.ActiveHandler = require('./components/RouteHandler');
exports.RouteHandler = exports.ActiveHandler;

exports.HashLocation = require('./locations/HashLocation');
exports.HistoryLocation = require('./locations/HistoryLocation');
exports.RefreshLocation = require('./locations/RefreshLocation');
exports.StaticLocation = require('./locations/StaticLocation');
exports.TestLocation = require('./locations/TestLocation');

exports.ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
exports.ScrollToTopBehavior = require('./behaviors/ScrollToTopBehavior');

exports.History = require('./History');
exports.Navigation = require('./Navigation');
exports.State = require('./State');

exports.createRoute = require('./Route').createRoute;
exports.createDefaultRoute = require('./Route').createDefaultRoute;
exports.createNotFoundRoute = require('./Route').createNotFoundRoute;
exports.createRedirect = require('./Route').createRedirect;
exports.createRoutesFromReactChildren = require('./createRoutesFromReactChildren');

exports.create = require('./createRouter');
exports.run = require('./runRouter');
},{"./History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./Navigation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Navigation.js","./Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/Route.js","./State":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/State.js","./behaviors/ImitateBrowserBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./behaviors/ScrollToTopBehavior":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js","./components/DefaultRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/DefaultRoute.js","./components/Link":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Link.js","./components/NotFoundRoute":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Redirect.js","./components/Route":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/Route.js","./components/RouteHandler":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/components/RouteHandler.js","./createRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js","./createRoutesFromReactChildren":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRoutesFromReactChildren.js","./locations/HashLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js","./locations/TestLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/TestLocation.js","./runRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/runRouter.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/isReactChildren.js":[function(require,module,exports){
'use strict';

var React = require('react');

function isValidChild(object) {
  return object == null || React.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

module.exports = isReactChildren;
},{"react":"react"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HashLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;
var _actionType;

function notifyChange(type) {
  if (type === LocationActions.PUSH) History.length += 1;

  var change = {
    path: HashLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HashLocation, change);
  });
}

function ensureSlash() {
  var path = HashLocation.getCurrentPath();

  if (path.charAt(0) === '/') {
    return true;
  }HashLocation.replace('/' + path);

  return false;
}

function onHashChange() {
  if (ensureSlash()) {
    // If we don't have an _actionType then all we know is the hash
    // changed. It was probably caused by the user clicking the Back
    // button, but may have also been the Forward button or manual
    // manipulation. So just guess 'pop'.
    var curActionType = _actionType;
    _actionType = null;
    notifyChange(curActionType || LocationActions.POP);
  }
}

/**
 * A Location that uses `window.location.hash`.
 */
var HashLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    // Do this BEFORE listening for hashchange.
    ensureSlash();

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', onHashChange, false);
      } else {
        window.attachEvent('onhashchange', onHashChange);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', onHashChange, false);
      } else {
        window.removeEvent('onhashchange', onHashChange);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    _actionType = LocationActions.PUSH;
    window.location.hash = path;
  },

  replace: function replace(path) {
    _actionType = LocationActions.REPLACE;
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  },

  pop: function pop() {
    _actionType = LocationActions.POP;
    History.back();
  },

  getCurrentPath: function getCurrentPath() {
    return decodeURI(
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    window.location.href.split('#')[1] || '');
  },

  toString: function toString() {
    return '<HashLocation>';
  }

};

module.exports = HashLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;

function notifyChange(type) {
  var change = {
    path: HistoryLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HistoryLocation, change);
  });
}

function onPopState(event) {
  if (event.state === undefined) {
    return;
  } // Ignore extraneous popstate events in WebKit.

  notifyChange(LocationActions.POP);
}

/**
 * A Location that uses HTML5 history.
 */
var HistoryLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('popstate', onPopState, false);
      } else {
        window.attachEvent('onpopstate', onPopState);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.addEventListener) {
        window.removeEventListener('popstate', onPopState, false);
      } else {
        window.removeEvent('onpopstate', onPopState);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    window.history.pushState({ path: path }, '', path);
    History.length += 1;
    notifyChange(LocationActions.PUSH);
  },

  replace: function replace(path) {
    window.history.replaceState({ path: path }, '', path);
    notifyChange(LocationActions.REPLACE);
  },

  pop: History.back,

  getCurrentPath: function getCurrentPath() {
    return decodeURI(window.location.pathname + window.location.search);
  },

  toString: function toString() {
    return '<HistoryLocation>';
  }

};

module.exports = HistoryLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/RefreshLocation.js":[function(require,module,exports){
'use strict';

var HistoryLocation = require('./HistoryLocation');
var History = require('../History');

/**
 * A Location that uses full page refreshes. This is used as
 * the fallback for HistoryLocation in browsers that do not
 * support the HTML5 history API.
 */
var RefreshLocation = {

  push: function push(path) {
    window.location = path;
  },

  replace: function replace(path) {
    window.location.replace(path);
  },

  pop: History.back,

  getCurrentPath: HistoryLocation.getCurrentPath,

  toString: function toString() {
    return '<RefreshLocation>';
  }

};

module.exports = RefreshLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","./HistoryLocation":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/HistoryLocation.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/StaticLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');

function throwCannotModify() {
  invariant(false, 'You cannot modify a static location');
}

/**
 * A location that only ever contains a single path. Useful in
 * stateless environments like servers where there is no path history,
 * only the path that was used in the request.
 */

var StaticLocation = (function () {
  function StaticLocation(path) {
    _classCallCheck(this, StaticLocation);

    this.path = path;
  }

  _createClass(StaticLocation, [{
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.path;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<StaticLocation path="' + this.path + '">';
    }
  }]);

  return StaticLocation;
})();

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

StaticLocation.prototype.push = throwCannotModify;
StaticLocation.prototype.replace = throwCannotModify;
StaticLocation.prototype.pop = throwCannotModify;

module.exports = StaticLocation;
},{"react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/locations/TestLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');
var LocationActions = require('../actions/LocationActions');
var History = require('../History');

/**
 * A location that is convenient for testing and does not require a DOM.
 */

var TestLocation = (function () {
  function TestLocation(history) {
    _classCallCheck(this, TestLocation);

    this.history = history || [];
    this.listeners = [];
    this._updateHistoryLength();
  }

  _createClass(TestLocation, [{
    key: 'needsDOM',
    get: function () {
      return false;
    }
  }, {
    key: '_updateHistoryLength',
    value: function _updateHistoryLength() {
      History.length = this.history.length;
    }
  }, {
    key: '_notifyChange',
    value: function _notifyChange(type) {
      var change = {
        path: this.getCurrentPath(),
        type: type
      };

      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(listener) {
      this.listeners = this.listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: 'push',
    value: function push(path) {
      this.history.push(path);
      this._updateHistoryLength();
      this._notifyChange(LocationActions.PUSH);
    }
  }, {
    key: 'replace',
    value: function replace(path) {
      invariant(this.history.length, 'You cannot replace the current path with no history');

      this.history[this.history.length - 1] = path;

      this._notifyChange(LocationActions.REPLACE);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.history.pop();
      this._updateHistoryLength();
      this._notifyChange(LocationActions.POP);
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<TestLocation>';
    }
  }]);

  return TestLocation;
})();

module.exports = TestLocation;
},{"../History":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/actions/LocationActions.js","react/lib/invariant":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/runRouter.js":[function(require,module,exports){
'use strict';

var createRouter = require('./createRouter');

/**
 * A high-level convenience method that creates, configures, and
 * runs a router in one shot. The method signature is:
 *
 *   Router.run(routes[, location ], callback);
 *
 * Using `window.location.hash` to manage the URL, you could do:
 *
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 * 
 * Using HTML5 history and a custom "cursor" prop:
 * 
 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
 *     React.render(<Handler cursor={cursor}/>, document.body);
 *   });
 *
 * Returns the newly created router.
 *
 * Note: If you need to specify further options for your router such
 * as error/abort handling or custom scroll behavior, use Router.create
 * instead.
 *
 *   var router = Router.create(options);
 *   router.run(function (Handler) {
 *     // ...
 *   });
 */
function runRouter(routes, location, callback) {
  if (typeof location === 'function') {
    callback = location;
    location = null;
  }

  var router = createRouter({
    routes: routes,
    location: location
  });

  router.run(callback);

  return router;
}

module.exports = runRouter;
},{"./createRouter":"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/createRouter.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/lib/supportsHistory.js":[function(require,module,exports){
'use strict';

function supportsHistory() {
  /*! taken from modernizr
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
   */
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

module.exports = supportsHistory;
},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/object-assign/index.js":[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/index.js":[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/index.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/index.js":[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/parse.js","./stringify":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/stringify.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/parse.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/stringify.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react-router/node_modules/qs/lib/utils.js":[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/ExecutionEnvironment.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/Object.assign.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/emptyFunction.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/invariant.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js"}],"/Users/mikemsrk/goflux/pub/node_modules/react/lib/warning.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"./emptyFunction":"/Users/mikemsrk/goflux/pub/node_modules/react/lib/emptyFunction.js","_process":"/Users/mikemsrk/goflux/pub/node_modules/browserify/node_modules/process/browser.js"}],"/Users/mikemsrk/goflux/pub/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/app.js');
var TestUtils = require('react-addons').TestUtils;

describe("App", function() {

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(App());
    
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });

});
},{"./../app/app.js":"/Users/mikemsrk/goflux/pub/app/app.js","react-addons":"react-addons"}]},{},["/Users/mikemsrk/goflux/pub/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0NvbW1lbnRBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvUHJvZmlsZUFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9UaHJlYWRBY3Rpb25zLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pbnB1dC5qcyIsImFwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC1pdGVtLmpzIiwiYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWxpc3QuanMiLCJhcHAvY29tcG9uZW50cy9mcm9udC9mcm9udC10aHJlYWRpdGVtLmpzIiwiYXBwL2NvbXBvbmVudHMvZnJvbnQvZnJvbnQtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL2Zyb250L2Zyb250LmpzIiwiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4tZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwiYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5qcyIsImFwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtYmlvLmpzIiwiYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXRocmVhZGl0ZW0uanMiLCJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAtZm9ybS5qcyIsImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuanMiLCJhcHAvY29tcG9uZW50cy90aHJlYWQvbmV3LmpzIiwiYXBwL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZC5qcyIsImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci1iaW8uanMiLCJhcHAvY29tcG9uZW50cy91c2VyL3VzZXItdGhyZWFkcy5qcyIsImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci5qcyIsImFwcC9jb25zdGFudHMvQXV0aENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvQ29tbWVudENvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cy5qcyIsImFwcC9jb25zdGFudHMvVGhyZWFkQ29uc3RhbnRzLmpzIiwiYXBwL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXIuanMiLCJhcHAvc2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvQ29tbWVudFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvUHJvZmlsZVNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvVGhyZWFkU2VydmljZS5qcyIsImFwcC9zdG9yZXMvQXV0aFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Db21tZW50U3RvcmUuanMiLCJhcHAvc3RvcmVzL1Byb2ZpbGVTdG9yZS5qcyIsImFwcC9zdG9yZXMvVGhyZWFkU3RvcmUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2ZsdXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmx1eC9saWIvRGlzcGF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy9mbHV4L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2NvbXBvbmVudHMvZGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL2h0bWwtbWVzc2FnZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL21lc3NhZ2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9udW1iZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvY29tcG9uZW50cy9yZWxhdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9jb21wb25lbnRzL3RpbWUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL21peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL3JlYWN0LWludGwuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1mb3JtYXQtY2FjaGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1mb3JtYXQtY2FjaGUvbGliL2VzNS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLWZvcm1hdC1jYWNoZS9saWIvbWVtb2l6ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9lczUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9tYWluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQtcGFyc2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0LXBhcnNlci9saWIvcGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtcmVsYXRpdmVmb3JtYXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaW50bC9ub2RlX21vZHVsZXMvaW50bC1yZWxhdGl2ZWZvcm1hdC9saWIvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL25vZGVfbW9kdWxlcy9pbnRsLXJlbGF0aXZlZm9ybWF0L2xpYi9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbm9kZV9tb2R1bGVzL2ludGwtcmVsYXRpdmVmb3JtYXQvbGliL2VzNS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0NhbmNlbGxhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0hpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9NYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL05hdmlnYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9QYXRoVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Qcm9wVHlwZXMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9SZWRpcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU2Nyb2xsSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1N0YXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvVHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9iZWhhdmlvcnMvU2Nyb2xsVG9Ub3BCZWhhdmlvci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvQ29udGV4dFdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2dldFdpbmRvd1Njcm9sbFBvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pc1JlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvcnVuUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvc3VwcG9ydHNIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3BhcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyIsInNwZWNzL0FwcC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNJQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXpDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIEF1dGhDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvQXV0aENvbnN0YW50cycpO1xuXG52YXIgQXV0aEFjdGlvbnMgPSB7XG4gIHNpZ251cDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5TSUdOVVAsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG4gIGxvZ2luOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBBdXRoQ29uc3RhbnRzLkxPR0lOLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICBsb2dvdXQ6IGZ1bmN0aW9uKCl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQXV0aENvbnN0YW50cy5MT0dPVVQsXG4gICAgICBkYXRhOiBudWxsXG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aEFjdGlvbnM7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgQ29tbWVudENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Db21tZW50Q29uc3RhbnRzJyk7XG5cbnZhciBDb21tZW50QWN0aW9ucyA9IHtcbiAgYWRkOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBDb21tZW50Q29uc3RhbnRzLlBPU1RfQURELFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9LFxuICAvLyBGZXRjaGVzIGEgcGFnZSBvZiBDb21tZW50c1xuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IENvbW1lbnRDb25zdGFudHMuUE9TVF9GRVRDSFBBR0UsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG5cbiAgZmV0Y2hVc2VyUGFnZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQ29tbWVudENvbnN0YW50cy5QT1NUX0ZFVENIVVNFUlBBR0UsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gRmV0Y2hlcyBvbmUgQ29tbWVudCBvbmx5XG4gIGZldGNoQ29tbWVudDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogQ29tbWVudENvbnN0YW50cy5QT1NUX0ZFVENIQ09NTUVOVCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgLy8gUmF0ZSBhIENvbW1lbnQgdXAgb3IgZG93blxuICB1cFZvdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IENvbW1lbnRDb25zdGFudHMuUE9TVF9VUFZPVEUsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG5cbiAgZG93blZvdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IENvbW1lbnRDb25zdGFudHMuUE9TVF9ET1dOVk9URSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRBY3Rpb25zOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIFByb2ZpbGVDb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMvUHJvZmlsZUNvbnN0YW50cycpO1xuXG52YXIgUHJvZmlsZUFjdGlvbnMgPSB7XG4gIGZldGNoOiBmdW5jdGlvbigpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFByb2ZpbGVDb25zdGFudHMuRkVUQ0hcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbihkYXRhKXtcbiAgICBBcHBEaXNwYXRjaGVyLmhhbmRsZUFjdGlvbih7XG4gICAgICBhY3Rpb25UeXBlOiBQcm9maWxlQ29uc3RhbnRzLlVQREFURSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbigpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFByb2ZpbGVDb25zdGFudHMuREVMRVRFLFxuICAgICAgZGF0YTogbnVsbFxuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGVBY3Rpb25zOyIsInZhciBBcHBEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcnMvQXBwRGlzcGF0Y2hlcicpO1xudmFyIFRocmVhZENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9UaHJlYWRDb25zdGFudHMnKTtcblxudmFyIFRocmVhZEFjdGlvbnMgPSB7XG4gIGFkZDogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLkFERCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgLy8gRmV0Y2hlcyBhIHBhZ2Ugb2YgdGhyZWFkc1xuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFRocmVhZENvbnN0YW50cy5GRVRDSFBBR0UsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG5cbiAgZmV0Y2hVc2VyUGFnZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLkZFVENIVVNFUlBBR0UsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gRmV0Y2hlcyBvbmUgdGhyZWFkIG9ubHlcbiAgZmV0Y2hUaHJlYWQ6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIEFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uKHtcbiAgICAgIGFjdGlvblR5cGU6IFRocmVhZENvbnN0YW50cy5GRVRDSFRIUkVBRCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcbiAgLy8gUmF0ZSBhIHRocmVhZCB1cCBvciBkb3duXG4gIHVwVm90ZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLlVQVk9URSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfSxcblxuICBkb3duVm90ZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgQXBwRGlzcGF0Y2hlci5oYW5kbGVBY3Rpb24oe1xuICAgICAgYWN0aW9uVHlwZTogVGhyZWFkQ29uc3RhbnRzLkRPV05WT1RFLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkQWN0aW9uczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG52YXIgTmF2YmFyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXInKTtcbnZhciBQcm9maWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZScpO1xudmFyIEZyb250ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zyb250L2Zyb250Jyk7XG52YXIgTG9naW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nKTtcbnZhciBMb2dvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dCcpO1xudmFyIFNpZ251cCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zaWdudXAvc2lnbnVwJyk7XG52YXIgTmV3VGhyZWFkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3RocmVhZC9uZXcnKTtcbnZhciBUaHJlYWQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGhyZWFkL3RocmVhZCcpO1xudmFyIFVzZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdXNlci91c2VyJyk7XG5cbnZhciBSb3V0ZSA9IFJvdXRlci5Sb3V0ZTtcbnZhciBEZWZhdWx0Um91dGUgPSBSb3V0ZXIuRGVmYXVsdFJvdXRlO1xudmFyIFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXI7XG52YXIgTmF2aWdhdGlvbiA9IFJvdXRlci5OYXZpZ2F0aW9uO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGxvZ2dlZEluOiBBdXRoLmxvZ2dlZEluKClcbiAgICB9O1xuICB9LFxuXG4gIHNldFN0YXRlT25BdXRoOiBmdW5jdGlvbihsb2dnZWRJbil7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICBsb2dnZWRJbjogbG9nZ2VkSW5cbiAgICAvLyB9KTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gQXV0aC5vbkNoYW5nZSA9IHRoaXMuc2V0U3RhdGVPbkF1dGg7XG4gIH0sXG4gIFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWluZXItZmx1aWRcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmJhciwgbnVsbCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlSGFuZGxlciwgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuLy8gVE9ETzogU2V0dXAgdGhyZWFkIHJvdXRlc1xudmFyIHJvdXRlcyA9IChcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL1wiLCBoYW5kbGVyOiBBcHB9LCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRSb3V0ZSwge2hhbmRsZXI6IEZyb250fSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInByb2ZpbGVcIiwgaGFuZGxlcjogUHJvZmlsZX0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJsb2dpblwiLCBoYW5kbGVyOiBMb2dpbn0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJsb2dvdXRcIiwgaGFuZGxlcjogTG9nb3V0fSksIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNpZ251cFwiLCBoYW5kbGVyOiBTaWdudXB9KSwgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibmV3XCIsIGhhbmRsZXI6IE5ld1RocmVhZH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJ0aHJlYWQvOmlkXCIsIGhhbmRsZXI6IFRocmVhZH0pLCBcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJ1c2VyLzppZFwiLCBoYW5kbGVyOiBVc2VyfSlcbiAgKVxuKTtcblxuXG5Sb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhhc2hMb2NhdGlvbiwgZnVuY3Rpb24oUm9vdCl7XG4gIFJlYWN0LnJlbmRlcihcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvb3QsIHtsb2NhbGVzOiBbJ2VuLVVTJ119KSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgKTtcbn0pO1xuXHRcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb21tZW50U3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQ29tbWVudFN0b3JlJyk7XG52YXIgQ29tbWVudEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL0NvbW1lbnRBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgTmV3Q29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOZXdDb21tZW50XCIsXG5cbiAgYWRkQ29tbWVudDogZnVuY3Rpb24oZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU2VuZCBhY3Rpb24gdG8gdXBkYXRlIHVzZXIgaW5mb3JtYXRpb25cbiAgICB2YXIgYm9keSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5ib2R5KS52YWx1ZS50cmltKCk7XG5cbiAgICBpZighYm9keSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkFkZENvbW1lbnQoYm9keSk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJvZHkpLnZhbHVlID0gJyc7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmV3Q29tbWVudFwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtvblN1Ym1pdDogdGhpcy5hZGRDb21tZW50fSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRhcmVhXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiY29tbWVudC4uLlwiLCByZWY6IFwiYm9keVwifSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgdmFsdWU6IFwiU3VibWl0XCJ9LCBcIlN1Ym1pdFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmV3Q29tbWVudDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0SW50bCA9IHJlcXVpcmUoJ3JlYWN0LWludGwnKTtcbnZhciBGb3JtYXR0ZWRSZWxhdGl2ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWRSZWxhdGl2ZTtcbnZhciBGb3JtYXR0ZWREYXRlID0gUmVhY3RJbnRsLkZvcm1hdHRlZERhdGU7XG5cbi8vIE15U1FMIERhdGUgLT4gSlMgRGF0ZVxudmFyIGZvcm1hdERhdGUgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgZGF0ZVBhcnRzID0gc3RyLnNwbGl0KFwiLVwiKTtcbiAgdmFyIHRpbWVzID0gZGF0ZVBhcnRzWzJdLnNwbGl0KFwiOlwiKTtcbiAgdmFyIGhvdXIgPSB0aW1lc1swXS5zdWJzdHIoMyk7XG4gIHZhciBtaW51dGVzID0gdGltZXNbMV07XG4gIHZhciBzZWNvbmRzID0gdGltZXNbMl0uc3Vic3RyKDAsMik7XG5cbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdLnN1YnN0cigwLDIpLGhvdXIsbWludXRlcyxzZWNvbmRzKTtcbn07XG5cbi8vIFNob3J0ZW5zIHRoZSBib2R5IHRvIGZpdCBpbiB0aGUgdGFibGVcbnZhciBmb3JtYXRCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHNob3J0U3RyID0gc3RyLnN1YnN0cigwLDQwKTtcbiAgaWYoc3RyLmxlbmd0aCA+PSA0MCl7XG4gICAgc2hvcnRTdHIgKz0gJy4uLic7XG4gIH1cbiAgcmV0dXJuIHNob3J0U3RyO1xufTtcblxuLy8gIFRocmVhZCBjb21tZW50IGl0ZW1cbnZhciBDb21tZW50SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb21tZW50SXRlbVwiLFxuXG4gIHVwVm90ZTogZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25VcFZvdGUodGhpcy5wcm9wcy5pdGVtLnBvc3RfaWQpO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51cCkuY2xhc3NOYW1lID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmRvd24pLmNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCJcbiAgICB0aGlzLnByb3BzLml0ZW0ucmF0aW5nKys7XG4gIH0sXG5cbiAgZG93blZvdGU6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uRG93blZvdGUodGhpcy5wcm9wcy5pdGVtLnBvc3RfaWQpO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kb3duKS5jbGFzc05hbWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXApLmNsYXNzTmFtZSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCI7XG4gICAgdGhpcy5wcm9wcy5pdGVtLnJhdGluZy0tO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNyZWF0ZWQgPSBmb3JtYXREYXRlKHRoaXMucHJvcHMuaXRlbS5jcmVhdGlvbl90aW1lKTtcbiAgICB2YXIgdXBkYXRlZCA9IGZvcm1hdERhdGUodGhpcy5wcm9wcy5pdGVtLmxhc3RfdXBkYXRlX3RpbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgcmVmOiBcImRvd25cIiwgY2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIG9uQ2xpY2s6IHRoaXMuZG93blZvdGV9KSwgXCIgXCIsIHRoaXMucHJvcHMuaXRlbS5yYXRpbmcsIFwiIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIHJlZjogXCJ1cFwiLCBjbGFzc05hbWU6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIG9uQ2xpY2s6IHRoaXMudXBWb3RlfSkpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS5jb250ZW50cyksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfbmFtZSksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZERhdGUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBjcmVhdGVkLCBcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsIFxuICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLCBcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wifSlcbiAgICAgICAgKSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZFJlbGF0aXZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZH0pXG4gICAgICAgIClcblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRJdGVtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29tbWVudFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0NvbW1lbnRTdG9yZScpO1xudmFyIENvbW1lbnRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9Db21tZW50QWN0aW9ucycpO1xudmFyIENvbW1lbnRJdGVtID0gcmVxdWlyZSgnLi9jb21tZW50LWl0ZW0nKTtcbnZhciBOZXdDb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50LWlucHV0Jyk7XG5cbi8vIEZyb250IHBhZ2UgQ29tbWVudHNcbi8vIEZldGNoIENvbW1lbnRzIGJ5IHJhdGluZyBieSBwYWdlXG5cbnZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb21tZW50TGlzdFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBjb21tZW50czogW3tcbiAgICAgICAgYm9keTogJ2Zha2UgYm9keScsXG4gICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgY3JlYXRpb25fdGltZTogXCIyMDE1LTA3LTE5VDEwOjMxOjA0WlwiLFxuICAgICAgICBsYXN0X3VwZGF0ZV90aW1lOiBcIjIwMTUtMDctMjBUMTI6MzE6MDBaXCIsXG4gICAgICAgIGNvbW1lbnRfaWQ6IDQsXG4gICAgICAgIHVzZXJfaWQ6IDEsXG4gICAgICAgIHVzZXJfbmFtZTogJydcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICBDb21tZW50QWN0aW9ucy5mZXRjaFBhZ2Uoe3RocmVhZElkOiB0aGlzLnByb3BzLnRocmVhZElkLCBwYWdlOnRoaXMuc3RhdGUucGFnZX0pO1xuICAgIENvbW1lbnRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQ29tbWVudFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21tZW50czogQ29tbWVudFN0b3JlLmdldENvbW1lbnRzKCkudGhyZWFkUG9zdHNcbiAgICB9KTtcbiAgfSxcblxuICBhZGRDb21tZW50OiBmdW5jdGlvbihib2R5KXtcbiAgICBDb21tZW50QWN0aW9ucy5hZGQoe3RocmVhZElkOnRoaXMucHJvcHMudGhyZWFkSWQsIGJvZHk6Ym9keX0pO1xuICAgIENvbW1lbnRBY3Rpb25zLmZldGNoUGFnZSh7dGhyZWFkSWQ6IHRoaXMucHJvcHMudGhyZWFkSWQsIHBhZ2U6dGhpcy5zdGF0ZS5wYWdlfSk7XG4gIH0sXG5cbiAgdXBWb3RlOiBmdW5jdGlvbihpZCl7XG4gICAgLy8gVE9ETzogY2FsbCBDb21tZW50IGFjdGlvbiB0byB1cHZvdGVcbiAgICBjb25zb2xlLmxvZygndXB2b3RpbmcuLi4nLGlkKTtcbiAgICBDb21tZW50QWN0aW9ucy51cFZvdGUoe3Bvc3RfaWQ6aWR9KTtcbiAgfSxcblxuICBkb3duVm90ZTogZnVuY3Rpb24oaWQpe1xuICAgIC8vIFRPRE86IGNhbGwgQ29tbWVudCBhY3Rpb24gdG8gZG93bnZvdGVcbiAgICBDb21tZW50QWN0aW9ucy5kb3duVm90ZSh7cG9zdF9pZDppZH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJDb21tZW50c1wifSwgXG4gICAgICAgIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmV3Q29tbWVudCwge29uQWRkQ29tbWVudDogdGhpcy5hZGRDb21tZW50fSksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIkNvbW1lbnRzXCIpLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge2NsYXNzTmFtZTogXCJ0YWJsZSB0YWJsZS1ob3ZlclwifSwgXG4gICAgICAgICAgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJSYXRpbmdcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkJvZHlcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlN1Ym1pdHRlZFwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQ3JlYXRlZFwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVXBkYXRlZFwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbW1lbnRzLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudEl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29tbWVudFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICBvbkdvVGhyZWFkOiB0aGlzLmdvVGhyZWFkLCBcbiAgICAgICAgICAgICAgICAgICAgICBvblVwVm90ZTogdGhpcy51cFZvdGUsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uRG93blZvdGU6IHRoaXMuZG93blZvdGUsIFxuICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5wb3N0X2lkLCBcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSx0aGlzKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIClcblxuICAgICAgICAgIClcbiAgICAgICAgICBcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50TGlzdDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0SW50bCA9IHJlcXVpcmUoJ3JlYWN0LWludGwnKTtcbnZhciBGb3JtYXR0ZWRSZWxhdGl2ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWRSZWxhdGl2ZTtcbnZhciBGb3JtYXR0ZWREYXRlID0gUmVhY3RJbnRsLkZvcm1hdHRlZERhdGU7XG5cbi8vIE15U1FMIERhdGUgLT4gSlMgRGF0ZVxudmFyIGZvcm1hdERhdGUgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgZGF0ZVBhcnRzID0gc3RyLnNwbGl0KFwiLVwiKTtcbiAgdmFyIHRpbWVzID0gZGF0ZVBhcnRzWzJdLnNwbGl0KFwiOlwiKTtcbiAgdmFyIGhvdXIgPSB0aW1lc1swXS5zdWJzdHIoMyk7XG4gIHZhciBtaW51dGVzID0gdGltZXNbMV07XG4gIHZhciBzZWNvbmRzID0gdGltZXNbMl0uc3Vic3RyKDAsMik7XG5cbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdLnN1YnN0cigwLDIpLGhvdXIsbWludXRlcyxzZWNvbmRzKTtcbn07XG5cbi8vIFNob3J0ZW5zIHRoZSBib2R5IHRvIGZpdCBpbiB0aGUgdGFibGVcbnZhciBmb3JtYXRCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHNob3J0U3RyID0gc3RyLnN1YnN0cigwLDQwKTtcbiAgaWYoc3RyLmxlbmd0aCA+PSA0MCl7XG4gICAgc2hvcnRTdHIgKz0gJy4uLic7XG4gIH1cbiAgcmV0dXJuIHNob3J0U3RyO1xufTtcblxuLy8gRnJvbnQgcGFnZSB0aHJlYWQgbGlzdFxudmFyIFRocmVhZEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGhyZWFkSXRlbVwiLFxuXG4gIHVwVm90ZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnByb3BzLm9uVXBWb3RlKHRoaXMucHJvcHMuaXRlbS50aHJlYWRfaWQpO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51cCkuY2xhc3NOYW1lID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmRvd24pLmNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCJcbiAgICB0aGlzLnByb3BzLml0ZW0ucmF0aW5nKys7XG4gIH0sXG5cbiAgZG93blZvdGU6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5wcm9wcy5vbkRvd25Wb3RlKHRoaXMucHJvcHMuaXRlbS50aHJlYWRfaWQpO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kb3duKS5jbGFzc05hbWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXApLmNsYXNzTmFtZSA9IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCI7XG4gICAgdGhpcy5wcm9wcy5pdGVtLnJhdGluZy0tO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETzogQ2xpY2tpbmcgb24gdGl0bGUgdGFrZXMgeW91IHRvIGluZGl2aWR1YWwgdGhyZWFkIHBhZ2VcbiAgICB2YXIgY3JlYXRlZCA9IGZvcm1hdERhdGUodGhpcy5wcm9wcy5pdGVtLmNyZWF0aW9uX3RpbWUpO1xuICAgIHZhciB1cGRhdGVkID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLml0ZW0ubGFzdF91cGRhdGVfdGltZSk7XG4gICAgdmFyIGJvZHkgPSBmb3JtYXRCb2R5KHRoaXMucHJvcHMuaXRlbS5ib2R5KTtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCIsIHJlZjogXCJkb3duXCIsIGNsYXNzTmFtZTogXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBvbkNsaWNrOiB0aGlzLmRvd25Wb3RlfSksIFwiIFwiLCB0aGlzLnByb3BzLml0ZW0ucmF0aW5nLCBcIiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wiLCByZWY6IFwidXBcIiwgY2xhc3NOYW1lOiBcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBvbkNsaWNrOiB0aGlzLnVwVm90ZX0pKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjL3RocmVhZC9cIit0aGlzLnByb3BzLml0ZW0udGhyZWFkX2lkfSwgdGhpcy5wcm9wcy5pdGVtLnRpdGxlKSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgYm9keSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiIy91c2VyL1wiK3RoaXMucHJvcHMuaXRlbS51c2VyX2lkfSwgXCIgXCIsIHRoaXMucHJvcHMuaXRlbS51c2VyX25hbWUsIFwiIFwiKSwgXCIgXCIpLCBcblxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtYXR0ZWREYXRlLCB7XG4gICAgICAgICAgICB2YWx1ZTogY3JlYXRlZCwgXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLCBcbiAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIiwgXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIn0pXG4gICAgICAgICksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtYXR0ZWRSZWxhdGl2ZSwge1xuICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZWR9KVxuICAgICAgICApXG5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWRJdGVtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGhyZWFkU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvVGhyZWFkU3RvcmUnKTtcbnZhciBUaHJlYWRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9UaHJlYWRBY3Rpb25zJyk7XG52YXIgVGhyZWFkSXRlbSA9IHJlcXVpcmUoJy4vZnJvbnQtdGhyZWFkaXRlbScpO1xuXG4vLyBGcm9udCBwYWdlIHRocmVhZHNcbi8vIEZldGNoIHRocmVhZHMgYnkgcmF0aW5nIGJ5IHBhZ2VcblxudmFyIFRocmVhZHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVGhyZWFkc1wiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICB0aHJlYWRzOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkQWN0aW9ucy5mZXRjaFBhZ2Uoe3BhZ2U6dGhpcy5zdGF0ZS5wYWdlfSk7XG4gICAgVGhyZWFkU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aHJlYWRzOiBUaHJlYWRTdG9yZS5nZXRUaHJlYWRzKCkuZm9ydW1UaHJlYWRzXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50aHJlYWRzKTtcbiAgfSxcblxuICB1cFZvdGU6IGZ1bmN0aW9uKGlkKXtcbiAgICAvLyBUT0RPOiBjYWxsIHRocmVhZCBhY3Rpb24gdG8gdXB2b3RlXG4gICAgVGhyZWFkQWN0aW9ucy51cFZvdGUoe3RocmVhZF9pZDppZH0pO1xuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbihpZCl7XG4gICAgLy8gVE9ETzogY2FsbCB0aHJlYWQgYWN0aW9uIHRvIGRvd252b3RlXG4gICAgVGhyZWFkQWN0aW9ucy5kb3duVm90ZSh7dGhyZWFkX2lkOmlkfSk7XG4gIH0sXG5cbiAgZ29UaHJlYWQ6IGZ1bmN0aW9uKGlkKXtcbiAgICBjb25zb2xlLmxvZygndHJhbnNpdGlvbmluZyB0by4uLnRocmVhZCcsaWQpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ0aHJlYWRzXCJ9LCBcbiAgICAgICAgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiRnJvbnQgUGFnZVwiKSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtjbGFzc05hbWU6IFwidGFibGUgdGFibGUtaG92ZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiUmF0aW5nXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJUaXRsZVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQm9keVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiU3VibWl0dGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJDcmVhdGVkXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJVcGRhdGVkXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGhyZWFkcy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRocmVhZEl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidGhyZWFkXCIsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uR29UaHJlYWQ6IHRoaXMuZ29UaHJlYWQsIFxuICAgICAgICAgICAgICAgICAgICAgIG9uVXBWb3RlOiB0aGlzLnVwVm90ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgb25Eb3duVm90ZTogdGhpcy5kb3duVm90ZSwgXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLnRocmVhZF9pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbX0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sdGhpcylcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICApXG4gICAgICAgICAgXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRocmVhZHMgPSByZXF1aXJlKCcuL2Zyb250LXRocmVhZHMnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG5cbnZhciBGcm9udCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGcm9udFwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMTJcIn0sIFxuICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIsIHRvOiBcIi9uZXdcIn0sIFwiTmV3XCIpXG4gICAgICAgICk6IG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRocmVhZHMsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnJvbnQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBMb2dpbkZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTG9naW5Gb3JtXCIsXG4gIGhhbmRsZVN1Ym1pdDogZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1c2VybmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUudHJpbSgpO1xuICAgIHZhciBwYXNzd29yZCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUudHJpbSgpO1xuICAgIGlmKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZW5kIHJlcXVlc3QgYmFjayB1cCB0byBMb2dpblxuICAgIHRoaXMucHJvcHMub25Mb2dpblN1Ym1pdCh7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KTtcbiAgICBcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3N3b3JkKS52YWx1ZSA9ICcnO1xuICAgIHJldHVybjtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcImxvZ2luRm9ybVwiLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLCByZWY6IFwidXNlcm5hbWVcIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIiwgcmVmOiBcInBhc3N3b3JkXCJ9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge2NsYXNzTmFtZTogXCJidG4gYnRuLWluZm9cIiwgdG86IFwiL3NpZ251cFwifSwgXCJSZWdpc3RlclwiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgdmFsdWU6IFwiU3VibWl0XCJ9LCBcIlN1Ym1pdFwiKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luRm9ybTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExvZ2luRm9ybSA9IHJlcXVpcmUoJy4vbG9naW4tZm9ybScpO1xudmFyIEF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9BdXRoQWN0aW9ucycpO1xudmFyIEF1dGhTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9BdXRoU3RvcmUnKTtcblxudmFyIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxvZ2luXCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpLFxuICAgICAgZXJyb3I6IEF1dGhTdG9yZS5lcnJvcigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBBdXRoU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUubG9nZ2VkSW4pe1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlTG9naW5TdWJtaXQ6IGZ1bmN0aW9uKHVzZXIpe1xuICAgIEF1dGhBY3Rpb25zLmxvZ2luKHt1c2VybmFtZTp1c2VyLnVzZXJuYW1lLHBhc3M6dXNlci5wYXNzd29yZH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkxvZ2luXCIpLCBcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2dnZWRJbiA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFlvdSBhcmUgYWxyZWFkeSBsb2dnZWQgaW4gXCIpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9naW5Gb3JtLCB7b25Mb2dpblN1Ym1pdDogdGhpcy5oYW5kbGVMb2dpblN1Ym1pdH0pXG4gICAgICAgICAgKSwgXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZXJyb3JcIn0sIFwiQmFkIGxvZ2luIGluZm9ybWF0aW9uXCIpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiTG9nb3V0XCIsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAvLyBUT0RPOiBNb3ZlIHRvIEF1dGggU3RvcmU/XG4gICAgLy8gaWYoQXV0aC5sb2dnZWRJbigpKXtcbiAgICAvLyAgIEF1dGgubG9nb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGxvY2F0aW9uLmhhc2ggPSAnL2xvZ2luJztcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgLy8gbG9nZ2VkSW46IEF1dGgubG9nZ2VkSW4oKVxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJBdXRoIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJMb2dvdXQgU3VjY2Vzc2Z1bC5cIilcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dvdXQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBBdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG4vLyBUT0RPIC0gZmFjdG9yIG91dCBuYXZiYXIgbG9naW4gZm9ybVxuXG52YXIgTmF2YmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5hdmJhclwiLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VkSW46IEF1dGhTdG9yZS5sb2dnZWRJbigpXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gX29uQ2hhbmdlIGlzIGNiIGZ1bmN0aW9uLlxuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKClcbiAgICB9KTtcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuICB9LFxuXG4gIG5hdmxvZ291dDogZnVuY3Rpb24oKXtcbiAgICBBdXRoQWN0aW9ucy5sb2dvdXQoKTtcbiAgfSxcblxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlcm5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlLnRyaW0oKTtcbiAgICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVE9ETzogc2VuZCByZXF1ZXN0IHRvIHNlcnZlclxuICAgIHRoaXMuaGFuZGxlTG9naW5TdWJtaXQoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnVzZXJuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXNzd29yZCkudmFsdWUgPSAnJztcbiAgICByZXR1cm47XG4gIH0sXG5cbiAgaGFuZGxlTG9naW5TdWJtaXQ6IGZ1bmN0aW9uKHVzZXIpe1xuICAgIEF1dGhBY3Rpb25zLmxvZ2luKHt1c2VybmFtZTp1c2VyLnVzZXJuYW1lLHBhc3M6dXNlci5wYXNzd29yZH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge2NsYXNzTmFtZTogXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcIn0sIFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhaW5lci1mbHVpZFwifSwgXG5cbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1oZWFkZXJcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3Itb25seVwifSwgXCJUb2dnbGUgbmF2aWdhdGlvblwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24tYmFyXCJ9KVxuICAgICAgICAgICksIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwibmF2YmFyLWJyYW5kXCIsIGhyZWY6IFwiI1wifSwgXCJBcHBcIilcbiAgICAgICAgKSwgXG4gICAgICAgIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIsIGlkOiBcImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwifSwgXG5cbiAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2dlZEluID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIiwgcm9sZTogXCJsb2dpblwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi13YXJuaW5nXCIsIHRvOiBcIi9sb2dvdXRcIiwgb25DbGljazogdGhpcy5uYXZsb2dvdXR9LCBcIkxvZyBvdXRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFwiLCByb2xlOiBcImxvZ2luXCIsIG9uU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdH0sIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJVc2VybmFtZVwiLCByZWY6IFwidXNlcm5hbWVcIn0pLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIHJlZjogXCJwYXNzd29yZFwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge3R5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3MgaGlkZGVuXCIsIHZhbHVlOiBcIlN1Ym1pdFwifSwgXCJTdWJtaXRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJkcm9wZG93blwifSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLXRvZ2dsZVwiLCBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIiwgcm9sZTogXCJidXR0b25cIiwgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwifSwgXCJEcm9wZG93biBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJjYXJldFwifSkpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiZHJvcGRvd24tbWVudVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQWN0aW9uXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQW5vdGhlciBhY3Rpb25cIikpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJTb21ldGhpbmcgZWxzZSBoZXJlXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtyb2xlOiBcInNlcGFyYXRvclwiLCBjbGFzc05hbWU6IFwiZGl2aWRlclwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIlNlcGFyYXRlZCBsaW5rXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtyb2xlOiBcInNlcGFyYXRvclwiLCBjbGFzc05hbWU6IFwiZGl2aWRlclwifSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIk9uZSBtb3JlIHNlcGFyYXRlZCBsaW5rXCIpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIlJlZ2lzdGVyXCIpKVxuICAgICAgICAgICAgKSwgXG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvcHJvZmlsZVwifSwgXCJQcm9maWxlXCIpKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9sb2dpblwifSwgXCJMb2dpblwiKSlcbiAgICAgICAgICAgIClcblxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICApXG4gICAgKVxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2YmFyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBCaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQmlvXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICAvLyBUT0RPOiBCdWJibGUgdGhpcyB1cCB0byBwcm9maWxlIHBhcmVudFxuICBlbmFibGVFZGl0OiBmdW5jdGlvbigpe1xuICAgIC8vIG1ha2UgdGhlIGJpbyBmaWVsZCBlZGl0YWJsZVxuICAgICAgLy8gcmVwbGFjZSBpdCB3aXRoIGEgZm9ybS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGNhbmNlbEVkaXQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gbWFrZSB0aGUgYmlvIGZpZWxkIGVkaXRhYmxlXG4gICAgICAvLyByZXBsYWNlIGl0IHdpdGggYSBmb3JtLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIHNhdmVFZGl0OiBmdW5jdGlvbigpe1xuICAgIHZhciBhdmF0YXIgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYXZhdGFyKS52YWx1ZS50cmltKCk7XG4gICAgdmFyIGJpbyA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5iaW8pLnZhbHVlLnRyaW0oKTtcblxuICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIGRhdGEuYXZhdGFyX2xpbmsgPSBhdmF0YXI7XG4gICAgZGF0YS5iaW8gPSBiaW87XG5cbiAgICAvLyBCdWJibGUgdXAgcmVxdWVzdCB0byBwYXJlbnRcbiAgICB0aGlzLnByb3BzLm9uRWRpdFN1Ym1pdChkYXRhKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtM1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0udXNlcl9uYW1lKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0uZmlyc3RfbmFtZSwgXCIgXCIsIHRoaXMucHJvcHMuaXRlbS5sYXN0X25hbWUpLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5wcm9wcy5pdGVtLmF2YXRhcl9saW5rLCBjbGFzc05hbWU6IFwiaW1nLXRodW1ibmFpbFwifSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkF2YXRhciBMaW5rOiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgcmVmOiBcImF2YXRhclwifSkpXG4gICAgICAgICksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiUmVwOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnJlcCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIklkOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfaWQpLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQmlvOiBcIiwgdGhpcy5wcm9wcy5pdGVtLmJpbylcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkJpbzogXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIHJlZjogXCJiaW9cIn0pKVxuICAgICAgICApLCBcbiAgICAgICAgXG4gICAgICAgICF0aGlzLnN0YXRlLmVkaXRpbmcgPyAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLXdhcm5pbmdcIiwgb25DbGljazogdGhpcy5lbmFibGVFZGl0fSwgXCJFZGl0XCIpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2NsYXNzTmFtZTogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgb25DbGljazogdGhpcy5zYXZlRWRpdH0sIFwiU2F2ZVwiKVxuICAgICAgICApLCBcblxuICAgICAgICAhdGhpcy5zdGF0ZS5lZGl0aW5nID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bi1zdWNjZXNzIGhpZGRlblwifSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG4taW5mb1wiLCBvbkNsaWNrOiB0aGlzLmNhbmNlbEVkaXR9LCBcIkNhbmNlbFwiKVxuICAgICAgICApXG5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaW87IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdEludGwgPSByZXF1aXJlKCdyZWFjdC1pbnRsJyk7XG52YXIgRm9ybWF0dGVkUmVsYXRpdmUgPSBSZWFjdEludGwuRm9ybWF0dGVkUmVsYXRpdmU7XG52YXIgRm9ybWF0dGVkRGF0ZSA9IFJlYWN0SW50bC5Gb3JtYXR0ZWREYXRlO1xuXG4vLyBNeVNRTCBEYXRlIC0+IEpTIERhdGVcbnZhciBmb3JtYXREYXRlID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIGRhdGVQYXJ0cyA9IHN0ci5zcGxpdChcIi1cIik7XG4gIHZhciB0aW1lcyA9IGRhdGVQYXJ0c1syXS5zcGxpdChcIjpcIik7XG4gIHZhciBob3VyID0gdGltZXNbMF0uc3Vic3RyKDMpO1xuICB2YXIgbWludXRlcyA9IHRpbWVzWzFdO1xuICB2YXIgc2Vjb25kcyA9IHRpbWVzWzJdLnN1YnN0cigwLDIpO1xuXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlUGFydHNbMF0sIGRhdGVQYXJ0c1sxXSAtIDEsIGRhdGVQYXJ0c1syXS5zdWJzdHIoMCwyKSxob3VyLG1pbnV0ZXMsc2Vjb25kcyk7XG59O1xuXG4vLyBTaG9ydGVucyB0aGUgYm9keSB0byBmaXQgaW4gdGhlIHRhYmxlXG52YXIgZm9ybWF0Qm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBzaG9ydFN0ciA9IHN0ci5zdWJzdHIoMCw0MCk7XG4gIGlmKHN0ci5sZW5ndGggPj0gNDApe1xuICAgIHNob3J0U3RyICs9ICcuLi4nO1xuICB9XG4gIHJldHVybiBzaG9ydFN0cjtcbn07XG5cbi8vIEZyb250IHBhZ2UgdGhyZWFkIGxpc3RcbnZhciBQcm9maWxlVGhyZWFkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJQcm9maWxlVGhyZWFkSXRlbVwiLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETzogQ2xpY2tpbmcgb24gdGl0bGUgdGFrZXMgeW91IHRvIGluZGl2aWR1YWwgdGhyZWFkLlxuICAgIHZhciBjcmVhdGVkID0gZm9ybWF0RGF0ZSh0aGlzLnByb3BzLml0ZW0uY3JlYXRpb25fdGltZSk7XG4gICAgdmFyIHVwZGF0ZWQgPSBmb3JtYXREYXRlKHRoaXMucHJvcHMuaXRlbS5sYXN0X3VwZGF0ZV90aW1lKTtcbiAgICB2YXIgYm9keSA9IGZvcm1hdEJvZHkodGhpcy5wcm9wcy5pdGVtLmJvZHkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHRoaXMucHJvcHMuaXRlbS5yYXRpbmcpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiMvdGhyZWFkL1wiK3RoaXMucHJvcHMuaXRlbS50aHJlYWRfaWR9LCB0aGlzLnByb3BzLml0ZW0udGl0bGUpKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBib2R5KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLml0ZW0udXNlcl9uYW1lKSwgXG4gICAgICAgIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtYXR0ZWREYXRlLCB7XG4gICAgICAgICAgICB2YWx1ZTogY3JlYXRlZCwgXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLCBcbiAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIiwgXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIn0pXG4gICAgICAgICksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1hdHRlZFJlbGF0aXZlLCB7XG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZH0pXG4gICAgICAgIClcblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGVUaHJlYWRJdGVtOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGhyZWFkU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvVGhyZWFkU3RvcmUnKTtcbnZhciBUaHJlYWRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9UaHJlYWRBY3Rpb25zJyk7XG52YXIgUHJvZmlsZVRocmVhZEl0ZW0gPSByZXF1aXJlKCcuL3Byb2ZpbGUtdGhyZWFkaXRlbScpO1xuXG52YXIgQmlvVGhyZWFkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCaW9UaHJlYWRzXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICB0aHJlYWRzOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkQWN0aW9ucy5mZXRjaFVzZXJQYWdlKHtwYWdlOnRoaXMuc3RhdGUucGFnZX0pO1xuICAgIFRocmVhZFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGhyZWFkczogVGhyZWFkU3RvcmUuZ2V0VXNlclRocmVhZHMoKS5mb3J1bVRocmVhZHNcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRocmVhZHMpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtOVwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIk15IFRocmVhZHNcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwge2NsYXNzTmFtZTogXCJ0YWJsZSB0YWJsZS1ob3ZlclwifSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJSYXRpbmdcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJUaXRsZVwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIkJvZHlcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJTdWJtaXR0ZWRcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJDcmVhdGVkXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVXBkYXRlZFwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksIFxuXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50aHJlYWRzLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFByb2ZpbGVUaHJlYWRJdGVtLCB7a2V5OiBpdGVtLnRocmVhZF9pZCwgaXRlbTogaXRlbX0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmlvVGhyZWFkczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEF1dGhTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9BdXRoU3RvcmUnKTtcbnZhciBQcm9maWxlU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvUHJvZmlsZVN0b3JlJyk7XG52YXIgUHJvZmlsZUFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1Byb2ZpbGVBY3Rpb25zJyk7XG52YXIgQmlvID0gcmVxdWlyZSgnLi9wcm9maWxlLWJpbycpO1xudmFyIEJpb1RocmVhZHMgPSByZXF1aXJlKCcuL3Byb2ZpbGUtdGhyZWFkcycpO1xuXG52YXIgUHJvZmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJQcm9maWxlXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgaWYoIUF1dGhTdG9yZS5sb2dnZWRJbigpKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnL2xvZ2luJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YXRhcl9saW5rOiBcIlwiLFxuICAgICAgYmlvOiBcIlwiLFxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcbiAgICAgIHVzZXJfbmFtZTogXCJcIixcbiAgICAgIHVzZXJfaWQ6IDAsXG4gICAgICByZXA6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFByb2ZpbGVBY3Rpb25zLmZldGNoKCk7XG4gICAgUHJvZmlsZVN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBQcm9maWxlU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGVkaXRQcm9maWxlOiBmdW5jdGlvbihkYXRhKXtcbiAgICAvLyBTZW5kIGFjdGlvbiB0byB1cGRhdGUgdXNlciBpbmZvcm1hdGlvblxuICAgIFByb2ZpbGVBY3Rpb25zLnVwZGF0ZSh7XG4gICAgICBhdmF0YXJfbGluazogZGF0YS5hdmF0YXJfbGluayxcbiAgICAgIGJpbzogZGF0YS5iaW9cbiAgICB9KTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlyc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmxhc3RfbmFtZSxcbiAgICAgICAgdXNlcl9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9uYW1lLFxuICAgICAgICB1c2VyX2lkOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9pZCxcbiAgICAgICAgYmlvOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkuYmlvLFxuICAgICAgICBhdmF0YXJfbGluazogUHJvZmlsZVN0b3JlLmdldEJpbygpLmF2YXRhcl9saW5rLFxuICAgICAgICByZXA6IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS5yZXBcbiAgICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwcm9maWxlXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCaW8sIHtvbkVkaXRTdWJtaXQ6IHRoaXMuZWRpdFByb2ZpbGUsIGl0ZW06IHRoaXMuc3RhdGV9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmlvVGhyZWFkcywgbnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTaWdudXBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNpZ251cEZvcm1cIixcbiAgaGFuZGxlU3VibWl0OiBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGZpcnN0bmFtZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5maXJzdG5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgbGFzdG5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGFzdG5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgdXNlcm5hbWUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXNlcm5hbWUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgcGFzc2NvbmYgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc2NvbmYpLnZhbHVlLnRyaW0oKTtcblxuICAgIHZhciBlcnJvciA9IGZhbHNlO1xuICAgIGlmKCFmaXJzdG5hbWUgfHwgIWxhc3RuYW1lIHx8ICF1c2VybmFtZSB8fCAhcGFzc3dvcmQgfHwgIXBhc3Njb25mKXtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYocGFzc2NvbmYgIT09IHBhc3N3b3JkKXtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gQnViYmxlIHRoaXMgdXAgdG8gcGFyZW50XG4gICAgdGhpcy5wcm9wcy5vblNpZ251cFN1Ym1pdCh7Zmlyc3RuYW1lOiBmaXJzdG5hbWUsIGxhc3RuYW1lOiBsYXN0bmFtZSwgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQsIGVycm9yOiBlcnJvcn0pO1xuICAgIFxuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5maXJzdG5hbWUpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmxhc3RuYW1lKS52YWx1ZSA9ICcnO1xuICAgIFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy51c2VybmFtZSkudmFsdWUgPSAnJztcbiAgICBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFzc3dvcmQpLnZhbHVlID0gJyc7XG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnBhc3Njb25mKS52YWx1ZSA9ICcnO1xuICAgIHJldHVybjtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcInNpZ251cEZvcm1cIiwgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0fSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYW1lRmllbGRcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7bmFtZTogXCJmaXJzdFwiLCB0eXBlOiBcInRleHRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJGaXJzdFwiLCByZWY6IFwiZmlyc3RuYW1lXCJ9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtuYW1lOiBcImxhc3RcIiwgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiTGFzdFwiLCByZWY6IFwibGFzdG5hbWVcIn0pXG4gICAgICAgICksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIsIHJlZjogXCJ1c2VybmFtZVwifSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLCByZWY6IFwicGFzc3dvcmRcIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiQ29uZmlybVwiLCByZWY6IFwicGFzc2NvbmZcIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7dHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tc3VjY2Vzc1wiLCB2YWx1ZTogXCJTdWJtaXRcIn0sIFwiU3VibWl0XCIpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbnVwRm9ybTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFNpZ251cEZvcm0gPSByZXF1aXJlKCcuL3NpZ251cC1mb3JtJyk7XG52YXIgQXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL0F1dGhBY3Rpb25zJyk7XG52YXIgQXV0aFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL0F1dGhTdG9yZScpO1xuXG52YXIgU2lnbnVwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNpZ251cFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBBdXRoU3RvcmUubG9nZ2VkSW4oKSxcbiAgICAgIGVycm9yOiBBdXRoU3RvcmUuZXJyb3IoKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgIEF1dGhTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgQXV0aFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBfb25DaGFuZ2U6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dnZWRJbjogQXV0aFN0b3JlLmxvZ2dlZEluKCksXG4gICAgICBlcnJvcjogQXV0aFN0b3JlLmVycm9yKClcbiAgICB9KTtcbiAgICBpZih0aGlzLnN0YXRlLmxvZ2dlZEluKXtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnLyc7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVNpZ251cFN1Ym1pdDogZnVuY3Rpb24odXNlcil7XG4gICAgQXV0aEFjdGlvbnMuc2lnbnVwKHtcbiAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsIFxuICAgICAgbGFzdG5hbWU6IHVzZXIubGFzdG5hbWUsIFxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsIFxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsIFxuICAgICAgZXJyb3I6IHVzZXIuZXJyb3JcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiQXV0aCBjZW50ZXItYmxvY2tcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJTaWduIHVwXCIpLCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZ251cEZvcm0sIHtvblNpZ251cFN1Ym1pdDogdGhpcy5oYW5kbGVTaWdudXBTdWJtaXR9KSwgXG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJlcnJvclwifSwgXCJCYWQgc2lnbnVwIGluZm9ybWF0aW9uXCIpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ251cDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRocmVhZFN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL1RocmVhZFN0b3JlJyk7XG52YXIgVGhyZWFkQWN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2FjdGlvbnMvVGhyZWFkQWN0aW9ucycpO1xudmFyIEF1dGhTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9BdXRoU3RvcmUnKTtcblxudmFyIE5ld1RocmVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOZXdUaHJlYWRcIixcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIGlmKCFBdXRoU3RvcmUubG9nZ2VkSW4oKSl7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJy9sb2dpbic7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBhZGRUaHJlYWQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gU2VuZCBhY3Rpb24gdG8gdXBkYXRlIHVzZXIgaW5mb3JtYXRpb25cbiAgICB2YXIgdGl0bGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudGl0bGUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgYm9keSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5ib2R5KS52YWx1ZS50cmltKCk7XG5cbiAgICBpZighdGl0bGUgfHwgIWJvZHkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFRocmVhZEFjdGlvbnMuYWRkKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJvZHk6IGJvZHlcbiAgICB9KTtcblxuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICBsb2NhdGlvbi5oYXNoID0gJy8nO1xuICB9LFxuXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC0xMlwifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIk5ldyBUaHJlYWRcIiksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmV3VGhyZWFkIGNlbnRlci1ibG9ja1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7b25TdWJtaXQ6IHRoaXMuYWRkVGhyZWFkfSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcGxhY2Vob2xkZXI6IFwiVGl0bGVcIiwgcmVmOiBcInRpdGxlXCJ9KSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0YXJlYVwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHBsYWNlaG9sZGVyOiBcIkJvZHlcIiwgcmVmOiBcImJvZHlcIn0pLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7dHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ0biBidG4tc3VjY2Vzc1wiLCB2YWx1ZTogXCJTdWJtaXRcIn0sIFwiU3VibWl0XCIpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOZXdUaHJlYWQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaHJlYWRTdG9yZSA9IHJlcXVpcmUoJy4uLy4uL3N0b3Jlcy9UaHJlYWRTdG9yZScpO1xudmFyIFRocmVhZEFjdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9hY3Rpb25zL1RocmVhZEFjdGlvbnMnKTtcblxudmFyIENvbW1lbnRMaXN0ID0gcmVxdWlyZSgnLi4vY29tbWVudC9jb21tZW50LWxpc3QnKTtcbnZhciBDb21tZW50SW5wdXQgPSByZXF1aXJlKCcuLi9jb21tZW50L2NvbW1lbnQtaW5wdXQnKTtcblxudmFyIFRocmVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUaHJlYWRcIixcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOnRoaXMucHJvcHMucGFyYW1zLmlkLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgYm9keTogJycsXG4gICAgICByYXRpbmc6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuICAgIFRocmVhZEFjdGlvbnMuZmV0Y2hUaHJlYWQoe2lkOnRoaXMuc3RhdGUuaWR9KTtcbiAgICBUaHJlYWRTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgVGhyZWFkU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpdGxlOiBUaHJlYWRTdG9yZS5nZXRUaHJlYWQoKS5mb3J1bVRocmVhZHNbMF0udGl0bGUsXG4gICAgICBib2R5OiBUaHJlYWRTdG9yZS5nZXRUaHJlYWQoKS5mb3J1bVRocmVhZHNbMF0uYm9keSxcbiAgICAgIHJhdGluZzogVGhyZWFkU3RvcmUuZ2V0VGhyZWFkKCkuZm9ydW1UaHJlYWRzWzBdLnJhdGluZ1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtMTJcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgXCIgXCIsIHRoaXMuc3RhdGUudGl0bGUsIFwiIFwiKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjYXJkXCJ9LCBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBcIiwgdGhpcy5zdGF0ZS5ib2R5LCBcIiBcIilcbiAgICAgICAgKSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFJhdGluZzogXCIsIHRoaXMuc3RhdGUucmF0aW5nLCBcIiBcIiksIFxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudExpc3QsIHt0aHJlYWRJZDogdGhpcy5zdGF0ZS5pZH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBCaW8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQmlvXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTNcIn0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfbmFtZSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgdGhpcy5wcm9wcy5pdGVtLmZpcnN0X25hbWUsIFwiIFwiLCB0aGlzLnByb3BzLml0ZW0ubGFzdF9uYW1lKSwgXG5cbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IHRoaXMucHJvcHMuaXRlbS5hdmF0YXJfbGluaywgY2xhc3NOYW1lOiBcImltZy10aHVtYm5haWxcIn0pLCBcblxuXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiUmVwOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnJlcCksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIklkOiBcIiwgdGhpcy5wcm9wcy5pdGVtLnVzZXJfaWQpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJCaW86IFwiLCB0aGlzLnByb3BzLml0ZW0uYmlvKVxuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmlvOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGhyZWFkU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvVGhyZWFkU3RvcmUnKTtcbnZhciBUaHJlYWRBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9UaHJlYWRBY3Rpb25zJyk7XG52YXIgUHJvZmlsZVRocmVhZEl0ZW0gPSByZXF1aXJlKCcuL3VzZXItdGhyZWFkaXRlbScpO1xuXG52YXIgQmlvVGhyZWFkcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCaW9UaHJlYWRzXCIsXG4gIC8vIFRPRE86IEluY29ycG9yYXRlIExhdGVyIHdoZW4gQXV0aCBpcyBpbi5cblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICB0aHJlYWRzOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ETzogRmV0Y2ggVXNlciBQYWdlIGJ5IElEXG4gICAgLy8gVGhyZWFkQWN0aW9ucy5mZXRjaFVzZXJQYWdlKHtwYWdlOnRoaXMuc3RhdGUucGFnZX0pO1xuICAgIFRocmVhZFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBUaHJlYWRTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vbkNoYW5nZSk7XG4gIH0sXG5cbiAgX29uQ2hhbmdlOiBmdW5jdGlvbigpe1xuICAgIC8vIFRPRE86IEdldCBVc2VyIFRocmVhZHMgYnkgSURcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgIHRocmVhZHM6IFRocmVhZFN0b3JlLmdldFVzZXJUaHJlYWRzKCkuZm9ydW1UaHJlYWRzXG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbC1tZC05XCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwiVXNlciBUaHJlYWRzXCIpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHtjbGFzc05hbWU6IFwidGFibGUgdGFibGUtaG92ZXJcIn0sIFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiUmF0aW5nXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiVGl0bGVcIiksIFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgbnVsbCwgXCJCb2R5XCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiU3VibWl0dGVkXCIpLCBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIG51bGwsIFwiQ3JlYXRlZFwiKSwgXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBudWxsLCBcIlVwZGF0ZWRcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLCBcblxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGhyZWFkcy5tYXAoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm9maWxlVGhyZWFkSXRlbSwge2tleTogaXRlbS50aHJlYWRfaWQsIGl0ZW06IGl0ZW19KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpb1RocmVhZHM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBdXRoU3RvcmUgPSByZXF1aXJlKCcuLi8uLi9zdG9yZXMvQXV0aFN0b3JlJyk7XG52YXIgUHJvZmlsZVN0b3JlID0gcmVxdWlyZSgnLi4vLi4vc3RvcmVzL1Byb2ZpbGVTdG9yZScpO1xudmFyIFByb2ZpbGVBY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vYWN0aW9ucy9Qcm9maWxlQWN0aW9ucycpO1xudmFyIEJpbyA9IHJlcXVpcmUoJy4vdXNlci1iaW8nKTtcbnZhciBCaW9UaHJlYWRzID0gcmVxdWlyZSgnLi91c2VyLXRocmVhZHMnKTtcblxudmFyIFVzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVXNlclwiLFxuICAvLyBUT0RPOiBJbmNvcnBvcmF0ZSBMYXRlciB3aGVuIEF1dGggaXMgaW4uXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBhdmF0YXJfbGluazogXCJcIixcbiAgICAgIGJpbzogXCJcIixcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXG4gICAgICB1c2VyX25hbWU6IFwiXCIsXG4gICAgICB1c2VyX2lkOiB0aGlzLnByb3BzLnBhcmFtcy5pZCxcbiAgICAgIHJlcDogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgLy8gVE9ETzogZmV0Y2ggYnkgdXNlciBJRFxuICAgIC8vIFByb2ZpbGVBY3Rpb25zLmZldGNoKCk7XG4gICAgUHJvZmlsZVN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKXtcbiAgICBQcm9maWxlU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oKXtcbiAgICAvLyBUT0RPOiBTZXQgYnkgZ2V0VXNlcigpXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgZmlyc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmZpcnN0X25hbWUsXG4gICAgICAvLyAgIGxhc3RfbmFtZTogUHJvZmlsZVN0b3JlLmdldEJpbygpLmxhc3RfbmFtZSxcbiAgICAgIC8vICAgdXNlcl9uYW1lOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9uYW1lLFxuICAgICAgLy8gICB1c2VyX2lkOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkudXNlcl9pZCxcbiAgICAgIC8vICAgYmlvOiBQcm9maWxlU3RvcmUuZ2V0QmlvKCkuYmlvLFxuICAgICAgLy8gICBhdmF0YXJfbGluazogUHJvZmlsZVN0b3JlLmdldEJpbygpLmF2YXRhcl9saW5rLFxuICAgICAgLy8gICByZXA6IFByb2ZpbGVTdG9yZS5nZXRCaW8oKS5yZXBcbiAgICAgIC8vIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwcm9maWxlXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCaW8sIHtpdGVtOiB0aGlzLnN0YXRlfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpb1RocmVhZHMsIG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiLCJ2YXIgQXV0aENvbnN0YW50cyA9IHtcbiAgU0lHTlVQOiAnU0lHTlVQJyxcbiAgTE9HSU46ICdMT0dJTicsXG4gIExPR09VVDogJ0xPR09VVCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aENvbnN0YW50czsiLCJ2YXIgQ29tbWVudENvbnN0YW50cyA9IHtcbiAgUE9TVF9BREQ6ICdQT1NUX0FERCcsXG4gIFBPU1RfRkVUQ0hQQUdFOiAnUE9TVF9GRVRDSFBBR0UnLFxuICBQT1NUX0ZFVENIVVNFUlBBR0U6ICdQT1NUX0ZFVENIVVNFUlBBR0UnLFxuICBQT1NUX1VQVk9URTogJ1BPU1RfVVBWT1RFJyxcbiAgUE9TVF9ET1dOVk9URTogJ1BPU1RfRE9XTlZPVEUnLFxuICBQT1NUX1VQREFURTogJ1BPU1RfVVBEQVRFJyxcbiAgUE9TVF9ERUxFVEU6ICdQT1NUX0RFTEVURSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudENvbnN0YW50czsiLCJ2YXIgUHJvZmlsZUNvbnN0YW50cyA9IHtcbiAgRkVUQ0g6ICdGRVRDSCcsIC8vIGZldGNoZXMgdXNlciBkYXRhIHRvIGRpc3BsYXkgb24gdmlld1xuICBVUERBVEU6ICdVUERBVEUnLCAvLyB1cGRhdGVzIHVzZXIgZGF0YVxuICBERUxFVEU6ICdERUxFVEUnIC8vIFRPRE86IGRlbGV0ZSBhY2NvdW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2ZpbGVDb25zdGFudHM7IiwidmFyIFRocmVhZENvbnN0YW50cyA9IHtcbiAgQUREOiAnQUREJyxcbiAgRkVUQ0hUSFJFQUQ6ICdGRVRDSFRIUkVBRCcsXG4gIEZFVENIUEFHRTogJ0ZFVENIUEFHRScsXG4gIEZFVENIVVNFUlBBR0U6ICdGRVRDSFVTRVJQQUdFJyxcbiAgVVBWT1RFOiAnVVBWT1RFJyxcbiAgRE9XTlZPVEU6ICdET1dOVk9URScsXG4gIFVQREFURTogJ1VQREFURScsXG4gIERFTEVURTogJ0RFTEVURSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhyZWFkQ29uc3RhbnRzOyIsInZhciBEaXNwYXRjaGVyID0gcmVxdWlyZSgnZmx1eCcpLkRpc3BhdGNoZXI7XG52YXIgQXBwRGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbkFwcERpc3BhdGNoZXIuaGFuZGxlQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gIHRoaXMuZGlzcGF0Y2goe1xuICAgIHNvdXJjZTogJ1ZJRVdfQUNUSU9OJyxcbiAgICBhY3Rpb246IGFjdGlvblxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBEaXNwYXRjaGVyOyIsInZhciBhdXRoZW50aWNhdGVVc2VyID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvYXV0aGVudGljYXRlJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIE5PVCBXT1JLSU5HXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICAgIHRva2VuOiByZXNwLmF1dGhfdG9rZW5cbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9jcmVhdGVVc2VyJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lLFxuICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZCxcbiAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcbiAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWVcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soe1xuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgICB0b2tlbjogcmVzcC5hdXRoX3Rva2VuXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgdG9rZW46IHJlc3AuYXV0aF90b2tlblxuICAgICAgICB9KTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBBdXRoID0ge1xuICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubG9nZ2VkSW4oKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FscmVhZHkgbG9nZ2VkIGluJyk7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBhdXRoZW50aWNhdGVVc2VyKHVzZXJuYW1lLCBwYXNzLCAoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KSk7XG4gIH0sXG4gIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBcbiAgICBpZiAodGhpcy5sb2dnZWRJbigpKSB7XG4gICAgICAvLyBpZiAoY2FsbGJhY2spIHtcbiAgICAgIC8vICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyKHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHZhciBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAgYW5kIGxvZ2luIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgICAgYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soYXV0aGVudGljYXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShhdXRoZW50aWNhdGVkKTtcbiAgICB9KTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgZGVsZXRlQWxsQ29va2llcygpO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWxsQ29va2llcygpIHtcbiAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgICB2YXIgZXFQb3MgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgfSxcblxuICBsb2dnZWRJbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gY2hlY2sgdGhlIGZsYXNoIHNlc3Npb24gY29va2llXG4gICAgdmFyIGdvb2QgPSBmYWxzZTtcbiAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldO1xuICAgICAgdmFyIGVxUG9zID0gY29va2llLmluZGV4T2YoXCJmbGFzaC1zZXNzaW9uPVwiKTtcbiAgICAgIGlmKGVxUG9zID4gLTEpIGdvb2QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBnb29kO1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGg7IiwidmFyIGFkZENvbW1lbnQgPSBmdW5jdGlvbih0aHJlYWRJZCxib2R5LGNhbGxiYWNrKSB7XG4gIHJldHVybiAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvY3JlYXRlVGhyZWFkUG9zdCcsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJ0aHJlYWRfaWRcIjogcGFyc2VJbnQodGhyZWFkSWQpLFxuICAgICAgXCJjb250ZW50c1wiOiBib2R5XG4gICAgfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBpZihyZXNwLnJlc3BvbnNlVGV4dCA9PT0gXCJcIil7IC8vIGlmIG5vIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgIH1lbHNleyAgICAgICAgIC8vIGlmIGVycm9yIG1zZ1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuXG52YXIgZmV0Y2hDb21tZW50ID0gZnVuY3Rpb24oaWQsY2FsbGJhY2spIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6ICcvZ2V0VXNlckluZm8nLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBHcmFicyBDb21tZW50cyBmb3IgcGFnZSBudW1iZXJcbnZhciBmZXRjaFBhZ2UgPSBmdW5jdGlvbih0aHJlYWRJZCwgcGFnZSwgY2FsbGJhY2spIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2dldFRocmVhZFBvc3RzQnlSYXRpbmcnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInRocmVhZF9pZFwiOiBwYXJzZUludCh0aHJlYWRJZCksIFwicGFnZV9udW1iZXJcIiA6IHBhcnNlSW50KHBhZ2UpfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIGZldGNoVXNlclBhZ2UgPSBmdW5jdGlvbihwYWdlLCBjYWxsYmFjaykge1xuICBcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2dldEZvcnVtVGhyZWFkc0J5VXNlcklkJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJwYWdlX251bWJlclwiIDogcGFnZX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdXBkYXRlQ29tbWVudCA9IGZ1bmN0aW9uKGJpbyxhdmF0YXIsY2FsbGJhY2spIHtcbiAgcmV0dXJuICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy91cGRhdGVVc2VySW5mbycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJiaW9cIjogYmlvLFxuICAgICAgXCJhdmF0YXJfbGlua1wiOiBhdmF0YXJcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdXBWb3RlID0gZnVuY3Rpb24ocG9zdF9pZCwgY2FsbGJhY2spIHtcbiAgY29uc29sZS5sb2coJ3Vwdm90aW5nLi4uJyxwb3N0X2lkKTtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL3Vwdm90ZVRocmVhZFBvc3QnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInBvc3RfaWRcIiA6IHBhcnNlSW50KHBvc3RfaWQpfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIGRvd25Wb3RlID0gZnVuY3Rpb24ocG9zdF9pZCwgY2FsbGJhY2spIHtcbiAgY29uc29sZS5sb2coJ2Rvd252b3RpbmcuLi4nLHBvc3RfaWQpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvZG93bnZvdGVUaHJlYWRQb3N0JyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJwb3N0X2lkXCIgOiBwYXJzZUludChwb3N0X2lkKX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG5cbn07XG5cbnZhciBDb21tZW50ID0ge1xuXG4gIGZldGNoUGFnZTogZnVuY3Rpb24odGhyZWFkSWQsIHBhZ2UsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZldGNoUGFnZSh0aHJlYWRJZCwgcGFnZSAsZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hVc2VyUGFnZShwYWdlLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHRocmVhZElkLCBib2R5LCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGFkZENvbW1lbnQodGhyZWFkSWQsIGJvZHksIGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9XG4gICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG5cbiAgfSxcbiAgXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLCBhdmF0YXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHVwZGF0ZUNvbW1lbnQoYmlvLCBhdmF0YXIsIGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9XG4gICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZShmYWxzZSk7XG4gIH0sXG5cbiAgdXBWb3RlOiBmdW5jdGlvbihwb3N0X2lkLGNhbGxiYWNrKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB1cFZvdGUocG9zdF9pZCwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcblxuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbihwb3N0X2lkLGNhbGxiYWNrKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBkb3duVm90ZShwb3N0X2lkLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuXG4gIH0sXG5cblxuICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50OyIsInZhciBmZXRjaFVzZXIgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogJy9nZXRVc2VySW5mbycsXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB1cGRhdGVVc2VyID0gZnVuY3Rpb24oYmlvLGF2YXRhcixjYWxsYmFjaykge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL3VwZGF0ZVVzZXJJbmZvJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImJpb1wiOiBiaW8sXG4gICAgICBcImF2YXRhcl9saW5rXCI6IGF2YXRhclxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBQcm9maWxlID0ge1xuICBmZXRjaDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hVc2VyKChmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSkpO1xuICB9LFxuICBcbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sIGF2YXRhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoe2JpbzpiaW8sYXZhdGFyX2xpbms6YXZhdGFyfSkpO1xuICAgIHVwZGF0ZVVzZXIoYmlvLCBhdmF0YXIsIGZ1bmN0aW9uKHJlcykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICB9XG4gICAgICB0aGF0Lm9uQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZShmYWxzZSk7XG4gIH0sXG5cbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZTsiLCJ2YXIgYWRkVGhyZWFkID0gZnVuY3Rpb24odGl0bGUsYm9keSxjYWxsYmFjaykge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2NyZWF0ZUZvcnVtVGhyZWFkJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcInRpdGxlXCI6IHRpdGxlLFxuICAgICAgXCJib2R5XCI6IGJvZHlcbiAgICB9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICByZXR1cm4gY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGlmKHJlc3AucmVzcG9uc2VUZXh0ID09PSBcIlwiKXsgLy8gaWYgbm8gZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgfWVsc2V7ICAgICAgICAgLy8gaWYgZXJyb3IgbXNnXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5cbnZhciBmZXRjaFRocmVhZCA9IGZ1bmN0aW9uKGlkLGNhbGxiYWNrKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9nZXRGb3J1bVRocmVhZHNCeVRocmVhZElkJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJ0aHJlYWRfaWRcIiA6IHBhcnNlSW50KGlkKSwgXCJwYWdlX251bWJlclwiIDogMX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIEdyYWJzIHRocmVhZHMgZm9yIHBhZ2UgbnVtYmVyXG52YXIgZmV0Y2hQYWdlID0gZnVuY3Rpb24ocGFnZSwgY2FsbGJhY2spIHtcbiAgXG4gICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJy9nZXRGb3J1bVRocmVhZHNCeVJhdGluZycsXG4gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wicGFnZV9udW1iZXJcIiA6IHBhZ2V9KSxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwKSB7IC8vIFdPUktJTkcgZm9yIGZldGNodXNlcj9cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIC8vIFRPRE86IEZpeCB0aGlzLCB0aGlzIGFsd2F5cyBnb2VzIHRvIGVycm9yIC0gbm90IHN1cmUuXG4gICAgICAvLyBGb3VuZCBvdXQgLSBqUXVlcnkgMS40LjIgd29ya3Mgd2l0aCBjdXJyZW50IGdvIHNlcnZlciwgYnV0IGJyZWFrcyB3aXRoIG5ld2VyIHZlci5cbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicscmVzcCk7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGZldGNoVXNlclBhZ2UgPSBmdW5jdGlvbihwYWdlLCBjYWxsYmFjaykge1xuICBcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2dldEZvcnVtVGhyZWFkc0J5VXNlcklkJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJwYWdlX251bWJlclwiIDogcGFnZX0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHsgLy8gV09SS0lORyBmb3IgZmV0Y2h1c2VyP1xuICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLHJlc3ApO1xuICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgLy8gVE9ETzogRml4IHRoaXMsIHRoaXMgYWx3YXlzIGdvZXMgdG8gZXJyb3IgLSBub3Qgc3VyZS5cbiAgICAgIC8vIEZvdW5kIG91dCAtIGpRdWVyeSAxLjQuMiB3b3JrcyB3aXRoIGN1cnJlbnQgZ28gc2VydmVyLCBidXQgYnJlYWtzIHdpdGggbmV3ZXIgdmVyLlxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyxyZXNwKTtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdXBkYXRlVGhyZWFkID0gZnVuY3Rpb24oYmlvLGF2YXRhcixjYWxsYmFjaykge1xuICByZXR1cm4gJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL3VwZGF0ZVVzZXJJbmZvJyxcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImJpb1wiOiBiaW8sXG4gICAgICBcImF2YXRhcl9saW5rXCI6IGF2YXRhclxuICAgIH0pLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyxyZXNwKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgaWYocmVzcC5yZXNwb25zZVRleHQgPT09IFwiXCIpeyAvLyBpZiBubyBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICB9ZWxzZXsgICAgICAgICAvLyBpZiBlcnJvciBtc2dcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB1cFZvdGUgPSBmdW5jdGlvbih0aHJlYWRfaWQsIGNhbGxiYWNrKSB7XG4gIFxuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdQT1NUJyxcbiAgICB1cmw6ICcvdXB2b3RlRm9ydW1UaHJlYWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInRocmVhZF9pZFwiIDogdGhyZWFkX2lkfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIGRvd25Wb3RlID0gZnVuY3Rpb24odGhyZWFkX2lkLCBjYWxsYmFjaykge1xuICBcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiAnL2Rvd252b3RlRm9ydW1UaHJlYWQnLFxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcInRocmVhZF9pZFwiIDogdGhyZWFkX2lkfSksXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkgeyAvLyBXT1JLSU5HIGZvciBmZXRjaHVzZXI/XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3VjY2VzcycscmVzcCk7XG4gICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwKSB7XG4gICAgICAvLyBUT0RPOiBGaXggdGhpcywgdGhpcyBhbHdheXMgZ29lcyB0byBlcnJvciAtIG5vdCBzdXJlLlxuICAgICAgLy8gRm91bmQgb3V0IC0galF1ZXJ5IDEuNC4yIHdvcmtzIHdpdGggY3VycmVudCBnbyBzZXJ2ZXIsIGJ1dCBicmVha3Mgd2l0aCBuZXdlciB2ZXIuXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLHJlc3ApO1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICB9KTtcblxufTtcblxudmFyIFRocmVhZCA9IHtcbiAgZmV0Y2hUaHJlYWQ6IGZ1bmN0aW9uKGlkLGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGZldGNoVGhyZWFkKGlkLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hQYWdlKHBhZ2UsZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoVXNlclBhZ2U6IGZ1bmN0aW9uKHBhZ2UsY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgZmV0Y2hVc2VyUGFnZShwYWdlLGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHRpdGxlLCBib2R5LCBjYWxsYmFjaykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGFkZFRocmVhZCh0aXRsZSwgYm9keSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcblxuICB9LFxuICBcbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sIGF2YXRhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdXBkYXRlVGhyZWFkKGJpbywgYXZhdGFyLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xuICB9LFxuXG4gIHVwVm90ZTogZnVuY3Rpb24odGhyZWFkX2lkLGNhbGxiYWNrKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB1cFZvdGUodGhyZWFkX2lkLCBmdW5jdGlvbihyZXMpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgfVxuICAgICAgdGhhdC5vbkNoYW5nZShyZXMpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbih0aHJlYWRfaWQsY2FsbGJhY2spe1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIGRvd25Wb3RlKHRocmVhZF9pZCwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICAgIHRoYXQub25DaGFuZ2UocmVzKTtcbiAgICB9KTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJlYWQ7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgQXV0aENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9BdXRoQ29uc3RhbnRzJyk7XG52YXIgQXV0aCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX3VzZXIgPSBudWxsO1xudmFyIF9sb2dnZWRJbiA9IG51bGw7XG52YXIgX2Vycm9yID0gbnVsbDtcblxudmFyIEF1dGhTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIF9lcnJvcjtcbiAgfSxcblxuICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUscGFzcyl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIF9lcnJvciA9IGZhbHNlO1xuICAgIEF1dGgubG9naW4odXNlcm5hbWUscGFzcyxmdW5jdGlvbihzdWNjZXNzKXtcblxuICAgICAgaWYoc3VjY2Vzcyl7XG4gICAgICAgIF9sb2dnZWRJbiA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIF9lcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcblxuICAgIH0pO1xuICB9LFxuICAvLyBsb2cgb3V0IHVzZXJcbiAgbG9nb3V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgQXV0aC5sb2dvdXQoZnVuY3Rpb24oKXtcbiAgICAgIF9sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbG9nZ2VkSW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBBdXRoLmxvZ2dlZEluKCk7XG4gIH0sXG5cbiAgc2lnbnVwOiBmdW5jdGlvbih1c2VybmFtZSxwYXNzd29yZCxmaXJzdG5hbWUsbGFzdG5hbWUpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBfZXJyb3IgPSBmYWxzZTtcbiAgICBBdXRoLnNpZ251cCh1c2VybmFtZSwgcGFzc3dvcmQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcblxuICAgICAgaWYoc3VjY2Vzcyl7XG4gICAgICAgIF9sb2dnZWRJbiA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgX2xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIF9lcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcblxuICAgIH0pO1xuICB9LFxuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYilcbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2IpO1xuICB9XG59KTtcblxuXG5BcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb247XG5cbiAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuU0lHTlVQOlxuICAgICAgQXV0aFN0b3JlLnNpZ251cChhY3Rpb24uZGF0YS51c2VybmFtZSxhY3Rpb24uZGF0YS5wYXNzd29yZCxhY3Rpb24uZGF0YS5maXJzdG5hbWUsYWN0aW9uLmRhdGEubGFzdG5hbWUpO1xuICAgICAgQXV0aFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXV0aENvbnN0YW50cy5MT0dJTjpcbiAgICAgIEF1dGhTdG9yZS5sb2dpbihhY3Rpb24uZGF0YS51c2VybmFtZSxhY3Rpb24uZGF0YS5wYXNzKTtcbiAgICAgIEF1dGhTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEF1dGhDb25zdGFudHMuTE9HT1VUOlxuICAgICAgQXV0aFN0b3JlLmxvZ291dCgpO1xuICAgICAgLy8gUm91dGVyQ29udGFpbmVyLmdldCgpLnRyYW5zaXRpb25UbygnL2xvZ2luJyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBBdXRoU3RvcmUuZW1pdENoYW5nZSgpO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhTdG9yZTsiLCJ2YXIgQXBwRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXJzL0FwcERpc3BhdGNoZXInKTtcbnZhciBDb21tZW50Q29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL0NvbW1lbnRDb25zdGFudHMnKTtcbnZhciBDb21tZW50ID0gcmVxdWlyZSgnLi4vc2VydmljZXMvQ29tbWVudFNlcnZpY2UnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbnZhciBfY29tbWVudHMgPSBbXTtcbnZhciBfdXNlckNvbW1lbnRzID0gW107XG52YXIgX2NvbW1lbnQgPSBudWxsO1xuXG52YXIgQ29tbWVudFN0b3JlID0gYXNzaWduKHt9LCBFdmVudEVtaXR0ZXIucHJvdG90eXBlLCB7XG5cbiAgZW1pdENoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgIHRoaXMuZW1pdChDSEFOR0VfRVZFTlQpO1xuICAgfSxcblxuICBnZXRDb21tZW50OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfY29tbWVudDtcbiAgfSxcblxuICBnZXRDb21tZW50czogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX2NvbW1lbnRzO1xuICB9LFxuXG4gIGdldFVzZXJDb21tZW50czogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3VzZXJDb21tZW50cztcbiAgfSxcblxuICBmZXRjaFBhZ2U6IGZ1bmN0aW9uKHRocmVhZElkLCBwYWdlKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgQ29tbWVudC5mZXRjaFBhZ2UodGhyZWFkSWQsIHBhZ2UsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgX2NvbW1lbnRzID0gZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZmV0Y2hVc2VyUGFnZTogZnVuY3Rpb24ocGFnZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIENvbW1lbnQuZmV0Y2hVc2VyUGFnZShwYWdlLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIF91c2VyQ29tbWVudHMgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbih0aHJlYWRJZCxib2R5KXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgQ29tbWVudC5hZGQodGhyZWFkSWQsYm9keSxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwVm90ZTogZnVuY3Rpb24ocG9zdF9pZCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIENvbW1lbnQudXBWb3RlKHBvc3RfaWQsZnVuY3Rpb24oZGF0YSl7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBkb3duVm90ZTogZnVuY3Rpb24ocG9zdF9pZCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIENvbW1lbnQuZG93blZvdGUocG9zdF9pZCxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24oYmlvLGF2YXRhcil7XG4gICAgLy8gdmFyIHRoYXQgPSB0aGlzO1xuICAgIC8vIENvbW1lbnQudXBkYXRlKGJpbyxhdmF0YXIsZnVuY3Rpb24oZGF0YSl7XG4gICAgLy8gICBjb25zb2xlLmxvZygndXBkYXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICAvLyAgIHRoYXQuZmV0Y2goKTtcbiAgICAvLyB9KTtcbiAgfSxcblxuICBkZWxldGU6IGZ1bmN0aW9uKCl7XG5cblxuICB9LFxuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYilcbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2IpO1xuICB9XG59KTtcblxuXG5BcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uKHBheWxvYWQpe1xuICB2YXIgYWN0aW9uID0gcGF5bG9hZC5hY3Rpb247XG5cbiAgc3dpdGNoKGFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9GRVRDSFBBR0U6XG4gICAgICBDb21tZW50U3RvcmUuZmV0Y2hQYWdlKGFjdGlvbi5kYXRhLnRocmVhZElkLCBhY3Rpb24uZGF0YS5wYWdlKTtcbiAgICAgIENvbW1lbnRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9GRVRDSFVTRVJQQUdFOlxuICAgICAgQ29tbWVudFN0b3JlLmZldGNoVXNlclBhZ2UoYWN0aW9uLmRhdGEucGFnZSk7XG4gICAgICBDb21tZW50U3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb21tZW50Q29uc3RhbnRzLlBPU1RfQUREOlxuICAgICAgQ29tbWVudFN0b3JlLmFkZChhY3Rpb24uZGF0YS50aHJlYWRJZCxhY3Rpb24uZGF0YS5ib2R5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29tbWVudENvbnN0YW50cy5QT1NUX1VQREFURTpcbiAgICAgIC8vIFRPRE86IFVwZGF0aW5nIGEgQ29tbWVudFxuXG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9ERUxFVEU6XG4gICAgICAvLyBUT0RPOiBEZWxldGluZyBhIENvbW1lbnRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29tbWVudENvbnN0YW50cy5QT1NUX1VQVk9URTpcbiAgICAgIENvbW1lbnRTdG9yZS51cFZvdGUoYWN0aW9uLmRhdGEucG9zdF9pZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbW1lbnRDb25zdGFudHMuUE9TVF9ET1dOVk9URTpcbiAgICAgIENvbW1lbnRTdG9yZS5kb3duVm90ZShhY3Rpb24uZGF0YS5wb3N0X2lkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQ29tbWVudFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50U3RvcmU7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgUHJvZmlsZUNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9Qcm9maWxlQ29uc3RhbnRzJyk7XG52YXIgUHJvZmlsZSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL1Byb2ZpbGVTZXJ2aWNlJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIENIQU5HRV9FVkVOVCA9ICdjaGFuZ2UnO1xuXG52YXIgX3N0b3JlID0ge1xuICBhdmF0YXJfbGluazogXCJcIixcbiAgYmlvOiBcIlwiLFxuICBmaXJzdF9uYW1lOiBcIlwiLFxuICBsYXN0X25hbWU6IFwiXCIsXG4gIHVzZXJfbmFtZTogXCJcIixcbiAgaWQ6IDAsXG4gIHJlcDogMFxufTtcblxudmFyIFByb2ZpbGVTdG9yZSA9IGFzc2lnbih7fSwgRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuXG4gIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICB0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcbiAgIH0sXG5cbiAgZ2V0QmlvOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfc3RvcmU7XG4gIH0sXG5cbiAgZmV0Y2g6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFByb2ZpbGUuZmV0Y2goZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfc3RvcmUgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sYXZhdGFyKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgUHJvZmlsZS51cGRhdGUoYmlvLGF2YXRhcixmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xuICAgICAgdGhhdC5mZXRjaCgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZTogZnVuY3Rpb24oKXtcblxuXG4gIH0sXG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5vbihDSEFOR0VfRVZFTlQsIGNiKVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYik7XG4gIH1cbn0pO1xuXG5cbkFwcERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCl7XG4gIHZhciBhY3Rpb24gPSBwYXlsb2FkLmFjdGlvbjtcblxuICBzd2l0Y2goYWN0aW9uLmFjdGlvblR5cGUpe1xuICAgIGNhc2UgUHJvZmlsZUNvbnN0YW50cy5GRVRDSDpcbiAgICAgIFByb2ZpbGVTdG9yZS5mZXRjaCgpO1xuICAgICAgUHJvZmlsZVN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUHJvZmlsZUNvbnN0YW50cy5VUERBVEU6XG4gICAgICBQcm9maWxlU3RvcmUudXBkYXRlKGFjdGlvbi5kYXRhLmJpbyxhY3Rpb24uZGF0YS5hdmF0YXJfbGluayk7XG4gICAgICBQcm9maWxlU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBQcm9maWxlU3RvcmUuREVMRVRFOlxuICAgICAgUHJvZmlsZVN0b3JlLmRlbGV0ZSgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgUHJvZmlsZVN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgcmV0dXJuIHRydWU7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9maWxlU3RvcmU7IiwidmFyIEFwcERpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVycy9BcHBEaXNwYXRjaGVyJyk7XG52YXIgVGhyZWFkQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL1RocmVhZENvbnN0YW50cycpO1xudmFyIFRocmVhZCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL1RocmVhZFNlcnZpY2UnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgQ0hBTkdFX0VWRU5UID0gJ2NoYW5nZSc7XG5cbnZhciBfdGhyZWFkcyA9IFtdO1xudmFyIF91c2VyVGhyZWFkcyA9IFtdO1xudmFyIF90aHJlYWQgPSBudWxsO1xuXG52YXIgVGhyZWFkU3RvcmUgPSBhc3NpZ24oe30sIEV2ZW50RW1pdHRlci5wcm90b3R5cGUsIHtcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgdGhpcy5lbWl0KENIQU5HRV9FVkVOVCk7XG4gICB9LFxuXG4gIGdldFRocmVhZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3RocmVhZDtcbiAgfSxcblxuICBnZXRUaHJlYWRzOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBfdGhyZWFkcztcbiAgfSxcblxuICBnZXRVc2VyVGhyZWFkczogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gX3VzZXJUaHJlYWRzO1xuICB9LFxuXG4gIGZldGNoVGhyZWFkOiBmdW5jdGlvbihpZCl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5mZXRjaFRocmVhZChpZCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfdGhyZWFkID0gZGF0YTtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGZldGNoUGFnZTogZnVuY3Rpb24ocGFnZSl7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIFRocmVhZC5mZXRjaFBhZ2UocGFnZSwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfdGhyZWFkcyA9IGRhdGE7XG4gICAgICB0aGF0LmVtaXRDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICBmZXRjaFVzZXJQYWdlOiBmdW5jdGlvbihwYWdlKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgVGhyZWFkLmZldGNoVXNlclBhZ2UocGFnZSwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBfdXNlclRocmVhZHMgPSBkYXRhO1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbih0aXRsZSxib2R5KXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgVGhyZWFkLmFkZCh0aXRsZSxib2R5LGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBWb3RlOiBmdW5jdGlvbih0aHJlYWRfaWQpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBUaHJlYWQudXBWb3RlKHRocmVhZF9pZCxmdW5jdGlvbihkYXRhKXtcbiAgICAgIHRoYXQuZW1pdENoYW5nZSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRvd25Wb3RlOiBmdW5jdGlvbih0aHJlYWRfaWQpe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBUaHJlYWQuZG93blZvdGUodGhyZWFkX2lkLGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgdGhhdC5lbWl0Q2hhbmdlKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbihiaW8sYXZhdGFyKXtcbiAgICAvLyB2YXIgdGhhdCA9IHRoaXM7XG4gICAgLy8gVGhyZWFkLnVwZGF0ZShiaW8sYXZhdGFyLGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XG4gICAgLy8gICB0aGF0LmZldGNoKCk7XG4gICAgLy8gfSk7XG4gIH0sXG5cbiAgZGVsZXRlOiBmdW5jdGlvbigpe1xuXG5cbiAgfSxcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLm9uKENIQU5HRV9FVkVOVCwgY2IpXG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uKGNiKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihDSEFOR0VfRVZFTlQsIGNiKTtcbiAgfVxufSk7XG5cblxuQXBwRGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKXtcbiAgdmFyIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uO1xuXG4gIHN3aXRjaChhY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRkVUQ0hQQUdFOlxuICAgICAgVGhyZWFkU3RvcmUuZmV0Y2hQYWdlKGFjdGlvbi5kYXRhLnBhZ2UpO1xuICAgICAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRkVUQ0hVU0VSUEFHRTpcbiAgICAgIFRocmVhZFN0b3JlLmZldGNoVXNlclBhZ2UoYWN0aW9uLmRhdGEucGFnZSk7XG4gICAgICBUaHJlYWRTdG9yZS5lbWl0Q2hhbmdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRocmVhZENvbnN0YW50cy5GRVRDSFRIUkVBRDpcbiAgICAgIFRocmVhZFN0b3JlLmZldGNoVGhyZWFkKGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIFRocmVhZFN0b3JlLmVtaXRDaGFuZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLkFERDpcbiAgICAgIFRocmVhZFN0b3JlLmFkZChhY3Rpb24uZGF0YS50aXRsZSxhY3Rpb24uZGF0YS5ib2R5KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLlVQREFURTpcbiAgICAgIC8vIFRPRE86IFVwZGF0aW5nIGEgdGhyZWFkXG5cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLkRFTEVURTpcbiAgICAgIC8vIFRPRE86IERlbGV0aW5nIGEgdGhyZWFkXG5cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVGhyZWFkQ29uc3RhbnRzLlVQVk9URTpcbiAgICAgIFRocmVhZFN0b3JlLnVwVm90ZShhY3Rpb24uZGF0YS50aHJlYWRfaWQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUaHJlYWRDb25zdGFudHMuRE9XTlZPVEU6XG4gICAgICBUaHJlYWRTdG9yZS5kb3duVm90ZShhY3Rpb24uZGF0YS50aHJlYWRfaWQpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgVGhyZWFkU3RvcmUuZW1pdENoYW5nZSgpO1xuICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocmVhZFN0b3JlOyIsbnVsbCwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIHZhciBtO1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gMDtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbihlbWl0dGVyLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IDE7XG4gIGVsc2VcbiAgICByZXQgPSBlbWl0dGVyLl9ldmVudHNbdHlwZV0ubGVuZ3RoO1xuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbGliL0Rpc3BhdGNoZXInKVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBEaXNwYXRjaGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxudmFyIF9sYXN0SUQgPSAxO1xudmFyIF9wcmVmaXggPSAnSURfJztcblxuLyoqXG4gKiBEaXNwYXRjaGVyIGlzIHVzZWQgdG8gYnJvYWRjYXN0IHBheWxvYWRzIHRvIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLiBUaGlzIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSBnZW5lcmljIHB1Yi1zdWIgc3lzdGVtcyBpbiB0d28gd2F5czpcbiAqXG4gKiAgIDEpIENhbGxiYWNrcyBhcmUgbm90IHN1YnNjcmliZWQgdG8gcGFydGljdWxhciBldmVudHMuIEV2ZXJ5IHBheWxvYWQgaXNcbiAqICAgICAgZGlzcGF0Y2hlZCB0byBldmVyeSByZWdpc3RlcmVkIGNhbGxiYWNrLlxuICogICAyKSBDYWxsYmFja3MgY2FuIGJlIGRlZmVycmVkIGluIHdob2xlIG9yIHBhcnQgdW50aWwgb3RoZXIgY2FsbGJhY2tzIGhhdmVcbiAqICAgICAgYmVlbiBleGVjdXRlZC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhpcyBoeXBvdGhldGljYWwgZmxpZ2h0IGRlc3RpbmF0aW9uIGZvcm0sIHdoaWNoXG4gKiBzZWxlY3RzIGEgZGVmYXVsdCBjaXR5IHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkOlxuICpcbiAqICAgdmFyIGZsaWdodERpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY291bnRyeSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ291bnRyeVN0b3JlID0ge2NvdW50cnk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY2l0eSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ2l0eVN0b3JlID0ge2NpdHk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGJhc2UgZmxpZ2h0IHByaWNlIG9mIHRoZSBzZWxlY3RlZCBjaXR5XG4gKiAgIHZhciBGbGlnaHRQcmljZVN0b3JlID0ge3ByaWNlOiBudWxsfVxuICpcbiAqIFdoZW4gYSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGVkIGNpdHksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NpdHktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENpdHk6ICdwYXJpcydcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGBDaXR5U3RvcmVgOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NpdHktdXBkYXRlJykge1xuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBwYXlsb2FkLnNlbGVjdGVkQ2l0eTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGNvdW50cnksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NvdW50cnktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENvdW50cnk6ICdhdXN0cmFsaWEnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBib3RoIHN0b3JlczpcbiAqXG4gKiAgICBDb3VudHJ5U3RvcmUuZGlzcGF0Y2hUb2tlbiA9IGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjb3VudHJ5LXVwZGF0ZScpIHtcbiAqICAgICAgIENvdW50cnlTdG9yZS5jb3VudHJ5ID0gcGF5bG9hZC5zZWxlY3RlZENvdW50cnk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBXaGVuIHRoZSBjYWxsYmFjayB0byB1cGRhdGUgYENvdW50cnlTdG9yZWAgaXMgcmVnaXN0ZXJlZCwgd2Ugc2F2ZSBhIHJlZmVyZW5jZVxuICogdG8gdGhlIHJldHVybmVkIHRva2VuLiBVc2luZyB0aGlzIHRva2VuIHdpdGggYHdhaXRGb3IoKWAsIHdlIGNhbiBndWFyYW50ZWVcbiAqIHRoYXQgYENvdW50cnlTdG9yZWAgaXMgdXBkYXRlZCBiZWZvcmUgdGhlIGNhbGxiYWNrIHRoYXQgdXBkYXRlcyBgQ2l0eVN0b3JlYFxuICogbmVlZHMgdG8gcXVlcnkgaXRzIGRhdGEuXG4gKlxuICogICBDaXR5U3RvcmUuZGlzcGF0Y2hUb2tlbiA9IGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjb3VudHJ5LXVwZGF0ZScpIHtcbiAqICAgICAgIC8vIGBDb3VudHJ5U3RvcmUuY291bnRyeWAgbWF5IG5vdCBiZSB1cGRhdGVkLlxuICogICAgICAgZmxpZ2h0RGlzcGF0Y2hlci53YWl0Rm9yKFtDb3VudHJ5U3RvcmUuZGlzcGF0Y2hUb2tlbl0pO1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBpcyBub3cgZ3VhcmFudGVlZCB0byBiZSB1cGRhdGVkLlxuICpcbiAqICAgICAgIC8vIFNlbGVjdCB0aGUgZGVmYXVsdCBjaXR5IGZvciB0aGUgbmV3IGNvdW50cnlcbiAqICAgICAgIENpdHlTdG9yZS5jaXR5ID0gZ2V0RGVmYXVsdENpdHlGb3JDb3VudHJ5KENvdW50cnlTdG9yZS5jb3VudHJ5KTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFRoZSB1c2FnZSBvZiBgd2FpdEZvcigpYCBjYW4gYmUgY2hhaW5lZCwgZm9yIGV4YW1wbGU6XG4gKlxuICogICBGbGlnaHRQcmljZVN0b3JlLmRpc3BhdGNoVG9rZW4gPVxuICogICAgIGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgICAgc3dpdGNoIChwYXlsb2FkLmFjdGlvblR5cGUpIHtcbiAqICAgICAgICAgY2FzZSAnY291bnRyeS11cGRhdGUnOlxuICogICAgICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlLnByaWNlID1cbiAqICAgICAgICAgICAgIGdldEZsaWdodFByaWNlU3RvcmUoQ291bnRyeVN0b3JlLmNvdW50cnksIENpdHlTdG9yZS5jaXR5KTtcbiAqICAgICAgICAgICBicmVhaztcbiAqXG4gKiAgICAgICAgIGNhc2UgJ2NpdHktdXBkYXRlJzpcbiAqICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlLnByaWNlID1cbiAqICAgICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUoQ291bnRyeVN0b3JlLmNvdW50cnksIENpdHlTdG9yZS5jaXR5KTtcbiAqICAgICAgICAgICBicmVhaztcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFRoZSBgY291bnRyeS11cGRhdGVgIHBheWxvYWQgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGludm9rZSB0aGUgc3RvcmVzJ1xuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gb3JkZXI6IGBDb3VudHJ5U3RvcmVgLCBgQ2l0eVN0b3JlYCwgdGhlblxuICogYEZsaWdodFByaWNlU3RvcmVgLlxuICovXG5cbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcyA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWQgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIHdpdGggZXZlcnkgZGlzcGF0Y2hlZCBwYXlsb2FkLiBSZXR1cm5zXG4gICAqIGEgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGB3YWl0Rm9yKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZWdpc3Rlcj1mdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBpZCA9IF9wcmVmaXggKyBfbGFzdElEKys7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2FsbGJhY2sgYmFzZWQgb24gaXRzIHRva2VuLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnVucmVnaXN0ZXI9ZnVuY3Rpb24oaWQpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0sXG4gICAgICAnRGlzcGF0Y2hlci51bnJlZ2lzdGVyKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLFxuICAgICAgaWRcbiAgICApO1xuICAgIGRlbGV0ZSB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF07XG4gIH07XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciB0aGUgY2FsbGJhY2tzIHNwZWNpZmllZCB0byBiZSBpbnZva2VkIGJlZm9yZSBjb250aW51aW5nIGV4ZWN1dGlvblxuICAgKiBvZiB0aGUgY3VycmVudCBjYWxsYmFjay4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBhIGNhbGxiYWNrIGluXG4gICAqIHJlc3BvbnNlIHRvIGEgZGlzcGF0Y2hlZCBwYXlsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGlkc1xuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUud2FpdEZvcj1mdW5jdGlvbihpZHMpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcsXG4gICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nXG4gICAgKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaWRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIGlkID0gaWRzW2lpXTtcbiAgICAgIGlmICh0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSxcbiAgICAgICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IENpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgd2hpbGUgJyArXG4gICAgICAgICAgJ3dhaXRpbmcgZm9yIGAlc2AuJyxcbiAgICAgICAgICBpZFxuICAgICAgICApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGludmFyaWFudChcbiAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdLFxuICAgICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2soaWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIHBheWxvYWQgdG8gYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2g9ZnVuY3Rpb24ocGF5bG9hZCkge1xuICAgIGludmFyaWFudChcbiAgICAgICF0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcsXG4gICAgICAnRGlzcGF0Y2guZGlzcGF0Y2goLi4uKTogQ2Fubm90IGRpc3BhdGNoIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC4nXG4gICAgKTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3N0YXJ0RGlzcGF0Y2hpbmcocGF5bG9hZCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICh0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrKGlkKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9zdG9wRGlzcGF0Y2hpbmcoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoaXMgRGlzcGF0Y2hlciBjdXJyZW50bHkgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5pc0Rpc3BhdGNoaW5nPWZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgdGhlIGNhbGxiYWNrIHN0b3JlZCB3aXRoIHRoZSBnaXZlbiBpZC4gQWxzbyBkbyBzb21lIGludGVybmFsXG4gICAqIGJvb2trZWVwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjaz1mdW5jdGlvbihpZCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSA9IHRydWU7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdKHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQpO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB1cCBib29ra2VlcGluZyBuZWVkZWQgd2hlbiBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9zdGFydERpc3BhdGNoaW5nPWZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgICBmb3IgKHZhciBpZCBpbiB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcykge1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdID0gZmFsc2U7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXIgYm9va2tlZXBpbmcgdXNlZCBmb3IgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfc3RvcERpc3BhdGNoaW5nPWZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBudWxsO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICB9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKGZhbHNlKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gb3duRW51bWVyYWJsZUtleXMob2JqKSB7XG5cdHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuXHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikpO1xuXHR9XG5cblx0cmV0dXJuIGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRyZXR1cm4gcHJvcElzRW51bWVyYWJsZS5jYWxsKG9iaiwga2V5KTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gb3duRW51bWVyYWJsZUtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiBqc2hpbnQgbm9kZTp0cnVlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9zZSBgUmVhY3RgIGFzIGEgZ2xvYmFsLCBiZWNhdXNlIHRoZSBSZWFjdEludGxNaXhpbiBhc3N1bWVzIGl0J3MgZ2xvYmFsLlxudmFyIG9sZFJlYWN0ID0gZ2xvYmFsLlJlYWN0O1xuZ2xvYmFsLlJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gUmVxdWlyZSB0aGUgbGliIGFuZCBhZGQgYWxsIGxvY2FsZSBkYXRhIHRvIGBSZWFjdEludGxgLiBUaGlzIG1vZHVsZSB3aWxsIGJlXG4vLyBpZ25vcmVkIHdoZW4gYnVuZGxpbmcgZm9yIHRoZSBicm93c2VyIHdpdGggQnJvd3NlcmlmeS9XZWJwYWNrLlxudmFyIFJlYWN0SW50bCA9IHJlcXVpcmUoJy4vbGliL3JlYWN0LWludGwnKTtcbnJlcXVpcmUoJy4vbGliL2xvY2FsZXMnKTtcblxuLy8gRXhwb3J0IHRoZSBNaXhpbiBhcyB0aGUgZGVmYXVsdCBleHBvcnQgZm9yIGJhY2stY29tcGF0IHdpdGggdjEuMC4wLiBUaGlzIHdpbGxcbi8vIGJlIGNoYW5nZWQgdG8gc2ltcGx5IHJlLWV4cG9ydGluZyBgUmVhY3RJbnRsYCBhcyB0aGUgZGVmYXVsdCBleHBvcnQgaW4gdjIuMC5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFJlYWN0SW50bC5JbnRsTWl4aW47XG5cbi8vIERlZmluZSBub24tZW51bWVyYWJsZSBleHBhbmRvcyBmb3IgZWFjaCBuYW1lZCBleHBvcnQgb24gdGhlIGRlZmF1bHQgZXhwb3J0IC0tXG4vLyB3aGljaCBpcyB0aGUgTWl4aW4gZm9yIGJhY2stY29tcGF0IHdpdGggdjEuMC4wLlxuT2JqZWN0LmtleXMoUmVhY3RJbnRsKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lZEV4cG9ydCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lZEV4cG9ydCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZSAgICAgOiBSZWFjdEludGxbbmFtZWRFeHBvcnRdXG4gICAgfSk7XG59KTtcblxuLy8gUHV0IGJhY2sgYGdsb2JhbC5SZWFjdGAgdG8gaG93IGl0IHdhcy5cbmlmIChvbGRSZWFjdCkge1xuICAgIGdsb2JhbC5SZWFjdCA9IG9sZFJlYWN0O1xufSBlbHNlIHtcbiAgICAvLyBJRSA8IDkgd2lsbCB0aHJvdyB3aGVuIHRyeWluZyB0byBkZWxldGUgc29tZXRoaW5nIG9mZiB0aGUgZ2xvYmFsIG9iamVjdCxcbiAgICAvLyBgd2luZG93YCwgc28gdGhpcyBkb2VzIHRoZSBuZXh0IGJlc3QgdGhpbmcgYXMgc2V0cyBpdCB0byBgdW5kZWZpbmVkYC5cbiAgICB0cnkge1xuICAgICAgICBkZWxldGUgZ2xvYmFsLlJlYWN0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2xvYmFsLlJlYWN0ID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkRGF0ZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWREYXRlJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGZvcm1hdE9wdGlvbnM6IFtcbiAgICAgICAgICAgICdsb2NhbGVNYXRjaGVyJywgJ3RpbWVab25lJywgJ2hvdXIxMicsICdmb3JtYXRNYXRjaGVyJywgJ3dlZWtkYXknLFxuICAgICAgICAgICAgJ2VyYScsICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLFxuICAgICAgICAgICAgJ3RpbWVab25lTmFtZSdcbiAgICAgICAgXVxuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZm9ybWF0OiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWUgOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJvcHMgICAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgdmFsdWUgICAgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1hdCAgID0gcHJvcHMuZm9ybWF0O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBmb3JtYXQgJiYgdGhpcy5nZXROYW1lZEZvcm1hdCgnZGF0ZScsIGZvcm1hdCk7XG4gICAgICAgIHZhciBvcHRpb25zICA9IEZvcm1hdHRlZERhdGUuZmlsdGVyRm9ybWF0T3B0aW9ucyhwcm9wcywgZGVmYXVsdHMpO1xuXG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uRE9NLnNwYW4obnVsbCwgdGhpcy5mb3JtYXREYXRlKHZhbHVlLCBvcHRpb25zKSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybWF0dGVkRGF0ZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0ZS5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkZXNjYXBlJCQgPSByZXF1aXJlKFwiLi4vZXNjYXBlXCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZEhUTUxNZXNzYWdlID0gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ0Zvcm1hdHRlZEhUTUxNZXNzYWdlJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdGFnTmFtZTogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1lc3NhZ2U6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7dGFnTmFtZTogJ3NwYW4nfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBhbGwgdGhlIHByb3BzIGJlZm9yZSB0aGV5IGFyZSB1c2VkIGFzIHZhbHVlcyB3aGVuIGZvcm1hdHRpbmdcbiAgICAgICAgLy8gdGhlIElDVSBNZXNzYWdlIHN0cmluZy4gU2luY2UgdGhlIGZvcm1hdHRlZCBtZXNzYWdlIHdpbGwgYmUgaW5qZWN0ZWRcbiAgICAgICAgLy8gdmlhIGBpbm5lckhUTUxgLCBhbGwgU3RyaW5nLWJhc2VkIHZhbHVlcyBuZWVkIHRvIGJlIEhUTUwtZXNjYXBlZC4gQW55XG4gICAgICAgIC8vIFJlYWN0IEVsZW1lbnRzIHRoYXQgYXJlIHBhc3NlZCBhcyBwcm9wcyB3aWxsIGJlIHJlbmRlcmVkIHRvIGEgc3RhdGljXG4gICAgICAgIC8vIG1hcmt1cCBzdHJpbmcgdGhhdCBpcyBwcmVzdW1lZCB0byBiZSBzYWZlLlxuICAgICAgICB2YXIgdmFsdWVzID0gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAodmFsdWVzLCBuYW1lKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc1tuYW1lXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNyYyRlc2NhcGUkJFtcImRlZmF1bHRcIl0odmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uaXNWYWxpZEVsZW1lbnQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0ucmVuZGVyVG9TdGF0aWNNYXJrdXAodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICAvLyBTaW5jZSB0aGUgbWVzc2FnZSBwcmVzdW1hYmx5IGhhcyBIVE1MIGluIGl0LCB3ZSBuZWVkIHRvIHNldFxuICAgICAgICAvLyBgaW5uZXJIVE1MYCBpbiBvcmRlciBmb3IgaXQgdG8gYmUgcmVuZGVyZWQgYW5kIG5vdCBlc2NhcGVkIGJ5IFJlYWN0LlxuICAgICAgICAvLyBUbyBiZSBzYWZlLCBhbGwgc3RyaW5nIHByb3AgdmFsdWVzIHdlcmUgZXNjYXBlZCBiZWZvcmUgZm9ybWF0dGluZyB0aGVcbiAgICAgICAgLy8gbWVzc2FnZS4gSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSBtZXNzYWdlIGlzIG5vdCBVR0MsIGFuZCBjYW1lIGZyb21cbiAgICAgICAgLy8gdGhlIGRldmVsb3BlciBtYWtpbmcgaXQgbW9yZSBsaWtlIGEgdGVtcGxhdGUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5vdGU6IFRoZXJlJ3MgYSBwZXJmIGltcGFjdCBvZiB1c2luZyB0aGlzIGNvbXBvbmVudCBzaW5jZSB0aGVyZSdzIG5vXG4gICAgICAgIC8vIHdheSBmb3IgUmVhY3QgdG8gZG8gaXRzIHZpcnR1YWwgRE9NIGRpZmZpbmcuXG4gICAgICAgIHJldHVybiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uRE9NW3RhZ05hbWVdKHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiB0aGlzLmZvcm1hdE1lc3NhZ2UobWVzc2FnZSwgdmFsdWVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtYXR0ZWRIVE1MTWVzc2FnZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC1tZXNzYWdlLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkTWVzc2FnZSA9IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdGb3JtYXR0ZWRNZXNzYWdlJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdGFnTmFtZTogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1lc3NhZ2U6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7dGFnTmFtZTogJ3NwYW4nfTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBhIHRva2VuIHdpdGggYSByYW5kb20gZ3VpZCB0aGF0IHNob3VsZCBub3QgYmUgZ3Vlc3NhYmxlIG9yXG4gICAgICAgIC8vIGNvbmZsaWN0IHdpdGggb3RoZXIgcGFydHMgb2YgdGhlIGBtZXNzYWdlYCBzdHJpbmcuXG4gICAgICAgIHZhciBndWlkICAgICAgID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgdG9rZW5SZWdleCA9IG5ldyBSZWdFeHAoJyhAX19FTEVNRU5ULScgKyBndWlkICsgJy1cXFxcZCtfX0ApJywgJ2cnKTtcbiAgICAgICAgdmFyIGVsZW1lbnRzICAgPSB7fTtcblxuICAgICAgICB2YXIgZ2VuZXJhdGVUb2tlbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQF9fRUxFTUVOVC0nICsgZ3VpZCArICctJyArIChjb3VudGVyICs9IDEpICsgJ19fQCc7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCkpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGVzIG92ZXIgdGhlIGBwcm9wc2AgdG8ga2VlcCB0cmFjayBvZiBhbnkgUmVhY3QgRWxlbWVudCB2YWx1ZXNcbiAgICAgICAgLy8gc28gdGhleSBjYW4gYmUgcmVwcmVzZW50ZWQgYnkgdGhlIGB0b2tlbmAgYXMgYSBwbGFjZWhvbGRlciB3aGVuIHRoZVxuICAgICAgICAvLyBgbWVzc2FnZWAgaXMgZm9ybWF0dGVkLiBUaGlzIGFsbG93cyB0aGUgZm9ybWF0dGVkIG1lc3NhZ2UgdG8gdGhlbiBiZVxuICAgICAgICAvLyBicm9rZW4tdXAgaW50byBwYXJ0cyB3aXRoIHJlZmVyZW5jZXMgdG8gdGhlIFJlYWN0IEVsZW1lbnRzIGluc2VydGVkXG4gICAgICAgIC8vIGJhY2sgaW4uXG4gICAgICAgIHZhciB2YWx1ZXMgPSBPYmplY3Qua2V5cyhwcm9wcykucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZXMsIG5hbWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BzW25hbWVdO1xuICAgICAgICAgICAgdmFyIHRva2VuO1xuXG4gICAgICAgICAgICBpZiAoc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRva2VuICAgICAgICAgICA9IGdlbmVyYXRlVG9rZW4oKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbbmFtZV0gICAgPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1t0b2tlbl0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICAvLyBGb3JtYXRzIHRoZSBgbWVzc2FnZWAgd2l0aCB0aGUgYHZhbHVlc2AsIGluY2x1ZGluZyB0aGUgYHRva2VuYFxuICAgICAgICAvLyBwbGFjZWhvbGRlcnMgZm9yIFJlYWN0IEVsZW1lbnQgdmFsdWVzLlxuICAgICAgICB2YXIgZm9ybWF0dGVkTWVzc2FnZSA9IHRoaXMuZm9ybWF0TWVzc2FnZShtZXNzYWdlLCB2YWx1ZXMpO1xuXG4gICAgICAgIC8vIFNwbGl0IHRoZSBtZXNzYWdlIGludG8gcGFydHMgc28gdGhlIFJlYWN0IEVsZW1lbnQgdmFsdWVzIGNhcHR1cmVkXG4gICAgICAgIC8vIGFib3ZlIGNhbiBiZSBpbnNlcnRlZCBiYWNrIGludG8gdGhlIHJlbmRlcmVkIG1lc3NhZ2UuIFRoaXNcbiAgICAgICAgLy8gYXBwcm9hY2ggYWxsb3dzIG1lc3NhZ2VzIHRvIHJlbmRlciB3aXRoIFJlYWN0IEVsZW1lbnRzIHdoaWxlIGtlZXBpbmdcbiAgICAgICAgLy8gUmVhY3QncyB2aXJ0dWFsIGRpZmZpbmcgd29ya2luZyBwcm9wZXJseS5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gZm9ybWF0dGVkTWVzc2FnZS5zcGxpdCh0b2tlblJlZ2V4KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocGFydCkge1xuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBlbXB0eSBzdHJpbmcgcGFydHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhcGFydDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgYHBhcnRgIGlzIGEgdG9rZW4sIGdldCBhIHJlZiB0byB0aGUgUmVhY3QgRWxlbWVudC5cbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbcGFydF0gfHwgcGFydDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBlbGVtZW50QXJncyA9IFt0YWdOYW1lLCBudWxsXS5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgZWxlbWVudEFyZ3MpO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZE1lc3NhZ2U7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lc3NhZ2UuanMubWFwIiwiLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFVzZSBgaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO2Agd2hlbiBleHRlcm5hbCBtb2R1bGVzIGFyZSBzdXBwb3J0ZWQuXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzcmMkcmVhY3QkJCA9IHJlcXVpcmUoXCIuLi9yZWFjdFwiKSwgc3JjJG1peGluJCQgPSByZXF1aXJlKFwiLi4vbWl4aW5cIik7XG5cbnZhciBGb3JtYXR0ZWROdW1iZXIgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkTnVtYmVyJyxcbiAgICBtaXhpbnMgICAgIDogW3NyYyRtaXhpbiQkW1wiZGVmYXVsdFwiXV0sXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGZvcm1hdE9wdGlvbnM6IFtcbiAgICAgICAgICAgICdsb2NhbGVNYXRjaGVyJywgJ3N0eWxlJywgJ2N1cnJlbmN5JywgJ2N1cnJlbmN5RGlzcGxheScsXG4gICAgICAgICAgICAndXNlR3JvdXBpbmcnLCAnbWluaW11bUludGVnZXJEaWdpdHMnLCAnbWluaW11bUZyYWN0aW9uRGlnaXRzJyxcbiAgICAgICAgICAgICdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnLCAnbWluaW11bVNpZ25pZmljYW50RGlnaXRzJyxcbiAgICAgICAgICAgICdtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMnXG4gICAgICAgIF1cbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGZvcm1hdDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlICAgID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBmb3JtYXQgICA9IHByb3BzLmZvcm1hdDtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gZm9ybWF0ICYmIHRoaXMuZ2V0TmFtZWRGb3JtYXQoJ251bWJlcicsIGZvcm1hdCk7XG4gICAgICAgIHZhciBvcHRpb25zICA9IEZvcm1hdHRlZE51bWJlci5maWx0ZXJGb3JtYXRPcHRpb25zKHByb3BzLCBkZWZhdWx0cyk7XG5cbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5ET00uc3BhbihudWxsLCB0aGlzLmZvcm1hdE51bWJlcih2YWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZE51bWJlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bnVtYmVyLmpzLm1hcCIsIi8qIGpzaGludCBlc25leHQ6dHJ1ZSAqL1xuXG4vLyBUT0RPOiBVc2UgYGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtgIHdoZW4gZXh0ZXJuYWwgbW9kdWxlcyBhcmUgc3VwcG9ydGVkLlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJHJlYWN0JCQgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4uL21peGluXCIpO1xuXG52YXIgRm9ybWF0dGVkUmVsYXRpdmUgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkUmVsYXRpdmUnLFxuICAgIG1peGlucyAgICAgOiBbc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdXSxcblxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgZm9ybWF0T3B0aW9uczogW1xuICAgICAgICAgICAgJ3N0eWxlJywgJ3VuaXRzJ1xuICAgICAgICBdXG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBmb3JtYXQ6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZSA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIG5vdyAgIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnlcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcm9wcyAgICA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciB2YWx1ZSAgICA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgZm9ybWF0ICAgPSBwcm9wcy5mb3JtYXQ7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IGZvcm1hdCAmJiB0aGlzLmdldE5hbWVkRm9ybWF0KCdyZWxhdGl2ZScsIGZvcm1hdCk7XG4gICAgICAgIHZhciBvcHRpb25zICA9IEZvcm1hdHRlZFJlbGF0aXZlLmZpbHRlckZvcm1hdE9wdGlvbnMocHJvcHMsIGRlZmF1bHRzKTtcblxuICAgICAgICB2YXIgZm9ybWF0dGVkUmVsYXRpdmVUaW1lID0gdGhpcy5mb3JtYXRSZWxhdGl2ZSh2YWx1ZSwgb3B0aW9ucywge1xuICAgICAgICAgICAgbm93OiBwcm9wcy5ub3dcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5ET00uc3BhbihudWxsLCBmb3JtYXR0ZWRSZWxhdGl2ZVRpbWUpO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZFJlbGF0aXZlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWxhdGl2ZS5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4uL3JlYWN0XCIpLCBzcmMkbWl4aW4kJCA9IHJlcXVpcmUoXCIuLi9taXhpblwiKTtcblxudmFyIEZvcm1hdHRlZFRpbWUgPSBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnRm9ybWF0dGVkVGltZScsXG4gICAgbWl4aW5zICAgICA6IFtzcmMkbWl4aW4kJFtcImRlZmF1bHRcIl1dLFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBmb3JtYXRPcHRpb25zOiBbXG4gICAgICAgICAgICAnbG9jYWxlTWF0Y2hlcicsICd0aW1lWm9uZScsICdob3VyMTInLCAnZm9ybWF0TWF0Y2hlcicsICd3ZWVrZGF5JyxcbiAgICAgICAgICAgICdlcmEnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJyxcbiAgICAgICAgICAgICd0aW1lWm9uZU5hbWUnXG4gICAgICAgIF1cbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGZvcm1hdDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlIDogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzICAgID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlICAgID0gcHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBmb3JtYXQgICA9IHByb3BzLmZvcm1hdDtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gZm9ybWF0ICYmIHRoaXMuZ2V0TmFtZWRGb3JtYXQoJ3RpbWUnLCBmb3JtYXQpO1xuICAgICAgICB2YXIgb3B0aW9ucyAgPSBGb3JtYXR0ZWRUaW1lLmZpbHRlckZvcm1hdE9wdGlvbnMocHJvcHMsIGRlZmF1bHRzKTtcblxuICAgICAgICByZXR1cm4gc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLkRPTS5zcGFuKG51bGwsIHRoaXMuZm9ybWF0VGltZSh2YWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cbn0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1hdHRlZFRpbWU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWUuanMubWFwIiwiLy8gR0VORVJBVEVEIEZJTEVcblwidXNlIHN0cmljdFwiO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XCJsb2NhbGVcIjpcImVuXCIsXCJwbHVyYWxSdWxlRnVuY3Rpb25cIjpmdW5jdGlvbiAobixvcmQpe3ZhciBzPVN0cmluZyhuKS5zcGxpdChcIi5cIiksdjA9IXNbMV0sdDA9TnVtYmVyKHNbMF0pPT1uLG4xMD10MCYmc1swXS5zbGljZSgtMSksbjEwMD10MCYmc1swXS5zbGljZSgtMik7aWYob3JkKXJldHVybiBuMTA9PTEmJm4xMDAhPTExP1wib25lXCI6bjEwPT0yJiZuMTAwIT0xMj9cInR3b1wiOm4xMD09MyYmbjEwMCE9MTM/XCJmZXdcIjpcIm90aGVyXCI7cmV0dXJuIG49PTEmJnYwP1wib25lXCI6XCJvdGhlclwifSxcImZpZWxkc1wiOntcInllYXJcIjp7XCJkaXNwbGF5TmFtZVwiOlwiWWVhclwiLFwicmVsYXRpdmVcIjp7XCIwXCI6XCJ0aGlzIHllYXJcIixcIjFcIjpcIm5leHQgeWVhclwiLFwiLTFcIjpcImxhc3QgeWVhclwifSxcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IHllYXJcIixcIm90aGVyXCI6XCJpbiB7MH0geWVhcnNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0geWVhciBhZ29cIixcIm90aGVyXCI6XCJ7MH0geWVhcnMgYWdvXCJ9fX0sXCJtb250aFwiOntcImRpc3BsYXlOYW1lXCI6XCJNb250aFwiLFwicmVsYXRpdmVcIjp7XCIwXCI6XCJ0aGlzIG1vbnRoXCIsXCIxXCI6XCJuZXh0IG1vbnRoXCIsXCItMVwiOlwibGFzdCBtb250aFwifSxcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IG1vbnRoXCIsXCJvdGhlclwiOlwiaW4gezB9IG1vbnRoc1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSBtb250aCBhZ29cIixcIm90aGVyXCI6XCJ7MH0gbW9udGhzIGFnb1wifX19LFwiZGF5XCI6e1wiZGlzcGxheU5hbWVcIjpcIkRheVwiLFwicmVsYXRpdmVcIjp7XCIwXCI6XCJ0b2RheVwiLFwiMVwiOlwidG9tb3Jyb3dcIixcIi0xXCI6XCJ5ZXN0ZXJkYXlcIn0sXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSBkYXlcIixcIm90aGVyXCI6XCJpbiB7MH0gZGF5c1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSBkYXkgYWdvXCIsXCJvdGhlclwiOlwiezB9IGRheXMgYWdvXCJ9fX0sXCJob3VyXCI6e1wiZGlzcGxheU5hbWVcIjpcIkhvdXJcIixcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IGhvdXJcIixcIm90aGVyXCI6XCJpbiB7MH0gaG91cnNcIn0sXCJwYXN0XCI6e1wib25lXCI6XCJ7MH0gaG91ciBhZ29cIixcIm90aGVyXCI6XCJ7MH0gaG91cnMgYWdvXCJ9fX0sXCJtaW51dGVcIjp7XCJkaXNwbGF5TmFtZVwiOlwiTWludXRlXCIsXCJyZWxhdGl2ZVRpbWVcIjp7XCJmdXR1cmVcIjp7XCJvbmVcIjpcImluIHswfSBtaW51dGVcIixcIm90aGVyXCI6XCJpbiB7MH0gbWludXRlc1wifSxcInBhc3RcIjp7XCJvbmVcIjpcInswfSBtaW51dGUgYWdvXCIsXCJvdGhlclwiOlwiezB9IG1pbnV0ZXMgYWdvXCJ9fX0sXCJzZWNvbmRcIjp7XCJkaXNwbGF5TmFtZVwiOlwiU2Vjb25kXCIsXCJyZWxhdGl2ZVwiOntcIjBcIjpcIm5vd1wifSxcInJlbGF0aXZlVGltZVwiOntcImZ1dHVyZVwiOntcIm9uZVwiOlwiaW4gezB9IHNlY29uZFwiLFwib3RoZXJcIjpcImluIHswfSBzZWNvbmRzXCJ9LFwicGFzdFwiOntcIm9uZVwiOlwiezB9IHNlY29uZCBhZ29cIixcIm90aGVyXCI6XCJ7MH0gc2Vjb25kcyBhZ29cIn19fX19O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbi5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLypcbkhUTUwgZXNjYXBpbmcgaW1wbGVtZW50YXRpb24gaXMgdGhlIHNhbWUgYXMgUmVhY3QncyAob24gcHVycG9zZS4pIFRoZXJlZm9yZSwgaXRcbmhhcyB0aGUgZm9sbG93aW5nIENvcHlyaWdodCBhbmQgTGljZW5zaW5nOlxuXG5Db3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlIExJQ0VOU0VcbmZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIFJlYWN0J3Mgc291cmNlIHRyZWUuXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRVNDQVBFRF9DSEFSUyA9IHtcbiAgICAnJicgOiAnJmFtcDsnLFxuICAgICc+JyA6ICcmZ3Q7JyxcbiAgICAnPCcgOiAnJmx0OycsXG4gICAgJ1wiJyA6ICcmcXVvdDsnLFxuICAgICdcXCcnOiAnJiN4Mjc7J1xufTtcblxudmFyIFVOU0FGRV9DSEFSU19SRUdFWCA9IC9bJj48XCInXS9nO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gKCcnICsgc3RyKS5yZXBsYWNlKFVOU0FGRV9DSEFSU19SRUdFWCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBFU0NBUEVEX0NIQVJTW21hdGNoXTtcbiAgICB9KTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzY2FwZS5qcy5tYXAiLCIvKiBqc2hpbnQgZXNuZXh0OnRydWUgKi9cblxuLy8gVE9ETzogVXNlIGBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7YCB3aGVuIGV4dGVybmFsIG1vZHVsZXMgYXJlIHN1cHBvcnRlZC5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyRyZWFjdCQkID0gcmVxdWlyZShcIi4vcmVhY3RcIiksIGludGwkbWVzc2FnZWZvcm1hdCQkID0gcmVxdWlyZShcImludGwtbWVzc2FnZWZvcm1hdFwiKSwgaW50bCRyZWxhdGl2ZWZvcm1hdCQkID0gcmVxdWlyZShcImludGwtcmVsYXRpdmVmb3JtYXRcIiksIGludGwkZm9ybWF0JGNhY2hlJCQgPSByZXF1aXJlKFwiaW50bC1mb3JtYXQtY2FjaGVcIik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciB0eXBlc1NwZWMgPSB7XG4gICAgbG9jYWxlczogc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3JjJHJlYWN0JCRbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5hcnJheVxuICAgIF0pLFxuXG4gICAgZm9ybWF0cyA6IHNyYyRyZWFjdCQkW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG1lc3NhZ2VzOiBzcmMkcmVhY3QkJFtcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZnVuY3Rpb24gYXNzZXJ0SXNEYXRlKGRhdGUsIGVyck1zZykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgYGRhdGVgIGlzIHZhbGlkIGJ5IGNoZWNraW5nIGlmIGl0IGlzIGZpbml0ZSwgd2hpY2ggaXNcbiAgICAvLyB0aGUgc2FtZSB3YXkgdGhhdCBgSW50bC5EYXRlVGltZUZvcm1hdCNmb3JtYXQoKWAgY2hlY2tzLlxuICAgIGlmICghaXNGaW5pdGUoZGF0ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihlcnJNc2cpO1xuICAgIH1cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gICAgc3RhdGljczoge1xuICAgICAgICBmaWx0ZXJGb3JtYXRPcHRpb25zOiBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICAgICAgICAgICAgaWYgKCFkZWZhdWx0cykgeyBkZWZhdWx0cyA9IHt9OyB9XG5cbiAgICAgICAgICAgIHJldHVybiAodGhpcy5mb3JtYXRPcHRpb25zIHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24gKG9wdHMsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHNbbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRzW25hbWVdID0gZGVmYXVsdHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcFR5cGVzICAgICAgICA6IHR5cGVzU3BlYyxcbiAgICBjb250ZXh0VHlwZXMgICAgIDogdHlwZXNTcGVjLFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0eXBlc1NwZWMsXG5cbiAgICBnZXROdW1iZXJGb3JtYXQgIDogaW50bCRmb3JtYXQkY2FjaGUkJFtcImRlZmF1bHRcIl0oSW50bC5OdW1iZXJGb3JtYXQpLFxuICAgIGdldERhdGVUaW1lRm9ybWF0OiBpbnRsJGZvcm1hdCRjYWNoZSQkW1wiZGVmYXVsdFwiXShJbnRsLkRhdGVUaW1lRm9ybWF0KSxcbiAgICBnZXRNZXNzYWdlRm9ybWF0IDogaW50bCRmb3JtYXQkY2FjaGUkJFtcImRlZmF1bHRcIl0oaW50bCRtZXNzYWdlZm9ybWF0JCRbXCJkZWZhdWx0XCJdKSxcbiAgICBnZXRSZWxhdGl2ZUZvcm1hdDogaW50bCRmb3JtYXQkY2FjaGUkJFtcImRlZmF1bHRcIl0oaW50bCRyZWxhdGl2ZWZvcm1hdCQkW1wiZGVmYXVsdFwiXSksXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciBwcm9wcyAgID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9jYWxlczogIHByb3BzLmxvY2FsZXMgIHx8IGNvbnRleHQubG9jYWxlcyxcbiAgICAgICAgICAgIGZvcm1hdHM6ICBwcm9wcy5mb3JtYXRzICB8fCBjb250ZXh0LmZvcm1hdHMsXG4gICAgICAgICAgICBtZXNzYWdlczogcHJvcHMubWVzc2FnZXMgfHwgY29udGV4dC5tZXNzYWdlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGFzc2VydElzRGF0ZShkYXRlLCAnQSBkYXRlIG9yIHRpbWVzdGFtcCBtdXN0IGJlIHByb3ZpZGVkIHRvIGZvcm1hdERhdGUoKScpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0KCdkYXRlJywgZGF0ZSwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIGZvcm1hdFRpbWU6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgYXNzZXJ0SXNEYXRlKGRhdGUsICdBIGRhdGUgb3IgdGltZXN0YW1wIG11c3QgYmUgcHJvdmlkZWQgdG8gZm9ybWF0VGltZSgpJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQoJ3RpbWUnLCBkYXRlLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0UmVsYXRpdmU6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zLCBmb3JtYXRPcHRpb25zKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgYXNzZXJ0SXNEYXRlKGRhdGUsICdBIGRhdGUgb3IgdGltZXN0YW1wIG11c3QgYmUgcHJvdmlkZWQgdG8gZm9ybWF0UmVsYXRpdmUoKScpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0KCdyZWxhdGl2ZScsIGRhdGUsIG9wdGlvbnMsIGZvcm1hdE9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBmb3JtYXROdW1iZXI6IGZ1bmN0aW9uIChudW0sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdCgnbnVtYmVyJywgbnVtLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0TWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UsIHZhbHVlcykge1xuICAgICAgICB2YXIgbG9jYWxlcyA9IHRoaXMucHJvcHMubG9jYWxlcyB8fCB0aGlzLmNvbnRleHQubG9jYWxlcztcbiAgICAgICAgdmFyIGZvcm1hdHMgPSB0aGlzLnByb3BzLmZvcm1hdHMgfHwgdGhpcy5jb250ZXh0LmZvcm1hdHM7XG5cbiAgICAgICAgLy8gV2hlbiBgbWVzc2FnZWAgaXMgYSBmdW5jdGlvbiwgYXNzdW1lIGl0J3MgYW4gSW50bE1lc3NhZ2VGb3JtYXRcbiAgICAgICAgLy8gaW5zdGFuY2UncyBgZm9ybWF0KClgIG1ldGhvZCBwYXNzZWQgYnkgcmVmZXJlbmNlLCBhbmQgY2FsbCBpdC4gVGhpc1xuICAgICAgICAvLyBpcyBwb3NzaWJsZSBiZWNhdXNlIGl0cyBgdGhpc2Agd2lsbCBiZSBwcmUtYm91bmQgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlKHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRNZXNzYWdlRm9ybWF0KG1lc3NhZ2UsIGxvY2FsZXMsIGZvcm1hdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuZm9ybWF0KHZhbHVlcyk7XG4gICAgfSxcblxuICAgIGdldEludGxNZXNzYWdlOiBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgID0gdGhpcy5wcm9wcy5tZXNzYWdlcyB8fCB0aGlzLmNvbnRleHQubWVzc2FnZXM7XG4gICAgICAgIHZhciBwYXRoUGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgdmFyIG1lc3NhZ2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBwYXRoUGFydHMucmVkdWNlKGZ1bmN0aW9uIChvYmosIHBhdGhQYXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtwYXRoUGFydF07XG4gICAgICAgICAgICB9LCBtZXNzYWdlcyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdDb3VsZCBub3QgZmluZCBJbnRsIG1lc3NhZ2U6ICcgKyBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG5cbiAgICBnZXROYW1lZEZvcm1hdDogZnVuY3Rpb24gKHR5cGUsIG5hbWUpIHtcbiAgICAgICAgdmFyIGZvcm1hdHMgPSB0aGlzLnByb3BzLmZvcm1hdHMgfHwgdGhpcy5jb250ZXh0LmZvcm1hdHM7XG4gICAgICAgIHZhciBmb3JtYXQgID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0c1t0eXBlXVtuYW1lXTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gJyArIHR5cGUgKyAnIGZvcm1hdCBuYW1lZDogJyArIG5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9LFxuXG4gICAgX2Zvcm1hdDogZnVuY3Rpb24gKHR5cGUsIHZhbHVlLCBvcHRpb25zLCBmb3JtYXRPcHRpb25zKSB7XG4gICAgICAgIHZhciBsb2NhbGVzID0gdGhpcy5wcm9wcy5sb2NhbGVzIHx8IHRoaXMuY29udGV4dC5sb2NhbGVzO1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMuZ2V0TmFtZWRGb3JtYXQodHlwZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWxhdGl2ZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXQodmFsdWUsIGZvcm1hdE9wdGlvbnMpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBmb3JtYXQgdHlwZTogJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl4aW4uanMubWFwIiwiLyoganNoaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19hZGRMb2NhbGVEYXRhID0gX19hZGRMb2NhbGVEYXRhO1xudmFyIGludGwkbWVzc2FnZWZvcm1hdCQkID0gcmVxdWlyZShcImludGwtbWVzc2FnZWZvcm1hdFwiKSwgaW50bCRyZWxhdGl2ZWZvcm1hdCQkID0gcmVxdWlyZShcImludGwtcmVsYXRpdmVmb3JtYXRcIiksIHNyYyRlbiQkID0gcmVxdWlyZShcIi4vZW5cIiksIHNyYyRtaXhpbiQkID0gcmVxdWlyZShcIi4vbWl4aW5cIiksIHNyYyRjb21wb25lbnRzJGRhdGUkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZGF0ZVwiKSwgc3JjJGNvbXBvbmVudHMkdGltZSQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy90aW1lXCIpLCBzcmMkY29tcG9uZW50cyRyZWxhdGl2ZSQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9yZWxhdGl2ZVwiKSwgc3JjJGNvbXBvbmVudHMkbnVtYmVyJCQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL251bWJlclwiKSwgc3JjJGNvbXBvbmVudHMkbWVzc2FnZSQkID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9tZXNzYWdlXCIpLCBzcmMkY29tcG9uZW50cyRodG1sJG1lc3NhZ2UkJCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvaHRtbC1tZXNzYWdlXCIpO1xuZnVuY3Rpb24gX19hZGRMb2NhbGVEYXRhKGRhdGEpIHtcbiAgICBpbnRsJG1lc3NhZ2Vmb3JtYXQkJFtcImRlZmF1bHRcIl0uX19hZGRMb2NhbGVEYXRhKGRhdGEpO1xuICAgIGludGwkcmVsYXRpdmVmb3JtYXQkJFtcImRlZmF1bHRcIl0uX19hZGRMb2NhbGVEYXRhKGRhdGEpO1xufVxuXG5fX2FkZExvY2FsZURhdGEoc3JjJGVuJCRbXCJkZWZhdWx0XCJdKTtcbmV4cG9ydHMuSW50bE1peGluID0gc3JjJG1peGluJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZERhdGUgPSBzcmMkY29tcG9uZW50cyRkYXRlJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZFRpbWUgPSBzcmMkY29tcG9uZW50cyR0aW1lJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZFJlbGF0aXZlID0gc3JjJGNvbXBvbmVudHMkcmVsYXRpdmUkJFtcImRlZmF1bHRcIl0sIGV4cG9ydHMuRm9ybWF0dGVkTnVtYmVyID0gc3JjJGNvbXBvbmVudHMkbnVtYmVyJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZE1lc3NhZ2UgPSBzcmMkY29tcG9uZW50cyRtZXNzYWdlJCRbXCJkZWZhdWx0XCJdLCBleHBvcnRzLkZvcm1hdHRlZEhUTUxNZXNzYWdlID0gc3JjJGNvbXBvbmVudHMkaHRtbCRtZXNzYWdlJCRbXCJkZWZhdWx0XCJdO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1pbnRsLmpzLm1hcCIsIi8qIGdsb2JhbCBSZWFjdCAqL1xuLyoganNoaW50IGVzbmV4dDp0cnVlICovXG5cbi8vIFRPRE86IFJlbW92ZSB0aGUgZ2xvYmFsIGBSZWFjdGAgYmluZGluZyBsb29rdXAgb25jZSB0aGUgRVM2IE1vZHVsZSBUcmFuc3BpbGVyXG4vLyBzdXBwb3J0cyBleHRlcm5hbCBtb2R1bGVzLiBUaGlzIGlzIGEgaGFjayBmb3Igbm93IHRoYXQgcHJvdmlkZXMgdGhlIGxvY2FsXG4vLyBtb2R1bGVzIGEgcmVmZXJlY2UgdG8gUmVhY3QuXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVhY3Q7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvbWVtb2l6ZXInKVsnZGVmYXVsdCddO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBQdXJwb3NlbHkgdXNpbmcgdGhlIHNhbWUgaW1wbGVtZW50YXRpb24gYXMgdGhlIEludGwuanMgYEludGxgIHBvbHlmaWxsLlxuLy8gQ29weXJpZ2h0IDIwMTMgQW5keSBFYXJuc2hhdywgTUlUIExpY2Vuc2VcblxudmFyIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciByZWFsRGVmaW5lUHJvcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHsgcmV0dXJuICEhT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHt9KTsgfVxuICAgIGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfVxufSkoKTtcblxudmFyIGVzMyA9ICFyZWFsRGVmaW5lUHJvcCAmJiAhT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSByZWFsRGVmaW5lUHJvcCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6XG4gICAgICAgIGZ1bmN0aW9uIChvYmosIG5hbWUsIGRlc2MpIHtcblxuICAgIGlmICgnZ2V0JyBpbiBkZXNjICYmIG9iai5fX2RlZmluZUdldHRlcl9fKSB7XG4gICAgICAgIG9iai5fX2RlZmluZUdldHRlcl9fKG5hbWUsIGRlc2MuZ2V0KTtcbiAgICB9IGVsc2UgaWYgKCFob3AuY2FsbChvYmosIG5hbWUpIHx8ICd2YWx1ZScgaW4gZGVzYykge1xuICAgICAgICBvYmpbbmFtZV0gPSBkZXNjLnZhbHVlO1xuICAgIH1cbn07XG5cbnZhciBvYmpDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90bywgcHJvcHMpIHtcbiAgICB2YXIgb2JqLCBrO1xuXG4gICAgZnVuY3Rpb24gRigpIHt9XG4gICAgRi5wcm90b3R5cGUgPSBwcm90bztcbiAgICBvYmogPSBuZXcgRigpO1xuXG4gICAgZm9yIChrIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChob3AuY2FsbChwcm9wcywgaykpIHtcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KG9iaiwgaywgcHJvcHNba10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5leHBvcnRzLmRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHksIGV4cG9ydHMub2JqQ3JlYXRlID0gb2JqQ3JlYXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJGVzNSQkID0gcmVxdWlyZShcIi4vZXM1XCIpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVGb3JtYXRDYWNoZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybWF0Q2FjaGUoRm9ybWF0Q29uc3RydWN0b3IpIHtcbiAgICB2YXIgY2FjaGUgPSBzcmMkZXM1JCQub2JqQ3JlYXRlKG51bGwpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FjaGVJZCA9IGdldENhY2hlSWQoYXJncyk7XG4gICAgICAgIHZhciBmb3JtYXQgID0gY2FjaGVJZCAmJiBjYWNoZVtjYWNoZUlkXTtcblxuICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgICAgZm9ybWF0ID0gc3JjJGVzNSQkLm9iakNyZWF0ZShGb3JtYXRDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgRm9ybWF0Q29uc3RydWN0b3IuYXBwbHkoZm9ybWF0LCBhcmdzKTtcblxuICAgICAgICAgICAgaWYgKGNhY2hlSWQpIHtcbiAgICAgICAgICAgICAgICBjYWNoZVtjYWNoZUlkXSA9IGZvcm1hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfTtcbn1cblxuLy8gLS0gVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0Q2FjaGVJZChpbnB1dHMpIHtcbiAgICAvLyBXaGVuIEpTT04gaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgcnVudGltZSwgd2Ugd2lsbCBub3QgY3JlYXRlIGEgY2FjaGUgaWQuXG4gICAgaWYgKHR5cGVvZiBKU09OID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICAgIHZhciBjYWNoZUlkID0gW107XG5cbiAgICB2YXIgaSwgbGVuLCBpbnB1dDtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGlucHV0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBpbnB1dCA9IGlucHV0c1tpXTtcblxuICAgICAgICBpZiAoaW5wdXQgJiYgdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2FjaGVJZC5wdXNoKG9yZGVyZWRQcm9wcyhpbnB1dCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVJZC5wdXNoKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjYWNoZUlkKTtcbn1cblxuZnVuY3Rpb24gb3JkZXJlZFByb3BzKG9iaikge1xuICAgIHZhciBwcm9wcyA9IFtdLFxuICAgICAgICBrZXlzICA9IFtdO1xuXG4gICAgdmFyIGtleSwgaSwgbGVuLCBwcm9wO1xuXG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3JkZXJlZEtleXMgPSBrZXlzLnNvcnQoKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IG9yZGVyZWRLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGtleSAgPSBvcmRlcmVkS2V5c1tpXTtcbiAgICAgICAgcHJvcCA9IHt9O1xuXG4gICAgICAgIHByb3Bba2V5XSA9IG9ialtrZXldO1xuICAgICAgICBwcm9wc1tpXSAgPSBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVtb2l6ZXIuanMubWFwIiwiLyoganNoaW50IG5vZGU6dHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBJbnRsTWVzc2FnZUZvcm1hdCA9IHJlcXVpcmUoJy4vbGliL21haW4nKVsnZGVmYXVsdCddO1xuXG4vLyBBZGQgYWxsIGxvY2FsZSBkYXRhIHRvIGBJbnRsTWVzc2FnZUZvcm1hdGAuIFRoaXMgbW9kdWxlIHdpbGwgYmUgaWdub3JlZCB3aGVuXG4vLyBidW5kbGluZyBmb3IgdGhlIGJyb3dzZXIgd2l0aCBCcm93c2VyaWZ5L1dlYnBhY2suXG5yZXF1aXJlKCcuL2xpYi9sb2NhbGVzJyk7XG5cbi8vIFJlLWV4cG9ydCBgSW50bE1lc3NhZ2VGb3JtYXRgIGFzIHRoZSBDb21tb25KUyBkZWZhdWx0IGV4cG9ydHMgd2l0aCBhbGwgdGhlXG4vLyBsb2NhbGUgZGF0YSByZWdpc3RlcmVkLCBhbmQgd2l0aCBFbmdsaXNoIHNldCBhcyB0aGUgZGVmYXVsdCBsb2NhbGUuIERlZmluZVxuLy8gdGhlIGBkZWZhdWx0YCBwcm9wIGZvciB1c2Ugd2l0aCBvdGhlciBjb21waWxlZCBFUzYgTW9kdWxlcy5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEludGxNZXNzYWdlRm9ybWF0O1xuZXhwb3J0c1snZGVmYXVsdCddID0gZXhwb3J0cztcbiIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29tcGlsZXI7XG5cbmZ1bmN0aW9uIENvbXBpbGVyKGxvY2FsZXMsIGZvcm1hdHMsIHBsdXJhbEZuKSB7XG4gICAgdGhpcy5sb2NhbGVzICA9IGxvY2FsZXM7XG4gICAgdGhpcy5mb3JtYXRzICA9IGZvcm1hdHM7XG4gICAgdGhpcy5wbHVyYWxGbiA9IHBsdXJhbEZuO1xufVxuXG5Db21waWxlci5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChhc3QpIHtcbiAgICB0aGlzLnBsdXJhbFN0YWNrICAgICAgICA9IFtdO1xuICAgIHRoaXMuY3VycmVudFBsdXJhbCAgICAgID0gbnVsbDtcbiAgICB0aGlzLnBsdXJhbE51bWJlckZvcm1hdCA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5jb21waWxlTWVzc2FnZShhc3QpO1xufTtcblxuQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVNZXNzYWdlID0gZnVuY3Rpb24gKGFzdCkge1xuICAgIGlmICghKGFzdCAmJiBhc3QudHlwZSA9PT0gJ21lc3NhZ2VGb3JtYXRQYXR0ZXJuJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIEFTVCBpcyBub3Qgb2YgdHlwZTogXCJtZXNzYWdlRm9ybWF0UGF0dGVyblwiJyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzID0gYXN0LmVsZW1lbnRzLFxuICAgICAgICBwYXR0ZXJuICA9IFtdO1xuXG4gICAgdmFyIGksIGxlbiwgZWxlbWVudDtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbWVzc2FnZVRleHRFbGVtZW50JzpcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLnB1c2godGhpcy5jb21waWxlTWVzc2FnZVRleHQoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhcmd1bWVudEVsZW1lbnQnOlxuICAgICAgICAgICAgICAgIHBhdHRlcm4ucHVzaCh0aGlzLmNvbXBpbGVBcmd1bWVudChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHR5cGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xufTtcblxuQ29tcGlsZXIucHJvdG90eXBlLmNvbXBpbGVNZXNzYWdlVGV4dCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gV2hlbiB0aGlzIGBlbGVtZW50YCBpcyBwYXJ0IG9mIHBsdXJhbCBzdWItcGF0dGVybiBhbmQgaXRzIHZhbHVlIGNvbnRhaW5zXG4gICAgLy8gYW4gdW5lc2NhcGVkICcjJywgdXNlIGEgYFBsdXJhbE9mZnNldFN0cmluZ2AgaGVscGVyIHRvIHByb3Blcmx5IG91dHB1dFxuICAgIC8vIHRoZSBudW1iZXIgd2l0aCB0aGUgY29ycmVjdCBvZmZzZXQgaW4gdGhlIHN0cmluZy5cbiAgICBpZiAodGhpcy5jdXJyZW50UGx1cmFsICYmIC8oXnxbXlxcXFxdKSMvZy50ZXN0KGVsZW1lbnQudmFsdWUpKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIGNhY2hlIGEgTnVtYmVyRm9ybWF0IGluc3RhbmNlIHRoYXQgY2FuIGJlIHJldXNlZCBmb3IgYW55XG4gICAgICAgIC8vIFBsdXJhbE9mZnNldFN0cmluZyBpbnN0YW5jZSBpbiB0aGlzIG1lc3NhZ2UuXG4gICAgICAgIGlmICghdGhpcy5wbHVyYWxOdW1iZXJGb3JtYXQpIHtcbiAgICAgICAgICAgIHRoaXMucGx1cmFsTnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFBsdXJhbE9mZnNldFN0cmluZyhcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbHVyYWwuaWQsXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGx1cmFsLmZvcm1hdC5vZmZzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVyYWxOdW1iZXJGb3JtYXQsXG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gVW5lc2NhcGUgdGhlIGVzY2FwZWQgJyMncyBpbiB0aGUgbWVzc2FnZSB0ZXh0LlxuICAgIHJldHVybiBlbGVtZW50LnZhbHVlLnJlcGxhY2UoL1xcXFwjL2csICcjJyk7XG59O1xuXG5Db21waWxlci5wcm90b3R5cGUuY29tcGlsZUFyZ3VtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgZm9ybWF0ID0gZWxlbWVudC5mb3JtYXQ7XG5cbiAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0Zvcm1hdChlbGVtZW50LmlkKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0cyAgPSB0aGlzLmZvcm1hdHMsXG4gICAgICAgIGxvY2FsZXMgID0gdGhpcy5sb2NhbGVzLFxuICAgICAgICBwbHVyYWxGbiA9IHRoaXMucGx1cmFsRm4sXG4gICAgICAgIG9wdGlvbnM7XG5cbiAgICBzd2l0Y2ggKGZvcm1hdC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlckZvcm1hdCc6XG4gICAgICAgICAgICBvcHRpb25zID0gZm9ybWF0cy5udW1iZXJbZm9ybWF0LnN0eWxlXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQgICAgOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpLmZvcm1hdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlICdkYXRlRm9ybWF0JzpcbiAgICAgICAgICAgIG9wdGlvbnMgPSBmb3JtYXRzLmRhdGVbZm9ybWF0LnN0eWxlXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQgICAgOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykuZm9ybWF0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ3RpbWVGb3JtYXQnOlxuICAgICAgICAgICAgb3B0aW9ucyA9IGZvcm1hdHMudGltZVtmb3JtYXQuc3R5bGVdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZCAgICA6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGVzLCBvcHRpb25zKS5mb3JtYXRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAncGx1cmFsRm9ybWF0JzpcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmNvbXBpbGVPcHRpb25zKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQbHVyYWxGb3JtYXQoXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCwgZm9ybWF0Lm9yZGluYWwsIGZvcm1hdC5vZmZzZXQsIG9wdGlvbnMsIHBsdXJhbEZuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGNhc2UgJ3NlbGVjdEZvcm1hdCc6XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5jb21waWxlT3B0aW9ucyhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2VsZWN0Rm9ybWF0KGVsZW1lbnQuaWQsIG9wdGlvbnMpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgZm9ybWF0IHR5cGUnKTtcbiAgICB9XG59O1xuXG5Db21waWxlci5wcm90b3R5cGUuY29tcGlsZU9wdGlvbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBmb3JtYXQgICAgICA9IGVsZW1lbnQuZm9ybWF0LFxuICAgICAgICBvcHRpb25zICAgICA9IGZvcm1hdC5vcHRpb25zLFxuICAgICAgICBvcHRpb25zSGFzaCA9IHt9O1xuXG4gICAgLy8gU2F2ZSB0aGUgY3VycmVudCBwbHVyYWwgZWxlbWVudCwgaWYgYW55LCB0aGVuIHNldCBpdCB0byBhIG5ldyB2YWx1ZSB3aGVuXG4gICAgLy8gY29tcGlsaW5nIHRoZSBvcHRpb25zIHN1Yi1wYXR0ZXJucy4gVGhpcyBjb25mb3JtcyB0aGUgc3BlYydzIGFsZ29yaXRobVxuICAgIC8vIGZvciBoYW5kbGluZyBgXCIjXCJgIHN5bnRheCBpbiBtZXNzYWdlIHRleHQuXG4gICAgdGhpcy5wbHVyYWxTdGFjay5wdXNoKHRoaXMuY3VycmVudFBsdXJhbCk7XG4gICAgdGhpcy5jdXJyZW50UGx1cmFsID0gZm9ybWF0LnR5cGUgPT09ICdwbHVyYWxGb3JtYXQnID8gZWxlbWVudCA6IG51bGw7XG5cbiAgICB2YXIgaSwgbGVuLCBvcHRpb247XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBvcHRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbaV07XG5cbiAgICAgICAgLy8gQ29tcGlsZSB0aGUgc3ViLXBhdHRlcm4gYW5kIHNhdmUgaXQgdW5kZXIgdGhlIG9wdGlvbnMncyBzZWxlY3Rvci5cbiAgICAgICAgb3B0aW9uc0hhc2hbb3B0aW9uLnNlbGVjdG9yXSA9IHRoaXMuY29tcGlsZU1lc3NhZ2Uob3B0aW9uLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBQb3AgdGhlIHBsdXJhbCBzdGFjayB0byBwdXQgYmFjayB0aGUgb3JpZ2luYWwgY3VycmVudCBwbHVyYWwgdmFsdWUuXG4gICAgdGhpcy5jdXJyZW50UGx1cmFsID0gdGhpcy5wbHVyYWxTdGFjay5wb3AoKTtcblxuICAgIHJldHVybiBvcHRpb25zSGFzaDtcbn07XG5cbi8vIC0tIENvbXBpbGVyIEhlbHBlciBDbGFzc2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIFN0cmluZ0Zvcm1hdChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbn1cblxuU3RyaW5nRm9ybWF0LnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIFBsdXJhbEZvcm1hdChpZCwgdXNlT3JkaW5hbCwgb2Zmc2V0LCBvcHRpb25zLCBwbHVyYWxGbikge1xuICAgIHRoaXMuaWQgICAgICAgICA9IGlkO1xuICAgIHRoaXMudXNlT3JkaW5hbCA9IHVzZU9yZGluYWw7XG4gICAgdGhpcy5vZmZzZXQgICAgID0gb2Zmc2V0O1xuICAgIHRoaXMub3B0aW9ucyAgICA9IG9wdGlvbnM7XG4gICAgdGhpcy5wbHVyYWxGbiAgID0gcGx1cmFsRm47XG59XG5cblBsdXJhbEZvcm1hdC5wcm90b3R5cGUuZ2V0T3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1snPScgKyB2YWx1ZV0gfHxcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wbHVyYWxGbih2YWx1ZSAtIHRoaXMub2Zmc2V0LCB0aGlzLnVzZU9yZGluYWwpXTtcblxuICAgIHJldHVybiBvcHRpb24gfHwgb3B0aW9ucy5vdGhlcjtcbn07XG5cbmZ1bmN0aW9uIFBsdXJhbE9mZnNldFN0cmluZyhpZCwgb2Zmc2V0LCBudW1iZXJGb3JtYXQsIHN0cmluZykge1xuICAgIHRoaXMuaWQgICAgICAgICAgID0gaWQ7XG4gICAgdGhpcy5vZmZzZXQgICAgICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5udW1iZXJGb3JtYXQgPSBudW1iZXJGb3JtYXQ7XG4gICAgdGhpcy5zdHJpbmcgICAgICAgPSBzdHJpbmc7XG59XG5cblBsdXJhbE9mZnNldFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyRm9ybWF0LmZvcm1hdCh2YWx1ZSAtIHRoaXMub2Zmc2V0KTtcblxuICAgIHJldHVybiB0aGlzLnN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyhefFteXFxcXF0pIy9nLCAnJDEnICsgbnVtYmVyKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwjL2csICcjJyk7XG59O1xuXG5mdW5jdGlvbiBTZWxlY3RGb3JtYXQoaWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkICAgICAgPSBpZDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5TZWxlY3RGb3JtYXQucHJvdG90eXBlLmdldE9wdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBvcHRpb25zW3ZhbHVlXSB8fCBvcHRpb25zLm90aGVyO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGlsZXIuanMubWFwIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyR1dGlscyQkID0gcmVxdWlyZShcIi4vdXRpbHNcIiksIHNyYyRlczUkJCA9IHJlcXVpcmUoXCIuL2VzNVwiKSwgc3JjJGNvbXBpbGVyJCQgPSByZXF1aXJlKFwiLi9jb21waWxlclwiKSwgaW50bCRtZXNzYWdlZm9ybWF0JHBhcnNlciQkID0gcmVxdWlyZShcImludGwtbWVzc2FnZWZvcm1hdC1wYXJzZXJcIik7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lc3NhZ2VGb3JtYXQ7XG5cbi8vIC0tIE1lc3NhZ2VGb3JtYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gTWVzc2FnZUZvcm1hdChtZXNzYWdlLCBsb2NhbGVzLCBmb3JtYXRzKSB7XG4gICAgLy8gUGFyc2Ugc3RyaW5nIG1lc3NhZ2VzIGludG8gYW4gQVNULlxuICAgIHZhciBhc3QgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgTWVzc2FnZUZvcm1hdC5fX3BhcnNlKG1lc3NhZ2UpIDogbWVzc2FnZTtcblxuICAgIGlmICghKGFzdCAmJiBhc3QudHlwZSA9PT0gJ21lc3NhZ2VGb3JtYXRQYXR0ZXJuJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBtZXNzYWdlIG11c3QgYmUgcHJvdmlkZWQgYXMgYSBTdHJpbmcgb3IgQVNULicpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBgZm9ybWF0c2AgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHRcbiAgICAvLyBmb3JtYXRzLlxuICAgIGZvcm1hdHMgPSB0aGlzLl9tZXJnZUZvcm1hdHMoTWVzc2FnZUZvcm1hdC5mb3JtYXRzLCBmb3JtYXRzKTtcblxuICAgIC8vIERlZmluZWQgZmlyc3QgYmVjYXVzZSBpdCdzIHVzZWQgdG8gYnVpbGQgdGhlIGZvcm1hdCBwYXR0ZXJuLlxuICAgIHNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2xvY2FsZScsICB7dmFsdWU6IHRoaXMuX3Jlc29sdmVMb2NhbGUobG9jYWxlcyl9KTtcblxuICAgIC8vIENvbXBpbGUgdGhlIGBhc3RgIHRvIGEgcGF0dGVybiB0aGF0IGlzIGhpZ2hseSBvcHRpbWl6ZWQgZm9yIHJlcGVhdGVkXG4gICAgLy8gYGZvcm1hdCgpYCBpbnZvY2F0aW9ucy4gKipOb3RlOioqIFRoaXMgcGFzc2VzIHRoZSBgbG9jYWxlc2Agc2V0IHByb3ZpZGVkXG4gICAgLy8gdG8gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YganVzdCB0aGUgcmVzb2x2ZWQgbG9jYWxlLlxuICAgIHZhciBwbHVyYWxGbiA9IHRoaXMuX2ZpbmRQbHVyYWxSdWxlRnVuY3Rpb24odGhpcy5fbG9jYWxlKTtcbiAgICB2YXIgcGF0dGVybiAgPSB0aGlzLl9jb21waWxlUGF0dGVybihhc3QsIGxvY2FsZXMsIGZvcm1hdHMsIHBsdXJhbEZuKTtcblxuICAgIC8vIFwiQmluZFwiIGBmb3JtYXQoKWAgbWV0aG9kIHRvIGB0aGlzYCBzbyBpdCBjYW4gYmUgcGFzc2VkIGJ5IHJlZmVyZW5jZSBsaWtlXG4gICAgLy8gdGhlIG90aGVyIGBJbnRsYCBBUElzLlxuICAgIHZhciBtZXNzYWdlRm9ybWF0ID0gdGhpcztcbiAgICB0aGlzLmZvcm1hdCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VGb3JtYXQuX2Zvcm1hdChwYXR0ZXJuLCB2YWx1ZXMpO1xuICAgIH07XG59XG5cbi8vIERlZmF1bHQgZm9ybWF0IG9wdGlvbnMgdXNlZCBhcyB0aGUgcHJvdG90eXBlIG9mIHRoZSBgZm9ybWF0c2AgcHJvdmlkZWQgdG8gdGhlXG4vLyBjb25zdHJ1Y3Rvci4gVGhlc2UgYXJlIHVzZWQgd2hlbiBjb25zdHJ1Y3RpbmcgdGhlIGludGVybmFsIEludGwuTnVtYmVyRm9ybWF0XG4vLyBhbmQgSW50bC5EYXRlVGltZUZvcm1hdCBpbnN0YW5jZXMuXG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoTWVzc2FnZUZvcm1hdCwgJ2Zvcm1hdHMnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgIHZhbHVlOiB7XG4gICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgJ2N1cnJlbmN5Jzoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAncGVyY2VudCc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ3BlcmNlbnQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgJ3Nob3J0Jzoge1xuICAgICAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyIDogJzItZGlnaXQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnbWVkaXVtJzoge1xuICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2xvbmcnOiB7XG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdmdWxsJzoge1xuICAgICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBtb250aCAgOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgZGF5ICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHllYXIgICA6ICdudW1lcmljJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgICdzaG9ydCc6IHtcbiAgICAgICAgICAgICAgICBob3VyICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ21lZGl1bSc6ICB7XG4gICAgICAgICAgICAgICAgaG91ciAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdsb25nJzoge1xuICAgICAgICAgICAgICAgIGhvdXIgICAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZSAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHNlY29uZCAgICAgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ2Z1bGwnOiB7XG4gICAgICAgICAgICAgICAgaG91ciAgICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgc2Vjb25kICAgICAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy8gRGVmaW5lIGludGVybmFsIHByaXZhdGUgcHJvcGVydGllcyBmb3IgZGVhbGluZyB3aXRoIGxvY2FsZSBkYXRhLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KE1lc3NhZ2VGb3JtYXQsICdfX2xvY2FsZURhdGFfXycsIHt2YWx1ZTogc3JjJGVzNSQkLm9iakNyZWF0ZShudWxsKX0pO1xuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KE1lc3NhZ2VGb3JtYXQsICdfX2FkZExvY2FsZURhdGEnLCB7dmFsdWU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKCEoZGF0YSAmJiBkYXRhLmxvY2FsZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0xvY2FsZSBkYXRhIHByb3ZpZGVkIHRvIEludGxNZXNzYWdlRm9ybWF0IGlzIG1pc3NpbmcgYSAnICtcbiAgICAgICAgICAgICdgbG9jYWxlYCBwcm9wZXJ0eSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBNZXNzYWdlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fW2RhdGEubG9jYWxlLnRvTG93ZXJDYXNlKCldID0gZGF0YTtcbn19KTtcblxuLy8gRGVmaW5lcyBgX19wYXJzZSgpYCBzdGF0aWMgbWV0aG9kIGFzIGFuIGV4cG9zZWQgcHJpdmF0ZS5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlRm9ybWF0LCAnX19wYXJzZScsIHt2YWx1ZTogaW50bCRtZXNzYWdlZm9ybWF0JHBhcnNlciQkW1wiZGVmYXVsdFwiXS5wYXJzZX0pO1xuXG4vLyBEZWZpbmUgcHVibGljIGBkZWZhdWx0TG9jYWxlYCBwcm9wZXJ0eSB3aGljaCBkZWZhdWx0cyB0byBFbmdsaXNoLCBidXQgY2FuIGJlXG4vLyBzZXQgYnkgdGhlIGRldmVsb3Blci5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShNZXNzYWdlRm9ybWF0LCAnZGVmYXVsdExvY2FsZScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlICA6IHRydWUsXG4gICAgdmFsdWUgICAgIDogdW5kZWZpbmVkXG59KTtcblxuTWVzc2FnZUZvcm1hdC5wcm90b3R5cGUucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IFByb3ZpZGUgYW55dGhpbmcgZWxzZT9cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH07XG59O1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5fY29tcGlsZVBhdHRlcm4gPSBmdW5jdGlvbiAoYXN0LCBsb2NhbGVzLCBmb3JtYXRzLCBwbHVyYWxGbikge1xuICAgIHZhciBjb21waWxlciA9IG5ldyBzcmMkY29tcGlsZXIkJFtcImRlZmF1bHRcIl0obG9jYWxlcywgZm9ybWF0cywgcGx1cmFsRm4pO1xuICAgIHJldHVybiBjb21waWxlci5jb21waWxlKGFzdCk7XG59O1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5fZmluZFBsdXJhbFJ1bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICB2YXIgbG9jYWxlRGF0YSA9IE1lc3NhZ2VGb3JtYXQuX19sb2NhbGVEYXRhX187XG4gICAgdmFyIGRhdGEgICAgICAgPSBsb2NhbGVEYXRhW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcblxuICAgIC8vIFRoZSBsb2NhbGUgZGF0YSBpcyBkZS1kdXBsaWNhdGVkLCBzbyB3ZSBoYXZlIHRvIHRyYXZlcnNlIHRoZSBsb2NhbGUnc1xuICAgIC8vIGhpZXJhcmNoeSB1bnRpbCB3ZSBmaW5kIGEgYHBsdXJhbFJ1bGVGdW5jdGlvbmAgdG8gcmV0dXJuLlxuICAgIHdoaWxlIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnBsdXJhbFJ1bGVGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucGx1cmFsUnVsZUZ1bmN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IGRhdGEucGFyZW50TG9jYWxlICYmIGxvY2FsZURhdGFbZGF0YS5wYXJlbnRMb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTG9jYWxlIGRhdGEgYWRkZWQgdG8gSW50bE1lc3NhZ2VGb3JtYXQgaXMgbWlzc2luZyBhICcgK1xuICAgICAgICAnYHBsdXJhbFJ1bGVGdW5jdGlvbmAgZm9yIDonICsgbG9jYWxlXG4gICAgKTtcbn07XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLl9mb3JtYXQgPSBmdW5jdGlvbiAocGF0dGVybiwgdmFsdWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLFxuICAgICAgICBpLCBsZW4sIHBhcnQsIGlkLCB2YWx1ZTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgcGFydCA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgLy8gRXhpc3QgZWFybHkgZm9yIHN0cmluZyBwYXJ0cy5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHBhcnQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlkID0gcGFydC5pZDtcblxuICAgICAgICAvLyBFbmZvcmNlIHRoYXQgYWxsIHJlcXVpcmVkIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGNhbGxlci5cbiAgICAgICAgaWYgKCEodmFsdWVzICYmIHNyYyR1dGlscyQkLmhvcC5jYWxsKHZhbHVlcywgaWQpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHZhbHVlIG11c3QgYmUgcHJvdmlkZWQgZm9yOiAnICsgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaWRdO1xuXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZvcm1hdCBwbHVyYWwgYW5kIHNlbGVjdCBwYXJ0cycgb3B0aW9uIOKAlCB3aGljaCBjYW4gYmUgYVxuICAgICAgICAvLyBuZXN0ZWQgcGF0dGVybiBzdHJ1Y3R1cmUuIFRoZSBjaG9vc2luZyBvZiB0aGUgb3B0aW9uIHRvIHVzZSBpc1xuICAgICAgICAvLyBhYnN0cmFjdGVkLWJ5IGFuZCBkZWxlZ2F0ZWQtdG8gdGhlIHBhcnQgaGVscGVyIG9iamVjdC5cbiAgICAgICAgaWYgKHBhcnQub3B0aW9ucykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuX2Zvcm1hdChwYXJ0LmdldE9wdGlvbih2YWx1ZSksIHZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gcGFydC5mb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbk1lc3NhZ2VGb3JtYXQucHJvdG90eXBlLl9tZXJnZUZvcm1hdHMgPSBmdW5jdGlvbiAoZGVmYXVsdHMsIGZvcm1hdHMpIHtcbiAgICB2YXIgbWVyZ2VkRm9ybWF0cyA9IHt9LFxuICAgICAgICB0eXBlLCBtZXJnZWRUeXBlO1xuXG4gICAgZm9yICh0eXBlIGluIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmICghc3JjJHV0aWxzJCQuaG9wLmNhbGwoZGVmYXVsdHMsIHR5cGUpKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgbWVyZ2VkRm9ybWF0c1t0eXBlXSA9IG1lcmdlZFR5cGUgPSBzcmMkZXM1JCQub2JqQ3JlYXRlKGRlZmF1bHRzW3R5cGVdKTtcblxuICAgICAgICBpZiAoZm9ybWF0cyAmJiBzcmMkdXRpbHMkJC5ob3AuY2FsbChmb3JtYXRzLCB0eXBlKSkge1xuICAgICAgICAgICAgc3JjJHV0aWxzJCQuZXh0ZW5kKG1lcmdlZFR5cGUsIGZvcm1hdHNbdHlwZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEZvcm1hdHM7XG59O1xuXG5NZXNzYWdlRm9ybWF0LnByb3RvdHlwZS5fcmVzb2x2ZUxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGVzKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBsb2NhbGVzID0gW2xvY2FsZXNdO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5IHNvIHdlIGNhbiBwdXNoIG9uIHRoZSBkZWZhdWx0IGxvY2FsZS5cbiAgICBsb2NhbGVzID0gKGxvY2FsZXMgfHwgW10pLmNvbmNhdChNZXNzYWdlRm9ybWF0LmRlZmF1bHRMb2NhbGUpO1xuXG4gICAgdmFyIGxvY2FsZURhdGEgPSBNZXNzYWdlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fO1xuICAgIHZhciBpLCBsZW4sIGxvY2FsZVBhcnRzLCBkYXRhO1xuXG4gICAgLy8gVXNpbmcgdGhlIHNldCBvZiBsb2NhbGVzICsgdGhlIGRlZmF1bHQgbG9jYWxlLCB3ZSBsb29rIGZvciB0aGUgZmlyc3Qgb25lXG4gICAgLy8gd2hpY2ggdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkLiBXaGVuIGRhdGEgZG9lcyBub3QgZXhpc3QgZm9yIGEgbG9jYWxlLCB3ZVxuICAgIC8vIHRyYXZlcnNlIGl0cyBhbmNlc3RvcnMgdG8gZmluZCBzb21ldGhpbmcgdGhhdCdzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoaW5cbiAgICAvLyBpdHMgaGllcmFyY2h5IG9mIGxvY2FsZXMuIFNpbmNlIHdlIGxhY2sgdGhlIHByb3BlciBgcGFyZW50TG9jYWxlYCBkYXRhXG4gICAgLy8gaGVyZSwgd2UgbXVzdCB0YWtlIGEgbmFpdmUgYXBwcm9hY2ggdG8gdHJhdmVyc2FsLlxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGxvY2FsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYWxlUGFydHMgPSBsb2NhbGVzW2ldLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcblxuICAgICAgICB3aGlsZSAobG9jYWxlUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhID0gbG9jYWxlRGF0YVtsb2NhbGVQYXJ0cy5qb2luKCctJyldO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5vcm1hbGl6ZWQgbG9jYWxlIHN0cmluZzsgZS5nLiwgd2UgcmV0dXJuIFwiZW4tVVNcIixcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIFwiZW4tdXNcIi5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5sb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvY2FsZVBhcnRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGVzLnBvcCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ05vIGxvY2FsZSBkYXRhIGhhcyBiZWVuIGFkZGVkIHRvIEludGxNZXNzYWdlRm9ybWF0IGZvcjogJyArXG4gICAgICAgIGxvY2FsZXMuam9pbignLCAnKSArICcsIG9yIHRoZSBkZWZhdWx0IGxvY2FsZTogJyArIGRlZmF1bHRMb2NhbGVcbiAgICApO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5qcy5tYXAiLCIvLyBHRU5FUkFURUQgRklMRVxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcImxvY2FsZVwiOlwiZW5cIixcInBsdXJhbFJ1bGVGdW5jdGlvblwiOmZ1bmN0aW9uIChuLG9yZCl7dmFyIHM9U3RyaW5nKG4pLnNwbGl0KFwiLlwiKSx2MD0hc1sxXSx0MD1OdW1iZXIoc1swXSk9PW4sbjEwPXQwJiZzWzBdLnNsaWNlKC0xKSxuMTAwPXQwJiZzWzBdLnNsaWNlKC0yKTtpZihvcmQpcmV0dXJuIG4xMD09MSYmbjEwMCE9MTE/XCJvbmVcIjpuMTA9PTImJm4xMDAhPTEyP1widHdvXCI6bjEwPT0zJiZuMTAwIT0xMz9cImZld1wiOlwib3RoZXJcIjtyZXR1cm4gbj09MSYmdjA/XCJvbmVcIjpcIm90aGVyXCJ9fTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW4uanMubWFwIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xudmFyIHNyYyR1dGlscyQkID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbi8vIFB1cnBvc2VseSB1c2luZyB0aGUgc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyB0aGUgSW50bC5qcyBgSW50bGAgcG9seWZpbGwuXG4vLyBDb3B5cmlnaHQgMjAxMyBBbmR5IEVhcm5zaGF3LCBNSVQgTGljZW5zZVxuXG52YXIgcmVhbERlZmluZVByb3AgPSAoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7IHJldHVybiAhIU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7fSk7IH1cbiAgICBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH1cbn0pKCk7XG5cbnZhciBlczMgPSAhcmVhbERlZmluZVByb3AgJiYgIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVhbERlZmluZVByb3AgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOlxuICAgICAgICBmdW5jdGlvbiAob2JqLCBuYW1lLCBkZXNjKSB7XG5cbiAgICBpZiAoJ2dldCcgaW4gZGVzYyAmJiBvYmouX19kZWZpbmVHZXR0ZXJfXykge1xuICAgICAgICBvYmouX19kZWZpbmVHZXR0ZXJfXyhuYW1lLCBkZXNjLmdldCk7XG4gICAgfSBlbHNlIGlmICghc3JjJHV0aWxzJCQuaG9wLmNhbGwob2JqLCBuYW1lKSB8fCAndmFsdWUnIGluIGRlc2MpIHtcbiAgICAgICAgb2JqW25hbWVdID0gZGVzYy52YWx1ZTtcbiAgICB9XG59O1xuXG52YXIgb2JqQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG8sIHByb3BzKSB7XG4gICAgdmFyIG9iaiwgaztcblxuICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgb2JqID0gbmV3IEYoKTtcblxuICAgIGZvciAoayBpbiBwcm9wcykge1xuICAgICAgICBpZiAoc3JjJHV0aWxzJCQuaG9wLmNhbGwocHJvcHMsIGspKSB7XG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShvYmosIGssIHByb3BzW2tdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuZXhwb3J0cy5kZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5LCBleHBvcnRzLm9iakNyZWF0ZSA9IG9iakNyZWF0ZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM1LmpzLm1hcCIsIi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3JjJGNvcmUkJCA9IHJlcXVpcmUoXCIuL2NvcmVcIiksIHNyYyRlbiQkID0gcmVxdWlyZShcIi4vZW5cIik7XG5cbnNyYyRjb3JlJCRbXCJkZWZhdWx0XCJdLl9fYWRkTG9jYWxlRGF0YShzcmMkZW4kJFtcImRlZmF1bHRcIl0pO1xuc3JjJGNvcmUkJFtcImRlZmF1bHRcIl0uZGVmYXVsdExvY2FsZSA9ICdlbic7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3JjJGNvcmUkJFtcImRlZmF1bHRcIl07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG52YXIgaG9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKG9iaikge1xuICAgIHZhciBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgaSwgbGVuLCBzb3VyY2UsIGtleTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHsgY29udGludWU7IH1cblxuICAgICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChob3AuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydHMuaG9wID0gaG9wO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3BhcnNlcicpWydkZWZhdWx0J107XG5leHBvcnRzWydkZWZhdWx0J10gPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uKCkge1xuICAvKlxuICAgKiBHZW5lcmF0ZWQgYnkgUEVHLmpzIDAuOC4wLlxuICAgKlxuICAgKiBodHRwOi8vcGVnanMubWFqZGEuY3ovXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHBlZyRzdWJjbGFzcyhjaGlsZCwgcGFyZW50KSB7XG4gICAgZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9XG4gICAgY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7XG4gIH1cblxuICBmdW5jdGlvbiBTeW50YXhFcnJvcihtZXNzYWdlLCBleHBlY3RlZCwgZm91bmQsIG9mZnNldCwgbGluZSwgY29sdW1uKSB7XG4gICAgdGhpcy5tZXNzYWdlICA9IG1lc3NhZ2U7XG4gICAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xuICAgIHRoaXMuZm91bmQgICAgPSBmb3VuZDtcbiAgICB0aGlzLm9mZnNldCAgID0gb2Zmc2V0O1xuICAgIHRoaXMubGluZSAgICAgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uICAgPSBjb2x1bW47XG5cbiAgICB0aGlzLm5hbWUgICAgID0gXCJTeW50YXhFcnJvclwiO1xuICB9XG5cbiAgcGVnJHN1YmNsYXNzKFN5bnRheEVycm9yLCBFcnJvcik7XG5cbiAgZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDoge30sXG5cbiAgICAgICAgcGVnJEZBSUxFRCA9IHt9LFxuXG4gICAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbnMgPSB7IHN0YXJ0OiBwZWckcGFyc2VzdGFydCB9LFxuICAgICAgICBwZWckc3RhcnRSdWxlRnVuY3Rpb24gID0gcGVnJHBhcnNlc3RhcnQsXG5cbiAgICAgICAgcGVnJGMwID0gW10sXG4gICAgICAgIHBlZyRjMSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgICA6ICdtZXNzYWdlRm9ybWF0UGF0dGVybicsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzIgPSBwZWckRkFJTEVELFxuICAgICAgICBwZWckYzMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9ICcnLFxuICAgICAgICAgICAgICAgICAgICBpLCBqLCBvdXRlckxlbiwgaW5uZXIsIGlubmVyTGVuO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgb3V0ZXJMZW4gPSB0ZXh0Lmxlbmd0aDsgaSA8IG91dGVyTGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXIgPSB0ZXh0W2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDAsIGlubmVyTGVuID0gaW5uZXIubGVuZ3RoOyBqIDwgaW5uZXJMZW47IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGlubmVyW2pdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjNCA9IGZ1bmN0aW9uKG1lc3NhZ2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICdtZXNzYWdlVGV4dEVsZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWVzc2FnZVRleHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGM1ID0gL15bXiBcXHRcXG5cXHIsLis9e30jXS8sXG4gICAgICAgIHBlZyRjNiA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbXiBcXFxcdFxcXFxuXFxcXHIsLis9e30jXVwiLCBkZXNjcmlwdGlvbjogXCJbXiBcXFxcdFxcXFxuXFxcXHIsLis9e30jXVwiIH0sXG4gICAgICAgIHBlZyRjNyA9IFwie1wiLFxuICAgICAgICBwZWckYzggPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ7XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ7XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjOSA9IG51bGwsXG4gICAgICAgIHBlZyRjMTAgPSBcIixcIixcbiAgICAgICAgcGVnJGMxMSA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIixcIiwgZGVzY3JpcHRpb246IFwiXFxcIixcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMxMiA9IFwifVwiLFxuICAgICAgICBwZWckYzEzID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwifVwiLCBkZXNjcmlwdGlvbjogXCJcXFwifVxcXCJcIiB9LFxuICAgICAgICBwZWckYzE0ID0gZnVuY3Rpb24oaWQsIGZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgIDogJ2FyZ3VtZW50RWxlbWVudCcsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgIDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0ICYmIGZvcm1hdFsyXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzE1ID0gXCJudW1iZXJcIixcbiAgICAgICAgcGVnJGMxNiA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm51bWJlclwiLCBkZXNjcmlwdGlvbjogXCJcXFwibnVtYmVyXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMTcgPSBcImRhdGVcIixcbiAgICAgICAgcGVnJGMxOCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRhdGVcIiwgZGVzY3JpcHRpb246IFwiXFxcImRhdGVcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMxOSA9IFwidGltZVwiLFxuICAgICAgICBwZWckYzIwID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidGltZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwidGltZVxcXCJcIiB9LFxuICAgICAgICBwZWckYzIxID0gZnVuY3Rpb24odHlwZSwgc3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogdHlwZSArICdGb3JtYXQnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGUgJiYgc3R5bGVbMl1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMyMiA9IFwicGx1cmFsXCIsXG4gICAgICAgIHBlZyRjMjMgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwbHVyYWxcIiwgZGVzY3JpcHRpb246IFwiXFxcInBsdXJhbFxcXCJcIiB9LFxuICAgICAgICBwZWckYzI0ID0gZnVuY3Rpb24ocGx1cmFsU3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiBwbHVyYWxTdHlsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IDogcGx1cmFsU3R5bGUub2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHBsdXJhbFN0eWxlLm9wdGlvbnNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMyNSA9IFwic2VsZWN0b3JkaW5hbFwiLFxuICAgICAgICBwZWckYzI2ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic2VsZWN0b3JkaW5hbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic2VsZWN0b3JkaW5hbFxcXCJcIiB9LFxuICAgICAgICBwZWckYzI3ID0gZnVuY3Rpb24ocGx1cmFsU3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiBwbHVyYWxTdHlsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgOiBwbHVyYWxTdHlsZS5vZmZzZXQgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogcGx1cmFsU3R5bGUub3B0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMjggPSBcInNlbGVjdFwiLFxuICAgICAgICBwZWckYzI5ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic2VsZWN0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzZWxlY3RcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMzMCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlICAgOiAnc2VsZWN0Rm9ybWF0JyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzMxID0gXCI9XCIsXG4gICAgICAgIHBlZyRjMzIgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCI9XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCI9XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMzMgPSBmdW5jdGlvbihzZWxlY3RvciwgcGF0dGVybikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgOiAnb3B0aW9uYWxGb3JtYXRQYXR0ZXJuJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogcGF0dGVyblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzM0ID0gXCJvZmZzZXQ6XCIsXG4gICAgICAgIHBlZyRjMzUgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJvZmZzZXQ6XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJvZmZzZXQ6XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMzYgPSBmdW5jdGlvbihudW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMzNyA9IGZ1bmN0aW9uKG9mZnNldCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICA6ICdwbHVyYWxGb3JtYXQnLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgOiBvZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMzOCA9IHsgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogXCJ3aGl0ZXNwYWNlXCIgfSxcbiAgICAgICAgcGVnJGMzOSA9IC9eWyBcXHRcXG5cXHJdLyxcbiAgICAgICAgcGVnJGM0MCA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbIFxcXFx0XFxcXG5cXFxccl1cIiwgZGVzY3JpcHRpb246IFwiWyBcXFxcdFxcXFxuXFxcXHJdXCIgfSxcbiAgICAgICAgcGVnJGM0MSA9IHsgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogXCJvcHRpb25hbFdoaXRlc3BhY2VcIiB9LFxuICAgICAgICBwZWckYzQyID0gL15bMC05XS8sXG4gICAgICAgIHBlZyRjNDMgPSB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWzAtOV1cIiwgZGVzY3JpcHRpb246IFwiWzAtOV1cIiB9LFxuICAgICAgICBwZWckYzQ0ID0gL15bMC05YS1mXS9pLFxuICAgICAgICBwZWckYzQ1ID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlswLTlhLWZdaVwiLCBkZXNjcmlwdGlvbjogXCJbMC05YS1mXWlcIiB9LFxuICAgICAgICBwZWckYzQ2ID0gXCIwXCIsXG4gICAgICAgIHBlZyRjNDcgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIwXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIwXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjNDggPSAvXlsxLTldLyxcbiAgICAgICAgcGVnJGM0OSA9IHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbMS05XVwiLCBkZXNjcmlwdGlvbjogXCJbMS05XVwiIH0sXG4gICAgICAgIHBlZyRjNTAgPSBmdW5jdGlvbihkaWdpdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkaWdpdHMsIDEwKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGVnJGM1MSA9IC9eW157fVxcXFxcXDAtXFx4MUZ/IFxcdFxcblxccl0vLFxuICAgICAgICBwZWckYzUyID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIltee31cXFxcXFxcXFxcXFwwLVxcXFx4MUZ/IFxcXFx0XFxcXG5cXFxccl1cIiwgZGVzY3JpcHRpb246IFwiW157fVxcXFxcXFxcXFxcXDAtXFxcXHgxRn8gXFxcXHRcXFxcblxcXFxyXVwiIH0sXG4gICAgICAgIHBlZyRjNTMgPSBcIlxcXFwjXCIsXG4gICAgICAgIHBlZyRjNTQgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJcXFxcI1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiXFxcXFxcXFwjXFxcIlwiIH0sXG4gICAgICAgIHBlZyRjNTUgPSBmdW5jdGlvbigpIHsgcmV0dXJuICdcXFxcIyc7IH0sXG4gICAgICAgIHBlZyRjNTYgPSBcIlxcXFx7XCIsXG4gICAgICAgIHBlZyRjNTcgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJcXFxce1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiXFxcXFxcXFx7XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjNTggPSBmdW5jdGlvbigpIHsgcmV0dXJuICdcXHUwMDdCJzsgfSxcbiAgICAgICAgcGVnJGM1OSA9IFwiXFxcXH1cIixcbiAgICAgICAgcGVnJGM2MCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlxcXFx9XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJcXFxcXFxcXH1cXFwiXCIgfSxcbiAgICAgICAgcGVnJGM2MSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJ1xcdTAwN0QnOyB9LFxuICAgICAgICBwZWckYzYyID0gXCJcXFxcdVwiLFxuICAgICAgICBwZWckYzYzID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiXFxcXHVcIiwgZGVzY3JpcHRpb246IFwiXFxcIlxcXFxcXFxcdVxcXCJcIiB9LFxuICAgICAgICBwZWckYzY0ID0gZnVuY3Rpb24oZGlnaXRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZGlnaXRzLCAxNikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGM2NSA9IGZ1bmN0aW9uKGNoYXJzKSB7IHJldHVybiBjaGFycy5qb2luKCcnKTsgfSxcblxuICAgICAgICBwZWckY3VyclBvcyAgICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvcyAgICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH0sXG4gICAgICAgIHBlZyRtYXhGYWlsUG9zICAgICAgID0gMCxcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCAgPSBbXSxcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzICAgICAgPSAwLFxuXG4gICAgICAgIHBlZyRyZXN1bHQ7XG5cbiAgICBpZiAoXCJzdGFydFJ1bGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIShvcHRpb25zLnN0YXJ0UnVsZSBpbiBwZWckc3RhcnRSdWxlRnVuY3Rpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XG4gICAgICB9XG5cbiAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiA9IHBlZyRzdGFydFJ1bGVGdW5jdGlvbnNbb3B0aW9ucy5zdGFydFJ1bGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICByZXR1cm4gaW5wdXQuc3Vic3RyaW5nKHBlZyRyZXBvcnRlZFBvcywgcGVnJGN1cnJQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICAgIHJldHVybiBwZWckcmVwb3J0ZWRQb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZSgpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5saW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbHVtbigpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5jb2x1bW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwZWN0ZWQoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW3sgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfV0sXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgbnVsbCwgcGVnJHJlcG9ydGVkUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSB7XG4gICAgICBmdW5jdGlvbiBhZHZhbmNlKGRldGFpbHMsIHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICAgICAgdmFyIHAsIGNoO1xuXG4gICAgICAgIGZvciAocCA9IHN0YXJ0UG9zOyBwIDwgZW5kUG9zOyBwKyspIHtcbiAgICAgICAgICBjaCA9IGlucHV0LmNoYXJBdChwKTtcbiAgICAgICAgICBpZiAoY2ggPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGlmICghZGV0YWlscy5zZWVuQ1IpIHsgZGV0YWlscy5saW5lKys7IH1cbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gXCJcXHJcIiB8fCBjaCA9PT0gXCJcXHUyMDI4XCIgfHwgY2ggPT09IFwiXFx1MjAyOVwiKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWckY2FjaGVkUG9zICE9PSBwb3MpIHtcbiAgICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgPiBwb3MpIHtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zID0gMDtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShwZWckY2FjaGVkUG9zRGV0YWlscywgcGVnJGNhY2hlZFBvcywgcG9zKTtcbiAgICAgICAgcGVnJGNhY2hlZFBvcyA9IHBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBlZyRjYWNoZWRQb3NEZXRhaWxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRmYWlsKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJGN1cnJQb3MgPCBwZWckbWF4RmFpbFBvcykgeyByZXR1cm47IH1cblxuICAgICAgaWYgKHBlZyRjdXJyUG9zID4gcGVnJG1heEZhaWxQb3MpIHtcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwZWckbWF4RmFpbEV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBleHBlY3RlZCwgcG9zKSB7XG4gICAgICBmdW5jdGlvbiBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICAgIGV4cGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIGlmIChhLmRlc2NyaXB0aW9uIDwgYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYS5kZXNjcmlwdGlvbiA+IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChpIDwgZXhwZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGV4cGVjdGVkW2kgLSAxXSA9PT0gZXhwZWN0ZWRbaV0pIHtcbiAgICAgICAgICAgIGV4cGVjdGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ0VzY2FwZShzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gaGV4KGNoKSB7IHJldHVybiBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9XG5cbiAgICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgICAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICAgICdcXFxcXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA4L2csICdcXFxcYicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx0L2csICAgJ1xcXFx0JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgICAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcZi9nLCAgICdcXFxcZicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICAgJ1xcXFxyJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MDdcXHgwQlxceDBFXFx4MEZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgnICArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAxODAtXFx1MEZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUxMDgwLVxcdUZGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdScgICsgaGV4KGNoKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwZWN0ZWREZXNjcyA9IG5ldyBBcnJheShleHBlY3RlZC5sZW5ndGgpLFxuICAgICAgICAgICAgZXhwZWN0ZWREZXNjLCBmb3VuZERlc2MsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXhwZWN0ZWREZXNjc1tpXSA9IGV4cGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0ZWREZXNjID0gZXhwZWN0ZWQubGVuZ3RoID4gMVxuICAgICAgICAgID8gZXhwZWN0ZWREZXNjcy5zbGljZSgwLCAtMSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICsgXCIgb3IgXCJcbiAgICAgICAgICAgICAgKyBleHBlY3RlZERlc2NzW2V4cGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgOiBleHBlY3RlZERlc2NzWzBdO1xuXG4gICAgICAgIGZvdW5kRGVzYyA9IGZvdW5kID8gXCJcXFwiXCIgKyBzdHJpbmdFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xuXG4gICAgICAgIHJldHVybiBcIkV4cGVjdGVkIFwiICsgZXhwZWN0ZWREZXNjICsgXCIgYnV0IFwiICsgZm91bmREZXNjICsgXCIgZm91bmQuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3NEZXRhaWxzID0gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcyksXG4gICAgICAgICAgZm91bmQgICAgICA9IHBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChwb3MpIDogbnVsbDtcblxuICAgICAgaWYgKGV4cGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgIG1lc3NhZ2UgIT09IG51bGwgPyBtZXNzYWdlIDogYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICAgIGV4cGVjdGVkLFxuICAgICAgICBmb3VuZCxcbiAgICAgICAgcG9zLFxuICAgICAgICBwb3NEZXRhaWxzLmxpbmUsXG4gICAgICAgIHBvc0RldGFpbHMuY29sdW1uXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXN0YXJ0KCkge1xuICAgICAgdmFyIHMwO1xuXG4gICAgICBzMCA9IHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRQYXR0ZXJuKCk7XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VtZXNzYWdlRm9ybWF0UGF0dGVybigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBbXTtcbiAgICAgIHMyID0gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdEVsZW1lbnQoKTtcbiAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMS5wdXNoKHMyKTtcbiAgICAgICAgczIgPSBwZWckcGFyc2VtZXNzYWdlRm9ybWF0RWxlbWVudCgpO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICBzMSA9IHBlZyRjMShzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbWVzc2FnZUZvcm1hdEVsZW1lbnQoKSB7XG4gICAgICB2YXIgczA7XG5cbiAgICAgIHMwID0gcGVnJHBhcnNlbWVzc2FnZVRleHRFbGVtZW50KCk7XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckcGFyc2Vhcmd1bWVudEVsZW1lbnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW1lc3NhZ2VUZXh0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczU7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IFtdO1xuICAgICAgczIgPSBwZWckY3VyclBvcztcbiAgICAgIHMzID0gcGVnJHBhcnNlXygpO1xuICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHM0ID0gcGVnJHBhcnNlY2hhcnMoKTtcbiAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczUgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMyA9IFtzMywgczQsIHM1XTtcbiAgICAgICAgICAgIHMyID0gczM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgczIgPSBwZWckYzI7XG4gICAgICB9XG4gICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgICAgczIgPSBwZWckY3VyclBvcztcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlY2hhcnMoKTtcbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczMgPSBbczMsIHM0LCBzNV07XG4gICAgICAgICAgICAgICAgczIgPSBzMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgIHMyID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckYzI7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGMzKHMxKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgczEgPSBwZWckcGFyc2V3cygpO1xuICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMSA9IGlucHV0LnN1YnN0cmluZyhzMCwgcGVnJGN1cnJQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VtZXNzYWdlVGV4dEVsZW1lbnQoKSB7XG4gICAgICB2YXIgczAsIHMxO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBwZWckcGFyc2VtZXNzYWdlVGV4dCgpO1xuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICBzMSA9IHBlZyRjNChzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlYXJndW1lbnQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgICAgczAgPSBwZWckcGFyc2VudW1iZXIoKTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBzMSA9IFtdO1xuICAgICAgICBpZiAocGVnJGM1LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICBzMiA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzYpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgd2hpbGUgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMS5wdXNoKHMyKTtcbiAgICAgICAgICAgIGlmIChwZWckYzUudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgICAgICBzMiA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM2KTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMSA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMSA9IGlucHV0LnN1YnN0cmluZyhzMCwgcGVnJGN1cnJQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2Vhcmd1bWVudEVsZW1lbnQoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0LCBzNSwgczYsIHM3LCBzODtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTIzKSB7XG4gICAgICAgIHMxID0gcGVnJGM3O1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjOCk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczMgPSBwZWckcGFyc2Vhcmd1bWVudCgpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczUgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICAgICAgICAgIHM2ID0gcGVnJGMxMDtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHM2ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTEpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczcgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICAgICAgaWYgKHM3ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBzOCA9IHBlZyRwYXJzZWVsZW1lbnRGb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzOCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICBzNiA9IFtzNiwgczcsIHM4XTtcbiAgICAgICAgICAgICAgICAgICAgczUgPSBzNjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczU7XG4gICAgICAgICAgICAgICAgICAgIHM1ID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHM1O1xuICAgICAgICAgICAgICAgICAgczUgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczU7XG4gICAgICAgICAgICAgICAgczUgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHM1ID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczUgPSBwZWckYzk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDEyNSkge1xuICAgICAgICAgICAgICAgICAgICBzNyA9IHBlZyRjMTI7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzNyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMyk7IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgICAgczEgPSBwZWckYzE0KHMzLCBzNSk7XG4gICAgICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWVsZW1lbnRGb3JtYXQoKSB7XG4gICAgICB2YXIgczA7XG5cbiAgICAgIHMwID0gcGVnJHBhcnNlc2ltcGxlRm9ybWF0KCk7XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckcGFyc2VwbHVyYWxGb3JtYXQoKTtcbiAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczAgPSBwZWckcGFyc2VzZWxlY3RPcmRpbmFsRm9ybWF0KCk7XG4gICAgICAgICAgaWYgKHMwID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzMCA9IHBlZyRwYXJzZXNlbGVjdEZvcm1hdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc2ltcGxlRm9ybWF0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczUsIHM2O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNikgPT09IHBlZyRjMTUpIHtcbiAgICAgICAgczEgPSBwZWckYzE1O1xuICAgICAgICBwZWckY3VyclBvcyArPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTYpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNCkgPT09IHBlZyRjMTcpIHtcbiAgICAgICAgICBzMSA9IHBlZyRjMTc7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgKz0gNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzE4KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDQpID09PSBwZWckYzE5KSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMTk7XG4gICAgICAgICAgICBwZWckY3VyclBvcyArPSA0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjApOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMzID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICAgICAgczQgPSBwZWckYzEwO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczQgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzExKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM2ID0gcGVnJHBhcnNlY2hhcnMoKTtcbiAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczQgPSBbczQsIHM1LCBzNl07XG4gICAgICAgICAgICAgICAgczMgPSBzNDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICBzMyA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGM5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgczEgPSBwZWckYzIxKHMxLCBzMyk7XG4gICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlcGx1cmFsRm9ybWF0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczU7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCA2KSA9PT0gcGVnJGMyMikge1xuICAgICAgICBzMSA9IHBlZyRjMjI7XG4gICAgICAgIHBlZyRjdXJyUG9zICs9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyMyk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICAgICAgczMgPSBwZWckYzEwO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzExKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlcGx1cmFsU3R5bGUoKTtcbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczEgPSBwZWckYzI0KHM1KTtcbiAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc2VsZWN0T3JkaW5hbEZvcm1hdCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMTMpID09PSBwZWckYzI1KSB7XG4gICAgICAgIHMxID0gcGVnJGMyNTtcbiAgICAgICAgcGVnJGN1cnJQb3MgKz0gMTM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyNik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA0NCkge1xuICAgICAgICAgICAgczMgPSBwZWckYzEwO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzExKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlcGx1cmFsU3R5bGUoKTtcbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczEgPSBwZWckYzI3KHM1KTtcbiAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc2VsZWN0Rm9ybWF0KCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczUsIHM2O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgNikgPT09IHBlZyRjMjgpIHtcbiAgICAgICAgczEgPSBwZWckYzI4O1xuICAgICAgICBwZWckY3VyclBvcyArPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjkpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNDQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGMxMDtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBzNCA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzNSA9IFtdO1xuICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZW9wdGlvbmFsRm9ybWF0UGF0dGVybigpO1xuICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHM1LnB1c2goczYpO1xuICAgICAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VvcHRpb25hbEZvcm1hdFBhdHRlcm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgczUgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczEgPSBwZWckYzMwKHM1KTtcbiAgICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlc2VsZWN0b3IoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczM7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA2MSkge1xuICAgICAgICBzMiA9IHBlZyRjMzE7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzMik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMyA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMiA9IFtzMiwgczNdO1xuICAgICAgICAgIHMxID0gczI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMTtcbiAgICAgICAgICBzMSA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMTtcbiAgICAgICAgczEgPSBwZWckYzI7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBpbnB1dC5zdWJzdHJpbmcoczAsIHBlZyRjdXJyUG9zKTtcbiAgICAgIH1cbiAgICAgIHMwID0gczE7XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckcGFyc2VjaGFycygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlb3B0aW9uYWxGb3JtYXRQYXR0ZXJuKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczUsIHM2LCBzNywgczg7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRwYXJzZV8oKTtcbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZXNlbGVjdG9yKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMzID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAxMjMpIHtcbiAgICAgICAgICAgICAgczQgPSBwZWckYzc7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzNCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM4KTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM1ID0gcGVnJHBhcnNlXygpO1xuICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBzNiA9IHBlZyRwYXJzZW1lc3NhZ2VGb3JtYXRQYXR0ZXJuKCk7XG4gICAgICAgICAgICAgICAgaWYgKHM2ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBzNyA9IHBlZyRwYXJzZV8oKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzNyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDEyNSkge1xuICAgICAgICAgICAgICAgICAgICAgIHM4ID0gcGVnJGMxMjtcbiAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHM4ID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMTMpOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHM4ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICAgICAgczEgPSBwZWckYzMzKHMyLCBzNik7XG4gICAgICAgICAgICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZW9mZnNldCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMztcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDcpID09PSBwZWckYzM0KSB7XG4gICAgICAgIHMxID0gcGVnJGMzNDtcbiAgICAgICAgcGVnJGN1cnJQb3MgKz0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzM1KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMyID0gcGVnJHBhcnNlXygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZW51bWJlcigpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMzYoczMpO1xuICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXBsdXJhbFN0eWxlKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNDtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gcGVnJHBhcnNlb2Zmc2V0KCk7XG4gICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBwZWckYzk7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VfKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMzID0gW107XG4gICAgICAgICAgczQgPSBwZWckcGFyc2VvcHRpb25hbEZvcm1hdFBhdHRlcm4oKTtcbiAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHdoaWxlIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBzMy5wdXNoKHM0KTtcbiAgICAgICAgICAgICAgczQgPSBwZWckcGFyc2VvcHRpb25hbEZvcm1hdFBhdHRlcm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMzcoczEsIHMzKTtcbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2V3cygpIHtcbiAgICAgIHZhciBzMCwgczE7XG5cbiAgICAgIHBlZyRzaWxlbnRGYWlscysrO1xuICAgICAgczAgPSBbXTtcbiAgICAgIGlmIChwZWckYzM5LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgczEgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDApOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgd2hpbGUgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczAucHVzaChzMSk7XG4gICAgICAgICAgaWYgKHBlZyRjMzkudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgICAgczEgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQwKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczAgPSBwZWckYzI7XG4gICAgICB9XG4gICAgICBwZWckc2lsZW50RmFpbHMtLTtcbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzOCk7IH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZV8oKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgICAgcGVnJHNpbGVudEZhaWxzKys7XG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBbXTtcbiAgICAgIHMyID0gcGVnJHBhcnNld3MoKTtcbiAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMS5wdXNoKHMyKTtcbiAgICAgICAgczIgPSBwZWckcGFyc2V3cygpO1xuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gaW5wdXQuc3Vic3RyaW5nKHMwLCBwZWckY3VyclBvcyk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDEpOyB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VkaWdpdCgpIHtcbiAgICAgIHZhciBzMDtcblxuICAgICAgaWYgKHBlZyRjNDIudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICBzMCA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM0Myk7IH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWhleERpZ2l0KCkge1xuICAgICAgdmFyIHMwO1xuXG4gICAgICBpZiAocGVnJGM0NC50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgIHMwID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMwID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQ1KTsgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbnVtYmVyKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzLCBzNCwgczU7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ4KSB7XG4gICAgICAgIHMxID0gcGVnJGM0NjtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQ3KTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIHMyID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIGlmIChwZWckYzQ4LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICBzMyA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQ5KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHM0ID0gW107XG4gICAgICAgICAgczUgPSBwZWckcGFyc2VkaWdpdCgpO1xuICAgICAgICAgIHdoaWxlIChzNSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQucHVzaChzNSk7XG4gICAgICAgICAgICBzNSA9IHBlZyRwYXJzZWRpZ2l0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczMgPSBbczMsIHM0XTtcbiAgICAgICAgICAgIHMyID0gczM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICBzMiA9IHBlZyRjMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMiA9IGlucHV0LnN1YnN0cmluZyhzMSwgcGVnJGN1cnJQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHMxID0gczI7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGM1MChzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlY2hhcigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1LCBzNiwgczc7XG5cbiAgICAgIGlmIChwZWckYzUxLnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgczAgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczAgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNTIpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjNTMpIHtcbiAgICAgICAgICBzMSA9IHBlZyRjNTM7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgKz0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzU0KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgIHMxID0gcGVnJGM1NSgpO1xuICAgICAgICB9XG4gICAgICAgIHMwID0gczE7XG4gICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjNTYpIHtcbiAgICAgICAgICAgIHMxID0gcGVnJGM1NjtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM1Nyk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgIHMxID0gcGVnJGM1OCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIDIpID09PSBwZWckYzU5KSB7XG4gICAgICAgICAgICAgIHMxID0gcGVnJGM1OTtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzYwKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMSA9IHBlZyRjNjEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjNjIpIHtcbiAgICAgICAgICAgICAgICBzMSA9IHBlZyRjNjI7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gMjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzYzKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIHMyID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgICAgczMgPSBwZWckY3VyclBvcztcbiAgICAgICAgICAgICAgICBzNCA9IHBlZyRwYXJzZWhleERpZ2l0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICBzNSA9IHBlZyRwYXJzZWhleERpZ2l0KCk7XG4gICAgICAgICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgczYgPSBwZWckcGFyc2VoZXhEaWdpdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoczYgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzNyA9IHBlZyRwYXJzZWhleERpZ2l0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHM3ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzNCA9IFtzNCwgczUsIHM2LCBzN107XG4gICAgICAgICAgICAgICAgICAgICAgICBzMyA9IHM0O1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczM7XG4gICAgICAgICAgICAgICAgICAgIHMzID0gcGVnJGMyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMzO1xuICAgICAgICAgICAgICAgICAgczMgPSBwZWckYzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgICAgczMgPSBpbnB1dC5zdWJzdHJpbmcoczIsIHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgczIgPSBzMztcbiAgICAgICAgICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICAgICAgczEgPSBwZWckYzY0KHMyKTtcbiAgICAgICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgICBzMCA9IHBlZyRjMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlY2hhcnMoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIHMxID0gW107XG4gICAgICBzMiA9IHBlZyRwYXJzZWNoYXIoKTtcbiAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICB3aGlsZSAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMS5wdXNoKHMyKTtcbiAgICAgICAgICBzMiA9IHBlZyRwYXJzZWNoYXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckYzI7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGM2NShzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgcGVnJHJlc3VsdCA9IHBlZyRzdGFydFJ1bGVGdW5jdGlvbigpO1xuXG4gICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIHBlZyRmYWlsKHsgdHlwZTogXCJlbmRcIiwgZGVzY3JpcHRpb246IFwiZW5kIG9mIGlucHV0XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihudWxsLCBwZWckbWF4RmFpbEV4cGVjdGVkLCBwZWckbWF4RmFpbFBvcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBTeW50YXhFcnJvcjogU3ludGF4RXJyb3IsXG4gICAgcGFyc2U6ICAgICAgIHBhcnNlXG4gIH07XG59KSgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZXIuanMubWFwIiwiLyoganNoaW50IG5vZGU6dHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBJbnRsUmVsYXRpdmVGb3JtYXQgPSByZXF1aXJlKCcuL2xpYi9tYWluJylbJ2RlZmF1bHQnXTtcblxuLy8gQWRkIGFsbCBsb2NhbGUgZGF0YSB0byBgSW50bFJlbGF0aXZlRm9ybWF0YC4gVGhpcyBtb2R1bGUgd2lsbCBiZSBpZ25vcmVkIHdoZW5cbi8vIGJ1bmRsaW5nIGZvciB0aGUgYnJvd3NlciB3aXRoIEJyb3dzZXJpZnkvV2VicGFjay5cbnJlcXVpcmUoJy4vbGliL2xvY2FsZXMnKTtcblxuLy8gUmUtZXhwb3J0IGBJbnRsUmVsYXRpdmVGb3JtYXRgIGFzIHRoZSBDb21tb25KUyBkZWZhdWx0IGV4cG9ydHMgd2l0aCBhbGwgdGhlXG4vLyBsb2NhbGUgZGF0YSByZWdpc3RlcmVkLCBhbmQgd2l0aCBFbmdsaXNoIHNldCBhcyB0aGUgZGVmYXVsdCBsb2NhbGUuIERlZmluZVxuLy8gdGhlIGBkZWZhdWx0YCBwcm9wIGZvciB1c2Ugd2l0aCBvdGhlciBjb21waWxlZCBFUzYgTW9kdWxlcy5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEludGxSZWxhdGl2ZUZvcm1hdDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGV4cG9ydHM7XG4iLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbi8qIGpzbGludCBlc25leHQ6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgaW50bCRtZXNzYWdlZm9ybWF0JCQgPSByZXF1aXJlKFwiaW50bC1tZXNzYWdlZm9ybWF0XCIpLCBzcmMkZGlmZiQkID0gcmVxdWlyZShcIi4vZGlmZlwiKSwgc3JjJGVzNSQkID0gcmVxdWlyZShcIi4vZXM1XCIpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSZWxhdGl2ZUZvcm1hdDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIEZJRUxEUyA9IFsnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcsICd5ZWFyJ107XG52YXIgU1RZTEVTID0gWydiZXN0IGZpdCcsICdudW1lcmljJ107XG5cbi8vIC0tIFJlbGF0aXZlRm9ybWF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIFJlbGF0aXZlRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIE1ha2UgYSBjb3B5IG9mIGBsb2NhbGVzYCBpZiBpdCdzIGFuIGFycmF5LCBzbyB0aGF0IGl0IGRvZXNuJ3QgY2hhbmdlXG4gICAgLy8gc2luY2UgaXQncyB1c2VkIGxhemlseS5cbiAgICBpZiAoc3JjJGVzNSQkLmlzQXJyYXkobG9jYWxlcykpIHtcbiAgICAgICAgbG9jYWxlcyA9IGxvY2FsZXMuY29uY2F0KCk7XG4gICAgfVxuXG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfbG9jYWxlJywge3ZhbHVlOiB0aGlzLl9yZXNvbHZlTG9jYWxlKGxvY2FsZXMpfSk7XG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfb3B0aW9ucycsIHt2YWx1ZToge1xuICAgICAgICBzdHlsZTogdGhpcy5fcmVzb2x2ZVN0eWxlKG9wdGlvbnMuc3R5bGUpLFxuICAgICAgICB1bml0czogdGhpcy5faXNWYWxpZFVuaXRzKG9wdGlvbnMudW5pdHMpICYmIG9wdGlvbnMudW5pdHNcbiAgICB9fSk7XG5cbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19sb2NhbGVzJywge3ZhbHVlOiBsb2NhbGVzfSk7XG4gICAgc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KHRoaXMsICdfZmllbGRzJywge3ZhbHVlOiB0aGlzLl9maW5kRmllbGRzKHRoaXMuX2xvY2FsZSl9KTtcbiAgICBzcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkodGhpcywgJ19tZXNzYWdlcycsIHt2YWx1ZTogc3JjJGVzNSQkLm9iakNyZWF0ZShudWxsKX0pO1xuXG4gICAgLy8gXCJCaW5kXCIgYGZvcm1hdCgpYCBtZXRob2QgdG8gYHRoaXNgIHNvIGl0IGNhbiBiZSBwYXNzZWQgYnkgcmVmZXJlbmNlIGxpa2VcbiAgICAvLyB0aGUgb3RoZXIgYEludGxgIEFQSXMuXG4gICAgdmFyIHJlbGF0aXZlRm9ybWF0ID0gdGhpcztcbiAgICB0aGlzLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiByZWxhdGl2ZUZvcm1hdC5fZm9ybWF0KGRhdGUsIG9wdGlvbnMpO1xuICAgIH07XG59XG5cbi8vIERlZmluZSBpbnRlcm5hbCBwcml2YXRlIHByb3BlcnRpZXMgZm9yIGRlYWxpbmcgd2l0aCBsb2NhbGUgZGF0YS5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShSZWxhdGl2ZUZvcm1hdCwgJ19fbG9jYWxlRGF0YV9fJywge3ZhbHVlOiBzcmMkZXM1JCQub2JqQ3JlYXRlKG51bGwpfSk7XG5zcmMkZXM1JCQuZGVmaW5lUHJvcGVydHkoUmVsYXRpdmVGb3JtYXQsICdfX2FkZExvY2FsZURhdGEnLCB7dmFsdWU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKCEoZGF0YSAmJiBkYXRhLmxvY2FsZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0xvY2FsZSBkYXRhIHByb3ZpZGVkIHRvIEludGxSZWxhdGl2ZUZvcm1hdCBpcyBtaXNzaW5nIGEgJyArXG4gICAgICAgICAgICAnYGxvY2FsZWAgcHJvcGVydHkgdmFsdWUnXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgUmVsYXRpdmVGb3JtYXQuX19sb2NhbGVEYXRhX19bZGF0YS5sb2NhbGUudG9Mb3dlckNhc2UoKV0gPSBkYXRhO1xuXG4gICAgLy8gQWRkIGRhdGEgdG8gSW50bE1lc3NhZ2VGb3JtYXQuXG4gICAgaW50bCRtZXNzYWdlZm9ybWF0JCRbXCJkZWZhdWx0XCJdLl9fYWRkTG9jYWxlRGF0YShkYXRhKTtcbn19KTtcblxuLy8gRGVmaW5lIHB1YmxpYyBgZGVmYXVsdExvY2FsZWAgcHJvcGVydHkgd2hpY2ggY2FuIGJlIHNldCBieSB0aGUgZGV2ZWxvcGVyLCBvclxuLy8gaXQgd2lsbCBiZSBzZXQgd2hlbiB0aGUgZmlyc3QgUmVsYXRpdmVGb3JtYXQgaW5zdGFuY2UgaXMgY3JlYXRlZCBieVxuLy8gbGV2ZXJhZ2luZyB0aGUgcmVzb2x2ZWQgbG9jYWxlIGZyb20gYEludGxgLlxuc3JjJGVzNSQkLmRlZmluZVByb3BlcnR5KFJlbGF0aXZlRm9ybWF0LCAnZGVmYXVsdExvY2FsZScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlICA6IHRydWUsXG4gICAgdmFsdWUgICAgIDogdW5kZWZpbmVkXG59KTtcblxuLy8gRGVmaW5lIHB1YmxpYyBgdGhyZXNob2xkc2AgcHJvcGVydHkgd2hpY2ggY2FuIGJlIHNldCBieSB0aGUgZGV2ZWxvcGVyLCBhbmRcbi8vIGRlZmF1bHRzIHRvIHJlbGF0aXZlIHRpbWUgdGhyZXNob2xkcyBmcm9tIG1vbWVudC5qcy5cbnNyYyRlczUkJC5kZWZpbmVQcm9wZXJ0eShSZWxhdGl2ZUZvcm1hdCwgJ3RocmVzaG9sZHMnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgIHZhbHVlOiB7XG4gICAgICAgIHNlY29uZDogNDUsICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICAgICAgICBtaW51dGU6IDQ1LCAgLy8gbWludXRlcyB0byBob3VyXG4gICAgICAgIGhvdXIgIDogMjIsICAvLyBob3VycyB0byBkYXlcbiAgICAgICAgZGF5ICAgOiAyNiwgIC8vIGRheXMgdG8gbW9udGhcbiAgICAgICAgbW9udGggOiAxMSAgIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgfVxufSk7XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgIHN0eWxlIDogdGhpcy5fb3B0aW9ucy5zdHlsZSxcbiAgICAgICAgdW5pdHMgOiB0aGlzLl9vcHRpb25zLnVuaXRzXG4gICAgfTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fY29tcGlsZU1lc3NhZ2UgPSBmdW5jdGlvbiAodW5pdHMpIHtcbiAgICAvLyBgdGhpcy5fbG9jYWxlc2AgaXMgdGhlIG9yaWdpbmFsIHNldCBvZiBsb2NhbGVzIHRoZSB1c2VyIHNwZWNpZmllZCB0byB0aGVcbiAgICAvLyBjb25zdHJ1Y3Rvciwgd2hpbGUgYHRoaXMuX2xvY2FsZWAgaXMgdGhlIHJlc29sdmVkIHJvb3QgbG9jYWxlLlxuICAgIHZhciBsb2NhbGVzICAgICAgICA9IHRoaXMuX2xvY2FsZXM7XG4gICAgdmFyIHJlc29sdmVkTG9jYWxlID0gdGhpcy5fbG9jYWxlO1xuXG4gICAgdmFyIGZpZWxkICAgICAgICA9IHRoaXMuX2ZpZWxkc1t1bml0c107XG4gICAgdmFyIHJlbGF0aXZlVGltZSA9IGZpZWxkLnJlbGF0aXZlVGltZTtcbiAgICB2YXIgZnV0dXJlICAgICAgID0gJyc7XG4gICAgdmFyIHBhc3QgICAgICAgICA9ICcnO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpIGluIHJlbGF0aXZlVGltZS5mdXR1cmUpIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlVGltZS5mdXR1cmUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZ1dHVyZSArPSAnICcgKyBpICsgJyB7JyArXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUaW1lLmZ1dHVyZVtpXS5yZXBsYWNlKCd7MH0nLCAnIycpICsgJ30nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpIGluIHJlbGF0aXZlVGltZS5wYXN0KSB7XG4gICAgICAgIGlmIChyZWxhdGl2ZVRpbWUucGFzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgcGFzdCArPSAnICcgKyBpICsgJyB7JyArXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUaW1lLnBhc3RbaV0ucmVwbGFjZSgnezB9JywgJyMnKSArICd9JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gJ3t3aGVuLCBzZWxlY3QsIGZ1dHVyZSB7ezAsIHBsdXJhbCwgJyArIGZ1dHVyZSArICd9fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3Qge3swLCBwbHVyYWwsICcgKyBwYXN0ICsgJ319fSc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHN5bnRoZXRpYyBJbnRsTWVzc2FnZUZvcm1hdCBpbnN0YW5jZSB1c2luZyB0aGUgb3JpZ2luYWxcbiAgICAvLyBsb2NhbGVzIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgdXNlciB3aGVuIGNvbnN0cnVjdGluZyB0aGUgdGhlIHBhcmVudFxuICAgIC8vIEludGxSZWxhdGl2ZUZvcm1hdCBpbnN0YW5jZS5cbiAgICByZXR1cm4gbmV3IGludGwkbWVzc2FnZWZvcm1hdCQkW1wiZGVmYXVsdFwiXShtZXNzYWdlLCBsb2NhbGVzKTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICh1bml0cykge1xuICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuX21lc3NhZ2VzO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHN5bnRoZXRpYyBtZXNzYWdlIGJhc2VkIG9uIHRoZSBsb2NhbGUgZGF0YSBmcm9tIENMRFIuXG4gICAgaWYgKCFtZXNzYWdlc1t1bml0c10pIHtcbiAgICAgICAgbWVzc2FnZXNbdW5pdHNdID0gdGhpcy5fY29tcGlsZU1lc3NhZ2UodW5pdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlc1t1bml0c107XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2dldFJlbGF0aXZlVW5pdHMgPSBmdW5jdGlvbiAoZGlmZiwgdW5pdHMpIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLl9maWVsZHNbdW5pdHNdO1xuXG4gICAgaWYgKGZpZWxkLnJlbGF0aXZlKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC5yZWxhdGl2ZVtkaWZmXTtcbiAgICB9XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX2ZpbmRGaWVsZHMgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZURhdGEgPSBSZWxhdGl2ZUZvcm1hdC5fX2xvY2FsZURhdGFfXztcbiAgICB2YXIgZGF0YSAgICAgICA9IGxvY2FsZURhdGFbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgLy8gVGhlIGxvY2FsZSBkYXRhIGlzIGRlLWR1cGxpY2F0ZWQsIHNvIHdlIGhhdmUgdG8gdHJhdmVyc2UgdGhlIGxvY2FsZSdzXG4gICAgLy8gaGllcmFyY2h5IHVudGlsIHdlIGZpbmQgYGZpZWxkc2AgdG8gcmV0dXJuLlxuICAgIHdoaWxlIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmZpZWxkcykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmllbGRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IGRhdGEucGFyZW50TG9jYWxlICYmIGxvY2FsZURhdGFbZGF0YS5wYXJlbnRMb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTG9jYWxlIGRhdGEgYWRkZWQgdG8gSW50bFJlbGF0aXZlRm9ybWF0IGlzIG1pc3NpbmcgYGZpZWxkc2AgZm9yIDonICtcbiAgICAgICAgbG9jYWxlXG4gICAgKTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbm93ID0gb3B0aW9ucyAmJiBvcHRpb25zLm5vdyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5ub3cgOiBzcmMkZXM1JCQuZGF0ZU5vdygpO1xuXG4gICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRlID0gbm93O1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSBpZiB0aGUgYGRhdGVgIGFuZCBvcHRpb25hbCBgbm93YCB2YWx1ZXMgYXJlIHZhbGlkLCBhbmQgdGhyb3cgYVxuICAgIC8vIHNpbWlsYXIgZXJyb3IgdG8gd2hhdCBgSW50bC5EYXRlVGltZUZvcm1hdCNmb3JtYXQoKWAgd291bGQgdGhyb3cuXG4gICAgaWYgKCFpc0Zpbml0ZShub3cpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ1RoZSBgbm93YCBvcHRpb24gcHJvdmlkZWQgdG8gSW50bFJlbGF0aXZlRm9ybWF0I2Zvcm1hdCgpIGlzIG5vdCAnICtcbiAgICAgICAgICAgICdpbiB2YWxpZCByYW5nZS4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZShkYXRlKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICAgICdUaGUgZGF0ZSB2YWx1ZSBwcm92aWRlZCB0byBJbnRsUmVsYXRpdmVGb3JtYXQjZm9ybWF0KCkgaXMgbm90ICcgK1xuICAgICAgICAgICAgJ2luIHZhbGlkIHJhbmdlLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZGlmZlJlcG9ydCAgPSBzcmMkZGlmZiQkW1wiZGVmYXVsdFwiXShub3csIGRhdGUpO1xuICAgIHZhciB1bml0cyAgICAgICA9IHRoaXMuX29wdGlvbnMudW5pdHMgfHwgdGhpcy5fc2VsZWN0VW5pdHMoZGlmZlJlcG9ydCk7XG4gICAgdmFyIGRpZmZJblVuaXRzID0gZGlmZlJlcG9ydFt1bml0c107XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5zdHlsZSAhPT0gJ251bWVyaWMnKSB7XG4gICAgICAgIHZhciByZWxhdGl2ZVVuaXRzID0gdGhpcy5fZ2V0UmVsYXRpdmVVbml0cyhkaWZmSW5Vbml0cywgdW5pdHMpO1xuICAgICAgICBpZiAocmVsYXRpdmVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbGF0aXZlVW5pdHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0TWVzc2FnZSh1bml0cykuZm9ybWF0KHtcbiAgICAgICAgJzAnIDogTWF0aC5hYnMoZGlmZkluVW5pdHMpLFxuICAgICAgICB3aGVuOiBkaWZmSW5Vbml0cyA8IDAgPyAncGFzdCcgOiAnZnV0dXJlJ1xuICAgIH0pO1xufTtcblxuUmVsYXRpdmVGb3JtYXQucHJvdG90eXBlLl9pc1ZhbGlkVW5pdHMgPSBmdW5jdGlvbiAodW5pdHMpIHtcbiAgICBpZiAoIXVuaXRzIHx8IHNyYyRlczUkJC5hcnJJbmRleE9mLmNhbGwoRklFTERTLCB1bml0cykgPj0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbiA9IC9zJC8udGVzdCh1bml0cykgJiYgdW5pdHMuc3Vic3RyKDAsIHVuaXRzLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZiAoc3VnZ2VzdGlvbiAmJiBzcmMkZXM1JCQuYXJySW5kZXhPZi5jYWxsKEZJRUxEUywgc3VnZ2VzdGlvbikgPj0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdcIicgKyB1bml0cyArICdcIiBpcyBub3QgYSB2YWxpZCBJbnRsUmVsYXRpdmVGb3JtYXQgYHVuaXRzYCAnICtcbiAgICAgICAgICAgICAgICAndmFsdWUsIGRpZCB5b3UgbWVhbjogJyArIHN1Z2dlc3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdcIicgKyB1bml0cyArICdcIiBpcyBub3QgYSB2YWxpZCBJbnRsUmVsYXRpdmVGb3JtYXQgYHVuaXRzYCB2YWx1ZSwgaXQgJyArXG4gICAgICAgICdtdXN0IGJlIG9uZSBvZjogXCInICsgRklFTERTLmpvaW4oJ1wiLCBcIicpICsgJ1wiJ1xuICAgICk7XG59O1xuXG5SZWxhdGl2ZUZvcm1hdC5wcm90b3R5cGUuX3Jlc29sdmVMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlcykge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbG9jYWxlcyA9IFtsb2NhbGVzXTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheSBzbyB3ZSBjYW4gcHVzaCBvbiB0aGUgZGVmYXVsdCBsb2NhbGUuXG4gICAgbG9jYWxlcyA9IChsb2NhbGVzIHx8IFtdKS5jb25jYXQoUmVsYXRpdmVGb3JtYXQuZGVmYXVsdExvY2FsZSk7XG5cbiAgICB2YXIgbG9jYWxlRGF0YSA9IFJlbGF0aXZlRm9ybWF0Ll9fbG9jYWxlRGF0YV9fO1xuICAgIHZhciBpLCBsZW4sIGxvY2FsZVBhcnRzLCBkYXRhO1xuXG4gICAgLy8gVXNpbmcgdGhlIHNldCBvZiBsb2NhbGVzICsgdGhlIGRlZmF1bHQgbG9jYWxlLCB3ZSBsb29rIGZvciB0aGUgZmlyc3Qgb25lXG4gICAgLy8gd2hpY2ggdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkLiBXaGVuIGRhdGEgZG9lcyBub3QgZXhpc3QgZm9yIGEgbG9jYWxlLCB3ZVxuICAgIC8vIHRyYXZlcnNlIGl0cyBhbmNlc3RvcnMgdG8gZmluZCBzb21ldGhpbmcgdGhhdCdzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoaW5cbiAgICAvLyBpdHMgaGllcmFyY2h5IG9mIGxvY2FsZXMuIFNpbmNlIHdlIGxhY2sgdGhlIHByb3BlciBgcGFyZW50TG9jYWxlYCBkYXRhXG4gICAgLy8gaGVyZSwgd2UgbXVzdCB0YWtlIGEgbmFpdmUgYXBwcm9hY2ggdG8gdHJhdmVyc2FsLlxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGxvY2FsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYWxlUGFydHMgPSBsb2NhbGVzW2ldLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcblxuICAgICAgICB3aGlsZSAobG9jYWxlUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhID0gbG9jYWxlRGF0YVtsb2NhbGVQYXJ0cy5qb2luKCctJyldO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5vcm1hbGl6ZWQgbG9jYWxlIHN0cmluZzsgZS5nLiwgd2UgcmV0dXJuIFwiZW4tVVNcIixcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIFwiZW4tdXNcIi5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5sb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvY2FsZVBhcnRzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGVzLnBvcCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ05vIGxvY2FsZSBkYXRhIGhhcyBiZWVuIGFkZGVkIHRvIEludGxSZWxhdGl2ZUZvcm1hdCBmb3I6ICcgK1xuICAgICAgICBsb2NhbGVzLmpvaW4oJywgJykgKyAnLCBvciB0aGUgZGVmYXVsdCBsb2NhbGU6ICcgKyBkZWZhdWx0TG9jYWxlXG4gICAgKTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fcmVzb2x2ZVN0eWxlID0gZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgLy8gRGVmYXVsdCB0byBcImJlc3QgZml0XCIgc3R5bGUuXG4gICAgaWYgKCFzdHlsZSkge1xuICAgICAgICByZXR1cm4gU1RZTEVTWzBdO1xuICAgIH1cblxuICAgIGlmIChzcmMkZXM1JCQuYXJySW5kZXhPZi5jYWxsKFNUWUxFUywgc3R5bGUpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1wiJyArIHN0eWxlICsgJ1wiIGlzIG5vdCBhIHZhbGlkIEludGxSZWxhdGl2ZUZvcm1hdCBgc3R5bGVgIHZhbHVlLCBpdCAnICtcbiAgICAgICAgJ211c3QgYmUgb25lIG9mOiBcIicgKyBTVFlMRVMuam9pbignXCIsIFwiJykgKyAnXCInXG4gICAgKTtcbn07XG5cblJlbGF0aXZlRm9ybWF0LnByb3RvdHlwZS5fc2VsZWN0VW5pdHMgPSBmdW5jdGlvbiAoZGlmZlJlcG9ydCkge1xuICAgIHZhciBpLCBsLCB1bml0cztcblxuICAgIGZvciAoaSA9IDAsIGwgPSBGSUVMRFMubGVuZ3RoOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgICAgIHVuaXRzID0gRklFTERTW2ldO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmUmVwb3J0W3VuaXRzXSkgPCBSZWxhdGl2ZUZvcm1hdC50aHJlc2hvbGRzW3VuaXRzXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdHM7XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmpzLm1hcCIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gZGF5c1RvWWVhcnMoZGF5cykge1xuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgICByZXR1cm4gZGF5cyAqIDQwMCAvIDE0NjA5Nztcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICAvLyBDb252ZXJ0IHRvIG1zIHRpbWVzdGFtcHMuXG4gICAgZnJvbSA9ICtmcm9tO1xuICAgIHRvICAgPSArdG87XG5cbiAgICB2YXIgbWlsbGlzZWNvbmQgPSByb3VuZCh0byAtIGZyb20pLFxuICAgICAgICBzZWNvbmQgICAgICA9IHJvdW5kKG1pbGxpc2Vjb25kIC8gMTAwMCksXG4gICAgICAgIG1pbnV0ZSAgICAgID0gcm91bmQoc2Vjb25kIC8gNjApLFxuICAgICAgICBob3VyICAgICAgICA9IHJvdW5kKG1pbnV0ZSAvIDYwKSxcbiAgICAgICAgZGF5ICAgICAgICAgPSByb3VuZChob3VyIC8gMjQpLFxuICAgICAgICB3ZWVrICAgICAgICA9IHJvdW5kKGRheSAvIDcpO1xuXG4gICAgdmFyIHJhd1llYXJzID0gZGF5c1RvWWVhcnMoZGF5KSxcbiAgICAgICAgbW9udGggICAgPSByb3VuZChyYXdZZWFycyAqIDEyKSxcbiAgICAgICAgeWVhciAgICAgPSByb3VuZChyYXdZZWFycyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmQsXG4gICAgICAgIHNlY29uZCAgICAgOiBzZWNvbmQsXG4gICAgICAgIG1pbnV0ZSAgICAgOiBtaW51dGUsXG4gICAgICAgIGhvdXIgICAgICAgOiBob3VyLFxuICAgICAgICBkYXkgICAgICAgIDogZGF5LFxuICAgICAgICB3ZWVrICAgICAgIDogd2VlayxcbiAgICAgICAgbW9udGggICAgICA6IG1vbnRoLFxuICAgICAgICB5ZWFyICAgICAgIDogeWVhclxuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWZmLmpzLm1hcCIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuLyoganNsaW50IGVzbmV4dDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gUHVycG9zZWx5IHVzaW5nIHRoZSBzYW1lIGltcGxlbWVudGF0aW9uIGFzIHRoZSBJbnRsLmpzIGBJbnRsYCBwb2x5ZmlsbC5cbi8vIENvcHlyaWdodCAyMDEzIEFuZHkgRWFybnNoYXcsIE1JVCBMaWNlbnNlXG5cbnZhciBob3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIHJlYWxEZWZpbmVQcm9wID0gKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkgeyByZXR1cm4gISFPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge30pOyB9XG4gICAgY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9XG59KSgpO1xuXG52YXIgZXMzID0gIXJlYWxEZWZpbmVQcm9wICYmICFPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX187XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlYWxEZWZpbmVQcm9wID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDpcbiAgICAgICAgZnVuY3Rpb24gKG9iaiwgbmFtZSwgZGVzYykge1xuXG4gICAgaWYgKCdnZXQnIGluIGRlc2MgJiYgb2JqLl9fZGVmaW5lR2V0dGVyX18pIHtcbiAgICAgICAgb2JqLl9fZGVmaW5lR2V0dGVyX18obmFtZSwgZGVzYy5nZXQpO1xuICAgIH0gZWxzZSBpZiAoIWhvcC5jYWxsKG9iaiwgbmFtZSkgfHwgJ3ZhbHVlJyBpbiBkZXNjKSB7XG4gICAgICAgIG9ialtuYW1lXSA9IGRlc2MudmFsdWU7XG4gICAgfVxufTtcblxudmFyIG9iakNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKHByb3RvLCBwcm9wcykge1xuICAgIHZhciBvYmosIGs7XG5cbiAgICBmdW5jdGlvbiBGKCkge31cbiAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIG9iaiA9IG5ldyBGKCk7XG5cbiAgICBmb3IgKGsgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKGhvcC5jYWxsKHByb3BzLCBrKSkge1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqLCBrLCBwcm9wc1trXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiB8fCBmdW5jdGlvbiAoc2VhcmNoLCBmcm9tSW5kZXgpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciBhcnIgPSB0aGlzO1xuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IGZyb21JbmRleCB8fCAwLCBtYXggPSBhcnIubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgaWYgKGFycltpXSA9PT0gc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBkYXRlTm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5leHBvcnRzLmRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHksIGV4cG9ydHMub2JqQ3JlYXRlID0gb2JqQ3JlYXRlLCBleHBvcnRzLmFyckluZGV4T2YgPSBhcnJJbmRleE9mLCBleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5LCBleHBvcnRzLmRhdGVOb3cgPSBkYXRlTm93O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczUuanMubWFwIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgY2FuY2VsbGF0aW9uIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGF3YXlcbiAqIGJlZm9yZSB0aGUgcHJldmlvdXMgdHJhbnNpdGlvbiBoYXMgZnVsbHkgcmVzb2x2ZWQuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBDYW5jZWxsYXRpb24oKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbGxhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xuXG52YXIgSGlzdG9yeSA9IHtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGhpc3RvcnkuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgcmVhZC1vbmx5LlxuICAgKi9cbiAgbGVuZ3RoOiAxLFxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgYnJvd3NlciBiYWNrIG9uZSBlbnRyeSBpbiB0aGUgaGlzdG9yeS5cbiAgICovXG4gIGJhY2s6IGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSwgJ0Nhbm5vdCB1c2UgSGlzdG9yeS5iYWNrIHdpdGhvdXQgYSBET00nKTtcblxuICAgIC8vIERvIHRoaXMgZmlyc3Qgc28gdGhhdCBIaXN0b3J5Lmxlbmd0aCB3aWxsXG4gICAgLy8gYmUgYWNjdXJhdGUgaW4gbG9jYXRpb24gY2hhbmdlIGxpc3RlbmVycy5cbiAgICBIaXN0b3J5Lmxlbmd0aCAtPSAxO1xuXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbi8qIGpzaGludCAtVzA4NCAqL1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIGRlZXBTZWFyY2gocm91dGUsIHBhdGhuYW1lLCBxdWVyeSkge1xuICAvLyBDaGVjayB0aGUgc3VidHJlZSBmaXJzdCB0byBmaW5kIHRoZSBtb3N0IGRlZXBseS1uZXN0ZWQgbWF0Y2guXG4gIHZhciBjaGlsZFJvdXRlcyA9IHJvdXRlLmNoaWxkUm91dGVzO1xuICBpZiAoY2hpbGRSb3V0ZXMpIHtcbiAgICB2YXIgbWF0Y2gsIGNoaWxkUm91dGU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoaWxkUm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjaGlsZFJvdXRlID0gY2hpbGRSb3V0ZXNbaV07XG5cbiAgICAgIGlmIChjaGlsZFJvdXRlLmlzRGVmYXVsdCB8fCBjaGlsZFJvdXRlLmlzTm90Rm91bmQpIGNvbnRpbnVlOyAvLyBDaGVjayB0aGVzZSBpbiBvcmRlciBsYXRlci5cblxuICAgICAgaWYgKG1hdGNoID0gZGVlcFNlYXJjaChjaGlsZFJvdXRlLCBwYXRobmFtZSwgcXVlcnkpKSB7XG4gICAgICAgIC8vIEEgcm91dGUgaW4gdGhlIHN1YnRyZWUgbWF0Y2hlZCEgQWRkIHRoaXMgcm91dGUgYW5kIHdlJ3JlIGRvbmUuXG4gICAgICAgIG1hdGNoLnJvdXRlcy51bnNoaWZ0KHJvdXRlKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vIGNoaWxkIHJvdXRlcyBtYXRjaGVkOyB0cnkgdGhlIGRlZmF1bHQgcm91dGUuXG4gIHZhciBkZWZhdWx0Um91dGUgPSByb3V0ZS5kZWZhdWx0Um91dGU7XG4gIGlmIChkZWZhdWx0Um91dGUgJiYgKHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKGRlZmF1bHRSb3V0ZS5wYXRoLCBwYXRobmFtZSkpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlLCBkZWZhdWx0Um91dGVdKTtcbiAgfSAvLyBEb2VzIHRoZSBcIm5vdCBmb3VuZFwiIHJvdXRlIG1hdGNoP1xuICB2YXIgbm90Rm91bmRSb3V0ZSA9IHJvdXRlLm5vdEZvdW5kUm91dGU7XG4gIGlmIChub3RGb3VuZFJvdXRlICYmIChwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhub3RGb3VuZFJvdXRlLnBhdGgsIHBhdGhuYW1lKSkpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGUsIG5vdEZvdW5kUm91dGVdKTtcbiAgfSAvLyBMYXN0IGF0dGVtcHQ6IGNoZWNrIHRoaXMgcm91dGUuXG4gIHZhciBwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhyb3V0ZS5wYXRoLCBwYXRobmFtZSk7XG4gIGlmIChwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGVdKTtcbiAgfXJldHVybiBudWxsO1xufVxuXG52YXIgTWF0Y2ggPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgcm91dGVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hdGNoKTtcblxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWF0Y2gsIG51bGwsIFt7XG4gICAga2V5OiAnZmluZE1hdGNoJyxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIG1hdGNoIGRlcHRoLWZpcnN0IGEgcm91dGUgaW4gdGhlIGdpdmVuIHJvdXRlJ3NcbiAgICAgKiBzdWJ0cmVlIGFnYWluc3QgdGhlIGdpdmVuIHBhdGggYW5kIHJldHVybnMgdGhlIG1hdGNoIGlmIGl0XG4gICAgICogc3VjY2VlZHMsIG51bGwgaWYgbm8gbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRNYXRjaChyb3V0ZXMsIHBhdGgpIHtcbiAgICAgIHZhciBwYXRobmFtZSA9IFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCk7XG4gICAgICB2YXIgcXVlcnkgPSBQYXRoVXRpbHMuZXh0cmFjdFF1ZXJ5KHBhdGgpO1xuICAgICAgdmFyIG1hdGNoID0gbnVsbDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IG1hdGNoID09IG51bGwgJiYgaSA8IGxlbjsgKytpKSBtYXRjaCA9IGRlZXBTZWFyY2gocm91dGVzW2ldLCBwYXRobmFtZSwgcXVlcnkpO1xuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hdGNoO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBtb2RpZnkgdGhlIFVSTC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgUm91dGVyLk5hdmlnYXRpb24gXSxcbiAqICAgICBoYW5kbGVDbGljayhldmVudCkge1xuICogICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAqICAgICAgIHRoaXMudHJhbnNpdGlvblRvKCdhUm91dGUnLCB7IHRoZTogJ3BhcmFtcycgfSwgeyB0aGU6ICdxdWVyeScgfSk7XG4gKiAgICAgfSxcbiAqICAgICByZW5kZXIoKSB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljayBtZSE8L2E+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgfSk7XG4gKi9cbnZhciBOYXZpZ2F0aW9uID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgKiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5IHZhbHVlcy5cbiAgICovXG4gIG1ha2VQYXRoOiBmdW5jdGlvbiBtYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhXG4gICAqIGxpbmsgdG8gdGhlIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqL1xuICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcHVzaGluZ1xuICAgKiBhIG5ldyBVUkwgb250byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIHRyYW5zaXRpb25UbzogZnVuY3Rpb24gdHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHJlcGxhY2luZ1xuICAgKiB0aGUgY3VycmVudCBVUkwgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICByZXBsYWNlV2l0aDogZnVuY3Rpb24gcmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIHByZXZpb3VzIFVSTC5cbiAgICovXG4gIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdvQmFjaygpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2aWdhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHFzID0gcmVxdWlyZSgncXMnKTtcblxudmFyIHBhcmFtQ29tcGlsZU1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFsqLigpXFxbXFxdXFxcXCt8e31eJF0vZztcbnZhciBwYXJhbUluamVjdE1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kP10qWz9dPyl8WypdL2c7XG52YXIgcGFyYW1JbmplY3RUcmFpbGluZ1NsYXNoTWF0Y2hlciA9IC9cXC9cXC9cXD98XFwvXFw/XFwvfFxcL1xcPy9nO1xudmFyIHF1ZXJ5TWF0Y2hlciA9IC9cXD8oLiopJC87XG5cbnZhciBfY29tcGlsZWRQYXR0ZXJucyA9IHt9O1xuXG5mdW5jdGlvbiBjb21waWxlUGF0dGVybihwYXR0ZXJuKSB7XG4gIGlmICghKHBhdHRlcm4gaW4gX2NvbXBpbGVkUGF0dGVybnMpKSB7XG4gICAgdmFyIHBhcmFtTmFtZXMgPSBbXTtcbiAgICB2YXIgc291cmNlID0gcGF0dGVybi5yZXBsYWNlKHBhcmFtQ29tcGlsZU1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1OYW1lKSB7XG4gICAgICBpZiAocGFyYW1OYW1lKSB7XG4gICAgICAgIHBhcmFtTmFtZXMucHVzaChwYXJhbU5hbWUpO1xuICAgICAgICByZXR1cm4gJyhbXi8/I10rKSc7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID09PSAnKicpIHtcbiAgICAgICAgcGFyYW1OYW1lcy5wdXNoKCdzcGxhdCcpO1xuICAgICAgICByZXR1cm4gJyguKj8pJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnXFxcXCcgKyBtYXRjaDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jb21waWxlZFBhdHRlcm5zW3BhdHRlcm5dID0ge1xuICAgICAgbWF0Y2hlcjogbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCcsICdpJyksXG4gICAgICBwYXJhbU5hbWVzOiBwYXJhbU5hbWVzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29tcGlsZWRQYXR0ZXJuc1twYXR0ZXJuXTtcbn1cblxudmFyIFBhdGhVdGlscyA9IHtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBwYXRoIGlzIGFic29sdXRlLlxuICAgKi9cbiAgaXNBYnNvbHV0ZTogZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEpvaW5zIHR3byBVUkwgcGF0aHMgdG9nZXRoZXIuXG4gICAqL1xuICBqb2luOiBmdW5jdGlvbiBqb2luKGEsIGIpIHtcbiAgICByZXR1cm4gYS5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyBiO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAgICovXG4gIGV4dHJhY3RQYXJhbU5hbWVzOiBmdW5jdGlvbiBleHRyYWN0UGFyYW1OYW1lcyhwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pLnBhcmFtTmFtZXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBwb3J0aW9ucyBvZiB0aGUgZ2l2ZW4gVVJMIHBhdGggdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0dGVyblxuICAgKiBhbmQgcmV0dXJucyBhbiBvYmplY3Qgb2YgcGFyYW0gbmFtZSA9PiB2YWx1ZSBwYWlycy4gUmV0dXJucyBudWxsIGlmIHRoZVxuICAgKiBwYXR0ZXJuIGRvZXMgbm90IG1hdGNoIHRoZSBnaXZlbiBwYXRoLlxuICAgKi9cbiAgZXh0cmFjdFBhcmFtczogZnVuY3Rpb24gZXh0cmFjdFBhcmFtcyhwYXR0ZXJuLCBwYXRoKSB7XG4gICAgdmFyIF9jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gICAgdmFyIG1hdGNoZXIgPSBfY29tcGlsZVBhdHRlcm4ubWF0Y2hlcjtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IF9jb21waWxlUGF0dGVybi5wYXJhbU5hbWVzO1xuXG4gICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChtYXRjaGVyKTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH12YXIgcGFyYW1zID0ge307XG5cbiAgICBwYXJhbU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gbWF0Y2hbaW5kZXggKyAxXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiByb3V0ZSBwYXRoIHdpdGggcGFyYW1zIGludGVycG9sYXRlZC4gVGhyb3dzXG4gICAqIGlmIHRoZXJlIGlzIGEgZHluYW1pYyBzZWdtZW50IG9mIHRoZSByb3V0ZSBwYXRoIGZvciB3aGljaCB0aGVyZSBpcyBubyBwYXJhbS5cbiAgICovXG4gIGluamVjdFBhcmFtczogZnVuY3Rpb24gaW5qZWN0UGFyYW1zKHBhdHRlcm4sIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBzcGxhdEluZGV4ID0gMDtcblxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UocGFyYW1JbmplY3RNYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIHBhcmFtTmFtZSkge1xuICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lIHx8ICdzcGxhdCc7XG5cbiAgICAgIC8vIElmIHBhcmFtIGlzIG9wdGlvbmFsIGRvbid0IGNoZWNrIGZvciBleGlzdGVuY2VcbiAgICAgIGlmIChwYXJhbU5hbWUuc2xpY2UoLTEpID09PSAnPycpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lLnNsaWNlKDAsIC0xKTtcblxuICAgICAgICBpZiAocGFyYW1zW3BhcmFtTmFtZV0gPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YXJpYW50KHBhcmFtc1twYXJhbU5hbWVdICE9IG51bGwsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlZ21lbnQ7XG4gICAgICBpZiAocGFyYW1OYW1lID09PSAnc3BsYXQnICYmIEFycmF5LmlzQXJyYXkocGFyYW1zW3BhcmFtTmFtZV0pKSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYXJhbXNbcGFyYW1OYW1lXVtzcGxhdEluZGV4KytdO1xuXG4gICAgICAgIGludmFyaWFudChzZWdtZW50ICE9IG51bGwsICdNaXNzaW5nIHNwbGF0ICMgJXMgZm9yIHBhdGggXCIlc1wiJywgc3BsYXRJbmRleCwgcGF0dGVybik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50ID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pLnJlcGxhY2UocGFyYW1JbmplY3RUcmFpbGluZ1NsYXNoTWF0Y2hlciwgJy8nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHBhcnNpbmcgYW55IHF1ZXJ5IHN0cmluZyBjb250YWluZWRcbiAgICogaW4gdGhlIGdpdmVuIHBhdGgsIG51bGwgaWYgdGhlIHBhdGggY29udGFpbnMgbm8gcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgZXh0cmFjdFF1ZXJ5OiBmdW5jdGlvbiBleHRyYWN0UXVlcnkocGF0aCkge1xuICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gocXVlcnlNYXRjaGVyKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgcXMucGFyc2UobWF0Y2hbMV0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICB3aXRob3V0UXVlcnk6IGZ1bmN0aW9uIHdpdGhvdXRRdWVyeShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZShxdWVyeU1hdGNoZXIsICcnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdGggd2l0aCB0aGUgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW5cbiAgICogcXVlcnkgbWVyZ2VkIGludG8gdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIHdpdGhRdWVyeTogZnVuY3Rpb24gd2l0aFF1ZXJ5KHBhdGgsIHF1ZXJ5KSB7XG4gICAgdmFyIGV4aXN0aW5nUXVlcnkgPSBQYXRoVXRpbHMuZXh0cmFjdFF1ZXJ5KHBhdGgpO1xuXG4gICAgaWYgKGV4aXN0aW5nUXVlcnkpIHF1ZXJ5ID0gcXVlcnkgPyBhc3NpZ24oZXhpc3RpbmdRdWVyeSwgcXVlcnkpIDogZXhpc3RpbmdRdWVyeTtcblxuICAgIHZhciBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeShxdWVyeSwgeyBhcnJheUZvcm1hdDogJ2JyYWNrZXRzJyB9KTtcblxuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgcmV0dXJuIFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCkgKyAnPycgKyBxdWVyeVN0cmluZztcbiAgICB9cmV0dXJuIFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXRoVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBSZWFjdFByb3BUeXBlcyA9IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG52YXIgUHJvcFR5cGVzID0gYXNzaWduKHt9LCBSZWFjdFByb3BUeXBlcywge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGZhbHN5LlxuICAgKi9cbiAgZmFsc3k6IGZ1bmN0aW9uIGZhbHN5KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJzwnICsgY29tcG9uZW50TmFtZSArICc+IHNob3VsZCBub3QgaGF2ZSBhIFwiJyArIHByb3BOYW1lICsgJ1wiIHByb3AnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgYSBSb3V0ZSBvYmplY3QuXG4gICAqL1xuICByb3V0ZTogUmVhY3RQcm9wVHlwZXMuaW5zdGFuY2VPZihSb3V0ZSksXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgYSBSb3V0ZXIgb2JqZWN0LlxuICAgKi9cbiAgLy9yb3V0ZXI6IFJlYWN0UHJvcFR5cGVzLmluc3RhbmNlT2YoUm91dGVyKSAvLyBUT0RPXG4gIHJvdXRlcjogUmVhY3RQcm9wVHlwZXMuZnVuY1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7IiwiLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSByZWRpcmVjdCB0byB0aGUgZ2l2ZW4gcm91dGUuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBSZWRpcmVjdCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICB0aGlzLnRvID0gdG87XG4gIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkaXJlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jdXJyZW50Um91dGU7XG5cbnZhciBSb3V0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlKG5hbWUsIHBhdGgsIGlnbm9yZVNjcm9sbEJlaGF2aW9yLCBpc0RlZmF1bHQsIGlzTm90Rm91bmQsIG9uRW50ZXIsIG9uTGVhdmUsIGhhbmRsZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucGFyYW1OYW1lcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1OYW1lcyh0aGlzLnBhdGgpO1xuICAgIHRoaXMuaWdub3JlU2Nyb2xsQmVoYXZpb3IgPSAhIWlnbm9yZVNjcm9sbEJlaGF2aW9yO1xuICAgIHRoaXMuaXNEZWZhdWx0ID0gISFpc0RlZmF1bHQ7XG4gICAgdGhpcy5pc05vdEZvdW5kID0gISFpc05vdEZvdW5kO1xuICAgIHRoaXMub25FbnRlciA9IG9uRW50ZXI7XG4gICAgdGhpcy5vbkxlYXZlID0gb25MZWF2ZTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlLCBbe1xuICAgIGtleTogJ2FwcGVuZENoaWxkJyxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhlIGdpdmVuIHJvdXRlIHRvIHRoaXMgcm91dGUncyBjaGlsZCByb3V0ZXMuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHJvdXRlKSB7XG4gICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ3JvdXRlLmFwcGVuZENoaWxkIG11c3QgdXNlIGEgdmFsaWQgUm91dGUnKTtcblxuICAgICAgaWYgKCF0aGlzLmNoaWxkUm91dGVzKSB0aGlzLmNoaWxkUm91dGVzID0gW107XG5cbiAgICAgIHRoaXMuY2hpbGRSb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAnPFJvdXRlJztcblxuICAgICAgaWYgKHRoaXMubmFtZSkgc3RyaW5nICs9ICcgbmFtZT1cIicgKyB0aGlzLm5hbWUgKyAnXCInO1xuXG4gICAgICBzdHJpbmcgKz0gJyBwYXRoPVwiJyArIHRoaXMucGF0aCArICdcIj4nO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlUm91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZS4gT3B0aW9ucyBtYXkgYmUgYSBVUkwgcGF0aG5hbWUgc3RyaW5nXG4gICAgICogd2l0aCBwbGFjZWhvbGRlcnMgZm9yIG5hbWVkIHBhcmFtcyBvciBhbiBvYmplY3Qgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICAgICAqIHByb3BlcnRpZXM6XG4gICAgICpcbiAgICAgKiAtIG5hbWUgICAgICAgICAgICAgICAgICAgICBUaGUgbmFtZSBvZiB0aGUgcm91dGUuIFRoaXMgaXMgdXNlZCB0byBsb29rdXAgYVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlIHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQgcm91dGUgYW5kIHNob3VsZCBiZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZSBhbW9uZyBhbGwgY2hpbGQgcm91dGVzIG9mIHRoZSBzYW1lIHBhcmVudFxuICAgICAqIC0gcGF0aCAgICAgICAgICAgICAgICAgICAgIEEgVVJMIHBhdGhuYW1lIHN0cmluZyB3aXRoIG9wdGlvbmFsIHBsYWNlaG9sZGVyc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgc3BlY2lmeSB0aGUgbmFtZXMgb2YgcGFyYW1zIHRvIGV4dHJhY3QgZnJvbVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBVUkwgd2hlbiB0aGUgcGF0aCBtYXRjaGVzLiBEZWZhdWx0cyB0byBgLyR7bmFtZX1gXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGVyZSBpcyBhIG5hbWUgZ2l2ZW4sIG9yIHRoZSBwYXRoIG9mIHRoZSBwYXJlbnRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSwgb3IgL1xuICAgICAqIC0gaWdub3JlU2Nyb2xsQmVoYXZpb3IgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIChhbmQgYWxsIGRlc2NlbmRhbnRzKSBpZ25vcmVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSByb3V0ZXJcbiAgICAgKiAtIGlzRGVmYXVsdCAgICAgICAgICAgICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSB0aGUgZGVmYXVsdCByb3V0ZSBhbW9uZyBhbGxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdHMgc2libGluZ3NcbiAgICAgKiAtIGlzTm90Rm91bmQgICAgICAgICAgICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSB0aGUgXCJub3QgZm91bmRcIiByb3V0ZSBhbW9uZ1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCBpdHMgc2libGluZ3NcbiAgICAgKiAtIG9uRW50ZXIgICAgICAgICAgICAgICAgICBBIHRyYW5zaXRpb24gaG9vayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyIGlzIGdvaW5nIHRvIGVudGVyIHRoaXMgcm91dGVcbiAgICAgKiAtIG9uTGVhdmUgICAgICAgICAgICAgICAgICBBIHRyYW5zaXRpb24gaG9vayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyIGlzIGdvaW5nIHRvIGxlYXZlIHRoaXMgcm91dGVcbiAgICAgKiAtIGhhbmRsZXIgICAgICAgICAgICAgICAgICBBIFJlYWN0IGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgd2hlblxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcm91dGUgaXMgYWN0aXZlXG4gICAgICogLSBwYXJlbnRSb3V0ZSAgICAgICAgICAgICAgVGhlIHBhcmVudCByb3V0ZSB0byB1c2UgZm9yIHRoaXMgcm91dGUuIFRoaXMgb3B0aW9uXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZCB3aGVuIGNyZWF0aW5nIHJvdXRlcyBpbnNpZGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FsbGJhY2sgdG8gYW5vdGhlciBpbnZvY2F0aW9uIG9mIGNyZWF0ZVJvdXRlLiBZb3VcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IGV2ZXIgbmVlZCB0byB1c2UgdGhpcyB3aGVuIGRlY2xhcmluZyByb3V0ZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlcGVuZGVudGx5IG9mIG9uZSBhbm90aGVyIHRvIG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJvdXRlIGhpZXJhcmNoeVxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIG1heSBiZSB1c2VkIHRvIHN0cnVjdHVyZSB5b3VyIHJvdXRlIGhpZXJhcmNoeS4gQW55IGNhbGwgdG9cbiAgICAgKiBjcmVhdGVSb3V0ZSwgY3JlYXRlRGVmYXVsdFJvdXRlLCBjcmVhdGVOb3RGb3VuZFJvdXRlLCBvciBjcmVhdGVSZWRpcmVjdFxuICAgICAqIGluc2lkZSB0aGUgY2FsbGJhY2sgYXV0b21hdGljYWxseSB1c2VzIHRoaXMgcm91dGUgYXMgaXRzIHBhcmVudC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUm91dGUob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyBwYXRoOiBvcHRpb25zIH07XG5cbiAgICAgIHZhciBwYXJlbnRSb3V0ZSA9IF9jdXJyZW50Um91dGU7XG5cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICB3YXJuaW5nKG9wdGlvbnMucGFyZW50Um91dGUgPT0gbnVsbCB8fCBvcHRpb25zLnBhcmVudFJvdXRlID09PSBwYXJlbnRSb3V0ZSwgJ1lvdSBzaG91bGQgbm90IHVzZSBwYXJlbnRSb3V0ZSB3aXRoIGNyZWF0ZVJvdXRlIGluc2lkZSBhbm90aGVyIHJvdXRlXFwncyBjaGlsZCBjYWxsYmFjazsgaXQgaXMgaWdub3JlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Um91dGUgPSBvcHRpb25zLnBhcmVudFJvdXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgIHZhciBwYXRoID0gb3B0aW9ucy5wYXRoIHx8IG5hbWU7XG5cbiAgICAgIGlmIChwYXRoICYmICEob3B0aW9ucy5pc0RlZmF1bHQgfHwgb3B0aW9ucy5pc05vdEZvdW5kKSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUocGF0aCkpIHtcbiAgICAgICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgICAgIGludmFyaWFudChwYXRoID09PSBwYXJlbnRSb3V0ZS5wYXRoIHx8IHBhcmVudFJvdXRlLnBhcmFtTmFtZXMubGVuZ3RoID09PSAwLCAnWW91IGNhbm5vdCBuZXN0IHBhdGggXCIlc1wiIGluc2lkZSBcIiVzXCI7IHRoZSBwYXJlbnQgcmVxdWlyZXMgVVJMIHBhcmFtZXRlcnMnLCBwYXRoLCBwYXJlbnRSb3V0ZS5wYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgICAvLyBSZWxhdGl2ZSBwYXRocyBleHRlbmQgdGhlaXIgcGFyZW50LlxuICAgICAgICAgIHBhdGggPSBQYXRoVXRpbHMuam9pbihwYXJlbnRSb3V0ZS5wYXRoLCBwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aCA9IHBhcmVudFJvdXRlID8gcGFyZW50Um91dGUucGF0aCA6ICcvJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaXNOb3RGb3VuZCAmJiAhL1xcKiQvLnRlc3QocGF0aCkpIHBhdGggKz0gJyonOyAvLyBBdXRvLWFwcGVuZCAqIHRvIHRoZSBwYXRoIG9mIG5vdCBmb3VuZCByb3V0ZXMuXG5cbiAgICAgIHZhciByb3V0ZSA9IG5ldyBSb3V0ZShuYW1lLCBwYXRoLCBvcHRpb25zLmlnbm9yZVNjcm9sbEJlaGF2aW9yLCBvcHRpb25zLmlzRGVmYXVsdCwgb3B0aW9ucy5pc05vdEZvdW5kLCBvcHRpb25zLm9uRW50ZXIsIG9wdGlvbnMub25MZWF2ZSwgb3B0aW9ucy5oYW5kbGVyKTtcblxuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIGlmIChyb3V0ZS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpbnZhcmlhbnQocGFyZW50Um91dGUuZGVmYXVsdFJvdXRlID09IG51bGwsICclcyBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSBkZWZhdWx0IHJvdXRlJywgcGFyZW50Um91dGUpO1xuXG4gICAgICAgICAgcGFyZW50Um91dGUuZGVmYXVsdFJvdXRlID0gcm91dGU7XG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUuaXNOb3RGb3VuZCkge1xuICAgICAgICAgIGludmFyaWFudChwYXJlbnRSb3V0ZS5ub3RGb3VuZFJvdXRlID09IG51bGwsICclcyBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSBub3QgZm91bmQgcm91dGUnLCBwYXJlbnRSb3V0ZSk7XG5cbiAgICAgICAgICBwYXJlbnRSb3V0ZS5ub3RGb3VuZFJvdXRlID0gcm91dGU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRSb3V0ZS5hcHBlbmRDaGlsZChyb3V0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFueSByb3V0ZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHVzZSB0aGlzIHJvdXRlIGFzIHRoZWlyIHBhcmVudC5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSb3V0ZSA9IF9jdXJyZW50Um91dGU7XG4gICAgICAgIF9jdXJyZW50Um91dGUgPSByb3V0ZTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChyb3V0ZSwgcm91dGUpO1xuICAgICAgICBfY3VycmVudFJvdXRlID0gY3VycmVudFJvdXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRGVmYXVsdFJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzXG4gICAgICogdGhlIGN1cnJlbnQgVVJMLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Um91dGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywgeyBpc0RlZmF1bHQ6IHRydWUgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZU5vdEZvdW5kUm91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXNcbiAgICAgKiB0aGUgY3VycmVudCBVUkwgYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVOb3RGb3VuZFJvdXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHsgaXNOb3RGb3VuZDogdHJ1ZSB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlUmVkaXJlY3QnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgYXV0b21hdGljYWxseSByZWRpcmVjdHMgdGhlIHRyYW5zaXRpb25cbiAgICAgKiB0byBhbm90aGVyIHJvdXRlLiBJbiBhZGRpdGlvbiB0byB0aGUgbm9ybWFsIG9wdGlvbnMgdG8gY3JlYXRlUm91dGUsIHRoaXNcbiAgICAgKiBmdW5jdGlvbiBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICAgKlxuICAgICAqIC0gZnJvbSAgICAgICAgIEFuIGFsaWFzIGZvciB0aGUgYHBhdGhgIG9wdGlvbi4gRGVmYXVsdHMgdG8gKlxuICAgICAqIC0gdG8gICAgICAgICAgIFRoZSBwYXRoL3JvdXRlL3JvdXRlIG5hbWUgdG8gcmVkaXJlY3QgdG9cbiAgICAgKiAtIHBhcmFtcyAgICAgICBUaGUgcGFyYW1zIHRvIHVzZSBpbiB0aGUgcmVkaXJlY3QgVVJMLiBEZWZhdWx0c1xuICAgICAqICAgICAgICAgICAgICAgIHRvIHVzaW5nIHRoZSBjdXJyZW50IHBhcmFtc1xuICAgICAqIC0gcXVlcnkgICAgICAgIFRoZSBxdWVyeSB0byB1c2UgaW4gdGhlIHJlZGlyZWN0IFVSTC4gRGVmYXVsdHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byB1c2luZyB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZWRpcmVjdChvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCBvcHRpb25zLmZyb20gfHwgJyonLFxuICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKHRyYW5zaXRpb24sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLnJlZGlyZWN0KG9wdGlvbnMudG8sIG9wdGlvbnMucGFyYW1zIHx8IHBhcmFtcywgb3B0aW9ucy5xdWVyeSB8fCBxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGU7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG52YXIgZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24gPSByZXF1aXJlKCcuL2dldFdpbmRvd1Njcm9sbFBvc2l0aW9uJyk7XG5cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZVNjcm9sbChzdGF0ZSwgcHJldlN0YXRlKSB7XG4gIGlmICghcHJldlN0YXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gRG9uJ3QgdXBkYXRlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIG9ubHkgdGhlIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICBpZiAoc3RhdGUucGF0aG5hbWUgPT09IHByZXZTdGF0ZS5wYXRobmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXZhciByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXM7XG4gIHZhciBwcmV2Um91dGVzID0gcHJldlN0YXRlLnJvdXRlcztcblxuICB2YXIgc2hhcmVkQW5jZXN0b3JSb3V0ZXMgPSByb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiBwcmV2Um91dGVzLmluZGV4T2Yocm91dGUpICE9PSAtMTtcbiAgfSk7XG5cbiAgcmV0dXJuICFzaGFyZWRBbmNlc3RvclJvdXRlcy5zb21lKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZS5pZ25vcmVTY3JvbGxCZWhhdmlvcjtcbiAgfSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIHJvdXRlciB3aXRoIHRoZSBhYmlsaXR5IHRvIG1hbmFnZSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uXG4gKiBhY2NvcmRpbmcgdG8gaXRzIHNjcm9sbCBiZWhhdmlvci5cbiAqL1xudmFyIFNjcm9sbEhpc3RvcnkgPSB7XG5cbiAgc3RhdGljczoge1xuXG4gICAgLyoqXG4gICAgICogUmVjb3JkcyBjdXJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFzIHRoZSBsYXN0IGtub3duIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gVVJMIHBhdGguXG4gICAgICovXG4gICAgcmVjb3JkU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHJlY29yZFNjcm9sbFBvc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGxIaXN0b3J5KSB0aGlzLnNjcm9sbEhpc3RvcnkgPSB7fTtcblxuICAgICAgdGhpcy5zY3JvbGxIaXN0b3J5W3BhdGhdID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBrbm93biBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICAgKi9cbiAgICBnZXRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbEhpc3RvcnkpIHRoaXMuc2Nyb2xsSGlzdG9yeSA9IHt9O1xuXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxIaXN0b3J5W3BhdGhdIHx8IG51bGw7XG4gICAgfVxuXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaW52YXJpYW50KHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsQmVoYXZpb3IoKSA9PSBudWxsIHx8IGNhblVzZURPTSwgJ0Nhbm5vdCB1c2Ugc2Nyb2xsIGJlaGF2aW9yIHdpdGhvdXQgYSBET00nKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGwocHJldlN0YXRlKTtcbiAgfSxcblxuICBfdXBkYXRlU2Nyb2xsOiBmdW5jdGlvbiBfdXBkYXRlU2Nyb2xsKHByZXZTdGF0ZSkge1xuICAgIGlmICghc2hvdWxkVXBkYXRlU2Nyb2xsKHRoaXMuc3RhdGUsIHByZXZTdGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9dmFyIHNjcm9sbEJlaGF2aW9yID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxCZWhhdmlvcigpO1xuXG4gICAgaWYgKHNjcm9sbEJlaGF2aW9yKSBzY3JvbGxCZWhhdmlvci51cGRhdGVTY3JvbGxQb3NpdGlvbih0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbFBvc2l0aW9uKHRoaXMuc3RhdGUucGF0aCksIHRoaXMuc3RhdGUuYWN0aW9uKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IHRoZSBwYXRoLCByb3V0ZXMsIFVSTFxuICogcGFyYW1zIGFuZCBxdWVyeSB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgQWJvdXRMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogWyBSb3V0ZXIuU3RhdGUgXSxcbiAqICAgICByZW5kZXIoKSB7XG4gKiAgICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gKlxuICogICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoJ2Fib3V0JykpXG4gKiAgICAgICAgIGNsYXNzTmFtZSArPSAnIGlzLWFjdGl2ZSc7XG4gKlxuICogICAgICAgcmV0dXJuIFJlYWN0LkRPTS5hKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIFN0YXRlID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGguXG4gICAqL1xuICBnZXRQYXRoOiBmdW5jdGlvbiBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXRoKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgZ2V0UGF0aG5hbWU6IGZ1bmN0aW9uIGdldFBhdGhuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXRobmFtZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgVVJMIHBhcmFtcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0UGFyYW1zOiBmdW5jdGlvbiBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgcXVlcnkgcGFyYW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRRdWVyeTogZnVuY3Rpb24gZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFF1ZXJ5KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHJvdXRlcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0Um91dGVzOiBmdW5jdGlvbiBnZXRSb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFJvdXRlcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5XG4gICAqIGFyZSBhY3RpdmUuXG4gICAqL1xuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5pc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZTsiLCIvKiBqc2hpbnQgLVcwNTggKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsbGF0aW9uID0gcmVxdWlyZSgnLi9DYW5jZWxsYXRpb24nKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSB0cmFuc2l0aW9uIHRvIGEgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBUaGUgd2lsbFRyYW5zaXRpb25UbyBhbmQgd2lsbFRyYW5zaXRpb25Gcm9tIGhhbmRsZXJzIHJlY2VpdmVcbiAqIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYXMgdGhlaXIgZmlyc3QgYXJndW1lbnQuXG4gKi9cbmZ1bmN0aW9uIFRyYW5zaXRpb24ocGF0aCwgcmV0cnkpIHtcbiAgdGhpcy5wYXRoID0gcGF0aDtcbiAgdGhpcy5hYm9ydFJlYXNvbiA9IG51bGw7XG4gIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIHJvdXRlci5yZXRyeVRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgdGhpcy5yZXRyeSA9IHJldHJ5LmJpbmQodGhpcyk7XG59XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBpZiAodGhpcy5hYm9ydFJlYXNvbiA9PSBudWxsKSB0aGlzLmFib3J0UmVhc29uID0gcmVhc29uIHx8ICdBQk9SVCc7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uICh0bywgcGFyYW1zLCBxdWVyeSkge1xuICB0aGlzLmFib3J0KG5ldyBSZWRpcmVjdCh0bywgcGFyYW1zLCBxdWVyeSkpO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFib3J0KG5ldyBDYW5jZWxsYXRpb24oKSk7XG59O1xuXG5UcmFuc2l0aW9uLmZyb20gPSBmdW5jdGlvbiAodHJhbnNpdGlvbiwgcm91dGVzLCBjb21wb25lbnRzLCBjYWxsYmFjaykge1xuICByb3V0ZXMucmVkdWNlKGZ1bmN0aW9uIChjYWxsYmFjaywgcm91dGUsIGluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZS5vbkxlYXZlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGUub25MZWF2ZSh0cmFuc2l0aW9uLCBjb21wb25lbnRzW2luZGV4XSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbGJhY2sgaW4gdGhlIGFyZ3VtZW50IGxpc3QsIGNhbGwgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBpZiAocm91dGUub25MZWF2ZS5sZW5ndGggPCAzKSBjYWxsYmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgY2FsbGJhY2spKCk7XG59O1xuXG5UcmFuc2l0aW9uLnRvID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIHJvdXRlcywgcGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spIHtcbiAgcm91dGVzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjYWxsYmFjaywgcm91dGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlLm9uRW50ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZS5vbkVudGVyKHRyYW5zaXRpb24sIHBhcmFtcywgcXVlcnksIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNhbGxiYWNrIGluIHRoZSBhcmd1bWVudCBsaXN0LCBjYWxsIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgaWYgKHJvdXRlLm9uRW50ZXIubGVuZ3RoIDwgNCkgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGNhbGxiYWNrKSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uOyIsIi8qKlxuICogQWN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgVVJMLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSB7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBhIG5ldyBsb2NhdGlvbiBpcyBiZWluZyBwdXNoZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBQVVNIOiAncHVzaCcsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBzaG91bGQgYmUgcmVwbGFjZWQuXG4gICAqL1xuICBSRVBMQUNFOiAncmVwbGFjZScsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgbW9zdCByZWNlbnQgZW50cnkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIFBPUDogJ3BvcCdcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbkFjdGlvbnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcblxuLyoqXG4gKiBBIHNjcm9sbCBiZWhhdmlvciB0aGF0IGF0dGVtcHRzIHRvIGltaXRhdGUgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAqIG9mIG1vZGVybiBicm93c2Vycy5cbiAqL1xudmFyIEltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSB7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uLCBhY3Rpb25UeXBlKSB7XG4gICAgc3dpdGNoIChhY3Rpb25UeXBlKSB7XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5QVVNIOlxuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRTpcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlBPUDpcbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWl0YXRlQnJvd3NlckJlaGF2aW9yOyIsIi8qKlxuICogQSBzY3JvbGwgYmVoYXZpb3IgdGhhdCBhbHdheXMgc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gKiBhZnRlciBhIHRyYW5zaXRpb24uXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgU2Nyb2xsVG9Ub3BCZWhhdmlvciA9IHtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsVG9Ub3BCZWhhdmlvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIG5lY2Vzc2FyeSB0byBnZXQgYXJvdW5kIGEgY29udGV4dCB3YXJuaW5nXG4gKiBwcmVzZW50IGluIFJlYWN0IDAuMTMuMC4gSXQgc292bGVzIHRoaXMgYnkgcHJvdmlkaW5nIGEgc2VwYXJhdGlvblxuICogYmV0d2VlbiB0aGUgXCJvd25lclwiIGFuZCBcInBhcmVudFwiIGNvbnRleHRzLlxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb250ZXh0V3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBDb250ZXh0V3JhcHBlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGV4dFdyYXBwZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhDb250ZXh0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRleHRXcmFwcGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250ZXh0V3JhcHBlcjtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dFdyYXBwZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8RGVmYXVsdFJvdXRlPiBjb21wb25lbnQgaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0XG4gKiByZW5kZXJzIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkby5cbiAqIE9ubHkgb25lIHN1Y2ggcm91dGUgbWF5IGJlIHVzZWQgYXQgYW55IGdpdmVuIGxldmVsIGluIHRoZVxuICogcm91dGUgaGllcmFyY2h5LlxuICovXG5cbnZhciBEZWZhdWx0Um91dGUgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBEZWZhdWx0Um91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlZmF1bHRSb3V0ZSk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhEZWZhdWx0Um91dGUsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIERlZmF1bHRSb3V0ZTtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5EZWZhdWx0Um91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkRlZmF1bHRSb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0Um91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbi8qKlxuICogPExpbms+IGNvbXBvbmVudHMgYXJlIHVzZWQgdG8gY3JlYXRlIGFuIDxhPiBlbGVtZW50IHRoYXQgbGlua3MgdG8gYSByb3V0ZS5cbiAqIFdoZW4gdGhhdCByb3V0ZSBpcyBhY3RpdmUsIHRoZSBsaW5rIGdldHMgYW4gXCJhY3RpdmVcIiBjbGFzcyBuYW1lIChvciB0aGVcbiAqIHZhbHVlIG9mIGl0cyBgYWN0aXZlQ2xhc3NOYW1lYCBwcm9wKS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYXNzdW1pbmcgeW91IGhhdmUgdGhlIGZvbGxvd2luZyByb3V0ZTpcbiAqXG4gKiAgIDxSb3V0ZSBuYW1lPVwic2hvd1Bvc3RcIiBwYXRoPVwiL3Bvc3RzLzpwb3N0SURcIiBoYW5kbGVyPXtQb3N0fS8+XG4gKlxuICogWW91IGNvdWxkIHVzZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudCB0byBsaW5rIHRvIHRoYXQgcm91dGU6XG4gKlxuICogICA8TGluayB0bz1cInNob3dQb3N0XCIgcGFyYW1zPXt7IHBvc3RJRDogXCIxMjNcIiB9fSAvPlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIHBhcmFtcywgbGlua3MgbWF5IHBhc3MgYWxvbmcgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHVzaW5nIHRoZSBgcXVlcnlgIHByb3AuXG4gKlxuICogICA8TGluayB0bz1cInNob3dQb3N0XCIgcGFyYW1zPXt7IHBvc3RJRDogXCIxMjNcIiB9fSBxdWVyeT17eyBzaG93OnRydWUgfX0vPlxuICovXG5cbnZhciBMaW5rID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoTGluaywgW3tcbiAgICBrZXk6ICdoYW5kbGVDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICB2YXIgYWxsb3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBjbGlja1Jlc3VsdDtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgY2xpY2tSZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfWlmIChjbGlja1Jlc3VsdCA9PT0gZmFsc2UgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkgYWxsb3dUcmFuc2l0aW9uID0gZmFsc2U7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChhbGxvd1RyYW5zaXRpb24pIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRIcmVmJyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgdG8gdXNlIG9uIHRoZSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SHJlZigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VIcmVmKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbGFzc05hbWUnLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFwiY2xhc3NcIiBhdHRyaWJ1dGUgdG8gdXNlIG9uIHRoZSBET00gZWxlbWVudCwgd2hpY2ggY29udGFpbnNcbiAgICAgKiB0aGUgdmFsdWUgb2YgdGhlIGFjdGl2ZUNsYXNzTmFtZSBwcm9wZXJ0eSB3aGVuIHRoaXMgPExpbms+IGlzIGFjdGl2ZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgICBpZiAodGhpcy5nZXRBY3RpdmVTdGF0ZSgpKSBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWN0aXZlU3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgaHJlZjogdGhpcy5nZXRIcmVmKCksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb3BzLmFjdGl2ZVN0eWxlICYmIHRoaXMuZ2V0QWN0aXZlU3RhdGUoKSkgcHJvcHMuc3R5bGUgPSBwcm9wcy5hY3RpdmVTdHlsZTtcblxuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5hKHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGluaztcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG59O1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMucm91dGVdKS5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHF1ZXJ5OiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6ICdhY3RpdmUnLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8Tm90Rm91bmRSb3V0ZT4gaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0XG4gKiByZW5kZXJzIHdoZW4gdGhlIGJlZ2lubmluZyBvZiBpdHMgcGFyZW50J3MgcGF0aCBtYXRjaGVzXG4gKiBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8sIGluY2x1ZGluZyBhbnkgPERlZmF1bHRSb3V0ZT4uXG4gKiBPbmx5IG9uZSBzdWNoIHJvdXRlIG1heSBiZSB1c2VkIGF0IGFueSBnaXZlbiBsZXZlbCBpbiB0aGVcbiAqIHJvdXRlIGhpZXJhcmNoeS5cbiAqL1xuXG52YXIgTm90Rm91bmRSb3V0ZSA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIE5vdEZvdW5kUm91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdEZvdW5kUm91dGUpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTm90Rm91bmRSb3V0ZSwgX1JvdXRlKTtcblxuICByZXR1cm4gTm90Rm91bmRSb3V0ZTtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Ob3RGb3VuZFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLmZhbHN5LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5LFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5Ob3RGb3VuZFJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdEZvdW5kUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPFJlZGlyZWN0PiBjb21wb25lbnQgaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0IGFsd2F5c1xuICogcmVkaXJlY3RzIHRvIGFub3RoZXIgcm91dGUgd2hlbiBpdCBtYXRjaGVzLlxuICovXG5cbnZhciBSZWRpcmVjdCA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIFJlZGlyZWN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWRpcmVjdCk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSZWRpcmVjdCwgX1JvdXRlKTtcblxuICByZXR1cm4gUmVkaXJlY3Q7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUmVkaXJlY3QucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBBbGlhcyBmb3IgcGF0aC5cbiAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mYWxzeVxufTtcblxuLy8gUmVkaXJlY3RzIHNob3VsZCBub3QgaGF2ZSBhIGRlZmF1bHQgaGFuZGxlclxuUmVkaXJlY3QuZGVmYXVsdFByb3BzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkaXJlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcblxuLyoqXG4gKiA8Um91dGU+IGNvbXBvbmVudHMgc3BlY2lmeSBjb21wb25lbnRzIHRoYXQgYXJlIHJlbmRlcmVkIHRvIHRoZSBwYWdlIHdoZW4gdGhlXG4gKiBVUkwgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4uXG4gKlxuICogUm91dGVzIGFyZSBhcnJhbmdlZCBpbiBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZS4gV2hlbiBhIG5ldyBVUkwgaXMgcmVxdWVzdGVkLFxuICogdGhlIHRyZWUgaXMgc2VhcmNoZWQgZGVwdGgtZmlyc3QgdG8gZmluZCBhIHJvdXRlIHdob3NlIHBhdGggbWF0Y2hlcyB0aGUgVVJMLlxuICogV2hlbiBvbmUgaXMgZm91bmQsIGFsbCByb3V0ZXMgaW4gdGhlIHRyZWUgdGhhdCBsZWFkIHRvIGl0IGFyZSBjb25zaWRlcmVkXG4gKiBcImFjdGl2ZVwiIGFuZCB0aGVpciBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBpbnRvIHRoZSBET00sIG5lc3RlZCBpbiB0aGUgc2FtZVxuICogb3JkZXIgYXMgdGhleSBhcmUgaW4gdGhlIHRyZWUuXG4gKlxuICogVGhlIHByZWZlcnJlZCB3YXkgdG8gY29uZmlndXJlIGEgcm91dGVyIGlzIHVzaW5nIEpTWC4gVGhlIFhNTC1saWtlIHN5bnRheCBpc1xuICogYSBncmVhdCB3YXkgdG8gdmlzdWFsaXplIGhvdyByb3V0ZXMgYXJlIGxhaWQgb3V0IGluIGFuIGFwcGxpY2F0aW9uLlxuICpcbiAqICAgdmFyIHJvdXRlcyA9IFtcbiAqICAgICA8Um91dGUgaGFuZGxlcj17QXBwfT5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwibG9naW5cIiBoYW5kbGVyPXtMb2dpbn0vPlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJsb2dvdXRcIiBoYW5kbGVyPXtMb2dvdXR9Lz5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwiYWJvdXRcIiBoYW5kbGVyPXtBYm91dH0vPlxuICogICAgIDwvUm91dGU+XG4gKiAgIF07XG4gKiAgIFxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICpcbiAqIEhhbmRsZXJzIGZvciBSb3V0ZSBjb21wb25lbnRzIHRoYXQgY29udGFpbiBjaGlsZHJlbiBjYW4gcmVuZGVyIHRoZWlyIGFjdGl2ZVxuICogY2hpbGQgcm91dGUgdXNpbmcgYSA8Um91dGVIYW5kbGVyPiBlbGVtZW50LlxuICpcbiAqICAgdmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHBsaWNhdGlvblwiPlxuICogICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBJZiBubyBoYW5kbGVyIGlzIHByb3ZpZGVkIGZvciB0aGUgcm91dGUsIGl0IHdpbGwgcmVuZGVyIGEgbWF0Y2hlZCBjaGlsZCByb3V0ZS5cbiAqL1xuXG52YXIgUm91dGUgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUm91dGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICclcyBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUm91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWdub3JlU2Nyb2xsQmVoYXZpb3I6IFByb3BUeXBlcy5ib29sXG59O1xuXG5Sb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbnRleHRXcmFwcGVyID0gcmVxdWlyZSgnLi9Db250ZXh0V3JhcHBlcicpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG5cbnZhciBSRUZfTkFNRSA9ICdfX3JvdXRlSGFuZGxlcl9fJztcblxuLyoqXG4gKiBBIDxSb3V0ZUhhbmRsZXI+IGNvbXBvbmVudCByZW5kZXJzIHRoZSBhY3RpdmUgY2hpbGQgcm91dGUgaGFuZGxlclxuICogd2hlbiByb3V0ZXMgYXJlIG5lc3RlZC5cbiAqL1xuXG52YXIgUm91dGVIYW5kbGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvdXRlSGFuZGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVIYW5kbGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUm91dGVIYW5kbGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm91dGVIYW5kbGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IHRoaXMuY29udGV4dC5yb3V0ZURlcHRoICsgMVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQodGhpcy5yZWZzW1JFRl9OQU1FXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQodGhpcy5yZWZzW1JFRl9OQU1FXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KG51bGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVSb3V0ZUNvbXBvbmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSb3V0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIuc2V0Um91dGVDb21wb25lbnRBdERlcHRoKHRoaXMuZ2V0Um91dGVEZXB0aCgpLCBjb21wb25lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFJvdXRlRGVwdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZURlcHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZURlcHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUNoaWxkUm91dGVIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXIocHJvcHMpIHtcbiAgICAgIHZhciByb3V0ZSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Um91dGVBdERlcHRoKHRoaXMuZ2V0Um91dGVEZXB0aCgpKTtcblxuICAgICAgaWYgKHJvdXRlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9dmFyIGNoaWxkUHJvcHMgPSBhc3NpZ24oe30sIHByb3BzIHx8IHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiBSRUZfTkFNRSxcbiAgICAgICAgcGFyYW1zOiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKSxcbiAgICAgICAgcXVlcnk6IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFF1ZXJ5KClcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5oYW5kbGVyLCBjaGlsZFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXIoKTtcbiAgICAgIC8vIDxzY3JpcHQvPiBmb3IgdGhpbmdzIGxpa2UgPENTU1RyYW5zaXRpb25Hcm91cC8+IHRoYXQgZG9uJ3QgbGlrZSBudWxsXG4gICAgICByZXR1cm4gaGFuZGxlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRleHRXcmFwcGVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBoYW5kbGVyXG4gICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudCgnc2NyaXB0JywgbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlSGFuZGxlcjtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUm91dGVIYW5kbGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxufTtcblxuUm91dGVIYW5kbGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGVIYW5kbGVyOyIsIi8qIGpzaGludCAtVzA1OCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG52YXIgSGFzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uJyk7XG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG52YXIgUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG52YXIgU3RhdGljTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbicpO1xudmFyIFNjcm9sbEhpc3RvcnkgPSByZXF1aXJlKCcuL1Njcm9sbEhpc3RvcnknKTtcbnZhciBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcbnZhciBpc1JlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2lzUmVhY3RDaGlsZHJlbicpO1xudmFyIFRyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuL0hpc3RvcnknKTtcbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIE1hdGNoID0gcmVxdWlyZSgnLi9NYXRjaCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IHJlcXVpcmUoJy4vc3VwcG9ydHNIaXN0b3J5Jyk7XG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX0xPQ0FUSU9OID0gY2FuVXNlRE9NID8gSGFzaExvY2F0aW9uIDogJy8nO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvciBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX1NDUk9MTF9CRUhBVklPUiA9IGNhblVzZURPTSA/IEltaXRhdGVCcm93c2VyQmVoYXZpb3IgOiBudWxsO1xuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc01hdGNoKHJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSB7XG4gIHJldHVybiByb3V0ZXMuc29tZShmdW5jdGlvbiAocikge1xuICAgIGlmIChyICE9PSByb3V0ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIHBhcmFtTmFtZXMgPSByb3V0ZS5wYXJhbU5hbWVzO1xuICAgIHZhciBwYXJhbU5hbWU7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCBhbGwgcGFyYW1zIHRoZSByb3V0ZSBjYXJlcyBhYm91dCBkaWQgbm90IGNoYW5nZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFyYW1OYW1lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcblxuICAgICAgaWYgKG5leHRQYXJhbXNbcGFyYW1OYW1lXSAhPT0gcHJldlBhcmFtc1twYXJhbU5hbWVdKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBxdWVyeSBoYXNuJ3QgY2hhbmdlZC5cbiAgICByZXR1cm4gaGFzUHJvcGVydGllcyhwcmV2UXVlcnksIG5leHRRdWVyeSkgJiYgaGFzUHJvcGVydGllcyhuZXh0UXVlcnksIHByZXZRdWVyeSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgbmFtZWRSb3V0ZXMpIHtcbiAgdmFyIHJvdXRlO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcm91dGUgPSByb3V0ZXNbaV07XG5cbiAgICBpZiAocm91dGUubmFtZSkge1xuICAgICAgaW52YXJpYW50KG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID09IG51bGwsICdZb3UgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgcm91dGUgbmFtZWQgXCIlc1wiJywgcm91dGUubmFtZSk7XG5cbiAgICAgIG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID0gcm91dGU7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlLmNoaWxkUm91dGVzLCBuYW1lZFJvdXRlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm91dGVJc0FjdGl2ZShhY3RpdmVSb3V0ZXMsIHJvdXRlTmFtZSkge1xuICByZXR1cm4gYWN0aXZlUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IHJvdXRlTmFtZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtc0FyZUFjdGl2ZShhY3RpdmVQYXJhbXMsIHBhcmFtcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpIGlmIChTdHJpbmcoYWN0aXZlUGFyYW1zW3Byb3BlcnR5XSkgIT09IFN0cmluZyhwYXJhbXNbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBxdWVyeUlzQWN0aXZlKGFjdGl2ZVF1ZXJ5LCBxdWVyeSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBxdWVyeSkgaWYgKFN0cmluZyhhY3RpdmVRdWVyeVtwcm9wZXJ0eV0pICE9PSBTdHJpbmcocXVlcnlbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGVyIHVzaW5nIHRoZSBnaXZlbiBvcHRpb25zLiBBIHJvdXRlclxuICogaXMgYSBSZWFjdENvbXBvbmVudCBjbGFzcyB0aGF0IGtub3dzIGhvdyB0byByZWFjdCB0byBjaGFuZ2VzIGluIHRoZVxuICogVVJMIGFuZCBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgcGFnZSBpbiBzeW5jLlxuICpcbiAqIE9wdGlvbnMgbWF5IGJlIGFueSBvZiB0aGUgZm9sbG93aW5nOlxuICpcbiAqIC0gcm91dGVzICAgICAgICAgICAocmVxdWlyZWQpIFRoZSByb3V0ZSBjb25maWdcbiAqIC0gbG9jYXRpb24gICAgICAgICBUaGUgbG9jYXRpb24gdG8gdXNlLiBEZWZhdWx0cyB0byBIYXNoTG9jYXRpb24gd2hlblxuICogICAgICAgICAgICAgICAgICAgIHRoZSBET00gaXMgYXZhaWxhYmxlLCBcIi9cIiBvdGhlcndpc2VcbiAqIC0gc2Nyb2xsQmVoYXZpb3IgICBUaGUgc2Nyb2xsIGJlaGF2aW9yIHRvIHVzZS4gRGVmYXVsdHMgdG8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvclxuICogICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIERPTSBpcyBhdmFpbGFibGUsIG51bGwgb3RoZXJ3aXNlXG4gKiAtIG9uRXJyb3IgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGVycm9yc1xuICogLSBvbkFib3J0ICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGhhbmRsZSBhYm9ydGVkIHRyYW5zaXRpb25zXG4gKlxuICogV2hlbiByZW5kZXJpbmcgaW4gYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCwgdGhlIGxvY2F0aW9uIHNob3VsZCBzaW1wbHlcbiAqIGJlIHRoZSBVUkwgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LCBpbmNsdWRpbmcgdGhlIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihvcHRpb25zKSkgb3B0aW9ucyA9IHsgcm91dGVzOiBvcHRpb25zIH07XG5cbiAgdmFyIG1vdW50ZWRDb21wb25lbnRzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IG9wdGlvbnMubG9jYXRpb24gfHwgREVGQVVMVF9MT0NBVElPTjtcbiAgdmFyIHNjcm9sbEJlaGF2aW9yID0gb3B0aW9ucy5zY3JvbGxCZWhhdmlvciB8fCBERUZBVUxUX1NDUk9MTF9CRUhBVklPUjtcbiAgdmFyIHN0YXRlID0ge307XG4gIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgdmFyIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcbiAgdmFyIGRpc3BhdGNoSGFuZGxlciA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gbmV3IFN0YXRpY0xvY2F0aW9uKGxvY2F0aW9uKTtcblxuICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikge1xuICAgIHdhcm5pbmcoIWNhblVzZURPTSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnLCAnWW91IHNob3VsZCBub3QgdXNlIGEgc3RhdGljIGxvY2F0aW9uIGluIGEgRE9NIGVudmlyb25tZW50IGJlY2F1c2UgJyArICd0aGUgcm91dGVyIHdpbGwgbm90IGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBjdXJyZW50IFVSTCcpO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChjYW5Vc2VET00gfHwgbG9jYXRpb24ubmVlZHNET00gPT09IGZhbHNlLCAnWW91IGNhbm5vdCB1c2UgJXMgd2l0aG91dCBhIERPTScsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgZmFsbCBiYWNrIHRvIGZ1bGwgcGFnZSByZWZyZXNoZXMgaW5cbiAgLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBIVE1MIGhpc3RvcnkgQVBJLlxuICBpZiAobG9jYXRpb24gPT09IEhpc3RvcnlMb2NhdGlvbiAmJiAhc3VwcG9ydHNIaXN0b3J5KCkpIGxvY2F0aW9uID0gUmVmcmVzaExvY2F0aW9uO1xuXG4gIHZhciBSb3V0ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ1JvdXRlcicsXG5cbiAgICBzdGF0aWNzOiB7XG5cbiAgICAgIGlzUnVubmluZzogZmFsc2UsXG5cbiAgICAgIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uOiBmdW5jdGlvbiBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpIHtcbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjbGVhckFsbFJvdXRlczogZnVuY3Rpb24gY2xlYXJBbGxSb3V0ZXMoKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuICAgICAgICBSb3V0ZXIubmFtZWRSb3V0ZXMgPSB7fTtcbiAgICAgICAgUm91dGVyLnJvdXRlcyA9IFtdO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBZGRzIHJvdXRlcyB0byB0aGlzIHJvdXRlciBmcm9tIHRoZSBnaXZlbiBjaGlsZHJlbiBvYmplY3QgKHNlZSBSZWFjdENoaWxkcmVuKS5cbiAgICAgICAqL1xuICAgICAgYWRkUm91dGVzOiBmdW5jdGlvbiBhZGRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIGlmIChpc1JlYWN0Q2hpbGRyZW4ocm91dGVzKSkgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcblxuICAgICAgICBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgUm91dGVyLm5hbWVkUm91dGVzKTtcblxuICAgICAgICBSb3V0ZXIucm91dGVzLnB1c2guYXBwbHkoUm91dGVyLnJvdXRlcywgcm91dGVzKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZXMgcm91dGVzIG9mIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICByZXBsYWNlUm91dGVzOiBmdW5jdGlvbiByZXBsYWNlUm91dGVzKHJvdXRlcykge1xuICAgICAgICBSb3V0ZXIuY2xlYXJBbGxSb3V0ZXMoKTtcbiAgICAgICAgUm91dGVyLmFkZFJvdXRlcyhyb3V0ZXMpO1xuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQZXJmb3JtcyBhIG1hdGNoIG9mIHRoZSBnaXZlbiBwYXRoIGFnYWluc3QgdGhpcyByb3V0ZXIgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gICAgICAgKiB3aXRoIHRoZSB7IHJvdXRlcywgcGFyYW1zLCBwYXRobmFtZSwgcXVlcnkgfSB0aGF0IG1hdGNoLiBSZXR1cm5zIG51bGwgaWYgbm9cbiAgICAgICAqIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAgICovXG4gICAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocGF0aCkge1xuICAgICAgICByZXR1cm4gTWF0Y2guZmluZE1hdGNoKFJvdXRlci5yb3V0ZXMsIHBhdGgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICAgICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkuXG4gICAgICAgKi9cbiAgICAgIG1ha2VQYXRoOiBmdW5jdGlvbiBtYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aDtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHBhdGggPSB0bztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcm91dGUgPSB0byBpbnN0YW5jZW9mIFJvdXRlID8gdG8gOiBSb3V0ZXIubmFtZWRSb3V0ZXNbdG9dO1xuXG4gICAgICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdDYW5ub3QgZmluZCBhIHJvdXRlIG5hbWVkIFwiJXNcIicsIHRvKTtcblxuICAgICAgICAgIHBhdGggPSByb3V0ZS5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFBhdGhVdGlscy53aXRoUXVlcnkoUGF0aFV0aWxzLmluamVjdFBhcmFtcyhwYXRoLCBwYXJhbXMpLCBxdWVyeSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYSBsaW5rXG4gICAgICAgKiB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoID0gUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uID09PSBIYXNoTG9jYXRpb24gPyAnIycgKyBwYXRoIDogcGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAgICAgKiBhIG5ldyBVUkwgb250byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuXG4gICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbikge1xuICAgICAgICAgIC8vIFJlcGxhY2Ugc28gcGVuZGluZyBsb2NhdGlvbiBkb2VzIG5vdCBzdGF5IGluIGhpc3RvcnkuXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAgICAgKiB0aGUgY3VycmVudCBVUkwgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMIGlmIG9uZSBpcyBhdmFpbGFibGUuIFJldHVybnMgdHJ1ZSBpZiB0aGVcbiAgICAgICAqIHJvdXRlciB3YXMgYWJsZSB0byBnbyBiYWNrLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogTm90ZTogVGhlIHJvdXRlciBvbmx5IHRyYWNrcyBoaXN0b3J5IGVudHJpZXMgaW4geW91ciBhcHBsaWNhdGlvbiwgbm90IHRoZVxuICAgICAgICogY3VycmVudCBicm93c2VyIHNlc3Npb24sIHNvIHlvdSBjYW4gc2FmZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiB3aXRob3V0IGd1YXJkaW5nXG4gICAgICAgKiBhZ2FpbnN0IHNlbmRpbmcgdGhlIHVzZXIgYmFjayB0byBzb21lIG90aGVyIHNpdGUuIEhvd2V2ZXIsIHdoZW4gdXNpbmdcbiAgICAgICAqIFJlZnJlc2hMb2NhdGlvbiAod2hpY2ggaXMgdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdFxuICAgICAgICogZG9uJ3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5KSB0aGlzIG1ldGhvZCB3aWxsICphbHdheXMqIHNlbmQgdGhlIGNsaWVudCBiYWNrXG4gICAgICAgKiBiZWNhdXNlIHdlIGNhbm5vdCByZWxpYWJseSB0cmFjayBoaXN0b3J5IGxlbmd0aC5cbiAgICAgICAqL1xuICAgICAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgICAgIGlmIChIaXN0b3J5Lmxlbmd0aCA+IDEgfHwgbG9jYXRpb24gPT09IFJlZnJlc2hMb2NhdGlvbikge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ2dvQmFjaygpIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlcmUgaXMgbm8gcm91dGVyIGhpc3RvcnknKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVBYm9ydDogb3B0aW9ucy5vbkFib3J0IHx8IGZ1bmN0aW9uIChhYm9ydFJlYXNvbikge1xuICAgICAgICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdVbmhhbmRsZWQgYWJvcnRlZCB0cmFuc2l0aW9uISBSZWFzb246ICcgKyBhYm9ydFJlYXNvbik7XG5cbiAgICAgICAgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgQ2FuY2VsbGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgUmVkaXJlY3QpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aChhYm9ydFJlYXNvbi50bywgYWJvcnRSZWFzb24ucGFyYW1zLCBhYm9ydFJlYXNvbi5xdWVyeSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVFcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBUaHJvdyBzbyB3ZSBkb24ndCBzaWxlbnRseSBzd2FsbG93IGFzeW5jIGVycm9ycy5cbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgZXJyb3IgcHJvYmFibHkgb3JpZ2luYXRlZCBpbiBhIHRyYW5zaXRpb24gaG9vay5cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUxvY2F0aW9uQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVMb2NhdGlvbkNoYW5nZShjaGFuZ2UpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudHlwZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgdHJhbnNpdGlvbiB0byB0aGUgZ2l2ZW4gcGF0aCBhbmQgY2FsbHMgY2FsbGJhY2soZXJyb3IsIGFib3J0UmVhc29uKVxuICAgICAgICogd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZC4gSWYgYm90aCBhcmd1bWVudHMgYXJlIG51bGwgdGhlIHJvdXRlcidzIHN0YXRlXG4gICAgICAgKiB3YXMgdXBkYXRlZC4gT3RoZXJ3aXNlIHRoZSB0cmFuc2l0aW9uIGRpZCBub3QgY29tcGxldGUuXG4gICAgICAgKlxuICAgICAgICogSW4gYSB0cmFuc2l0aW9uLCBhIHJvdXRlciBmaXJzdCBkZXRlcm1pbmVzIHdoaWNoIHJvdXRlcyBhcmUgaW52b2x2ZWQgYnkgYmVnaW5uaW5nXG4gICAgICAgKiB3aXRoIHRoZSBjdXJyZW50IHJvdXRlLCB1cCB0aGUgcm91dGUgdHJlZSB0byB0aGUgZmlyc3QgcGFyZW50IHJvdXRlIHRoYXQgaXMgc2hhcmVkXG4gICAgICAgKiB3aXRoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSwgYW5kIGJhY2sgZG93biB0aGUgdHJlZSB0byB0aGUgZGVzdGluYXRpb24gcm91dGUuIFRoZVxuICAgICAgICogd2lsbFRyYW5zaXRpb25Gcm9tIGhvb2sgaXMgaW52b2tlZCBvbiBhbGwgcm91dGUgaGFuZGxlcnMgd2UncmUgdHJhbnNpdGlvbmluZyBhd2F5XG4gICAgICAgKiBmcm9tLCBpbiByZXZlcnNlIG5lc3Rpbmcgb3JkZXIuIExpa2V3aXNlLCB0aGUgd2lsbFRyYW5zaXRpb25UbyBob29rIGlzIGludm9rZWQgb25cbiAgICAgICAqIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLlxuICAgICAgICpcbiAgICAgICAqIEJvdGggd2lsbFRyYW5zaXRpb25Gcm9tIGFuZCB3aWxsVHJhbnNpdGlvblRvIGhvb2tzIG1heSBlaXRoZXIgYWJvcnQgb3IgcmVkaXJlY3QgdGhlXG4gICAgICAgKiB0cmFuc2l0aW9uLiBUbyByZXNvbHZlIGFzeW5jaHJvbm91c2x5LCB0aGV5IG1heSB1c2UgdGhlIGNhbGxiYWNrIGFyZ3VtZW50LiBJZiBub1xuICAgICAgICogaG9va3Mgd2FpdCwgdGhlIHRyYW5zaXRpb24gaXMgZnVsbHkgc3luY2hyb25vdXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChwYXRoLCBhY3Rpb24pIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gc3RhdGUucGF0aDtcbiAgICAgICAgdmFyIGlzUmVmcmVzaGluZyA9IGFjdGlvbiA9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcmV2UGF0aCA9PT0gcGF0aCAmJiAhaXNSZWZyZXNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIE5vdGhpbmcgdG8gZG8hXG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBzY3JvbGwgcG9zaXRpb24gYXMgZWFybHkgYXMgcG9zc2libGUgdG9cbiAgICAgICAgLy8gZ2V0IGl0IGJlZm9yZSBicm93c2VycyB0cnkgdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGlmIChwcmV2UGF0aCAmJiBhY3Rpb24gPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBSb3V0ZXIucmVjb3JkU2Nyb2xsUG9zaXRpb24ocHJldlBhdGgpO1xuXG4gICAgICAgIHZhciBtYXRjaCA9IFJvdXRlci5tYXRjaChwYXRoKTtcblxuICAgICAgICB3YXJuaW5nKG1hdGNoICE9IG51bGwsICdObyByb3V0ZSBtYXRjaGVzIHBhdGggXCIlc1wiLiBNYWtlIHN1cmUgeW91IGhhdmUgPFJvdXRlIHBhdGg9XCIlc1wiPiBzb21ld2hlcmUgaW4geW91ciByb3V0ZXMnLCBwYXRoLCBwYXRoKTtcblxuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkgbWF0Y2ggPSB7fTtcblxuICAgICAgICB2YXIgcHJldlJvdXRlcyA9IHN0YXRlLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIHByZXZQYXJhbXMgPSBzdGF0ZS5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBwcmV2UXVlcnkgPSBzdGF0ZS5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgbmV4dFJvdXRlcyA9IG1hdGNoLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIG5leHRQYXJhbXMgPSBtYXRjaC5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBuZXh0UXVlcnkgPSBtYXRjaC5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgZnJvbVJvdXRlcywgdG9Sb3V0ZXM7XG4gICAgICAgIGlmIChwcmV2Um91dGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZyb21Sb3V0ZXMgPSBwcmV2Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gobmV4dFJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc01hdGNoKHByZXZSb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IFtdO1xuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24ocGF0aCwgUm91dGVyLnJlcGxhY2VXaXRoLmJpbmQoUm91dGVyLCBwYXRoKSk7XG4gICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB2YXIgZnJvbUNvbXBvbmVudHMgPSBtb3VudGVkQ29tcG9uZW50cy5zbGljZShwcmV2Um91dGVzLmxlbmd0aCAtIGZyb21Sb3V0ZXMubGVuZ3RoKTtcblxuICAgICAgICBUcmFuc2l0aW9uLmZyb20odHJhbnNpdGlvbiwgZnJvbVJvdXRlcywgZnJvbUNvbXBvbmVudHMsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSByZXR1cm4gZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbik7IC8vIE5vIG5lZWQgdG8gY29udGludWUuXG5cbiAgICAgICAgICBUcmFuc2l0aW9uLnRvKHRyYW5zaXRpb24sIHRvUm91dGVzLCBuZXh0UGFyYW1zLCBuZXh0UXVlcnksIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG1hdGNoLnBhdGhuYW1lLFxuICAgICAgICAgICAgICByb3V0ZXM6IG5leHRSb3V0ZXMsXG4gICAgICAgICAgICAgIHBhcmFtczogbmV4dFBhcmFtcyxcbiAgICAgICAgICAgICAgcXVlcnk6IG5leHRRdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydHMgdGhpcyByb3V0ZXIgYW5kIGNhbGxzIGNhbGxiYWNrKHJvdXRlciwgc3RhdGUpIHdoZW4gdGhlIHJvdXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogSWYgdGhlIHJvdXRlcidzIGxvY2F0aW9uIGlzIHN0YXRpYyAoaS5lLiBhIFVSTCBwYXRoIGluIGEgc2VydmVyIGVudmlyb25tZW50KVxuICAgICAgICogdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmx5IG9uY2UuIE90aGVyd2lzZSwgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBvbmUgb2YgdGhlXG4gICAgICAgKiBSb3V0ZXIuKkxvY2F0aW9uIG9iamVjdHMgKGUuZy4gUm91dGVyLkhhc2hMb2NhdGlvbiBvciBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uKS5cbiAgICAgICAqL1xuICAgICAgcnVuOiBmdW5jdGlvbiBydW4oY2FsbGJhY2spIHtcbiAgICAgICAgaW52YXJpYW50KCFSb3V0ZXIuaXNSdW5uaW5nLCAnUm91dGVyIGlzIGFscmVhZHkgcnVubmluZycpO1xuXG4gICAgICAgIGRpc3BhdGNoSGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvciwgdHJhbnNpdGlvbiwgbmV3U3RhdGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIFJvdXRlci5oYW5kbGVFcnJvcihlcnJvcik7XG5cbiAgICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHJldHVybjtcblxuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcblxuICAgICAgICAgIGlmICh0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgICAgICBSb3V0ZXIuaGFuZGxlQWJvcnQodHJhbnNpdGlvbi5hYm9ydFJlYXNvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoUm91dGVyLCBSb3V0ZXIsIG5leHRTdGF0ZSA9IG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikpIHtcbiAgICAgICAgICBpZiAobG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLmFkZENoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgICBSb3V0ZXIuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb3RzdHJhcCB1c2luZyB0aGUgY3VycmVudCBwYXRoLlxuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksIG51bGwpO1xuICAgICAgfSxcblxuICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKSBsb2NhdGlvbi5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihSb3V0ZXIuaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGdldExvY2F0aW9uOiBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgfSxcblxuICAgICAgZ2V0U2Nyb2xsQmVoYXZpb3I6IGZ1bmN0aW9uIGdldFNjcm9sbEJlaGF2aW9yKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsQmVoYXZpb3I7XG4gICAgICB9LFxuXG4gICAgICBnZXRSb3V0ZUF0RGVwdGg6IGZ1bmN0aW9uIGdldFJvdXRlQXREZXB0aChyb3V0ZURlcHRoKSB7XG4gICAgICAgIHZhciByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXM7XG4gICAgICAgIHJldHVybiByb3V0ZXMgJiYgcm91dGVzW3JvdXRlRGVwdGhdO1xuICAgICAgfSxcblxuICAgICAgc2V0Um91dGVDb21wb25lbnRBdERlcHRoOiBmdW5jdGlvbiBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgocm91dGVEZXB0aCwgY29tcG9uZW50KSB7XG4gICAgICAgIG1vdW50ZWRDb21wb25lbnRzW3JvdXRlRGVwdGhdID0gY29tcG9uZW50O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoICsgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRobmFtZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgVVJMIHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXJhbXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXJhbXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRRdWVyeTogZnVuY3Rpb24gZ2V0Q3VycmVudFF1ZXJ5KCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucXVlcnk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcm91dGVzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50Um91dGVzOiBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGVzKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucm91dGVzO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeSBhcmUgYWN0aXZlLlxuICAgICAgICovXG4gICAgICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHJldHVybiB0byA9PT0gc3RhdGUucGF0aDtcbiAgICAgICAgfXJldHVybiByb3V0ZUlzQWN0aXZlKHN0YXRlLnJvdXRlcywgdG8pICYmIHBhcmFtc0FyZUFjdGl2ZShzdGF0ZS5wYXJhbXMsIHBhcmFtcykgJiYgKHF1ZXJ5ID09IG51bGwgfHwgcXVlcnlJc0FjdGl2ZShzdGF0ZS5xdWVyeSwgcXVlcnkpKTtcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtTY3JvbGxIaXN0b3J5XSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeVxuICAgIH0sXG5cbiAgICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgICAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiAxLFxuICAgICAgICByb3V0ZXI6IFJvdXRlclxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0gbmV4dFN0YXRlKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUm91dGVyLnN0b3AoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcm91dGUgPSBSb3V0ZXIuZ2V0Um91dGVBdERlcHRoKDApO1xuICAgICAgcmV0dXJuIHJvdXRlID8gUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5oYW5kbGVyLCB0aGlzLnByb3BzKSA6IG51bGw7XG4gICAgfVxuXG4gIH0pO1xuXG4gIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuXG4gIGlmIChvcHRpb25zLnJvdXRlcykgUm91dGVyLmFkZFJvdXRlcyhvcHRpb25zLnJvdXRlcyk7XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXI7IiwiLyoganNoaW50IC1XMDg0ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG52YXIgTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXMoY29tcG9uZW50TmFtZSwgcHJvcFR5cGVzLCBwcm9wcykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCAnVW5rbm93bkNvbXBvbmVudCc7XG5cbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgaWYgKHByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHZhciBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHdhcm5pbmcoZmFsc2UsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHByb3BzKTtcbiAgdmFyIGhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXI7XG5cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICBvcHRpb25zLm9uRW50ZXIgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uVG87XG4gICAgb3B0aW9ucy5vbkxlYXZlID0gaGFuZGxlci53aWxsVHJhbnNpdGlvbkZyb207XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfXZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHR5cGUuZGVmYXVsdFByb3BzLCBlbGVtZW50LnByb3BzKTtcblxuICBpZiAodHlwZS5wcm9wVHlwZXMpIGNoZWNrUHJvcFR5cGVzKHR5cGUuZGlzcGxheU5hbWUsIHR5cGUucHJvcFR5cGVzLCBwcm9wcyk7XG5cbiAgaWYgKHR5cGUgPT09IERlZmF1bHRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVEZWZhdWx0Um91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gTm90Rm91bmRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVOb3RGb3VuZFJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9aWYgKHR5cGUgPT09IFJlZGlyZWN0KSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJlZGlyZWN0KGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9cmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiByb3V0ZXMgY3JlYXRlZCBmcm9tIHRoZSBnaXZlblxuICogUmVhY3RDaGlsZHJlbiwgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSBvbmUgb2YgPFJvdXRlPiwgPERlZmF1bHRSb3V0ZT4sXG4gKiA8Tm90Rm91bmRSb3V0ZT4sIG9yIDxSZWRpcmVjdD4sIGUuZy46XG4gKlxuICogICB2YXIgeyBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiwgUm91dGUsIFJlZGlyZWN0IH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJ1c2VyXCIgcGF0aD1cIi91c2VyLzp1c2VySWRcIiBoYW5kbGVyPXtVc2VyfT5cbiAqICAgICAgICAgPFJvdXRlIG5hbWU9XCJ0YXNrXCIgcGF0aD1cInRhc2tzLzp0YXNrSWRcIiBoYW5kbGVyPXtUYXNrfS8+XG4gKiAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwidG9kb3MvOnRhc2tJZFwiIHRvPVwidGFza1wiLz5cbiAqICAgICAgIDwvUm91dGU+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgKTtcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJvdXRlcyA9IFtdO1xuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChjaGlsZCkpIHJvdXRlcy5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdXRlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cgYXMgeyB4LCB5IH0uXG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCkge1xuICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB3aXRob3V0IGEgRE9NJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZScpO1xuZXhwb3J0cy5MaW5rID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0xpbmsnKTtcbmV4cG9ydHMuTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG5leHBvcnRzLlJlZGlyZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JlZGlyZWN0Jyk7XG5leHBvcnRzLlJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRlJyk7XG5leHBvcnRzLkFjdGl2ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyJyk7XG5leHBvcnRzLlJvdXRlSGFuZGxlciA9IGV4cG9ydHMuQWN0aXZlSGFuZGxlcjtcblxuZXhwb3J0cy5IYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbmV4cG9ydHMuSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG5leHBvcnRzLlJlZnJlc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5TdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG5leHBvcnRzLlRlc3RMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1Rlc3RMb2NhdGlvbicpO1xuXG5leHBvcnRzLkltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG5leHBvcnRzLlNjcm9sbFRvVG9wQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9TY3JvbGxUb1RvcEJlaGF2aW9yJyk7XG5cbmV4cG9ydHMuSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uJyk7XG5leHBvcnRzLlN0YXRlID0gcmVxdWlyZSgnLi9TdGF0ZScpO1xuXG5leHBvcnRzLmNyZWF0ZVJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJvdXRlO1xuZXhwb3J0cy5jcmVhdGVEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlRGVmYXVsdFJvdXRlO1xuZXhwb3J0cy5jcmVhdGVOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZU5vdEZvdW5kUm91dGU7XG5leHBvcnRzLmNyZWF0ZVJlZGlyZWN0ID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJlZGlyZWN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcblxuZXhwb3J0cy5jcmVhdGUgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuZXhwb3J0cy5ydW4gPSByZXF1aXJlKCcuL3J1blJvdXRlcicpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gaXNWYWxpZENoaWxkKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENoaWxkcmVuKG9iamVjdCkge1xuICByZXR1cm4gaXNWYWxpZENoaWxkKG9iamVjdCkgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmIG9iamVjdC5ldmVyeShpc1ZhbGlkQ2hpbGQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG52YXIgX2FjdGlvblR5cGU7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBMb2NhdGlvbkFjdGlvbnMuUFVTSCkgSGlzdG9yeS5sZW5ndGggKz0gMTtcblxuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIYXNoTG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCgpIHtcbiAgdmFyIHBhdGggPSBIYXNoTG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKTtcblxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9SGFzaExvY2F0aW9uLnJlcGxhY2UoJy8nICsgcGF0aCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkhhc2hDaGFuZ2UoKSB7XG4gIGlmIChlbnN1cmVTbGFzaCgpKSB7XG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBfYWN0aW9uVHlwZSB0aGVuIGFsbCB3ZSBrbm93IGlzIHRoZSBoYXNoXG4gICAgLy8gY2hhbmdlZC4gSXQgd2FzIHByb2JhYmx5IGNhdXNlZCBieSB0aGUgdXNlciBjbGlja2luZyB0aGUgQmFja1xuICAgIC8vIGJ1dHRvbiwgYnV0IG1heSBoYXZlIGFsc28gYmVlbiB0aGUgRm9yd2FyZCBidXR0b24gb3IgbWFudWFsXG4gICAgLy8gbWFuaXB1bGF0aW9uLiBTbyBqdXN0IGd1ZXNzICdwb3AnLlxuICAgIHZhciBjdXJBY3Rpb25UeXBlID0gX2FjdGlvblR5cGU7XG4gICAgX2FjdGlvblR5cGUgPSBudWxsO1xuICAgIG5vdGlmeUNoYW5nZShjdXJBY3Rpb25UeXBlIHx8IExvY2F0aW9uQWN0aW9ucy5QT1ApO1xuICB9XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYC5cbiAqL1xudmFyIEhhc2hMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgLy8gRG8gdGhpcyBCRUZPUkUgbGlzdGVuaW5nIGZvciBoYXNoY2hhbmdlLlxuICAgIGVuc3VyZVNsYXNoKCk7XG5cbiAgICBpZiAoIV9pc0xpc3RlbmluZykge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBVU0g7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24gcG9wKCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBPUDtcbiAgICBIaXN0b3J5LmJhY2soKTtcbiAgfSxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSShcbiAgICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gICAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGFzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xudmFyIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBub3RpZnlDaGFuZ2UodHlwZSkge1xuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIaXN0b3J5TG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblBvcFN0YXRlKGV2ZW50KSB7XG4gIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QT1ApO1xufVxuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cbnZhciBIaXN0b3J5TG9jYXRpb24gPSB7XG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuICAgIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUFVTSCk7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGlzdG9yeUxvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIGZ1bGwgcGFnZSByZWZyZXNoZXMuIFRoaXMgaXMgdXNlZCBhc1xuICogdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAqIHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJLlxuICovXG52YXIgUmVmcmVzaExvY2F0aW9uID0ge1xuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBIaXN0b3J5LmJhY2ssXG5cbiAgZ2V0Q3VycmVudFBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8UmVmcmVzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWZyZXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xuXG5mdW5jdGlvbiB0aHJvd0Nhbm5vdE1vZGlmeSgpIHtcbiAgaW52YXJpYW50KGZhbHNlLCAnWW91IGNhbm5vdCBtb2RpZnkgYSBzdGF0aWMgbG9jYXRpb24nKTtcbn1cblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgb25seSBldmVyIGNvbnRhaW5zIGEgc2luZ2xlIHBhdGguIFVzZWZ1bCBpblxuICogc3RhdGVsZXNzIGVudmlyb25tZW50cyBsaWtlIHNlcnZlcnMgd2hlcmUgdGhlcmUgaXMgbm8gcGF0aCBoaXN0b3J5LFxuICogb25seSB0aGUgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LlxuICovXG5cbnZhciBTdGF0aWNMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpY0xvY2F0aW9uKHBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljTG9jYXRpb24pO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGF0aWNMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICc8U3RhdGljTG9jYXRpb24gcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGljTG9jYXRpb247XG59KSgpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5wdXNoID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucmVwbGFjZSA9IHRocm93Q2Fubm90TW9kaWZ5O1xuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnBvcCA9IHRocm93Q2Fubm90TW9kaWZ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpY0xvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBsb2NhdGlvbiB0aGF0IGlzIGNvbnZlbmllbnQgZm9yIHRlc3RpbmcgYW5kIGRvZXMgbm90IHJlcXVpcmUgYSBET00uXG4gKi9cblxudmFyIFRlc3RMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RMb2NhdGlvbihoaXN0b3J5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RMb2NhdGlvbik7XG5cbiAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5IHx8IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRlc3RMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICduZWVkc0RPTScsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZUhpc3RvcnlMZW5ndGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlSGlzdG9yeUxlbmd0aCgpIHtcbiAgICAgIEhpc3RvcnkubGVuZ3RoID0gdGhpcy5oaXN0b3J5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfbm90aWZ5Q2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeUNoYW5nZSh0eXBlKSB7XG4gICAgICB2YXIgY2hhbmdlID0ge1xuICAgICAgICBwYXRoOiB0aGlzLmdldEN1cnJlbnRQYXRoKCksXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkgdGhpcy5saXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZENoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUNoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpO1xuICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXBsYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgICBpbnZhcmlhbnQodGhpcy5oaXN0b3J5Lmxlbmd0aCwgJ1lvdSBjYW5ub3QgcmVwbGFjZSB0aGUgY3VycmVudCBwYXRoIHdpdGggbm8gaGlzdG9yeScpO1xuXG4gICAgICB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdID0gcGF0aDtcblxuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFBhdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxUZXN0TG9jYXRpb24+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGVzdExvY2F0aW9uO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlUm91dGVyID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXInKTtcblxuLyoqXG4gKiBBIGhpZ2gtbGV2ZWwgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgY3JlYXRlcywgY29uZmlndXJlcywgYW5kXG4gKiBydW5zIGEgcm91dGVyIGluIG9uZSBzaG90LiBUaGUgbWV0aG9kIHNpZ25hdHVyZSBpczpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzWywgbG9jYXRpb24gXSwgY2FsbGJhY2spO1xuICpcbiAqIFVzaW5nIGB3aW5kb3cubG9jYXRpb24uaGFzaGAgdG8gbWFuYWdlIHRoZSBVUkwsIHlvdSBjb3VsZCBkbzpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKiBcbiAqIFVzaW5nIEhUTUw1IGhpc3RvcnkgYW5kIGEgY3VzdG9tIFwiY3Vyc29yXCIgcHJvcDpcbiAqIFxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIgY3Vyc29yPXtjdXJzb3J9Lz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIHJvdXRlci5cbiAqXG4gKiBOb3RlOiBJZiB5b3UgbmVlZCB0byBzcGVjaWZ5IGZ1cnRoZXIgb3B0aW9ucyBmb3IgeW91ciByb3V0ZXIgc3VjaFxuICogYXMgZXJyb3IvYWJvcnQgaGFuZGxpbmcgb3IgY3VzdG9tIHNjcm9sbCBiZWhhdmlvciwgdXNlIFJvdXRlci5jcmVhdGVcbiAqIGluc3RlYWQuXG4gKlxuICogICB2YXIgcm91dGVyID0gUm91dGVyLmNyZWF0ZShvcHRpb25zKTtcbiAqICAgcm91dGVyLnJ1bihmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIC8vIC4uLlxuICogICB9KTtcbiAqL1xuZnVuY3Rpb24gcnVuUm91dGVyKHJvdXRlcywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGxvY2F0aW9uO1xuICAgIGxvY2F0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHZhciByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICB9KTtcblxuICByb3V0ZXIucnVuKGNhbGxiYWNrKTtcblxuICByZXR1cm4gcm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1blJvdXRlcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgLyohIHRha2VuIGZyb20gbW9kZXJuaXpyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAgICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAgICovXG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBTdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIFBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdHJpbmdpZnk6IFN0cmluZ2lmeSxcbiAgICBwYXJzZTogUGFyc2Vcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDBcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlVmFsdWVzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgdmFyIHBvcyA9IHBhcnQuaW5kZXhPZignXT0nKSA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IHBhcnQuaW5kZXhPZignXT0nKSArIDE7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG9ialtVdGlscy5kZWNvZGUocGFydCldID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UoMCwgcG9zKSk7XG4gICAgICAgICAgICB2YXIgdmFsID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UocG9zICsgMSkpO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gW10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWNoYWluLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHZhciByb290ID0gY2hhaW4uc2hpZnQoKTtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAocm9vdCA9PT0gJ1tdJykge1xuICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgb2JqID0gb2JqLmNvbmNhdChpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3RbMF0gPT09ICdbJyAmJiByb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgcm9vdC5sZW5ndGggLSAxKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJyArIGluZGV4O1xuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleFN0cmluZyA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpIHtcblxuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VLZXlzID0gZnVuY3Rpb24gKGtleSwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIHBhcmVudCA9IC9eKFteXFxbXFxdXSopLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teXFxbXFxdXSpcXF0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBwYXJlbnQuZXhlYyhrZXkpO1xuXG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlbSB0byBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHNlZ21lbnRbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcblxuICAgICAgICArK2k7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybmFscy5wYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8XG4gICAgICAgIHN0ciA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgVXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBpbnRlcm5hbHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogaW50ZXJuYWxzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogaW50ZXJuYWxzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBpbnRlcm5hbHMucGFyYW1ldGVyTGltaXQ7XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gaW50ZXJuYWxzLnBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBpbnRlcm5hbHMucGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gVXRpbHMubWVyZ2Uob2JqLCBuZXdPYmopO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGFycmF5UHJlZml4R2VuZXJhdG9yczoge1xuICAgICAgICBicmFja2V0czogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICAgICAgfSxcbiAgICAgICAgaW5kaWNlczogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgICAgICB9LFxuICAgICAgICByZXBlYXQ6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuaW50ZXJuYWxzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHByZWZpeCwgZ2VuZXJhdGVBcnJheVByZWZpeCkge1xuXG4gICAgaWYgKFV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSB7XG5cbiAgICAgICAgcmV0dXJuIFtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmopXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIHByZWZpeCArICdbJyArIGtleSArICddJywgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGludGVybmFscy5kZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcjtcblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwga2V5LCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc291cmNlLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblxuICAgICAgICB0YXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgZm9yICh2YXIgayA9IDAsIGtsID0ga2V5cy5sZW5ndGg7IGsgPCBrbDsgKytrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBleHBvcnRzLm1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZzKSB7XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZWZzID0gcmVmcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iai5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbiAob2JqKSB7XG5cbiAgICBpZiAob2JqID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FuVXNlRE9NID0gISEoXG4gICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24oYXJnKSB7IHJldHVybiBhcmc7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgd2FybmluZ1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2VtcHR5RnVuY3Rpb25cIik7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQgKSB7Zm9yICh2YXIgYXJncz1bXSwkX18wPTIsJF9fMT1hcmd1bWVudHMubGVuZ3RoOyRfXzA8JF9fMTskX18wKyspIGFyZ3MucHVzaChhcmd1bWVudHNbJF9fMF0pO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8IC9eW3NcXFddKiQvLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpICB7cmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107fSk7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vLi4vYXBwL2FwcC5qcycpO1xudmFyIFRlc3RVdGlscyA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucycpLlRlc3RVdGlscztcblxuZGVzY3JpYmUoXCJBcHBcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KEFwcCgpKTtcbiAgICBcbiAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgfSk7XG5cbn0pOyJdfQ==

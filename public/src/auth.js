var authenticateUser = function(username, password, callback) {
  return $.ajax('/authenticate', {
    type: 'POST',
    data: JSON.stringify({
      username: username,
      password: password
    }),
    success: function(resp) {
      return callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      return callback({
        authenticated: false
      });
    }
  });
};

var createUser = function(username, password, firstname, lastname, callback) {
  return $.ajax('/createUser', {
    type: 'POST',
    data: JSON.stringify({
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname
    }),
    // contentType: "application/json",
    success: function(resp) {
      return callback({
        authenticated: true,
        token: resp.auth_token
      });
    },
    error: function(resp) {
      return callback({
        authenticated: false
      });
    }
  });
};

var Auth = {
  user: {
    name: ''
  },
  login: function(username, pass, callback) {
    console.log('trying to log in...');

    var that = this;
    if (this.loggedIn()) {
      console.log('already logged in');
      if (callback) {
        callback(true);
      }
      this.onChange(true);
      return;
    }
    return authenticateUser(username, pass, (function(_this) {
      console.log('not logged in... logging in now');
      return function(res) {
        var authenticated = false;
        if (res.authenticated) {
          console.log('login successful!');
          localStorage.token = res.token;
          authenticated = true;
          console.log(username);
          that.user.name = username;
        }
        if (callback) {
          callback(authenticated);
        }
        return _this.onChange(authenticated);
      };
    })(this));
  },
  signup: function(username, password, firstname, lastname, callback) {
    if (this.loggedIn()) {
      if (callback) {
        callback(true);
      }
      this.onChange(true);
      return;
    }
    return createUser(username, password, firstname, lastname, (function(_this) {
      return function(res) {
        var authenticated = false;
        if (res.authenticated) {
          localStorage.token = res.token;
          authenticated = true;
        }
        if (callback) {
          callback(authenticated);
        }
        return _this.onChange(authenticated);
      };
    })(this));
  },
  getToken: function() {
    return localStorage.token;
  },
  logout: function(callback) {
    delete localStorage.token;
    if (callback) {
      callback();
    }
    return this.onChange(false);
  },
  loggedIn: function() {
    return !!localStorage.token;
  },
  onChange: function() {}
};
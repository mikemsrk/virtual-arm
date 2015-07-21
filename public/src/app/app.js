var Router = window.ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Route = ReactRouter.Route;
var RouteHandler = Router.RouteHandler;
var Navigation = Router.Navigation;

var Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function(){
    return {
      loggedIn: Auth.loggedIn()
    };
  },
  setStateOnAuth: function(loggedIn){
    this.setState({
      loggedIn: loggedIn
    });
  },
  componentWillMount: function(){
    Auth.onChange = this.setStateOnAuth;
  },
  render: function(){
    return (
      <div>
        <Navbar/>
        <RouteHandler/>
      </div>
    );
  }
});

// Currently does not work.
function requireAuth(nextState, transition) {
  if (!Auth.loggedIn()){
    // TODO: stop transition or transition backto login.
    // transition.to('/login', null, { nextPathname: nextState.location.pathname });
    location.hash = '/login';
  }
}

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute path="main" handler={Main}/>
    <Route path="profile" handler={Profile}/>
    <Route path="login" handler={Login}/>
    <Route path="logout" handler={Logout}/>
    <Route path="signup" handler={Signup}/>
    <Route path="game" handler={Game} onEnter={requireAuth()}/>
    <Route path="vr" handler={Environment}/>
    <Route path="gallery" handler={Gallery}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById('content'));
});

// React.render(
//   <Login />,
//   document.getElementById('content')
// );
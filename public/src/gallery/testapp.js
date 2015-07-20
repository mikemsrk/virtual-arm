var React = require('react');
var Gallery = require('./gallery');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <Gallery />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('content')
)

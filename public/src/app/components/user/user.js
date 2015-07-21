var React = require('react');
var AuthStore = require('../../stores/AuthStore');
var ProfileStore = require('../../stores/ProfileStore');
var ProfileActions = require('../../actions/ProfileActions');
var Bio = require('./user-bio');
var BioThreads = require('./user-threads');

var User = React.createClass({
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
      <div className="profile">
        <Bio item={this.state} />
        <BioThreads />
      </div>
    );
  }
});

module.exports = User;
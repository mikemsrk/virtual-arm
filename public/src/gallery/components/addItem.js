var React = require("react")

var AddItem = React.createClass({
	handleSubmit: function(e){
	    if(e.keyCode === 13){	
			var newItem = e.target.value;
			e.target.value = '';
			this.props.add(newItem); // this is from gallery.js
		}
	},

	render: function(){
		return (
			<div class="col-xs-4 gallery-item-submit-btn" >
				<input type="text" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit} />
			</div>
		)
	}
})

module.exports = AddItem;
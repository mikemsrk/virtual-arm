var React = require("react")

var GalleryItem = React.createClass({
	render: function(){

		var listItem = this.props.items.map(function(item, index){
			return (
				<li key={index} onClick={this.props.remove.bind(null, index)}>
					<span> {item.title}</span>
					<p> {item.description} </p>
					<img src={item.src} width="200"/>
				</li>
			)
		}.bind(this));

		return (
			<ul>
				{listItem}
			</ul>
		)
	}
})


module.exports = GalleryItem;
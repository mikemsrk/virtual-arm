var React = require("react")

var GalleryItem = React.createClass({
	removeItem: function(index){
		this.props.onRemove(index)


		// return function(e) {
		//   e.preventDefault();
		//   return this.props.onRemove(index);
		// }.bind(this);
	},

	render: function(){
		// onClick={this.removeItem(index)}
		// onClick={this.props.onRemove.bind(null, index)} 
		var listItem = this.props.items.map(function(item, index){
			return (
				<li key={index}   >
					<span className="glyphicon glyphicon-remove removeGlyphicon" onClick={this.removeItem}  > </span>
					<span> {item.title}</span>
					<p> {item.description} </p>
					<img src={item.src} className="gallery-item-photo"/>
				</li>
			)
		}.bind(this));

		return (
			<div className="gallery-itemlist-row center-block" >
				<ul>
					{listItem}
				</ul>
			</div>
		)
	}
})


module.exports = GalleryItem;
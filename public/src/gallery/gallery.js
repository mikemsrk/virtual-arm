var React = require('react')
var GalleryItem = require('./components/galleryItem')
var AddItem = require('./components/addItem')
var GalleryStore = require('./stores/galleryStore')
var GalleryAction = require("./actions/galleryActions")

var Gallery = React.createClass({
  
	getInitialState: function(){
		return {
			list: GalleryStore.getList()
		}
	},

  componentWillMount: function(){
    GalleryStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function(){
    GalleryStore.removeChangeListener(this._onChange)
  },

  handleAddItem: function(item){
    GalleryAction.addItem(item)
  },

  handleRemoveItem: function(index){
    GalleryAction.removeItem(index)
  
  },

  _onChange: function(){
    console.log("onChange happend");
    this.setState({
      list: GalleryStore.getList()
    })
  },

  render: function() {
    return (
      <div className="bryantest">
        <h2>Gallery of awesome VR</h2>
        <AddItem add={this.handleAddItem}/>
        <GalleryItem items={this.state.list} remove={this.handleRemoveItem} />
      </div>
    );
  }
});

window.Gallery = Gallery
var React = require('react')
var Alert = require('react-bootstrap/lib/Alert');
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

  componentDidMount: function(){
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
    // this.state.list.splice(index, 1);

    // this.setState({
    //   list: this.state.list
    // });
  
  },

  _onChange: function(){
    console.log("onChange happend");
    this.setState({
      list: GalleryStore.getList()
    })
  },

  render: function() {
    return (
      <div className="container-gallery">
        <div className="row gallery-main-row">
            <div className="col-md-8 gallery-items-row">
              <h2>Gallery of awesome VR</h2>
              <GalleryItem items={this.state.list} onRemove={this.handleRemoveItem} />
            </div>
            <div className="col-md-4">
              <AddItem add={this.handleAddItem}/>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Gallery;

window.Gallery = Gallery
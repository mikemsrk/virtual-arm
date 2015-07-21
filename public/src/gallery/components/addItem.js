var React = require("react")
var Dropzone = require("react-dropzone")
var request = require("superagent")

var AddItem = React.createClass({
	handleSubmit: function(e){
	    if(e.keyCode === 13){	
			var newItem = e.target.value;
			e.target.value = '';
			this.props.add(newItem); // this is from gallery.js
		}
	},

	onDrop: function(files){
		var req = request.post('/galleryp');
		files.forEach(function(file){
		    req.attach(file.name, file);
		});
		req.end(function(end, err){
			console.log("sending finish...", end, err)
		});
	},
	photosubmit: function(e){



	},

	render: function(){
		return (
			<div class="col-xs-4 gallery-item-submit-btn" >
				<input type="text" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit} />
				<form encType="multipart/form-data" action="/galleryp" method="post"> 
				  <input type="file" name="fileTag" /> 
				  <input type="submit" value="upload" onClick={this.photosubmit} /> 
				</form> 
				<Dropzone onDrop={this.onDrop} >
            <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
			</div>
		)
	}
})

module.exports = AddItem;

/*

				<form encType="multipart/form-data" action="/galleryp" method="post"> 
				  <input type="file" name="fileTag" /> 
				  <input type="submit" value="upload" /> 
				</form> 
*/
var Cylinder = function(){

	var geo = new THREE.CylinderGeometry();
	var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x009900, shininess: 30, shading: THREE.FlatShading });
	var mesh = new THREE.Mesh(geo,material);
	mesh.position.x = 0;
	mesh.position.z = -120;

	return mesh;


}());
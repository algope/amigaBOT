var GeoJSON = require('geojson');

module.exports = function(RED){

    function ToGeoJSON(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = GeoJSON.parse(msg.payload, {Point: ['lat', 'lon']});
            node.send(msg);
        });
    }
    RED.nodes.registerType("geo-json",ToGeoJSON);
};
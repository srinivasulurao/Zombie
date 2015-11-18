cordova.define("cordova-plugin-video-editor.VideoEditor", function(require, exports, module) { //
//  VideoEditor.js
//
//  Created by Josh Bavari on 01-14-2014
//  Modified by Ross Martin on 01-29-15
//

var exec = require('cordova/exec'),
    pluginName = 'VideoEditor';

function VideoEditor() {
}

VideoEditor.prototype.transcodeVideo = function(success, error, options) {
    exec(success, error, pluginName, 'transcodeVideo', [options]);
};

VideoEditor.prototype.trim = function(success, error, options) {
    exec(success, error, pluginName, 'trim', [options]);
};

VideoEditor.prototype.createThumbnail = function(success, error, options) {
    exec(success, error, pluginName, 'createThumbnail', [options]);
};

VideoEditor.prototype.execFFMPEG = function(success, error, options) {
    exec(success, error, pluginName, 'execFFMPEG', [options]);
};

module.exports = new VideoEditor();
});

import dispatcher from "../dispatcher";
import axios from 'axios';

export function uploadFile(file) {
    dispatcher.dispatch({ type: 'UPLOAD_FILE' });
    
    var formData = new FormData();
    formData.append('file', file);

    var config = {
        onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        }
    };
    axios.post('/file',formData,config)
    .then(function(res){
         dispatcher.dispatch(
                { type: "UPLOAD_FILE_SUCCESS" })
        console.log("file uploaded",res)})
    .catch(function(res){
        dispatcher.dispatch(
            {type: "UPLOAD_FILE_ERROR"});
        console.log("error",res)});
            
}

AWS.config.update({
  region: "ap-south-1",	
  credentials: new AWS.Credentials({
  	accessKeyId:'AKIAIPREX5RHQUOH2N6Q',
  	secretAccessKey:'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'
  })
});
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: 'uploadfileinbucket'}
});
function upload(){
	//var bucket = new AWS.S3({params: {Bucket: 'uploadfileinbucket'}});
  document.getElementById("loader").style.display="block"
	var files=document.getElementById("file-7").files;
	var file = files[0]
  //alert(localStorage.getItem('path'))
  var metadata={
    "key":"images/"+localStorage.getItem('path'),
    "emailaddress": document.getElementById("emailaddress").value
  }
  //alert(document.getElementById("emailaddress").value)
	var params = {Key: "uploaded/"+file.name, Body: file, ACL: 'public-read', Metadata: metadata};
	/*s3.upload(params, function (err, data) {
  		console.log(err, data);
  		if(err){
  			return alert("Unsuccessful!!")
  		}
  		alert("Success!");
	});*/
  s3.upload(params).on('httpUploadProgress', function(evt) {console.log("Uploaded :: " + parseInt((evt.loaded * 100) / evt.total)+'%');}).send(function(err, data) {
      document.getElementById("loader").style.display="none"
      document.getElementById('target').removeAttribute('src')
      console.log(data)
      alert("File uploaded successfully. Check your mail for the processed image");
      window.location.href="home.html"
  });
  
}
function displayImage(src,target) {
  var fr=new FileReader();
  // when image is loaded, set the src of the image where you want to display it
  fr.onload = function(e) { target.src = this.result; };
  src.addEventListener("change",function() {
    // fill fr with image data    
    fr.readAsDataURL(src.files[0]);
  });
}

var src = document.getElementById("file-7");
var target = document.getElementById("target");
displayImage(src,target);


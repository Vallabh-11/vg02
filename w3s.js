document.getElementById('edu').innerHTML="Profile";
//text public profile changed to profile 
//getelemtbyid ->method
//innerHTML->property 


document.getElementById("btn").onclick=displaydate;

function displaydate() {
	// body...

 document.getElementById("demo").innerHTML = Date();
}

document.getElementById("btn").addEventListener("click",displayalert);
function displayalert()
{
	alert(Math.random());
}
function previewFile() {
    // Where you will display your image
    var preview = document.querySelector('img');
    // The button where the user chooses the local image to display
    var file = document.querySelector('input[type=file]').files[0];
    // FileReader instance
    var reader  = new FileReader();

    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
      preview.src = reader.result;
    }

    
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
    } else {
      preview.src = "profilepic.jpg";
    }
  }
  <input type="file" onchange="previewFile()"><br>
  <img src="profilepic.jpg" height="200" alt="Image preview...">

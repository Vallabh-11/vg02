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

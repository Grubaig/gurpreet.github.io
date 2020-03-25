let myimage=document.querySelector('img');
myimage.onclick=function()
{
	let mysrc=myimage.getAttribute('src');
	if(mysrc==='images/road.jpg')
	{
		myimage.setAttribute('src','images/seascape.jpg');

	}
	else{
		myimage.setAttribute('src','images/road.jpg');
	}
}

document.querySelector('p').onclick = function() {
    alert('Ouch! Stop poking me!');
}
let mybutton=document.querySelector('button');
let myheading=document.querySelector('p')
function setusername(){
	let myname=prompt('please enter your name.')
	if(!myname||myname===null)
		{setusername();}
	else{
	localStorage.setItem('name',myname);
	myheading.innerHTML='mozilla is cool,..'+ myname;
}

}
if (!localStorage.getItem('name')){
	setusername();
}
	else{
			let storedname=localStorage.getItem('name');
			myheading.textContent='mozilla is cool,,,.'+storedname;
	}
mybutton.onclick=function(){
	setusername();
}
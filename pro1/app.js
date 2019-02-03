var btns=document.querySelectorAll('#movie-list .delete');
btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
	const li=e.target.parentElement;
	li.parentNode.removeChild(li);
	});
});
/*
arrays

title
title.forEach(function (t){
	console.log(t);
})

var titleArr= Array.from(title);
titleArr
titleArr.forEach(function(t){
	console.log(t);
})

query selector

var pB=document.querySelector('#page-banner');
pB
var pB1=document.querySelector('#page-banner .title');
pB1
var movie3=document.querySelector('#movie-list:nth-child(2) .name');
movie3
var movie1=document.querySelector('#movie-list li .name');
var movie1=document.querySelectorAll('#movie-list li .name');
document.querySelectorAll('title');
movie1.forEach(function(movie){
	console.log(movie.innerHTML);
})
movie1.forEach(function(movie){
	movie.textContent+= ' Rises';
})
var banner=document.querySelector('#page-banner');
banner
banner.nodeType
banner.nodeName
banner.hasChildNodes();
var eventEx=document.querySelector('#movie-list .title');
eventEx
eventEx.addEventListener('click', function(e){
	console.log('Clicked the title');
})
var btns=document.querySelectorAll('#movie-list .delete');
btns.forEach(function(btn){
	btns.addEventListener('click', function(e){
	const li=e.target.parentElement;
	li.parentNode.removeChild(li);
	});
});

var list=document.querySelector('#movie-list ul');
list.addEventListener('click', funtion(e){
	if(e.terget.className === 'delete'){
		console.log(e.target);
		const li=e.target.parentElement;
		console.log(li);
		li.parentNode.removeChild(li);
		list.removeChild(li);
	}
})
*/
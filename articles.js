function showNextEventDate(eventDay) {      
	var eventTag = document.getElementById("eventBanner");
	var newTitleString = eventTag.getAttribute('title') + getNextEventDate();
	eventTag.setAttribute('title', newTitleString);

	function getNextEventDate() {
  		var currentDate = new Date();
  		var diff = eventDay - currentDate.getDay();
  		if (diff <= 0) diff += 7;
  		currentDate.setDate(currentDate.getDate() + diff);
  		return currentDate.toLocaleDateString();
	}  
}  

/* http://learn.javascript.ru/play/30duxb
http://learn.javascript.ru/play/TbYi9b */

function rewriteLongLi() {
  var $p = $('.two_columns li p');
  var h = parseInt($p.css('lineHeight')) || parseFloat($p.css('fontSize')) * 1.15 ^ 0;
 $p.each(function() {
    var p = this;
	var li = p.parentNode;
	var scroll = li.scrollHeight - li.clientHeight;
	if (scroll) {
		p.style.height = (p.clientHeight - Math.ceil(scroll / h) * h - h) + 'px';
		p.className += ' continue';
		var a = document.createElement('a');
		a.href = '#';
        a.style.fontSize = $p.css('fontSize');
		a.onclick = function() {loadPage('<h4>' + $(li).find('h4')[0].innerHTML + '</h4>' + p.innerHTML);};
		a.appendChild(document.createTextNode('Е читать дальше'));
		li.appendChild(a);
	}
  });
}


function loadPage(fileName) {
$('article').slice(1).remove().end()
            .load(fileName, function( response, status, xhr ) {
								if ( status == "error" ) $('article').html(fileName);
							});
}
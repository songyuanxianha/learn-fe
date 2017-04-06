$('input').click( function() {
	if ($(this).attr('value') == '上移') {
		$(this).parent('li').prev().before($(this).parent('li'));
	}
	if ($(this).attr('value') == '下移') {
		$(this).parent('li').next().after($(this).parent('li'));
	}
});
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></span></i>"+ todoText + "</li>");
	}
});

$("ul").on("mouseenter", "span", function(){
	$(this).css({
		"width": "40px",
		"opacity": "1.0"
	});
});

$("ul").on("mouseleave", "span", function(){
	$(this).css("width", "0");
});

$(".fa-plus-square-o").on("click", function(){
	$("input[type='text']").fadeToggle();
});
$('header').append('<div class="burguer"><span></span><span></span><span></span></div>');

$('.burguer').on('click',function(){
    
		 $('.burguer').toggleClass('burguer-click');
		$('.menu').toggleClass('menu-click');
});


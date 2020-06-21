/*show parragraf*/
$('.btn1').click(function(){
    $('#show').show(500);
    $('.shown').show(500);
    $('.search').fadeOut(400);
    
})
$('#code').click(function(){
    $('#show').hide(500);
    $('.shown').hide(500);
    $('.search').fadeIn(400);
    
})



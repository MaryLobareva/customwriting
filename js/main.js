$('.spoiler').hide()
$('.content-cont article button').on('click', function(){
   $(this).toggleClass('active');
   $(this).parent().children('.spoiler').toggle('normal');
   return false;
});

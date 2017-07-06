// $(document).ready(function ($) {
//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });
// 	var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
// 	$('#slider').css({ width: slideWidth, height: slideHeight });
// 	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//     $('#slider ul li:last-child').prependTo('#slider ul');
//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//     $('a.control_prev').click(function () {
//         moveLeft();
//     });
//     $('a.control_next').click(function () {
//         moveRight();
//     });
// });    
// $(function(){
//     $('#next').on('click', function(){
//             $('ul li.active').removeClass('active').next().addClass('active')
//     })
//     $('#prev').on('click', function(){
//             $('ul li.active').removeClass('active').prev().addClass('active')
//     })
//     $('.parent').on('click', function(){
//             $('li').parent().toggleClass('parent')
//     })
//     console.log($('ul').children())
//     console.log($('li').last().siblings())
//     console.log($('li').last().siblings())
// })
$(function () {
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');
    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }
    ;
    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }
    ;
    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });
});
//# sourceMappingURL=slider.js.map
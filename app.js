
function pageActivator(page) {
    $('.page-section').removeClass('active');
    page.addClass('active');
}

$('.link').click(function() {
    var pageNum = parseInt($(this).attr('class').match(/\d+/g)[0]);
    pageActivator($('.page-' + pageNum));
});

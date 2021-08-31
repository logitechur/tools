var loader = function() {
    setTimeout(function() {
        $('#loader').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
    }, 3333);
};
$(function() {
    loader();
});
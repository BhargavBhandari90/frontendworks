$(document).ready(function () {
    const $modal = $('#video-modal');
    const $iframe = $('#youtube-video');

    $(document).on('click', '.feature-hero__play-video', function (e) {
        e.preventDefault();
        const videoURL = 'https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1';
        $iframe.attr('src', videoURL);
        $modal.css('display', 'flex');
    });

    $(document).on('click', '.video-modal__close', function () {
        $modal.css('display', 'none');
        $iframe.attr('src', '');
    });

    $(window).on('click', function (e) {
        if ($(e.target).is($modal)) {
            $modal.css('display', 'none');
            $iframe.attr('src', '');
        }
    });

    $(document).on('keydown', function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('.video-modal__close').trigger('click');
        }
    });
});
import app from 'flarum/app';

export default function (url) {
    $('body').css({
        'background-attachment': 'fixed',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        '-webkit-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-image': 'url(/api/irony/bing/wallpaper)'
    });
    $('.Scrubber-handle').css('background', 'none');
    if (app.session.user && app.session.user.preferences().fofNightMode) {
        // 夜晚模式
        $('#app').css('background-color', 'rgba(0, 0, 0, .8)');
    } else {
        $('#app').css('background-color', 'rgba(255, 255, 255, .8)');
    }
}
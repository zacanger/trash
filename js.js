$(document).ready(function() {

    $('.controls').hide();
    $('.stats').hide();
    $('.reply').hide();
    $('.tweet-actions').hide();

    $('.tweet-compose').click(function() {
        $(this).height('5em');
        $('.controls').show();
    });

    $('.tweet-compose').on('keyup keydown', function() {
        var characters = $(this).val().length;
        $('.count').text(140 - characters);
        var count = $('.count').text();
        console.log(count);

        if (count <= 10) {
            $('.count').css('color', 'red');
        } else {
            $('.count').css('color', 'black');
        }

        if (count <= 0) {
            $('.tweet-submit').attr('disabled', true);
        } else {
            $('.tweet-submit').attr('disabled', false);
        }
    });

    $('.tweet-submit').on('click', function() {
        var newTweet = $('.originalTweet').clone();
        var newTweetText = $('.tweet-compose').val();

        newTweet.find('.tweet').removeClass(".originalTweet");
        newTweet.find('img').attr('src', 'img/men18.jpg');
        newTweet.find('.fullname').text('thisGUY');
        newTweet.find('.username').text('@thisGUY');
        newTweet.find('.tweet-text').text(newTweetText);
        $('.stream').prepend(newTweet);
        $('.tweet-compose').val('');

    });

    var swap = true;

    $(document).on('click', '.content', function() {
        if (swap) {
            $(this).find('.stats').toggle(swap);
            $(this).find('.reply').toggle(swap);
            swap = false;
        } else {
            $(this).find('.stats').toggle(swap);
            $(this).find('.reply').toggle(swap);
            swap = true;
        }
    });

    $(document).on('mouseenter', '.content', function() {
        $('tweet-actions').show();
    });

    $(document).on('mouseleave', '.content', function() {
        $('tweet-actions').hide();
    });
});

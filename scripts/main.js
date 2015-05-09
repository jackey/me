(function ($) {
    $(function () {
        $('.body .tab-nav li').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        $('.body .tab-nav li').click(function () {
            var target = $($(this).data('target'));

            $('.tab-content > div').addClass('hideme');

            target.removeClass('hideme');
        });

        $('.wechat-ll').click(function () {
            if ($('.wechat-pp').hasClass('hideme')) {
                $('.wechat-pp').removeClass('hideme');
            }
            else {
                $('.wechat-pp').addClass('hideme');
            }
        });

        $('body').click(function (event) {
            var target = $(event.target);
            if (target.hasClass('wechat-pp') || target.hasClass('wechat-ll') || target.parents('.wechat-pp').size() > 0) {
                event.preventDefault();
            }
            else {
                $('.wechat-pp').addClass('hideme');
            }
        });
    });
})(jQuery);
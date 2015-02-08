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
    });
})(jQuery);
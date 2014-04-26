(function ($) {

  Drupal.behaviors.captcha_entity_forms = {
    attach: function (context) {
			$('.captcha.form-wrapper').insertBefore($('#edit-actions'));
		}
	};
})(jQuery);
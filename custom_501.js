(function ($) {

  Drupal.behaviors.buy_a_halo = {
    attach: function (context) {
			$('#edit-submit-buy-a-halo').click(function(e){
				if ($('#edit-combine-2').val() == 'First Name') {
					$('#edit-combine-2').val('');
				}
				if ($('#edit-combine').val() == 'Last or Maiden') {
					$('#edit-combine').val('');
				}
				$(document).unbind('ajaxComplete');
				$(document).ajaxComplete(function(event, xhr, settings) {
					$('input[type=text]').val('');
					$('select').val('- Any -');
					$('select').trigger("liszt:updated");
					if ($('#search-results-label').html() == null) {
						alert('Oops! No records found. We do not have enough information or perhaps a name is misspelled. Please enter as much accurate information as you know.');
					}
					if (settings.extraData._triggering_element_value == 'Add to cart') {
						$("html, body").animate({ scrollTop: 0 }, "slow");
					}
				});
			});
			$('#edit-reset').click(function(e){
				e.preventDefault();
				$('input[type=text]').val('');
				$('select').val('- Any -');
				$('select').trigger("liszt:updated");
				$('.region-content-inner .view-content').html('<p id="search-empty-text">Enter your search terms</p>');
				$('ul.pager').parent().remove();
			});
			
			var watermark = 'First Name';
      
			//init, set watermark text and class
			$('#edit-combine-2').val(watermark).addClass('watermark');
      
			//if blur and no value inside, set watermark text and class again.
			$('#edit-combine-2').blur(function(){
					if ($(this).val().length == 0){
			  		$(this).val(watermark).addClass('watermark');
				}
			});
      
			//if focus and text is watermrk, set it to empty and remove the watermark class
			$('#edit-combine-2').focus(function(){
					if ($(this).val() == watermark){
			  		$(this).val('').removeClass('watermark');
				}
			});
			
			var watermark1 = 'Last or Maiden';
      
			//init, set watermark text and class
			$('#edit-combine').val(watermark1).addClass('watermark');
      
			//if blur and no value inside, set watermark text and class again.
			$('#edit-combine').blur(function(){
					if ($(this).val().length == 0){
			  		$(this).val(watermark1).addClass('watermark');
				}
			});
      
			//if focus and text is watermrk, set it to empty and remove the watermark class
			$('#edit-combine').focus(function(){
					if ($(this).val() == watermark1){
			  		$(this).val('').removeClass('watermark');
				}
			});
		}
	};
})(jQuery);

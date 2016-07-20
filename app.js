jQuery(document).ready(function() {
  var submit = jQuery('#submit');

  submit.onclick = function () {
    alert("All of your information was valid, right? I'll just go ahead and assume that it is ;)\n\nThanks for your submission!");
  };

  jQuery('#correct-order').on('click', function() {
    hideOrShowSection('#correct-order', '#your-info');
  });

  jQuery('#different-BA').on('click', function() {
    hideOrShowSection('#different-BA', '#billing-address');
  });

  var previousInputValue = '';
  var numberOfRquiredFields = 13;
  var progressBarMax = 91;
  var offset = 100 / numberOfRquiredFields;

  jQuery('input').focusin(function() {
    console.log('in');

    if(!jQuery(this).is(':checkbox')) {
      previousInputValue = jQuery(this).val();
      console.log(previousInputValue);
    }
  });

    
  jQuery('input').focusout(function() {
    var inputValue = jQuery(this).val();
    offset = 100 / numberOfRquiredFields;

    if($(this).prop('required')) {

      if(!jQuery(this).is(':checkbox') && inputValue !== previousInputValue) {
        var progressValue = parseInt(jQuery('progress').val());

        if(inputValue === '') {
          progressValue = progressValue - offset;
        } else if (previousInputValue === '') {
          progressValue = progressValue + offset
        }
        jQuery('progress').attr('value', progressValue);
      }
    }
  });
 
  jQuery('#different-BA').on('click', function(){
    numberOfRquiredFields = numberOfRquiredFields === 13 ? 20 : 13;
    progressBarMax = progressBarMax === 91 ? 100 : 91;
    handleProgressBar();
  });

  function handleProgressBar() {
      var offset = 100 / numberOfRquiredFields;
      var progressValue = 0;
      jQuery('input:visible').each(function() {
          var inputValue = jQuery(this).val();
          if(jQuery(this).prop('required')) {
            console.log('dentro');
            if(isNotCheckBox(this) && inputValue !== '') {
              progressValue = progressValue + offset;
            }
          }
      });
      console.log(progressValue);
      jQuery('progress').attr('value', progressValue);
  }

  function isNotCheckBox(selector) {
    return !jQuery(selector).is(':checkbox');
  }

  function hideOrShowSection(checkboxElSelector, sectionSelector) {
    var section = jQuery(sectionSelector);
    if(jQuery(checkboxElSelector).prop('checked') === true){
      section.show(); 
    } else {
      section.hide();
    }
  }
})

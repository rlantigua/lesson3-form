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
  var offset = 100 / numberOfRquiredFields;

  jQuery('input').focusin(function() {
    console.log('in');

    if(!jQuery(this).is(':checkbox')) {
      previousInputValue = jQuery(this).val();
      console.log(previousInputValue);
    }
  });

  // jQuery('#different-BA').on('click', function(){
  //   numberOfRquiredFields = numberOfRquiredFields == 13 ? 20 : 13;
  //   var offset = 100 / numberOfRquiredFields;

  //   var progressValue = parseInt(jQuery('progress').val());

  //       if(inputValue === '') {
  //         progressValue = progressValue - offset;
  //       } else if (previousInputValue === '') {
  //         progressValue = progressValue + offset
  //       }
  // });
      
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

  // jQuery('#different-BA').on('click', function() {
  //   numberOfRquiredFields = numberOfRquiredFields === 13 ? 20 : 13;
  //   offset = 100 / numberOfRquiredFields;
  //   var progressValue = parseInt(jQuery('progress').val());

  //   jQuery('#billing-address').find('input').each(function() {
  //     if($(this).prop('required') && jQuery(this.val() !== '')) {
  //       progressValue = progressValue - offset;
  //     }
  //   });
  //   jQuery('progress').attr('value', progressValue);
  // });

  function handleProgressBar() {

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
8093276778
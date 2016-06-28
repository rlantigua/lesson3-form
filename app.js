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

  function hideOrShowSection(checkboxElSelector, sectionSelector) {
    var section = jQuery(sectionSelector);
    if(jQuery(checkboxElSelector).prop('checked') === true){
      section.show(); 
    } else {
      section.hide();
    }
  }
})

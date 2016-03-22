import $ from 'jquery';

$('.testimonial-quote').each(function() {
  var $this   = $(this);
  var $group  = $this.find('.quote-container');
  var $quote = $this.find('.quote');
  var buttonArray  = [];
  var currentIndex = 0;

  function move(newIndex) {
    var animateLeft, slideLeft;

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $quote.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    $group.animate( {left: animateLeft}, function() {
      $quote.eq(currentIndex).css( {display: 'none'} );
      $quote.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = newIndex;
    });
  }

  $.each($quote, function(index) {
    var $button = $('<button class="slide-btn" ontouchstart="">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide-buttons');
    buttonArray.push($button);
  });
});

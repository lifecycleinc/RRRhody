$(function() {
  var setHeight = function() {
   var heights, itemInfos, maxHeight;

    equalize = this.$('.equalize');
    equalize.height('auto');

    heights = _.map(equalize, function(itemInfo) {
      return $(itemInfo).height();
    });

    maxHeight = _.max(heights);

    return equalize.height(maxHeight);
  };

  setHeight();

  $(window).on('resize', _.debounce(setHeight, 150));
});

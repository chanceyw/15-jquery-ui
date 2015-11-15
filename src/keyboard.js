$(function() {
  var $write = $('#write'),

    $(`.keyboard-row li`).click(function() {
      var $this = $(this),
        character = $this.html();

      $write.html($write.html() + character);
    });
});
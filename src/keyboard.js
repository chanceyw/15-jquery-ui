//globals $
  export default function() {
    var enter = $(`#write`);

    $(`.keyboard-row .keyboard-button`).click(function() {
      var char = $(this).html();

      enter.html(enter.html() + char);
    });

    $(`.keyboard-row .keyboard-button_tab`).click(function() {
      var char = `\t`;

      enter.html(enter.html() + char);
    });

    $(`.keyboard-row .keyboard-button_space`).click(function() {
      var char = ` `;

      enter.html(enter.html() + char);
    });

    $(`.keyboard-row .keyboard-button_return`).click(function() {
      var char = `\n`;

      enter.html(enter.html() + char);
    });

    $(`.keyboard-row .keyboard-button_delete`).click(function() {
      var char = `a`;

      enter.html(enter.html() - char);
    });
}

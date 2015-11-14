 export default function() {
  var btn = $('.accordion__bar');
  var list = $('.accordion__bar-list');

  btn.on('click', function() {
    $(this).next(list).slideToggle();
  });
};

 $ (`.accordion__bar`).click(function() {
  $(`.accordion__bar-list`).slideUp();
  $(this).next(`accordian__bar-list-a`).slideToggle;
});

 export default function() {
  var btn = $('.accordion__bar');

  btn.on('click', function() {
    $(this).parent().siblings().find(`.accordion__bar-list`).slideUp();
    $(this).siblings().slideToggle();
  });
};

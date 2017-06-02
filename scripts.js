// function page(){
// 	$('.js-nav-link').off('click').removeClass('link-selected js-selected');
// 	$('js-section').show();
// 	$('js-welcome').addClass('js-selected');
// }

//       $('.js-nav-link').removeClass('js-selected');
//       $(this).addClass('js-selected');
//       if ($(this).hasClass('js-welcome')) {
//           $('.js-section').not('.welcome').slideUp(350);
//       } else if ($(this).hasClass('js-about')) {
//           $('.about').slideDown(350);
//           if ($('.experience:hidden')) {
//               $('.js-section').not('.welcome, .about').slideUp(350);
//           }
//       } else if ($(this).hasClass('js-experience')) {
//           $('.about, .experience').slideDown(350);
//           if ($('.projects:hidden')) {
//               $('.js-section').not('.welcome, .about, .experience').slideUp(350);
//           }
//       } else if ($(this).hasClass('js-projects')) {
//           $('.about, .experience, .projects').slideDown(350);
//           if ($('.projects:hidden')) {
//               $('.js-section').not('.welcome, .about, .experience, .projects').slideUp(350);
//           }
//       } else if ($(this).hasClass('js-contact')) {
//           $('.about, .experience, .projects, .contact').slideDown(350);
//       }
//     });
//   }
// }


$(document).ready(function(){
	$('.about').click(function()
	{
		$('.bio').slideDown(350);
	});
});




// SCROLLSPY
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// SIDENAV
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// MATERIAL IMG
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

// FLOATING ACTION BUTTON
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});


// ANIME.JS
// Wrap every letter in a span
document.addEventListener('DOMContentLoaded', ()=> {
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .line',
    opacity: 0,
    easing: "easeOutExpo",
  })
});

// FORM SUBMISSION HANDLING
// $(function()
// {
//     function after_form_submitted(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#reused_form').hide();
//             $('#success_message').show();
//             $('#error_message').hide();
//         }
//         else
//         {
//             $('#error_message').append('<ul></ul>');

//             jQuery.each(data.errors,function(key,val)
//             {
//                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
//             });
//             $('#success_message').hide();
//             $('#error_message').show();

//             //reverse the response on the button
//             $('button[type="button"]', $form).each(function()
//             {
//                 $btn = $(this);
//                 label = $btn.prop('orig_label');
//                 if(label)
//                 {
//                     $btn.prop('type','submit' );
//                     $btn.text(label);
//                     $btn.prop('orig_label','');
//                 }
//             });

//         }//else
//     }

// 	$('#reused_form').submit(function(e)
//       {
//         e.preventDefault();

//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//         });


//                     $.ajax({
//                 type: "POST",
//                 url: 'handler.php',
//                 data: $form.serialize(),
//                 success: after_form_submitted,
//                 dataType: 'json'
//             });

//       });
// });
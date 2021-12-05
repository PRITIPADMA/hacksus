$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});



// chat bot
var box = document.querySelector(".bot-container");
//console.log(box);
const closeBot = ()=>{
console.log(box.style.display);
box.style.display = "none";
}
    
 
   


var botui = new BotUI('my-botui-app');
// Start Bot
// First Messages
botui.message.bot({
    content: 'Hi there! 👋',
    loading: true,
    delay: 3000,
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "I'm Omirico . Hope you are healthy and fully vacinated . If not do so :) ",
    });
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "So i wanted to share some info about this new varaint of Covid - OMRICON",
    });
})
// .then(function () {
//     return botui.message.bot({
//         loading: true,
//         delay: 1500,
//         content: "[BotUI](http://docs.botui.org/)",
//     });
// })
.then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Do you know about it ?",
    });
}).then(function () {
  return botui.action.button({
        delay: 1500,
        loading: true,
        addMessage: true,
        action: [{
            text: 'Yes! I do . But i would like to hear more about it',
            value: 'yes'
        }, {
            text: 'Yes! I already do . No need of any info',
            value: 'no'
        },{
            text: 'No. i Dont',
            value: 'yes'
        }]
    })
}).then(function (res) {
  if (res.value == 'yes') {
     return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "The latest variant of covid is OMICRON .   This varaint is claimed to be a huge jump in the evolution of the virus . ",
            }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "This Varaint intitailly spotted in South Africa has already spread to all major countries in just a week.",
            })
       }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "  Some studies have shown that it is more transmissible than the delta varaint .",
            })
       })
       .then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "A disease modeling scientist has predicted that  it is 500% more  transmissible compared to Wuhan Strain",
            })
       })
       .then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: " There is not much data on how deadly this varaint is since the varaint is relatively new but in SouthAfrica it is found to be more deadly than the delta varaint .",
            })
       })
    }     
  else {
    return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Alright . Do wear your masks and take proper precautions",
            });
  }
}).then(function () {
  return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Bye.",
            });
})

  $(document).ready(function(){
          $('i').click(function(){
            $('ul').slideToggle('medium');
          })


          $(window).bind('resize', function(){
            if($(this).width() > 780){
              $('ul').css('display', 'block');
            }
          });
        })
/*------------------------------------------------------------------
    [Modal]
    -------------------------------------------------------------------*/
    $.fn.customModal = function() {
      this.click(function(e){
        e.preventDefault();
        $('html').css('overflow-y', 'hidden');
        var modalTarget;

        if ( $(this).data('modal') == 'modal-video' || $(this).data('modal') == 'modal-image' ) {
          modalTarget = this.href;
        } else if ( $(this).data('modal') == 'modal-content' ) {
          modalTarget = $(this).data('content');
        }

        //Make a general variable that will populate specific
        //HTML depending on what type of modal it is
        var modalSrc;

        /*------------------------------------------------------------------
        [Video]
        -------------------------------------------------------------------*/
        if ( $(this).data('modal') == 'modal-video' ){
          //Make a variable that will hold the modified URL
          var videoSrc;
          //Check to see if this is a YouTube or a Vimeo link, build the URL based on which one it is
          if ( modalTarget.includes('youtube') ) {
            videoSrc = this.href.replace('watch?v=', 'embed/');
          } else if ( modalTarget.includes('vimeo') ) {
            videoSrc = this.href.replace('https://vimeo.com/', 'https://player.vimeo.com/video/');
          } else {
            window.location = videoData;
            return;
          }

          //Set the modalSrc variable to the iframe for the video
          modalSrc = '<iframe src="' + videoSrc + '" class="modal-iframe" frameborder="0" allowfullscreen></iframe>';
          var modal = [
            '<div class="iframe-pop iframe-visible">',
            ' <span class="modal-close"></span>',
            '   <div class="inner">',
            '     <div class="modal-contain modal-video">',
                    modalSrc,
            '     </div>',
            '   </div>',
            '</div>',
          ].join('\n');
        }

        /*------------------------------------------------------------------
        [Image]
        -------------------------------------------------------------------*/
        if ( $(this).data('modal') == 'modal-image' ) {
          modalSrc = '<img class="modal-image" src="' + modalTarget + '">';
          var modal = [
            '<div class="iframe-pop iframe-visible">',
            ' <span class="modal-close"></span>',
            '   <div class="inner with-image">',
                  modalSrc,
            '   </div>',
            '</div>',
          ].join('\n');
        }

        /*------------------------------------------------------------------
        [Content]
        -------------------------------------------------------------------*/
        if ( $(this).data('modal') == 'modal-content' ) {
          modalSrc = $(modalTarget).html();
          var modal = [
            '<div class="iframe-pop iframe-visible">',
            ' <span class="modal-close"></span>',
            '   <div class="inner no-video">',
            '     <div class="modal-content">',
                    modalSrc,
            '     </div>',
            '   </div>',
            '</div>',
          ].join('\n');
        }

        //Add the markup to the bottom of the site
        $('body').append(modal);

        //Create the image propoprtions so that it fits cleanly on all window sizes
        if ( $(this).data('modal') == 'modal-image' ) {
          var modalImage = $('.modal-image');
          $(modalImage).css({
            'max-width' : window.innerWidth + 'px',
            'max-height' : window.innerHeight + 'px',
          });
          $(window).resize(function(){
            $(modalImage).css({
              'max-width' : window.innerWidth + 'px',
              'max-height' : window.innerHeight + 'px',
            });
          });
        }
        
        //Put the dynamic URL into the iframe source
        $('.modal-content').attr('src', videoSrc);

        //Close the modal & remove the markup from the DOM completely
        $('.modal-close').on('click', function(){
          $('.iframe-pop').remove();
          $('html').css('overflow-y', 'scroll');
        });
      });
    };

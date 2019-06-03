
var jPlayerAndroidFix = (function($) {
  "use strict";

  var fix = function(id, media, options) {
    this.playFix = false;
    this.init(id, media, options);
  };
  fix.prototype = {
    init: function(id, media, options) {
      var self = this;

      // Store the params
      this.id = id;
      this.media = media;
      this.options = options;

      // Make a jQuery selector of the id, for use by the jPlayer instance.
      this.player = $(this.id);

      // Make the ready event to set the media to initiate.
      this.player.bind($.jPlayer.event.ready, function(event) {
        // Use this fix's setMedia() method.
        self.setMedia(self.media);
      });

      // Apply Android fixes
      if($.jPlayer.platform.android) {

        // Fix playing new media immediately after setMedia.
        this.player.bind($.jPlayer.event.progress, function(event) {
          if(self.playFixRequired) {
            self.playFixRequired = false;

            // Enable the contols again
            // self.player.jPlayer('option', 'cssSelectorAncestor', self.cssSelectorAncestor);

            // Play if required, otherwise it will wait for the normal GUI input.
            if(self.playFix) {
              self.playFix = false;
              $(this).jPlayer("play");
            }
          }
        });
        // Fix missing ended events.
        this.player.bind($.jPlayer.event.ended, function(event) {
          if(self.endedFix) {
            self.endedFix = false;
            setTimeout(function() {
              self.setMedia(self.media);
            },0);
            // what if it was looping?
          }
        });
        this.player.bind($.jPlayer.event.pause, function(event) {
          if(self.endedFix) {
            var remaining = event.jPlayer.status.duration - event.jPlayer.status.currentTime;
            if(event.jPlayer.status.currentTime === 0 || remaining < 1) {
              // Trigger the ended event from inside jplayer instance.
              setTimeout(function() {
                self.jPlayer._trigger($.jPlayer.event.ended);
              },0);
            }
          }
        });
      }

      // Instance jPlayer
      this.player.jPlayer(this.options);

      // Store a local copy of the jPlayer instance's object
      this.jPlayer = this.player.data('jPlayer');

      // Store the real cssSelectorAncestor being used.
      this.cssSelectorAncestor = this.player.jPlayer('option', 'cssSelectorAncestor');

      // Apply Android fixes
      this.resetAndroid();

      return this;
    },
    setMedia: function(media) {
      this.media = media;

      // Apply Android fixes
      this.resetAndroid();

      // Set the media
      this.player.jPlayer("setMedia", this.media);
      return this;
    },
    play: function() {
      // Apply Android fixes
      if($.jPlayer.platform.android && this.playFixRequired) {
        // Apply Android play fix, if it is required.
        this.playFix = true;
      } else {
        // Other browsers play it, as does Android if the fix is no longer required.
        this.player.jPlayer("play");
      }
    },
    resetAndroid: function() {
      // Apply Android fixes
      if($.jPlayer.platform.android) {
        this.playFix = false;
        this.playFixRequired = true;
        this.endedFix = true;
        // Disable the controls
        // this.player.jPlayer('option', 'cssSelectorAncestor', '#NeverFoundDisabled');
      }
    }
  };
  return fix;
})(jQuery);


(function($) {

  var id = "#jquery_jplayer_1";

  var bubble = {
    title:"Bubble",
    m4a:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
    mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
    oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
  };
  var lismore = {
    title:"Lismore",
    m4a:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
    mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
    oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
  };

  var options = {
    swfPath: "js",
    supplied: "mp3,oga,m4a",
    wmode: "window",
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
  };

  var myAndroidFix = new jPlayerAndroidFix(id, bubble, options);

  $('#setMedia-Bubble').click(function() {
    myAndroidFix.setMedia(bubble);
  });
  $('#setMedia-Bubble-play').click(function() {

    myAndroidFix.setMedia(bubble).play();
  });

  $('#setMedia-Lismore').click(function() {
    myAndroidFix.setMedia(lismore);
  });

  //default song when page loads 
    var url_songs = "js/data.json";

    $.getJSON(url_songs, function (json) {

      //console.log(json[1]);

      //return;
      $('.bsg-player h4.title').html(json[6].title);
      $('h4.title').marquee();
      $('.bsg-player .album-details .price').html($(this).data('price'));
      $('.bsg-player .album-details .author').html(json.artist);
      $('.bsg-player .album-details .album-art img').attr('src',json[6].poster);
      $('.bsg-player .album-details .album-year').html($(this).data('album-year'));
        //      console.log(json);
      myAndroidFix.setMedia(json[6]).play();

    });


  $('.song').click(function(e) {
    e.preventDefault();


    var playbutton = $(this).find('.bsg-play-button');
    if(playbutton.length != 0)
    {
        if(playbutton.hasClass('fa-play'))
        {
            $('.bsg-play-button').removeClass('fa-stop').addClass('fa-play');
            playbutton.removeClass('fa-play').addClass('fa-stop');
        }
        else
        {

            playbutton.removeClass('fa-stop').addClass('fa-play');
            $(id).jPlayer("stop");
            return;
            alert('vj');
        }
        
    }

        var song_id = $(this).data('id');
    var url_songs = "js/data.json";

    $.getJSON(url_songs, function (json) {

      //console.log(json[1]);

      //return;
      $('.bsg-player h4.title').html(json[song_id].title);
      $('h4.title').marquee();
      $('.bsg-player .album-details .price').html($(this).data('price'));
      $('.bsg-player .album-details .author').html(json.artist);
      $('.bsg-player .album-details .album-art img').attr('src',json[song_id].poster);
      $('.bsg-player .album-details .album-year').html($(this).data('album-year'));
        //      console.log(json);
      myAndroidFix.setMedia(json[song_id]).play();

    });


  });



var myPlaylist = new jPlayerPlaylist({
    jPlayer: id,
    cssSelectorAncestor: "#jp_container_N"
  }, [
    {
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
    }
  ], {
    playlistOptions: {
      enableRemoveControls: true
    },
    swfPath: "js",
    supplied: "webmv, ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true
  });

  
  //btn-buy
  $(".btn-buy").click(function() {
        var song_id = $(this).data('id');
    var url_songs = "js/data.json";

    $.getJSON(url_songs, function (json) {

      //console.log(json[1]);

      //return;
      $('.bsg-player h4.title').html(json[song_id].title);
      $('h4.title').marquee();
      $('.bsg-player .album-details .price').html($(this).data('price'));
      $('.bsg-player .album-details .author').html(json.artist);
      $('.bsg-player .album-details .album-art img').attr('src',json[song_id].poster);
      $('.bsg-player .album-details .album-year').html($(this).data('album-year'));


        //      console.log(json);
        myPlaylist.add(json);

    });

  });
})(jQuery);


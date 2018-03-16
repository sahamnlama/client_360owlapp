function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function aaa1(){
  cordova.InAppBrowser.open('aaa.html', '_blank', 'location=yes');
};

// device APIs are available
//
function onDeviceReady() {





document.getElementById("audioCapture").addEventListener("click", audioCapture);

  //cordova.InAppBrowser.open('http://192.168.1.6:7777', '_self', 'location=yes,hidden=no');
  var conn = new WebSocket('ws://192.168.1.5:7777');


  conn.onopen = function () {
    console.log("Connected to the signaling server");
    cordova.plugins.notification.local.schedule({
        title: 'My first notification111',
        text: 'Connected to the signaling server',
        foreground: true
    });
  };

  conn.onmessage = function (msg) {
    console.log("Got message", msg.data);
    var data = JSON.parse(msg.data);
    //alert(data);
    //alert(msg.data);
    switch(data.type) {
       case "door_bell":
        console.log('someone visit');
    alert('someone visit');
        //var data = JSON.parse(msg.data);

//         var media = new Media('https://signellingsvr360owl.herokuapp.com/doorbell.mp3', mediaSuccess, function(e){alert(e);});
//         alert(JSON.stringify(media));
         //media.play();
         cordova.plugins.notification.local.schedule({
             title: 'FirstMessage',
             text: data.message,
             foreground: true
         });
         var audioElement = document.getElementById("audioElement");
         audioElement.play();

          break;
       default:
          break;
    }

  }
}
      //var ref =
/*
      */
      function mediaSuccess(){

      };

      function audioCapture() {
        alert('dsfsdf');
   var options = {
      limit: 1,
      duration: 10
   };
   navigator.device.capture.captureAudio(onSuccess, onError, options);

   function onSuccess(mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
         alert(mediaFiles);
      }
   }

   function onError(error) {
      alert('Error code: ' + error.code, null, 'Capture Error');
   }
}

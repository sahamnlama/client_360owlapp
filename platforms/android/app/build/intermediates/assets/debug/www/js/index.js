function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function aaa1(){
  
};

// device APIs are available
//
function onDeviceReady() {



      // Enable background mode
      cordova.plugins.backgroundMode.enable();
      // Android customization
      cordova.plugins.backgroundMode.setDefaults({ text:'Doing heavy tasks.'});

cordova.plugins.backgroundMode.onfailure = function(errorCode) {

  alert(errorCode);
};

      // Called when background mode has been activated
      cordova.plugins.backgroundMode.onactivate = function () {
          setTimeout(function () {
              // Modify the currently displayed notification
              cordova.plugins.backgroundMode.configure({
                  text:'Running in background for more than 5s now.',
                  hidden: false,
                  resume: true
              });
          }, 10000);
      }


}


const medias = {
  audio: false,
  video: {
    facingMode: {
      exact: "environment" // リアカメラにアクセス
    },
    height: {
      min: 100
      max: 300
    },
    width: {
      min: 100
      max: 300
    }
  }
};
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};


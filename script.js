alert("Q");

var video, canvas, se

const constraints = {
  audio: false,
  video: {
    //facingMode: "user"   // フロントカメラを利用する
    facingMode: { exact: "environment" }  // リアカメラを利用する場合
  }
};


  navigator.mediaDevices.getUserMedia(constraints)
  .then( (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  .catch( (err) => {
    console.log(err.name + ": " + err.message);
  });


function shutter(){
  video  = document.querySelector("#camera");
  canvas = document.querySelector("#picture");
  se     = document.querySelector('#se');
  
  video.play();
  
  let ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

/*
window.onload = () => {
  const video  = document.querySelector("#camera");
  const canvas = document.querySelector("#picture");
  const se     = document.querySelector('#se');

  //カメラ設定
  const constraints = {
    audio: false,
    video: {
      //facingMode: "user"   // フロントカメラを利用する
      facingMode: { exact: "environment" }  // リアカメラを利用する場合
    }
  };

  
  //カメラを<video>と同期
 
  
  navigator.mediaDevices.getUserMedia(constraints)
  .then( (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  .catch( (err) => {
    console.log(err.name + ": " + err.message);
  });
  

  
   //シャッターボタン
  
   document.querySelector("#shutter").addEventListener("click", () => {
    const ctx = canvas.getContext("2d");
    
    // 演出的な目的で一度映像を止めてSEを再生する
    video.pause();  // 映像を停止
    se.play();      // シャッター音
    setTimeout( () => {
      video.play();    // 0.5秒後にカメラ再開
    }, 500);
    
    // canvasに画像を貼り付ける
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  });
};
*/

/*
const medias = {
  audio: false,
  video: {
    facingMode: {
      exact: "environment" // リアカメラにアクセス
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
*/


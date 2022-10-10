import io from "socket.io-client";
import * as RTCMultiConnection  from "rtcmulticonnection";
import store from ".";
export default {
  // socket: io("https://oreonyx.herokuapp.com:443"),
  // connectSocket() {
  //   window.io = io
  //   this.socket.on("connect", (res) => {
  //     console.log(this.socket.connected);
  //   });
  // },
  connect: (event) => {
    const connection = new RTCMultiConnection();
    connection.socketURL = 'https://oreonyx.herokuapp.com:443/';
    connection.socketMessageEvent = event;

    connection.session = {
      audio: true,
      video: true,
      oneway: true,
    };

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: false,
      OfferToReceiveVideo: false,
    };

    connection.iceServers = [
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun.l.google.com:19302?transport=udp",
        ],
      },
    ];


    console.log(connection.token())
    const roomId = connection.token()
    
    return connection;
  },


  openStream: () => {

  }, 
  joinStream: () => {

  },
  stopStream: () => {

  },
  leaveStream: () => {

  }
};

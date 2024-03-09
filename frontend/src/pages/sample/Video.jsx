import { useEffect, useRef, useState } from "react";

import { io } from "socket.io-client";

import Peer from "peerjs";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
function VideoCall() {
	const [peerId, setPeerId] = useState("");
	const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
	const remoteVideoRef = useRef(null);
	const currentUserVideoRef = useRef(null);
	const peerInstance = useRef(null);
	const [s, sets] = useState("");

	useEffect(() => {
		const peer = new Peer();
		socket.on("getId", (id) => {
			console.log(id);
			sets(id);
		});

		peer.on("open", (id) => {
			setPeerId(id);
			socket.emit("shareId", id);
		});

		peer.on("call", (call) => {
			var getUserMedia =
				navigator.getUserMedia ||
				navigator.webkitGetUserMedia ||
				navigator.mozGetUserMedia;

			getUserMedia({ video: true, audio: true }, (mediaStream) => {
				currentUserVideoRef.current.srcObject = mediaStream;
				currentUserVideoRef.current.play();
				call.answer(mediaStream);
				call.on("stream", function (remoteStream) {
					remoteVideoRef.current.srcObject = remoteStream;
					remoteVideoRef.current.play();
				});
			});
		});

		peerInstance.current = peer;
	}, []);

	const call = (remotePeerId) => {
		var getUserMedia =
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia;

		getUserMedia({ video: true, audio: true }, (mediaStream) => {
			currentUserVideoRef.current.srcObject = mediaStream;
			currentUserVideoRef.current.play();

			const call = peerInstance.current.call(remotePeerId, mediaStream);

			call.on("stream", (remoteStream) => {
				remoteVideoRef.current.srcObject = remoteStream;
				remoteVideoRef.current.play();
			});
		});
	};

	return (
		<div className="VideoCall">
			<h1>Current user id is {peerId}</h1>
			<input
				type="text"
				value={remotePeerIdValue}
				onChange={(e) => setRemotePeerIdValue(e.target.value)}
			/>
			<button onClick={() => call(s)}>Call</button>
			<div>
				<video ref={currentUserVideoRef} />
			</div>
			<div>
				<video ref={remoteVideoRef} />
			</div>
		</div>
	);
}

export default VideoCall;

import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import { useParams } from "react-router-dom";
const LobbyScreen = (props) => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );
useEffect(() => { 

setRoom(id)
setEmail("sahil@gmail.com")
console.log(room, email)
}, []);
  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);
  const data = useParams();



  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label className="" htmlFor="email">
          Email ID
        </label>
       {/*  <input
          className=""
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        {/* <br />
        <label className="" htmlFor="room">
          Room Number
        </label>
        <input
          className=""
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br /> */}
        <button className="">
          <div className="text-[70px]">Join</div>
        </button>
      </form>
    </div>
  );
};

export default LobbyScreen;

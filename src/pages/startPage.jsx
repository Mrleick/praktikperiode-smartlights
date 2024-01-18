import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/nav";
import Controls from "../templates/controls";
import Placeholder from "../assets/house.png";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.8.105/api/gCGyOMawlki5Px1SxkB7GzRWj3WNF9HnejQnY8wP/groups`
      )
      .then((response) => {
        const roomsArray = Object.values(response.data);
        setRooms(roomsArray);
        console.log("Group Data:", roomsArray);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="bg-background-default rounded-t-[30px] p-[25px] mb-[70px]">
        <Header title="All Rooms" />
        <div className="flex flex-wrap justify-center gap-[24px] mt-[20px]">
          {rooms.map((room, index) => {
            const totalLights = room.lights.length;
            return (
              <div
                className="bg-white flex flex-col w-[40vw] h-[40vw] drop-shadow-lg rounded-xl"
                key={index}
              >
                <div className="ml-[19px] w-[108px]">
                  <img
                    className="mb-[20px] mt-[20px]"
                    src={Placeholder}
                    alt=""
                  />
                  <h2 className="text-[19px] font-bold">{room.name}</h2>
                  <p className="text-[13px] font-bold text-[#FFA939]">
                    {totalLights} Lights
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Controls />
    </>
  );
};

export default Rooms;

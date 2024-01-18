import React, { useState, useEffect } from "react";
import Cards from "../components/cards";
import Header from "../components/Header";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.8.105/api/gCGyOMawlki5Px1SxkB7GzRWj3WNF9HnejQnY8wP/groups`
      )
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <div className="bg-background-default rounded-t-[30px] p-[25px]">
      <Header title="All Rooms" />
      <div className="flex flex-wrap justify-center gap-[24px] mt-[20px] mb-[150px]">
        {buttonsData.map(({ name, imageSrc, lightsCount }, index) => (
          <Cards
            key={index}
            image={imageSrc}
            title={name}
            lightsCount={lightsCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

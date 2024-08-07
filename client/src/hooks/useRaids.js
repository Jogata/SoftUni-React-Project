import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useGetAllRaids() {
    const [raids, setRaids] = useState([]);
    // console.log("render");

    useEffect(() => {
      // console.log("use effect");
      fetch("http://localhost:3030/data/raids")
        .then(response => response.json())
        .then(data => setRaids(Object.values(data)))
    }, []);

    return [raids, setRaids];
}

export function getOneGame(id) {
  const [raid, setRaid] = useState({
    currentPlayers: "",
    level: "",
    location: "",
    maxPlayers: "",
    minPlayers: "",
    start: ""
  })

  useEffect(() => {
    fetch(`http://localhost:3030/data/raids/${id}`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setRaid(data))
  }, [])

  return [raid, setRaid];
}

export function useCreateGame() {
  const { accessToken } = useContext(AuthContext);
  // console.log(accessToken);

  const gameCreateHandler = (data) => {
    // console.log(data);
    const options = {
      method: "post", 
      headers: {
        "Content-Type": "application/json", 
        "X-Authorization": accessToken,   
      },
      body: JSON.stringify(data)
    }
    console.log(options);
    fetch(`http://localhost:3030/data/raids`, options)
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(data => setRaid(data))
  }

  return gameCreateHandler;

  // const [raid, setRaid] = useState({
  //   currentPlayers: "",
  //   level: "",
  //   location: "",
  //   maxPlayers: "",
  //   minPlayers: "",
  //   start: ""
  // })
}
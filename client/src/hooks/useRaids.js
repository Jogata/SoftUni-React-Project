import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useGetAllRaids() {
    const [raids, setRaids] = useState([]);
    // console.log("render");

    useEffect(() => {
      // console.log("use effect");
      fetch("http://localhost:3030/jsonstore/advanced/raids")
        .then(response => response.json())
        // .then(data => console.log(Object.values(data)))
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
    fetch(`http://localhost:3030/jsonstore/advanced/raids/${id}`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setRaid(data))
  }, [])

  return [raid, setRaid];
}

export function useCreateGame() {
  const { accessToken } = useContext(AuthContext);
  console.log(accessToken);

  const gameCreateHandler = (data) => {
    // console.log(data);
    const opt = {
      method: "post", 
      "X-Authorization": accessToken, 
      body: JSON.stringify(data)
    }
    console.log(opt);
    fetch(`http://localhost:3030/data/raids`, {
      method: "post", 
      "X-Authorization": accessToken, 
      body: JSON.stringify(data)
    })
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
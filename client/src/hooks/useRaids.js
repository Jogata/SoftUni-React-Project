import { useEffect, useState } from "react";

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
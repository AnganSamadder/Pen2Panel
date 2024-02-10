import React, { useEffect, useState } from "react";

function index() {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setPeople(data.people);
        console.log(data.people);
      });
  }, []);

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
      <div>{message}</div>
    </div>
  );
}

export default index;

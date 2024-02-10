import { list } from "postcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default async function Home() {
  const res = await fetch("http://127.0.0.1:8080/api/home");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);

  return (
    <div>
      {data.people.map((person: string, index: number) => (
        <div key={index}>{person}</div>
      ))}
      <div>{data.message}</div>
    </div>
  );
}

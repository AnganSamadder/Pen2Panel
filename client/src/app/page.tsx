import { list } from "postcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./home/page";

export default async function Home() {
  console.log("AAAAAA");
  console.log(`ENV VARS: ${process.env.REACT_APP_AUTH0_SECRET}`);
  process.env.AUTH0_SECRET = process.env.REACT_APP_AUTH0_SECRET;
  process.env.AUTH0_BASE_URL = process.env.REACT_APP_AUTH0_BASE_URL;
  process.env.AUTH0_ISSUER_BASE_URL =
    process.env.REACT_APP_AUTH0_ISSUER_BASE_URL;
  process.env.AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  process.env.AUTH0_CLIENT_SECRET = process.env.REACT_APP_AUTH0_CLIENT_SECRET;

  const res = await fetch("http://127.0.0.1:8080/api/home");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return (
    <div>
      <Land />
    </div>
  );
}

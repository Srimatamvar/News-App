"use client";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import Popular from "./components/news/Popular";

export default function Home() {
  //checking user is authorized or not
  const userData = useSelector((state) => state.user);

  return <Dashboard />;
}

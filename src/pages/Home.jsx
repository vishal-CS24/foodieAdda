import React from "react";
import Header from "../components/hfb/Header";
import Footer from "../components/hfb/Footer";
import { Outlet } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import OfflinePage from "./offlinePage";
const Home = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Home;

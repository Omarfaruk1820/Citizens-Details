import { Outlet } from "react-router";
import Navbar from "./../components/shared/Navbar";

import Footer from './../components/shared/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
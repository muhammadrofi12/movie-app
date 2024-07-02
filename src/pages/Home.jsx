import { useState } from "react";
// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <div>
      <Hero />
      <Movies />
    </div>
  );
}

export default Home;

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";


/**
 * Membuat Component Layout
 * Layout terdiri dari Navbar, Footer, Children.
 * Menggunakan teknik composition:
 * - Menampilkan konten dinamis.
 * - Menggunakan props children.
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;

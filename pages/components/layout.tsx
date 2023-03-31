import Header from "./header";
import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;

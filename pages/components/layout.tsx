import Header from "./header";
import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Navigation />
    </>
  );
};
export default Layout;

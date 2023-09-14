import { PropsWithChildren } from "react";

import { Header, Navigation } from "./components";
import { Container } from "./style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

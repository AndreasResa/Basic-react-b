import Gen1 from "./Generation/Gen1";
import Gen2 from "./Generation/Gen2";
import Gen3 from "./Generation/Gen3";
import Gen4 from "./Generation/Gen4";
import Logo from "./Logo";

const Header = () => {
  const header = "Header";
  return (
    <>
      <h1>{header}</h1>
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
      <Logo />
    </>
  );
};

export default Header;

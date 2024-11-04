import Generations from "./Generation";
import Logo from "./Logo";

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <p>
        <Generations />
        <Logo text="Logo dalam header" />
      </p>
    </>
  );
};

export default Header;

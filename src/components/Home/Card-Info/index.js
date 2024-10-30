import Evolution from "./Evolution";
import Type from "./Type-Effect";
import Logo from "./Logo";

const Card = () => {
  const card = "Card-Info";
  return (
    <>
      <h1>{card}</h1>
      <Evolution />
      <Type />
      <Logo />
    </>
  );
};

export default Card;

import Evolution from "./Evolution";
import Type from "./Type-Effect";
import Logo from "./Logo";

const Card = ({ text, number }) => {
  return (
    <>
      <h1>Card-Info</h1>
      <h5>{`${text} ${number}`}</h5>
      <p>
        <Evolution text="card evolution" number={1} />
        <Type text="card Type-effect" number={2} />
        <Logo text="Logo card" number={3} />
      </p>
    </>
  );
};

export default Card;

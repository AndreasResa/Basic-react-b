import Search from "./Search/Index";
import Card from "./Card-Info";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Search text="Search Home" number={1} />
        <Card text="Card Home" number={2} />
      </p>
    </>
  );
};

export default Home;

import Search from "./Search/Index";
import Card from "./Card-Info";

const Home = () => {
  const hello = "Home";
  return (
    <>
      <h1>{hello}</h1>
      <Search />
      <Card />
    </>
  );
};

export default Home;

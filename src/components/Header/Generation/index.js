import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const Generations = () => {
  return (
    <>
      <h3>Generations</h3>
      <p>
        <Gen1 text="Generations 1" />
        <Gen2 text="Generations 2" />
        <Gen3 text="Generations 3" />
        <Gen4 text="Generations 4" />
      </p>
    </>
  );
};

export default Generations;
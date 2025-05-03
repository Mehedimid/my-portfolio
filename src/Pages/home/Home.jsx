import Header from "./Header";
import HomeProjectSection from "./HomeProjectSection";

function Home() {
  return (
    <div className="flex flex-col   ">
      <div>
        <Header></Header>
      </div>

      <div><HomeProjectSection></HomeProjectSection></div>

    </div>
  );
}

export default Home;

import Cards from "./component/Cards";
import Header from "./component/header";
import Slider from "./component/Slider";

export default function Home() {
    return (
      <>
      <Header/>
      <Slider/>
        <Cards/>
      </>
    );
  }
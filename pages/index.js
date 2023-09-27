import Cards from "./component/Cards";
import Header from "./component/Header";
import Slider from "./component/Slider";
import ProductShowcase from "./Home/ProductShowcase";

export default function Home() {
    return (
      <>
        <Header />
        <Slider />
        <ProductShowcase />
        <Cards />
      </>
    );
}


import Header from "./component/Header";
import Slider from "./component/Slider";
import ProductShowcase from "./Home/ProductShowcase";

export default function Home({articles}) {
    return (
      <>     
        <Header />
        <Slider />
        <ProductShowcase  articles = {articles} />
      </>
    );
}


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}

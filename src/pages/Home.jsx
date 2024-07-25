import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Featuredcollections from "../components/Featuredcollections";
import Collections from "../components/Collections";
function Home({cart,setCart}) {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Featuredcollections cart={cart} setCart={setCart}/>
      <Collections/>
    </div>
  );
}
export default Home;

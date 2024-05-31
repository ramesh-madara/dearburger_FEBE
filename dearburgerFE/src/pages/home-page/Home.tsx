import { useState, useEffect } from "react";
import "../../App.css";
import "./Home-styles.css";
import Navbar from "../../components/navbar-component/Navbar";
import FoodItem from "../../components/food-item-component/food-item";
import FeaturedSection from "../../components/featured-section-component/featured-section";
//import Cart from "../../components/cart-component/Cart";
import CartNew from "../../components/cart-new/CartNew";
import { RootState } from "../../state/store/store";
import { useSelector } from "react-redux";
import FoodItemExpanded from "../../components/food-item-expanded-component/food-item-expanded";
import HeroSection from "../../components/hero-section-component/hero-section";
import FilterSection from '../../components/category -filter-component/filter-section'



function scrollToElement(id: any) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
function Home() {
  const ItemToExpand = useSelector(
    (state: RootState) => state.expandedItem.expandedItem
  );


  if (!ItemToExpand) {
    console.log("no item to expand");
  } else {
    console.log(ItemToExpand);
  }

  var scrollPercentage: number = 0;
  const [navBarPhase, setNavBarPhase] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const hashTerm = window.location.hash.substring(1);
      if (hashTerm) {
        scrollToElement(hashTerm);
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  // Attach a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Calculate the scroll percentage
    scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    let scrollThreshold: number = 1.0;
    if (scrollPercentage > scrollThreshold) {
      setNavBarPhase(true);
    } else if (scrollPercentage <= scrollThreshold) {
      setNavBarPhase(false);
    }
  });

  return (
    <div className="App">

      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <Navbar phase={navBarPhase}></Navbar>

      <div id="home-page-outer">
        <div id="items-section">
          <HeroSection />
          <FeaturedSection></FeaturedSection>
          <FilterSection/>
     
      
        </div>

        <div id="cart-section">
          <CartNew/>
          {ItemToExpand && (
            <FoodItemExpanded
              foodItemID={ItemToExpand.foodItemID}
              name={ItemToExpand.name}
              description={ItemToExpand.description}
              price={ItemToExpand.price}
              imageSrc={ItemToExpand.imageSrc}
              imageAlt={ItemToExpand.imageAlt}
              sizes={ItemToExpand.size}
              addonsList={ItemToExpand.addonID}
            ></FoodItemExpanded>
          )}    
    
        </div>
      </div>
    </div>
  );
}

export default Home;

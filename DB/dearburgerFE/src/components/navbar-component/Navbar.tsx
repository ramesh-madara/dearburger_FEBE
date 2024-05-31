import React, { ReactNode, useState, useEffect, useRef } from "react";
import "./Navbar-styles.css";
import { Menu, Button } from "antd";
import { FloatButton } from "antd";
import Logo from "../logo-component/Logo";
import "../../global.css";
import Sidebar from "../sidebar-component/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMobile } from "../../state/store/store";
import { RootState } from "../../state/store/store";
import NavCart from "../nav-cart-component/Nav-cart";
import Holdorder from "../hold-orders-component/holdorder";
import OrderComponent from "../print-component/OrderComponent";
import OrderComponents from "../print - new/OrderComponents";

interface NavbarProps {
  phase: boolean;
}

function Navbar(props: NavbarProps) {
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLink = document.getElementById("scrollLink");

    scrollLink?.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default jump-to-anchor behavior

      const hrefValue = scrollLink?.getAttribute("href");
      if (hrefValue) {
        const targetElement = document.querySelector(hrefValue);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start", // Align to the top of the viewport
          });
        }
      }
    });
  });
  const dispatch = useDispatch();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSideBar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const cartViewState = useSelector(
    (state: RootState) => state.cart.cartMobile
  );
  const toggleCartMobileView = (cartViewState: any) => {
    const showCartMobile = !cartViewState.showCartMobile;
    dispatch(toggleCartMobile({ showCartMobile }));
  };

  const isAuthenticated = sessionStorage.getItem("token") !== null;


  return (
    <div>
      <Menu
        className={props.phase ? "navOuter navPhase_2" : "navOuter navPhase_1"}
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <div className="navItems">
          <Logo></Logo>
          {isAuthenticated && <Holdorder/>}
          <OrderComponent/>
          <OrderComponents/>
          <div className="nav-links">
            {/* <Button href="/#abt" type="link" className="text-accent menu-btn">
              About Us
            </Button>
            <Button
              href="/#contact"
              className="border-secondary text-secondary menu-btn"
              type="link"
            >
              Contact Us
            </Button> */}
            <NavCart
              toggleCart={() => toggleCartMobileView(cartViewState)}
            ></NavCart>

            {/* <svg
              className="sidebarToggleBtn"
              onClick={() => toggleSideBar()}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg> */}

            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </div>
        </div>
      </Menu>
      <header className="App-header">
        <FloatButton.BackTop />
      </header>
      <Sidebar toggleFunc={toggleSideBar} toggle={sidebarToggle} />
  
    </div>
  );
}

export default Navbar;

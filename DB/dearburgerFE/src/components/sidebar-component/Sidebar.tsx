import React from "react";
import "../../global.css";
import "./Sidebar-styles.css";
import { Button } from "antd";

interface sideBarProps {
  toggle: boolean;
  toggleFunc: () => void;
}
function Sidebar(props: sideBarProps) {
  // console.log(props.toggle);
  return (
    <div>
      <aside
        className={
          props.toggle
            ? "sidebar-outer bg-secondary sidebar-view "
            : "sidebar-outer bg-secondary sidebar-hide"
        }
      >
        <a href=""></a>
        <div className="closeSideMenuBtnOuter">
          <svg
            className="sidebarToggleBtn"
            onClick={() => props.toggleFunc()}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>

        <div className=" text-white sideMenuItems">
          <div>
            {" "}
            <Button
              onClick={() => props.toggleFunc()}
              href="/#solution-delivery"
              className="text-white sideMenuItem"
              type="link"
            >
              Solution Delivery
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button
              href="/#dedicated-teams"
              onClick={() => props.toggleFunc()}
              className="text-white sideMenuItem"
              type="link"
            >
              Dedicated Teams
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button
              href="/careers"
              onClick={() => props.toggleFunc()}
              className="text-white sideMenuItem"
              type="link"
            >
              Careers
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button
              onClick={() => props.toggleFunc()}
              href="/#abt"
              className="text-white sideMenuItem"
              type="link"
            >
              About Us
            </Button>{" "}
          </div>
          <div>
            {" "}
            <Button
              href="/#contact"
              onClick={() => props.toggleFunc()}
              className="text-white sideMenuItem"
              type="link"
            >
              Contact Us
            </Button>{" "}
          </div>
        </div>
        <div className=" text-white sideMenuSocials">
          {/* <div> <Button className="text-white sideMenuSocial"  type="link">Twitter</Button> </div> */}
          {/* <div> <Button className="text-white sideMenuSocial"  type="link">Facebook</Button> </div> */}
          {/* <div> <Button className="text-white sideMenuSocial"  type="link">Instagram</Button> </div> */}
          <div>
            {" "}
            <Button
              className="text-white sideMenuSocial"
              href="https://www.linkedin.com/company/onterra-group/mycompany/"
              target="_blank"
              type="link"
            >
              LinkedIn
            </Button>{" "}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;

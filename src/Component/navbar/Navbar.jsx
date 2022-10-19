import heart from "../../assets/heart-icon.png";
import shoppingbag from "../../assets/shoppingbag.png";
import search from "../../assets/search.png";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOpenCard } from "../../app/cardSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCard({
        cardState: true,
      })
    );
  };
  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <div className={!navState ? "navbar" : " navbar navbar-f"}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="icons">
        <img src={search} alt="" />
        <img src={heart} alt="" />
        <div className="shopping" onClick={onCartToggle}>
          <img src={shoppingbag} alt="" />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure to include the CSS for styling
import $ from "jquery"; // Import jQuery if you need it

const Navbar = () => {
  useEffect(() => {
    function test() {
      var tabsNewAnim = $("#navbarSupportedContent");
      var activeItemNewAnim = tabsNewAnim.find(".active");
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });

      $("#navbarSupportedContent").on("click", "li", function () {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
      });
    }

    test();
    $(window).on("resize", function () {
      setTimeout(function () {
        test();
      }, 500);
    });

    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(function () {
        test();
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="fas fa-tachometer-alt"></i>Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <i className="far fa-address-book"></i>About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="far fa-clone"></i>Event
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="far fa-calendar-alt"></i>Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <i className="far fa-chart-bar"></i>Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import "./Tiles.scss";
import arrow from "../../../assets/arrow3x.png";
import menAvatar from "../../../assets/menAvatar.png";
import TilePopup from "../Drawer/Drawer";
import { useNavigate } from "react-router-dom";
import independenceDay from "../../../assets/DrawerImages/independenceDay.jpg";
import { useEffect, useRef } from "react";
import orientation from "../../../assets/Home-tiles/orientation.jpg";
import bag from "../../../assets/Home-tiles/bags.png"
import bed from "../../../assets/Home-tiles/beds.png"
import sheild from "../../../assets/Home-tiles/sheild.png"
import books from "../../../assets/Home-tiles/books.png"
import food from "../../../assets/Home-tiles/food.png"
import hat from "../../../assets/Home-tiles/hats.png"
import store from "../../../assets/Home-tiles/store.png"
import Tarang from "../../../assets/Home-tiles/Tarang.jpg";
import saazNight25 from "../../../assets/Home-tiles/saazNight25.jpg";
import Saanjh24 from "../../../assets/Home-tiles/Saanjh24.jpg";
import NoticeBoard from "../../../assets/Home-tiles/NoticeBoard.jpg";
import Merch1 from "../../../assets/Home-tiles/Merch1.jpg";
// import saazInstagram from "../../../assets/Home-tiles/saazInstagram1.mp4";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Vector from "../../../assets/Vector.png"
function Tiles() {
  // const orientation = '../../../assets/Home-tiles/orientation.jpg'
  const [clickedTiles, setClickedTiles] = useState({});

  const handleClick = (tile) => {
    setClickedTiles((prevState) => ({
      ...prevState, 
      [tile]: !prevState[tile],
    }));
    console.log(clickedTiles[tile]);
  };
  const navigate = useNavigate();
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;
    let start = null;

    const scrollAmount = 100; // Adjust the value as needed
    const duration = 1000; // Duration of the animation in milliseconds

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      scrollableContainer.scrollLeft = scrollAmount * percent;

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        const stepBack = (timestampBack) => {
          if (!start) start = timestampBack;
          const progressBack = timestampBack - start;
          const percentBack = Math.min(progressBack / duration, 1);
          scrollableContainer.scrollLeft = scrollAmount * (1 - percentBack);

          if (progressBack < duration) {
            window.requestAnimationFrame(stepBack);
          }
        };
        window.requestAnimationFrame(stepBack);
      }
    };

    window.requestAnimationFrame(step);
  }, []);
  return (
    <div className="tileLayout">
      <div className="dashboard-layout">
        <div className="latest-events">
          Dashboard <span><img src={Vector} style={{width:"6px"}} alt="" /></span>
        </div>
      <div className="Tiles" ref={scrollableContainerRef}>
        <div className="one" onClick={() => navigate("/Events")}>
          {/* <div className="title">EVENTS</div>
          <div className="more">more</div>
          <div className="arrow">
            <img src={arrow} alt="arrowIcon" />
          </div> */}
        </div>

        <div
          className="two"
          onClick={() => handleClick("two")}
          style={{ backgroundImage: `url(${bag})`,
          backgroundSize: "cover",
          backgroundPosition: "center", }}
        >
          
          <div className="eventName" style={{ background: "transparent"}}>
            TEXT1
          </div>
         
          {clickedTiles["two"] && (
            <TilePopup
              eventName={"Independence Day"}
              eventGallary={"Independence Day"}
              image={bag}
              date={"15 August 2024"}
              color="black"
              handleClick={() => handleClick("two")}
              buttonId="two"
            />
          )}
        </div>
        <div
          className="three"
          onClick={() => handleClick("three")}
          style={{
            backgroundImage: `url(${sheild})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         
          <div className="eventName" style={{ background: "transparent" }}>
            TEXt2
          </div>
         
          {clickedTiles["three"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("three")}
              eventName={"Orientation '24"}
              image={orientation}
              date={"21 August 2024"}
              eventGallary={"Orientation '23"}
              buttonId="three"
            />
          )}
        </div>
        <div
          className="four"
          onClick={() => handleClick("four")}
          style={{
            backgroundImage: `url(${bed})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className="eventName" style={{ background: "transparent" }}>
            Saaz Night'25
          </div>
        
          {clickedTiles["four"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("four")}
              eventName={"Saaz Night '25"}
              eventGallary={"Saaz Night '24"}
              image={bed}
              date={"To Be Announced"}
              buttonId="four"
            />
          )}
        </div>
        <div
          className="five"
          onClick={() => handleClick("five")}
          style={{
            backgroundImage: `url(${books})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
            {/* <div className="day" style={{ background: "transparent" ,position:'absolute',top:'-20px' }}>
            <ShoppingBagIcon fontSize='xl'/>
            </div> */}
          </div>
          <div
            className="eventName"
            style={{ background: "transparent", width: "100px" }}
          >
           
          </div>
          <div className="more1-square" style={{ background: "transparent" }}>
            Shop
          </div>
          {clickedTiles["five"] && (
            <TilePopup color="black" handleClick={() => handleClick("five")} buttonId="five" />
          )}
        </div>
        <div
          className="six"
          onClick={() => handleClick("six")}
          style={{
            backgroundImage: `url(${food})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
          </div>
          <div className="eventName" style={{ background: "transparent" }}>
            Cookin Somethin...
          </div>
          {clickedTiles["six"] && (
            <TilePopup color="black" handleClick={() => handleClick("six")} image={NoticeBoard}  buttonId="six" eventName={"Cooking Somethin...."}/>
          )}
        </div>
       
        <div
          className="eight"
          onClick={() => handleClick("eight")}
          style={{
            backgroundImage: `url(${hat})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="date" style={{ background: "transparent" }}>
           
            <div className="month" style={{ background: "transparent" }}>
              {/* Be */}
            </div>
            <div className="year" style={{ background: "transparent" }}>
              {/* Announced */}
            </div>
          </div>
          {/* <div className="eventName" style={{ background: "transparent" }}>
            Tarang '24
          </div> */}
          
          {clickedTiles["eight"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("eight")}
              eventName={"Tarang '24"}
              eventGallary={"Tarang '23"}
              image={Tarang}
              date={"21 August 2024"}
              buttonId="eight"
            />
          )}
        </div>
        <div
          className="nine"
          onClick={() => handleClick("nine")}
         
        >
        
          {clickedTiles["nine"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("nine")}
              eventName={"Saanjh '24"}
              eventGallary={"Saanjh 22"}
              image={Saanjh24}
              date={"21 August 2024"}
              buttonId="nine"
            />
          )}
        </div>
        <div
          className="nine"
          onClick={() => handleClick("nine")}
          style={{
           
          }}
        >
        
          {clickedTiles["nine"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("nine")}
              eventName={"Saanjh '24"}
              eventGallary={"Saanjh 22"}
              image={Saanjh24}
              date={"21 August 2024"}
              buttonId="nine"
            />
          )}
        </div>
        <div
          className="nine"
          onClick={() => handleClick("nine")}
          style={{
            
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          {clickedTiles["nine"] && (
            <TilePopup
              color="black"
              handleClick={() => handleClick("nine")}
              eventName={"Saanjh '24"}
              eventGallary={"Saanjh 22"}
              image={Saanjh24}
              date={"21 August 2024"}
              buttonId="nine"
            />
          )}
        </div>
        {/* <div className="seven" onClick={() => handleClick("seven")}>
          {clickedTiles["seven"] && (
            <TilePopup color="black" handleClick={() => handleClick("seven")} />
          )}
        </div> */}
      </div>
     
      </div>
    </div>
  );
}

export default Tiles;

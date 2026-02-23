import React, { useState } from "react";
import "./ItemsDisplay.css";
import image1 from "./ChatGPT Image Feb 13, 2026, 12_14_58 PM.png";
import assets, {
  bride_list,
  dress_list,
  groom_accessories,
  groom_suit,
  jewellery_list,
  men_bag,
  men_jeans,
  men_sweater,
  men_tishert,
} from "../../Assets/Assets";
import { fashion_list } from "../../Assets/Assets";
import { cosmo_list } from "../../Assets/Assets";
import { men_list } from "../../Assets/Assets";
import { female_list } from "../../Assets/Assets";
import image2 from "./ChatGPT Image Feb 13, 2026, 12_39_59 PM.png";
import image3 from "./image.png";
import { Link } from "react-router-dom";

const ItemsDisplay = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  function handleClick(event) {
    const Clicked = (event.target.textContent = "Remove");
  }

  return (
    <div className="items">
      <div className="items-sections">
        <h2>Fashion</h2>
        <div className="fashion">
          <div className="image">
            <img src={fashion_list[4].image} alt="" />
            <p>{fashion_list[4].description}</p>
            <span className="price">${fashion_list[4].price}</span>
          </div>
          <div className="image">
            <img src={jewellery_list[4].image} alt="" />
            <p>{jewellery_list[4].name}</p>
            <span className="price">${jewellery_list[4].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={groom_suit[6].image} alt="" />
            <p>{groom_suit[6].name}</p>
            <span className="price">${groom_suit[6].price}</span>
          </div>
          <div className="image">
            <img src={dress_list[0].image} alt="" />
            <p>{dress_list[0].name}</p>
            <span className="price">$250</span>
          </div>

          <div className="image">
            <img src={groom_accessories[4].image} alt="" />
            <p>{groom_accessories[4].name}</p>
            <span className="price">${groom_accessories[4].price}</span>
          </div>
        </div>

        <div className="img-display">
          <img src={image1} alt="" />
          <div id="image-right">
            <h3 className="page-description">Much more than online store</h3>
            <div className="explanation">
                Lunessa is a destination where fashion meets confidence and
              elegance.
             
              From modern women and men collections to luxurious wedding pieces
              for brides and grooms,every product is carefully selected to
              celebrate individuality and timeless style.
             Beyond clothing, we bring you beauty essentials and fashion
              accessories designed to complete your look.
             
             

            </div>
              
            
            <br />
            <br />
            <a href="#Navbar">
              <button className="items-btn">View Products</button>
            </a>
          </div>
        </div>

        <h3>Beauty</h3>

        <div className="beauty">
          <div className="image">
            <img src={cosmo_list[1].image} alt="" />
            <p>{cosmo_list[1].name}</p>
            <span className="price">${cosmo_list[1].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={cosmo_list[4].image} alt="" />
            <p>{cosmo_list[4].name}</p>
            <span className="price">${cosmo_list[4].price}</span>
          </div>
          <div className="image">
            <img src={cosmo_list[2].image} alt="" />
            <p>{cosmo_list[2].name}</p>
            <span className="price">${cosmo_list[2].price}0</span>
          </div>

          <div className="image">
            <img src={cosmo_list[3].image} alt="" />
            <p>{cosmo_list[3].name}</p>
            <span className="price">${cosmo_list[3].price}</span>
          </div>

          <div className="image">
            <img src={cosmo_list[5].image} alt="" />
            <p>{cosmo_list[5].name}</p>
            <span className="price">${cosmo_list[5].price}</span>
          </div>
        </div>
        <Link to="/Cosmetics">
          <button className="view-btn">View all</button>
        </Link>

        <h3>Male Fashion</h3>
        <div className="male-clothes">
          <div className="image">
            <img src={men_jeans[1].image} alt="" />
            <p>{men_jeans[1].name}</p>
            <span className="price">${men_jeans[1].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={men_tishert[2].image} alt="" />
            <p>{men_tishert[2].name}</p>
            <span className="price">${men_tishert[2].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={men_sweater[3].image} alt="" />
            <p>{men_sweater[3].name}</p>
            <span className="price">${men_sweater[3].price}</span>
          </div>
          <div className="image">
            <img src={men_bag[5].image} alt="" />
            <p>{men_bag[5].name}</p>
            <span className="price">${men_bag[5].price}</span>
          </div>
          <div className="image">
            <img src={men_jeans[6].image} alt="" />
            <p>{men_jeans[6].name}</p>
            <span className="price">${men_jeans[6].price}</span>
          </div>
        </div>
        <Link to="/MaleSection">
          <button className="view-btn">View all</button>
        </Link>

        <h3>Female Fashion</h3>

        <div id="female-clothes">
          <div className="image">
            <img src={dress_list[0].image} alt="" />
            <p>{dress_list[0].name}</p>
            <span className="price">${dress_list[0].price}</span>
          </div>
          <div className="image">
            <img src={dress_list[3].image} alt="" />
            <p>{dress_list[3].name}</p>
            <span className="price">${dress_list[3].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={dress_list[4].image} alt="" />
            <p>{dress_list[4].name}</p>
            <span className="price">${dress_list[4].price}</span>
          </div>
          <div className="image">
            {" "}
            <img src={dress_list[6].image} alt="" />
            <p>{dress_list[6].name}</p>
            <span className="price">${dress_list[6].price}</span>
          </div>
          <div className="image">
            <img src={dress_list[5].image} alt="" />
            <p>{dress_list[5].name}</p>
            <span className="price">${dress_list[3].price}</span>
          </div>
        </div>
        <Link to="/FemaleSection">
          <button className="view-btn">View all</button>
        </Link>
        <div className="items-bottom">
          <div className="payment">
            <ul>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8395/8395915.png"
                  alt=""
                />
              </li>
              <li>
                {" "}
                <h3>Secure Payment</h3>
              </li>
              <li>
                <p>
                   Safe and encrypted transactions 
                   <br/>for worry-free shopping.
                </p>
              </li>
            </ul>
          </div>
          <div className="service">
            <ul>
              <li>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14306/14306923.png"
                  alt=""
                />
              </li>
              <li>
                <h3>Customer Service</h3>
              </li>
              <li>
                <p>
                  Friendly support 
                  <br/>ready to assist you anytime.
                </p>
              </li>
            </ul>
          </div>
          <div className="satisfaction">
            <ul>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8436/8436460.png"
                  alt=""
                />
              </li>
              <li>
                <h3>Satisfied Customer</h3>
              </li>
              <li>
                <p>
                   Trusted by customers <br/>
                   for quality and style.
                </p>
              </li>
            </ul>
          </div>

          <div className="delivery">
            <ul>
              <li>
                <img
                  src="https://cdn-icons-gif.flaticon.com/12339/12339191.gif"
                  alt=""
                />
              </li>
              <li>
                <h3>Guaranteed Delivery</h3>
              </li>
              <li>
                <p> Fast, reliable, and secure shipping.</p>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDisplay;

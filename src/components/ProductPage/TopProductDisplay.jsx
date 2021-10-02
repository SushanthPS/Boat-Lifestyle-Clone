import styled from 'styled-components';
// import topImage from "./Images/image114.png";
import zest from "./Images/image 115.png"
import star from "./Images/Star11.png";
import warranty from "./Images/image 116.png";
import { champions } from '../../db';
import { useState } from 'react';
import tick from './Images/VectorTick.png';

const Container = styled.div`
   height: 95.38vh;
   width: 100%;
   top: 88px;
   left: 0px;
   background: linear-gradient(184.1deg, #292929 -0.53%, #010101 108.73%);
   
   & .imageDiv {
        position: absolute;
        top: 29.25vh;
        left: 12.66%;
        width: 26.54%;
        height: 416px;
   }

   & .imageDiv img {
       width: 120%;
       margin-top:-7.154vh;
       margin-left: -3.77%;
   }

   & .imageDiv img {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
    }
    @-webkit-keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }

   & .circle {
       margin-top: 7.14vh;
       margin-left: 3.77%;
       position: absolute;
       width: 80%;
       height: 45vh;
       border-radius: 150px;
       background-color: gray;
   }
    
   & .leftButton {
        position: absolute;
        width: 0px;
        height: 0px;
        left: 7.54%;
        top: 56.75vh;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-right:20px solid #ff0000; 
   }

   & .rightButton {
       position: absolute;
       width: 0px;
       height: 0px;
       top: 56.75vh;
       left: 45.35%;
       border-left: 20px solid #ff0000;
       border-top: 14px solid transparent;
       border-bottom: 14px solid transparent;
   }

   & .name {
        position: absolute;
        width: 36.81%;
        overflow-y: hidden;
        height: 49px;
        left: 62.97%;
        top: 177px;
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        color: #FFFFFF;
   }

& .type {
    position: absolute;
    width: 22.7%;
    height: 37px;
    left: 62.97%;
    top: 231px;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #7C7C7C;
}

& .price {
    position: absolute;
    width: 17.57%;
    height: 49px;
    left: 62.97%;
    top: 366px;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #FF0000;
    }

& .discountPrice {
    position: absolute;
    width: 11.01%;
    height: 5.08vh;
    left: 79.93%;
    top: 60.09vh;
    font-size: 26px;
    line-height: 32px;
    text-decoration-line: line-through;
    color: #B4B4B4;
    }

& .save {
    position: absolute;
    width: 12.21%;
    height: 4.61vh;
    left: 62.97%;
    top: 417px;
    font-size: 24px;
    line-height: 29px;
    color: #B4B4B4;
}

& .tax {
    position: absolute;
    width: 9.27%;
    height: 3.17vh;
    left: 62.97%;
    top: 448px;
    font-size: 16px;
    line-height: 20px;
    color: #B4B4B4;
    }

& .star {
    position: absolute;
    display: flex;
    width: 7.54%;
    left: 62.97%;
    top: 271px;
}

& .internet {
    position: absolute;
    width: 23.45%;
    height: 3.17vh;
    left: 62.97%;
    top: 75.35vh;
    font-size: 16px;
    line-height: 20px;
    color: #B4B4B4;
}

& .zest {
    position: absolute;
    width: 5.12%;
    height: 2.54vh;
    left: 85.21%;
    top: 75.19vh;
}

& .addToCart,.buyItNow{
    position: absolute;
    width: 10.85%;
    height: 6.23vh;
    left: 62.97%;
    top: 82.67vh;
    border: 1px solid #FFFFFF;
    color: white;
    line-height: 17px;
    font-size: 14px; 
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
}

& .buyItNow {
    left: 75.41%;
}

& .addToCart:hover,.buyItNow:hover {
    background-color: #ff0000;
    border: none;
}

& .reviews {
    position: absolute;
    width: 3.92%;
    height: 12px;
    left: 67.87%;
    top: 1.90%;
    font-size: 10px;
    line-height: 12px;
    color: #9B9B9B;
}

& .colorCircle {
    position: absolute;
    left: 62.76%;
    top: 48.48vh;
    border-radius: 14px;
    box-sizing: border-box;
    display: flex;
}

& .colorCircle > div {
    padding: 5px;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    margin-right: 15px;
}

& .warranty {
    position: absolute;
    width: 100%;
    height: 13.67vh;
    left: 0px;
    top: 688px;
    background: #2C2C2C;
}

.warrantyImage {
    position: absolute;
    width: 40.49%;
    height: 98px;
    left: 60.55%;
    top: 688px;
}

& .whiteDiv {
    position: absolute;
    width: 100%;
    height: 123px;
    left: 0px;
    top: 774px;
    background: #f6f6f6;
}

& .whiteDiv .experience {
    position: absolute;
    width: 19%;
    height: 88px;
    left: 11.46%;
    top: 25px;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
}

& .uninterrupted {
    position: absolute;
    width: 10.85%;
    height: 72px;
    left: 41.25%;
    top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}

& .ipx7 {
    position: absolute;
    width: 7.91%;
    height: 48px;
    left: 63.19%;
    top: 25px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}

& ._14W {
    position: absolute;
    width: 7.23%;
    height: 96px;
    left: 83.40%;
    top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}
`;

export default function TopProductDisplay() {
    const [index, setIndex] = useState(0);
    const e = champions[16];
    const putComma = (n) => {
        let str = String(n);
        if (n.length < 4)
            return (str);
        return (str[0] + "," + str[1] + str[2] + str[3]);
    }

    const changeImage = (k) => {
        if (index === 0 && k === -1) {
            setIndex(e.image.length - 1);
            return;
        }
        const newIndex = (k + index) % e.image.length;
        setIndex(newIndex);
    }

    const changeImageCircle = (k) => {
        setIndex(k);
    }
    return (
        <Container>
            <div>
                <div className="leftButton" onClick={() => changeImage(-1)}></div>
                <div className="imageDiv">
                    <div className="circle">
                        <img src={e.image[index]} alt="stone1200"/>
                    </div>
                </div>
                <div className="rightButton" onClick={() => changeImage(1)}></div>
            </div>
            <div className="rigthSection">
                <p className="name">{e.name}</p>
                <p className="type">{e.category}</p>
                <div className="star">
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                </div>
                <div className="colorCircle">
                {
                        e.color.map((el, i) => <div onClick={() => changeImageCircle(i)} style={{ background: el }}><img src={tick} style={{opacity: index !== i ? "0" : "1"}}alt="tick"/></div>)
                }
                </div>
                <p className="reviews">{e.reviews}</p>
                <p className="price">₹{putComma(e.original_price)}.00</p>
                <p className="discountPrice">₹{putComma(Math.floor(e.original_price / 100 * e.discount))}.00</p>
                <p className="save">You save { e.discount}%</p>
                <p className="tax">Inclusive all Tax</p>
                <p className="internet">Or a internet free payment of 1160 with </p>
                <img className="zest" src={zest} alt="zest" />
                <button className="addToCart">ADD TO CART</button>
                <button className="buyItNow">BUY IT NOW</button>
            </div>
            <div className="warranty"></div>
            <img className="warrantyImage" src={warranty} alt="warranty" />
            <div className="whiteDiv">
                <p className="experience">EXPERIENCE THE MAGIC</p>
                <p className="uninterrupted">Uninterrupted music upto 9 hours</p>
                <p className="ipx7">Ipx7 water resistant</p>
                <p className="_14W">14W BOAT signature sound</p>
            </div>
        </Container>
    );
}
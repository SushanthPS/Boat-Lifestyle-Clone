import styled from 'styled-components';
import topImage from "./Images/image114.png";
import zest from "./Images/image 115.png"
import star from "./Images/Star11.png";
import warranty from "./Images/image 116.png";

const Container = styled.div`
   height: 600px;
   width: 100%;
   top: 88px;
   left: 0px;
   background: linear-gradient(184.1deg, #292929 -0.53%, #010101 108.73%);
   
   & .imageDiv {
        position: absolute;
        top: 184px;
        left: 168px;
        width: 352px;
        height: 416px;
   }

   & .imageDiv img {
       width: 340px;
       margin-top:-45px;
       margin-left: -50px;
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
       margin-top: 45px;
       margin-left: 50px;
       position: absolute;
       width: 290px;
       height: 290px;
       border-radius: 150px;
       background-color: gray;
   }
    
   & .leftButton {
        position: absolute;
        width: 0px;
        height: 0px;
        left: 100px;
        top: 357px;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-right:20px solid #ff0000; 
   }

   & .rightButton {
       position: absolute;
       width: 0px;
       height: 0px;
       top: 357px;
       left: 604px;
       border-left: 20px solid #ff0000;
       border-top: 14px solid transparent;
       border-bottom: 14px solid transparent;
   }

   & .name {
       position: absolute;
        width: 223px;
        height: 49px;
        left: 835px;
        top: 177px;
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        color: #FFFFFF;
   }

& .type {
    position: absolute;
    width: 301px;
    height: 37px;
    left: 835px;
    top: 231px;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #7C7C7C;
}

& .price {
    position: absolute;
    width: 233px;
    height: 49px;
    left: 835px;
    top: 366px;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #FF0000;
    }

& .discountPrice {
    position: absolute;
    width: 146px;
    height: 32px;
    left: 1060px;
    top: 378px;
    font-size: 26px;
    line-height: 32px;
    text-decoration-line: line-through;
    color: #B4B4B4;
    }

& .save {
    position: absolute;
    width: 162px;
    height: 29px;
    left: 836px;
    top: 417px;
    font-size: 24px;
    line-height: 29px;
    color: #B4B4B4;
}

& .tax {
    position: absolute;
    width: 123px;
    height: 20px;
    left: 835px;
    top: 448px;
    font-size: 16px;
    line-height: 20px;
    color: #B4B4B4;
    }

& .star {
    position: absolute;
    display: flex;
    width: 100px;
    left: 835px;
    top: 271px;
}

& .internet {
    position: absolute;
    width: 311px;
    height: 20px;
    left: 835px;
    top: 474px;
    font-size: 16px;
    line-height: 20px;
    color: #B4B4B4;
}

& .zest {
    position: absolute;
width: 68px;
height: 16px;
left: 1130px;
top: 473px;
}

& .addToCart,.buyItNow{
    position: absolute;
    width: 144px;
    height: 38px;
    left: 830px;
    top: 520px;
    border: 1px solid #FFFFFF;
    color: white;
    line-height: 17px;
    font-size: 14px; 
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
}

& .buyItNow {
    left: 1000px;
}

& .addToCart:hover,.buyItNow:hover {
    background-color: #ff0000;
    border: none;
}

& .reviews {
    position: absolute;
    width: 52px;
    height: 12px;
    left: 900px;
    top: 271px;
    font-size: 10px;
    line-height: 12px;
    color: #9B9B9B;
}

& .colorCircle {
    position: absolute;
    width: 27px;
    height: 28px;
    left: 872px;
    top: 305px;
    border-radius: 14px;
    box-sizing: border-box;
}

& .middle {
    background: #000000;
    border: 1px solid #838383;
}

& .first {
    background: #810000;
    border: none;
    left: 835px;
}

& .last {
    background: #1300ff;
    border: none;
    left: 908px;
}

& .warranty {
    position: absolute;
    width: 100%;
    height: 86px;
    left: 0px;
    top: 688px;
    background: #2C2C2C;
}

.warrantyImage {
    position: absolute;
    width: 537px;
    height: 98px;
    left: 803px;
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
    width: 252px;
    height: 88px;
    left: 152px;
    top: 25px;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
}

& .uninterrupted {
    position: absolute;
    width: 144px;
    height: 72px;
    left: 547px;
    top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}

& .ipx7 {
    position: absolute;
    width: 105px;
    height: 48px;
    left: 836px;
    top: 25px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}

& ._14W {
    position: absolute;
    width: 96px;
    height: 96px;
    left: 1106px;
    top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
}
`;

export default function TopProductDisplay() {
    return (
        <Container>
            <div>
                <div className="leftButton"></div>
                <div className="imageDiv">
                    <div className="circle">
                        <img src={topImage} alt="stone1200"/>
                    </div>
                </div>
                <div className="rightButton"></div>
            </div>
            <div className="rigthSection">
                <p className="name">Stone 1200</p>
                <p className="type">Bluetooth Speaker</p>
                <div className="star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                </div>
                <div className="colorCircle first"></div>
                <div className="colorCircle middle"></div>
                <div className="colorCircle last"></div>
                <p className="reviews">33 reviews</p>
                <p className="price">Rs.3,499.00</p>
                <p className="discountPrice">Rs.3,499.00</p>
                <p className="save">You save 49%</p>
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
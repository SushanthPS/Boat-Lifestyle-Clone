import styled from "styled-components";

import { champions } from "../db";

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;

    .main-banner > img,
    .section > img {
        max-width: 100%;
        width: auto;
        display: block;
        margin: auto;
        height: auto;
    }

    .section {
        position: relative;
    }

    .section-2-text {
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        top: 0%;
        width: 100%;
    }

    .section-2-text > h2 {
        font-size: 30px;
        font-weight: 900;
        text-align: center;
        -webkit-text-stroke: 1px #ff0000;
        margin: 10px 0 10px;
        color: white;
    }

    .section-2-text > p {
        text-align: center;
        background: #ff0000;
        width: 95%;
        max-width: 700px;
        margin: auto;
        padding: 10px;
        border-radius: 2em;
        font-weight: bold;
        font-size: 20px;
        color: white;
    }

    .section-1-text {
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        bottom: -5%;
        background-color: white;
        border-radius: 20px;
        padding: 15px;
        max-width: 700px;
        width: 100%;
    }

    .section-1-text > div {
        text-align: center;
        position: relative;
    }

    .sect-icon {
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        top: -50px;
        max-width: 60px;
        width: 60px;
    }

    .sect-icon > img {
        max-width: 100%;
        width: auto;
        display: block;
        margin: auto;
        height: auto;
    }

    .section-1-text > div > p {
        font-size: 20px;
        margin-top: 30px;
        font-weight: 500;
        margin-bottom: 1em;
    }
`;

export function Champions() {
    return (
        <Container>
            <div className="main-banner">
                <img
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IPL_sec_1.jpg?v=1632132839"
                    alt=""
                />
            </div>
            <div className="section section-2">
                <div className="section-2-text">
                    <h2>GET A CHANCE TO WIN FREE IPL MERCHANDISE</h2>
                    <p>
                        Shop worth Rs 2000 and 100 lucky winners will get boAt
                        IPL merchandise!
                    </p>
                </div>
                <img
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ipl_sec_2.jpg?v=1632132839"
                    alt=""
                />
            </div>
            <div className="section section-1">
                <img
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/hardik-sec-3.jpg?v=1632132840"
                    alt=""
                />
                <div className="section-1-text">
                    <div>
                        <div className="sect-icon">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon_542c95df-bb9d-4df4-96d5-66e5e33cbe38.png?v=1632132629"
                                alt=""
                            />
                        </div>
                        <p>
                            {" "}
                            Top 3 highest spenders stand a chance to win a boAt
                            product and get to meet and greet one of our
                            boAthead in a clubhouse <br /> session*
                        </p>
                        <small>*T&C apply</small>
                    </div>
                </div>
            </div>
        </Container>
    );
}
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const CardContainer = styled.div`
    width: 400px;
    height: 371px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    // remove this style later
    box-sizing: unset;
    border: 1px solid #000;
`;

const InnerImgContainer = styled.div`
    width: 400px;
    height: 232px;
    background: var(--gray);
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;

    & > img {
        width: 210px;
        height: 210px;
        position: absolute;
        top: 10px;
        left: 95px;
        transition: all 0.5s ease;
    }

    &:hover > img:nth-child(2) {
        opacity: 0;
    }
`;

const CardData = styled.div`
    width: 400px;
    height: 139px;
    position: relative;
    background: var(--white);
    border: 1px solid transparent;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;

    & > .product-title {
        margin: 12px auto 8px 18px;
        letter-spacing: 1px;
        font-weight: 400;
        font-size: 14px;
    }

    & > .product-price {
        color: var(--red);
        margin: auto 6px 9px 18px;
        font-weight: 400;
        font-size: 14px;
        display: inline;
    }

    & > .product-original-price {
        color: var(--light-gray);
        display: inline;
        text-decoration-line: line-through;
        font-weight: 400;
        font-size: 10px;
    }
    & > .product-features {
        margin-left: 29px;
        margin-top: 9px;
        list-style: none;
        font-size: 12px;
        font-weight: 300;
        li {
            position: relative;
            letter-spacing: 0.1px;
            margin-bottom: 2px;
        }

        li::before {
            content: "";
            position: absolute;
            left: -10px;
            transform: translateY(-50%);
            top: 50%;
            width: 4px;
            height: 4px;
            background: var(--red);
        }
    }

    & > .star-icon {
        width: 10px;
        height: 10px;
        position: absolute;
        top: 16px;
        right: 42px;
    }
    & > .product-rating {
        position: absolute;
        top: 14px;
        right: 22px;
        font-size: 12px;
        font-style: normal;
        font-weight: 100;
    }
`;

const CardShopNowButton = styled.button`
    position: absolute;
    right: 22px;
    bottom: 32px;
    width: 109px;
    height: 28px;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    transition: all 0.2s ease;

    & > span {
        transform: translateY(-1px);
        letter-spacing: 1px;
        color: var(--white);
    }

    &:hover {
        background: var(--red);
    }
`;

export const ProductCard = () => {
    return (
        <CardContainer>
            <InnerImgContainer>
                <img src={img2} alt="img" />
                <img src={img1} alt="img" />
            </InnerImgContainer>
            <CardData>
                <p className="product-title">Misfit T200</p>
                <p className="product-price">Rs.1,499.00</p>{" "}
                <span className="product-original-price">Rs.1,499.00</span>
                <ul className="product-features">
                    <li>120 Minutes battery runtime</li>
                    <li>0.5-12mm trimming range</li>
                    <li>Skin-Friendly titanium blades</li>
                </ul>
                <svg
                    className="star-icon"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z"
                        fill="#FF0000"
                    />
                </svg>
                <span className="product-rating">4.5</span>
                <CardShopNowButton>
                    <span>Shop Now</span>
                </CardShopNowButton>
            </CardData>
        </CardContainer>
    );
};

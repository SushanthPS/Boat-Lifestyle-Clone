import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const CardContainer = styled.div`
    width: 400px;
    height: 371px;
    border-radius: 8px;
    cursor: pointer;

    box-sizing: unset;
    border: 1px solid #000; // remove this style later
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

export const ProductCard = () => {
    return (
        <CardContainer>
            <InnerImgContainer>
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
            </InnerImgContainer>
        </CardContainer>
    );
};

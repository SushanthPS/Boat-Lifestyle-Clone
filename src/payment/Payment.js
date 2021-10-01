import styled from "styled-components";
import leftArrow from "../assets/left-arrow.svg";

const PaymentContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--ligth-white);

    & > div {
        width: 1240px;
        margin: auto;
        border: 1px solid transparent;

        p {
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            margin: 100px auto auto auto;
        }
    }
`;

export const Payment = () => {
    return (
        <PaymentContainer>
            <div>
                <p>boAt Lifestyle</p>
                <section></section>
            </div>
        </PaymentContainer>
    );
};

import styled from "styled-components";
import leftArrow from "../assets/left-arrow.svg";
import { Link } from "react-router-dom";

const PaymentContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--ligth-white);

    & > div {
        width: 1240px;
        margin: auto;
        border: 1px solid transparent;

        .payment-title {
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            margin: 100px auto 36px auto;
        }

        > .payment-section-1 {
            padding-left: 17px;
            height: 128px;
            background: var(--ligth-light-white);
            border: 1px solid transparent;
            position: relative;

            .payment-goback {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                margin-top: 16px;
            }
            .order {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
                margin-top: 20px;
            }
            .transionID {
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: 20px;
                margin-top: 8px;
            }
            .amount-paid-title {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
                position: absolute;
                right: 35px;
                top: 48px;
            }
            .amount {
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 17px;
                position: absolute;
                right: 35px;
                top: 77px;
            }
        }
    }
`;

export const Payment = () => {
    return (
        <PaymentContainer>
            <div>
                <p className="payment-title"> boAt Lifestyle</p>
                <section className="payment-section-1">
                    <Link to="/">
                        <p className="payment-goback">
                            <img src={leftArrow} alt={leftArrow} /> Go back
                        </p>
                    </Link>
                    <p className="order">boAt Lifestyle Order</p>
                    <p className="transionID">Transection ID:1234567890</p>
                    <p className="amount-paid-title">Amount to be paid</p>
                    <p className="amount">
                        ₹ <span>1,499.00</span>
                    </p>
                </section>
                <section className="payment-section-2"></section>
            </div>
        </PaymentContainer>
    );
};

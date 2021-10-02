import styled from "styled-components";
import { Link } from "react-router-dom";
import leftArrow from "../assets/left-arrow.svg";
import paytmLogo from "../assets/paytm-logo.svg";
import qrCode from "../assets/qr-code.svg";

const PaymentContainer = styled.div`
    width: 100%;
    height: 1270px;
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

        > section {
            background: var(--ligth-light-white);
            padding-left: 17px;
        }

        > .payment-section-1 {
            height: 128px;
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
        > .payment-section-2 {
            height: 200px;
            margin: 16px auto;
            border: 1px solid transparent;
            position: relative;

            .section2-title {
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: 20px;
                text-transform: uppercase;
                margin-top: 28px;
            }
            .section2-dis {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
                margin-top: 16px;
            }
            .paytm-logo {
                margin-top: 16px;
                margin-left: -5px;
            }

            .qr-code {
                position: absolute;
                top: 24px;
                right: 63px;
                cursor: pointer;
            }
        }

        > .payment-section-3 {
            border: 1px solid #000;
            height: 648px;

            .section3-title {
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: 20px;
                text-transform: uppercase;
                margin-top: 28px;
            }

            .anchor {
                margin-top: 57px;
                display: flex;
                align-items: center;

                > div {
                    height: 12px;
                    width: 12px;
                    border-radius: 50%;
                    background: #042e6f;
                    display: inline-block;
                    box-shadow: 0 0 0 10px #2ec7f4;
                    margin-left: 12px;
                }
                .paytm-logo {
                    margin-left: 14px;
                }
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
                <section className="payment-section-2">
                    <p className="section2-title">
                        Pay Instantly using QR code
                    </p>
                    <p className="section2-dis">Scan QR Code using paytm app</p>
                    <img
                        className="paytm-logo"
                        src={paytmLogo}
                        alt={paytmLogo}
                    />
                    <img className="qr-code" src={qrCode} alt={qrCode} />
                </section>
                <section className="payment-section-3">
                    <p className="section3-title">Select an option to pay</p>
                    <div className="anchor">
                        <div> </div>
                        <img
                            className="paytm-logo"
                            src={paytmLogo}
                            alt={paytmLogo}
                        />
                    </div>
                </section>
            </div>
        </PaymentContainer>
    );
};

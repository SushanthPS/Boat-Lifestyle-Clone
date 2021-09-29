import styled from "styled-components";
import logo from "../assets/boat-logo.svg";
import downArrowIcon from "../assets/down-arrow-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import couponIcon from "../assets/coupon-icon.svg";
import avatarIcon from "../assets/avatar-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import { Link } from "react-router-dom";

const NavbarContainre = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    background: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 10;

    span,
    img {
        cursor: pointer;
    }

    & > div:nth-child(1) {
        width: 216px;
    }

    & > div:nth-child(2) {
        width: 390px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > span:nth-child(1) {
            font-weight: 500;
            font-size: 16px;
        }

        > span {
            font-weight: 200;
            font-size: 15px;
            position: relative;
        }

        > span::after {
            content: "";
            position: absolute;
            height: 12px;
            width: 1px;
            background: var(--red);
            top: 22%;
            right: -15px;
        }

        > span:nth-child(4)::after {
            display: none;
        }

        > span:nth-child(1)::before {
            content: "";
            position: fixed;
            background: var(--black-gradient);
            width: 100%;
            height: 100vh;
            display: none;
            top: 0px;
            left: 0;
            border-top: 88px solid transparent;
        }
        > span:nth-child(1):hover::before {
            display: block;
            z-index: -1;
        }
    }

    & > div:nth-child(3) {
        width: 380px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const SearchBox = styled.div`
    width: 235px;
    height: 36px;
    border-radius: 19px;
    background: var(--white);
    display: flex;
    align-items: center;
    padding: auto 18px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;

    & img {
        margin-left: 18px;
        margin-right: 8px;
    }
    input {
        border: none;
    }
`;

const NavbarSpaceHolder = styled.div`
    height: 88px;
`;

export const Navbar = () => {
    return (
        <>
            <NavbarContainre>
                <div className="boat-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <span>
                        Shop <img src={downArrowIcon} alt="arrow-Icon" />
                    </span>
                    <span>Pro It Up</span>
                    <span>Sound of Champions</span>
                    <span>
                        More <img src={downArrowIcon} alt="arrow-Icon" />
                    </span>
                </div>
                <div>
                    <SearchBox>
                        <img src={searchIcon} alt="search" />
                        <input type="text" placeholder="Search..." />
                    </SearchBox>
                    <div>
                        <Link to="/coupon">
                            <img src={couponIcon} alt="couponIcon" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            <img src={avatarIcon} alt="avatarIcon" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <img src={cartIcon} alt="cartIcon" />
                        </Link>
                    </div>
                </div>
            </NavbarContainre>
            <NavbarSpaceHolder></NavbarSpaceHolder>
        </>
    );
};

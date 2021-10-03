import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ProductCard } from "./ProductCard";

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
    background: linear-gradient(115.38deg, #292929 -23.43%, #010101 61.34%);
    border: 1px solid transparent;

    .data-cont {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    .data-cont > h2 {
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2em;
        color: var(--white);
    }

    .data-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-evenly;
        margin-top: 30px;
        row-gap: 70px;
        height: 100%;
    }
`;

export function Collections() {
    const [data, setData] = useState([]);
    const { collectionName } = useParams();

    const getCategory = (cname) => {
        let ans;
        if (cname === "true-wireless-earbuds") {
            ans = "WIRELESS EARBUDS";
        } else if (cname === "bluetooth-wireless-headphones") {
            ans = "BLUETOOTH EARPHONES";
        } else if (cname === "smart-watches") {
            ans = "SMART WATCHES";
        } else if (cname === "wired-earphones") {
            ans = "WIRED EARPHONES";
        } else if (cname === "bluetooth-speakers") {
            ans = "BLUETOOTH SPEAKERS";
        } else if (cname === "home-audio") {
            ans = "HOME THEATRE & SOUND BARS";
        } else if (cname === "mobile-accessories") {
            ans = "MOBILE ACCESSORIES";
        } else if (cname === "trebel-audiowear-for-women") {
            ans = "AUDIOWEAR FOR WOMEN";
        } else if (cname === "limited-edition") {
            ans = "LIMITED EDITION";
        } else if (cname === "misfit-by-boat") {
            ans = "MISFIT BY BOAT";
        } else if (cname === "immortal-gaming") {
            ans = "IMMORTAL GAMING";
        }

        return ans;
    };

    const getTitle = (cname) => {
        let ans;
        if (cname === "true-wireless-earbuds") {
            ans = "Wireless Earbuds";
        } else if (cname === "bluetooth-wireless-headphones") {
            ans = "Wireless Earphones";
        } else if (cname === "smart-watches") {
            ans = "Smart Watches";
        } else if (cname === "wired-earphones") {
            ans = "Wired Earphones";
        } else if (cname === "bluetooth-speakers") {
            ans = "Wireless Speakers";
        } else if (cname === "home-audio") {
            ans = "Home Theater Systems & Soundbars";
        } else if (cname === "mobile-accessories") {
            ans = "Mobile Accessories";
        } else if (cname === "trebel-audiowear-for-women") {
            ans = "TRebel";
        } else if (cname === "limited-edition") {
            ans = "Limited Edition";
        } else if (cname === "misfit-by-boat") {
            ans = "Misfit - Best Trimmer for Men";
        } else if (cname === "immortal-gaming") {
            ans = "Immortal Gaming";
        }
        return ans;
    };

    const catName = getCategory(collectionName);
    const title = getTitle(collectionName);

    const getData = async () => {
        const res = await axios.get("http://localhost:3002/products");
        let temp = res.data.filter((el) => el.category === catName);
        setData(temp);
    };

    useEffect(() => {
        getData();
    }, [collectionName]);

    return (
        <Container>
            <div className="data-cont">
                <h2>{title}</h2>
                <div className="data-grid">
                    {data.map((el) => (
                        <ProductCard el={el}></ProductCard>
                    ))}
                </div>
            </div>
        </Container>
    );
}

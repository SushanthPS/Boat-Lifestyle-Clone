import splash from './Images/image 119.png';
import styled from 'styled-components';

const Splash = styled.div`
    position: absolute;
    width: 100%;
    height: 465px;
    left: 0px;
    top: 2033px;
    background: linear-gradient(178.61deg,#EB1D25 7.5%,#AC0B21 99.15%);

    & img {
        position: absolute;
        width: 466px;
        height: 414px;
        left: 100px;
        top: 24px;
    }

    & h2 {
        position: absolute;
        width: 577px;
        height: 49px;
        left: 730px;
        top: 160px;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }

    & p {
        position: absolute;
        width: 508px;
        height: 72px;
        left: 730px;
        top: 213px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #FFFFFF;

    }
`;

export default function SplashShield() {
    return (
        <Splash>
            <img src={splash} alt="splash" />
            <h2>IPX7 Water & Splash Shield</h2>
            <p>Carry your splashproof speakers to anywhere with IPX7 splash & water shield leaving behind the tension of water running over.</p>
        </Splash>
    );
}
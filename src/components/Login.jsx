import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
    height: 525px;
    background-color: var(--white);
    padding-bottom: 60px;
    border: 0.1px solid black;

    a {
        color: #ea2127 !important;
        font-weight: 700;
        text-decoration: underline;
    }

    .cont {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
    }

    .cont2 {
        margin-left: auto;
        margin-right: auto;
        width: 420px;
        max-width: 100%;
        margin-top: 30px;
    }

    .heading {
        margin: 10px 0px 40px;
    }

    .heading > h2 {
        text-align: center;
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 30px;
        line-height: 1.2em;
    }
`;

const Form = styled.form`
    .socials > iframe {
        width: 100%;
        max-width: 100%;
        padding-top: 0px;
        margin-bottom: 5px;
        border: 0px;
        height: 50px;
    }

    .login-email,
    .login-password {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        margin-bottom: 8px;
    }

    .login-email > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
        box-sizing: border-box;
    }

    .text-over-input {
        position: relative;
        display: block;
    }
    .text-over-input > input {
        width: 100%;
        font-size: 16px;
        line-height: 16px;
        border: 1px solid #d8d8d8;
        padding: 11px 15px;
        vertical-align: middle;
        max-width: 100%;
    }

    .forgot-password {
        position: absolute;
        top: 50%;
        right: 20px;
        line-height: 1em;
        margin-top: -0.5em;
        font-size: 12.8px;
        transition: color 0.1s, border-color 0.1s;
        text-decoration: none;
    }

    .forgot-password:hover {
        cursor: pointer;
        color: #01a2e1;
        text-decoration: underline;
        background-color: transparent;
    }

    input:focus {
        border-color: #000;
    }

    .action-bottom {
        margin-top: 27px;
    }

    .action-bottom > p {
        margin-bottom: 1em;
        font-weight: 500;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    .action-bottom > p > input {
        font-weight: 700;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 5px;
        background: red;
        border: 1px solid red;
        font-size: 16px;
        line-height: 1em;
        height: auto;
        margin: 0;
        padding: 11px 25px;
        vertical-align: middle;
        text-align: center;
        color: white;
        transition: background-color 0.1s, color 0.1s, border-color 0.1s,
            opacity 0.1s;
        display: inline-block;
    }

    .action-bottom > span {
        margin: 10px 0;
        display: block;
        transition: color 0.1s, border-color 0.1s;
    }
`;

export function Login() {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [flag, setFlag] = useState(false);

    const getData = async () => {
        const res = await axios.get("http://localhost:3002/users");
        setData(res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let cred = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email && data[i].password === pass) {
                cred = true;
                break;
            }
        }
        if (cred) {
            setFlag(true);
        } else {
            setFlag(false);
            alert("Incorrect email or password");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <div className="cont">
                <div className="cont2">
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="socials">
                            <iframe
                                id="social_login_frame"
                                title="Social Login Frame"
                                src="https://social-login.oxiapps.com/widget?site=boatlifestylein.myshopify.com&amp;vt=928362&amp;parenturl=https://www.boat-lifestyle.com/account/login"
                                scrolling="no"
                            ></iframe>
                        </div>
                        <div className="login-email">
                            <label htmlFor="customer_email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="customer_email"
                            />
                        </div>
                        <div className="login-password">
                            <label htmlFor="customer_password">Password</label>
                            <div className="text-over-input">
                                <input
                                    onChange={(e) => {
                                        setPass(e.target.value);
                                    }}
                                    type="password"
                                    id="customer_password"
                                />
                                <div className="forgot-password">
                                    Forgot your password?
                                </div>
                            </div>
                        </div>
                        <div className="action-bottom">
                            <p>
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn"
                                />
                            </p>
                            <Link to="/account/register">
                                <span>Create account</span>{" "}
                            </Link>
                        </div>
                    </Form>
                    {flag ? <Redirect to="/cart" /> : ""}
                </div>
            </div>
        </Container>
    );
}

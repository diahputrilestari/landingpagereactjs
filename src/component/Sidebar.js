import React from 'react'
import styled from "styled-components";
import logo from "../assets/logoweb.png";
import Input from "./Input";

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt=""/>
                <h3>
                    Member <span>Area</span>
                </h3>
            </LogoWrapper>

            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="Full name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <button>Sign Up</button>
            </Form>
            <div>
                <h4>AAlready have an account? <span>Sign in</span></h4>
            </div>
        </Container>
    )
}
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: #666666;
        margin-bottom: 2 rem;
    }

    button {
        width: 75%;
        min-width: 350px;
        max-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        background-color: #fd9b96;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    img {
        width: 50%
    }
    h3 {
        text-align: center;
        color: #ff8d8d;
        font-size: 22px;
    }
    span {
        color: #808080 !important;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px){
        width: 100vw;
        position: absolute;
        padding: 0;
    }
    h4{
        color: #808080;
    }
    span{
        color: #ff8d8d;
        cursor: pointer;
    }
`;

export default Sidebar

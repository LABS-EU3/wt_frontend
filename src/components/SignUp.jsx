import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/core";
import banner from "./assets/banner.jpg";

const SignUpStyle = styled.div`

    // border: 1px solid red;
    width: 100%;
    height: 100vh;
    color: black;
    background-color:white;



    .signup-container{
        // border: 1px solid yellow;
        width: 100%;
        height: 100%;
        display: flex;
    }

   .signup-banner{
    //    border: 1px solid blue;
       width: 50%;
       opacity: 0.8;

        @media only screen and (max-width: 800px){
            display: none;
        }

       img{
           width: 100%;
           height:100%;
       }
    }

    .signup-form{
        width: 50%;
        display: flex;
        align-items: center;
        padding: 0 4rem;

        @media only screen and (max-width: 800px){
            width: 100%;
            text-align: centre;
        }

        form{
            // border: 1px solid white;
            height: auto;
            width: 100%;
            text-align: left;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content:center;
            alignt-items: center;

            a{
                font-size: 16px;
                margin-top: 1rem;
                color: orange;
            }

            a:hover{
                color: grey;
            }

            input{
                display: block
                margin-top: 1rem;
                width: 80%;
                background-color: cream;
            }

            input[type=text], input[type=email], input[type=password]{
                background-color: #fffdd0;
            }

            h1{
                
                margin-bottom:2rem;
            }

           

            .signup-form-button{
                width: 80%;
                margin: 1rem 0;
            }


            .signup-linked-button{
                width: 45%;
                margin: 1rem 1rem 0 0;
            }
            
        .signup-linked-profiles{
            width: 80%;
        }

    }


`;

function SignUp() {
  return (
    <SignUpStyle>
      <div className="signup-container">
        <div className="signup-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="signup-form">
          <form>
            <h1>Sign up</h1>
            <input name="FIRST NAME" type="text" />
            <input name="LAST NAME" type="text" />
            <input name="EMAIL" type="email" />
            <input name="PASSWORD" type="password" />
            <Button
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
            >
              Sign up
            </Button>
            <div className="signup-linked-profiles">
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Google
              </Button>
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Facebook
              </Button>
            </div>
            <a href="#">Already have an account?</a>
          </form>
        </div>
      </div>
    </SignUpStyle>
  );
}

export default SignUp;

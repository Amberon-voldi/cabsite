import React, {useState} from 'react'
import {  HeroContainer, HeroBg, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';

import styled from "styled-components";


const HeroSelection = () => {

 
   
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <Section id="hero">
     
      <div className="content">
        <div className="title">
          <h1>Where you wanna go!</h1>
          <p>
         Plan your trip with us, get the best price possible and enjoy a hassle-free ride 
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor=""> Enter Pick UP</label>
            <select>
                <option>Select</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
              </select>
            
          </div>
          <div className="container">
            <label htmlFor="">Enter Drop</label>
            <select>
                <option>Select</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
                <option>Arab Egypt</option>
                <option>Udaipur India</option>
              </select>
          </div>
          <div className="container">
            <label htmlFor="">Start Date</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">End Date</label>
            <input type="date" />
          </div>
          <button>SEARCH</button>
        </div>
      </div>
    </Section>
        </HeroContainer>

    )
}

export default HeroSelection



const Section = styled.section`
  position: relative;
  
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: black;
          padding: 0.3rem;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
        select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
      }
      button {
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: black;
        background-color: #FFCA26;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 100%;
    width: 100%;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1rem;
          font-weight: 500;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        gap: 1rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
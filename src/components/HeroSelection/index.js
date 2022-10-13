import React from 'react'
import {  HeroContainer, HeroBg, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng
// } from "react-places-autocomplete";
import styled from "styled-components";
import ContactUs from '../BookingForm';


const HeroSelection = () => {
  // const [pickupaddress, setpickupAddress] = React.useState("");
  // const [dropaddress, setdropAddress] = React.useState("");
  // const [coordinates, setCoordinates] = React.useState({
  //   lat: null,
  //   lng: null
  // });

  // const handleSelectpickup = async value => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   setpickupAddress(value);

  //   setCoordinates(latLng);
  // };
  // const handleSelectdrop = async value => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   setdropAddress(value);

  //   setCoordinates(latLng);
  // };
 
   
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
          <ContactUs />
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
          border-bottom: 1px solid #FFCA26;
 
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
            border: none;
          }
          &[type="time"] {
      
            border: none;
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
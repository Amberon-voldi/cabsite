import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeaderElements';
import Video from '../../videos/video.mp4';

import styled from "styled-components";


const Header = ({title}) => {


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <Section id="hero">

                <div className="content">
                    <div className="title">
                        <h1>{title}</h1>
                        
                    </div>

                </div>
            </Section>
        </HeroContainer>

    )
}

export default Header



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
        font-size: 1rem;
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
          font-size: 2.5rem;
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
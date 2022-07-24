import React from "react";
import styled from "styled-components";

export default function Footer() {
  const links = [
    { title: "Partners", links: ["Partner App", "Support","Vendor Policy"] },
    {
      title: "Quick Links",
      links: [
        "FAQs",
        "About us",
        "Terms & Conditions",
        "Privacy Policy",
        
      ],
    },
    {
      title: "Contact us",
      links: [
        "+91 9717163700",
        "travelingcabservice@gmail.com",
       
      ],
    },
  ];
  return (
    <Footr>
      <div className="upper__footer">
        <div className="brand">
         
          <p>
          We offer Rental Cab service all over india for outstation one way and round trip Car Rental service for intercity travel. Outstation Rental Car in Bareilly all type of car are available.
          </p>
          
        </div>
        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="lower__footer">
        <span>&copy; 2022 Mythics Studio</span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Instagram</li>
        </ul>
      </div>
    </Footr>
  );
}

const Footr = styled.footer`
  border-top: 0.02rem solid var(--primary-color);
  background-color: black;
 color: white;
 padding-bottom: 10px;
  .upper__footer {
    margin: 0 5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      img {
        height: 2rem;
      }
      
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        color: var(--primary-color);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        li {
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .lower__footer {
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.02rem solid var(--primary-color);
    padding-top: 1rem;
    margin-top: 1rem;
    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .upper__footer {
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand {
        .mail-container {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .links {
        ul {
          list-style-type: none;
        }
      }
    }
    .lower__footer {
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
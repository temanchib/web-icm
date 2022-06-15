import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, We are <span>Impact Community Ministries</span>
              </p>
              <h2 className="about__heading">Let us introduce our self</h2>
              <div className="about__info">
                {/* prettier-ignore */}
                <PText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  <br /> <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  include:
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </PText>
              </div>
              {/* prettier-ignore */}
              <Button btnText="View our details services and events" btnLink="/services-and-events" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Founder</h1>
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Penatua"
                items={['Pdt Djonathan Lim']}
              />
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Wakil Penatua"
                items={['Pdt Hermanton S.Th']}
              />
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Strategic Leader"
                items={['Erond Hamzah']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Sunday Service</h1>
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Ibadah Raya Umum 1 & 2"
                items={['08.30 & 10.30 wib']}
              />
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Tionghoa Service"
                items={['16.00 wib']}
              />
              {/* prettier-ignore */}
              <AboutInfoItem
                title="Youth Service"
                items={['16.00 wib']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Cheerleader</h1>

              <AboutInfoItem
                title="CWK-1"
                items={['babygurl | Nada Phanteq']}
              />
              <AboutInfoItem
                title="CWK-2"
                items={['kotaro | Wina Phanteq']}
              />
              <AboutInfoItem
                title="CWK-3"
                items={['clawy | Sella Phanteq']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

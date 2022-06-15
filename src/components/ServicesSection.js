import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .service_title {
    padding-left: 13rem;
  }
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <div className="service_title">
          {/* prettier-ignore */}
          <SectionTitle subheading="What we will do for you" heading="Services" />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Ibadah Raya Umum 1 & 2"
            desc="08.30 & 10.30 wib"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Tionghoa Service"
            desc="16.00 wib"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Youth Service"
            desc="16.00 wib"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

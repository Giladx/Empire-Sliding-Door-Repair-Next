import React from 'react'

import PropTypes from 'prop-types'

const Contact3 = (props) => {
  return (
    <>
      <div className="contact3-contact20 thq-section-padding">
        <div className="contact3-max-width thq-section-max-width">
          <div className="contact3-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact3-content">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="contact3-text2 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact3-row">
            <div className="contact3-content1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact3-contact-info">
                <div className="contact3-content2">
                  <h3 className="contact3-text3 thq-heading-3">
                    Boynton Beach ,Florida
                  </h3>
                  <p className="contact3-text4 thq-body-large">
                    {props.content5}
                  </p>
                </div>
                <a
                  href="https://tel:+19542374136"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact3-address thq-body-small"
                >
                  {props.address1}
                </a>
              </div>
            </div>
            <div className="contact3-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact3-contact-info1">
                <div className="contact3-content4">
                  <h3 className="contact3-text5 thq-heading-3">
                    Boynton Beach ,Florida
                  </h3>
                  <p className="contact3-text6 thq-body-large">
                    {props.content5}
                  </p>
                </div>
                <a
                  href="https://tel:+19542374136"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact3-address1 thq-body-small"
                >
                  {props.address1}
                </a>
              </div>
            </div>
            <div className="contact3-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact3-contact-info2">
                <div className="contact3-content6">
                  <h3 className="contact3-text7 thq-heading-3">
                    Boynton Beach ,Florida
                  </h3>
                  <p className="contact3-text8 thq-body-large">
                    {props.content5}
                  </p>
                </div>
                <a
                  href="https://tel:+19542374136"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact3-address2 thq-body-small"
                >
                  {props.address1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact3-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact3-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact3-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-text2 {
            text-align: center;
          }
          .contact3-row {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact3-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text3 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text4 {
            text-align: center;
          }
          .contact3-address {
            text-align: center;
            text-decoration: none;
          }
          .contact3-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text5 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text6 {
            text-align: center;
          }
          .contact3-address1 {
            text-align: center;
            text-decoration: none;
          }
          .contact3-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact3-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact3-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact3-text7 {
            align-self: stretch;
            text-align: center;
          }
          .contact3-text8 {
            text-align: center;
          }
          .contact3-address2 {
            text-align: center;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .contact3-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact3-row {
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Contact3.defaultProps = {
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  phone1: '+1-123-456-7890',
  address1: '+19542374136',
  content5: '11366 Barca Blvd, Boynton Beach, FL 33437, United States',
  content2: 'Get in touch with us today!',
  content4: 'Address :  516 SW 7th Ave, Delray Beach, FL 33444, United States',
  email1: 'info@slidingdoorrepairpros.com',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Contact Us',
}

Contact3.propTypes = {
  content1: PropTypes.string,
  phone1: PropTypes.string,
  address1: PropTypes.string,
  content5: PropTypes.string,
  content2: PropTypes.string,
  content4: PropTypes.string,
  email1: PropTypes.string,
  content3: PropTypes.string,
  heading1: PropTypes.string,
}

export default Contact3

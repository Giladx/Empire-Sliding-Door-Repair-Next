import React from 'react'

import PropTypes from 'prop-types'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">{props.slogan}</span>
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
            <span className="thq-body-small">{props.sectionDescription}</span>
          </div>
          <div className="features1-content">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content1 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions"></div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text1 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1560250056-07ba64664864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODUzMTQ1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Expert Technicians Image',
  feature1Description:
    'Our team consists of highly skilled technicians with years of experience in repairing sliding doors.',
  secondaryAction: 'Get a Quote Now',
  feature2Title: 'Quick Turnaround',
  feature2ImageAlt: 'Quick Turnaround Image',
  feature3Title: 'Customer Satisfaction',
  feature1Title: 'Expert Technicians',
  mainAction: 'Professional Sliding Door Repair',
  sectionTitle: 'Our Features',
  feature3Description:
    'Customer satisfaction is our top priority. We strive to exceed expectations and ensure a seamless repair experience.',
  feature2Description:
    "We understand the urgency of sliding door repairs, that's why we offer quick turnaround times for our services.",
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODUzMTQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1597423498219-04418210827d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODUzMTQ1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Customer Satisfaction Image',
  sectionDescription:
    'Discover the key features that make our sliding door repair services stand out.',
  slogan: 'Quality Repairs, Exceptional Service',
}

Features1.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  mainAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features1

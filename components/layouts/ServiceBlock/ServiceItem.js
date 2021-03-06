import React from 'react';
import LinkComponent from '../../elements/Link';
const ServiceItem = ({key, title, link, image}) => {
    return (
        <li key={key} className="item  col-lg-4 col-md-6 col-sm-12">
            <div className="item-wrap d-flex  align-items-center">
                <div className="img-block">
                    <img src={image} alt="Изображение"/>
                </div>
                <div className="text">
                    <h3 className="title">
                        {title}
                    </h3>
                    <LinkComponent href="/services/[serviceSlug]" slug={`/services/${link}`}>
                        <a className="link">
                            Подробнее
                            <svg width="26" height="8" viewBox="0 0 26 8" fill="none" >
                                <path d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5L25 4.5V3.5L0 3.5L0 4.5Z" fill="black"/>
                            </svg>
                        </a>
                    </LinkComponent>
                </div>
            </div>
        </li>
    );
};


export default ServiceItem;
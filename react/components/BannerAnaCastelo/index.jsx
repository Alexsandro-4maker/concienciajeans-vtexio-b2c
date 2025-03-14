import React from "react";
import { useCssHandles } from "vtex.css-handles";
import './banner-anacastelo.css'

const CSS_HANDLES = [
  "bannerContainer",
  "bannerImage",
  "bannerContent",
  "bannerTitle",
  "bannerSubtitle",
  "bannerCTA",
];

const CustomBannerAnaCastelo = ({
  backgroundImage,
  title,
  backgroundImage2,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div
      className="bannerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` } }
    >
      <div className="bannerContent">
        <h2 className="bannerTitle">{title}</h2>

        <img src={backgroundImage2} alt={title} />
        <p className="bannerSubtitle">{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="bannerCTA">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

CustomBannerAnaCastelo.schema = {
  title: "Custom Banner",
  description: "Banner editável pelo Site Editor",
  type: "object",
  properties: {
    backgroundImage: {
      title: "Imagem de Fundo",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
     backgroundImage2: {
      title: "Imagem",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
    },
    title: {
      title: "Título",
      type: "string",
    },
    subtitle: {
      title: "Subtítulo",
      type: "string",
    },
    ctaText: {
      title: "Texto do Botão",
      type: "string",
    },
    ctaLink: {
      title: "Link do Botão",
      type: "string",
    },
  },
};

export default CustomBannerAnaCastelo;

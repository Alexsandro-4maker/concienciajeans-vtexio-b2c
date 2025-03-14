import React from "react";
import { useCssHandles } from "vtex.css-handles";

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
  subtitle,
  ctaText,
  ctaLink,
}) => {
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div
      className={`${handles.bannerContainer}`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", height:"720px" } }
    >
      <div className={`${handles.bannerContent}`}>
        <h2 className={`${handles.bannerTitle}`}>{title}</h2>
        <p className={`${handles.bannerSubtitle}`}>{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className={`${handles.bannerCTA}`}>
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

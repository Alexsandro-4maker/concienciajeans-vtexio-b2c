import React from 'react';
import Slider from 'react-slick';
import { useProduct } from 'vtex.product-context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./product-images.css";
const ProductImages = () => {
  const productContext = useProduct();

  // Valida se o contexto do produto está disponível
  if (!productContext?.product || !productContext.product.items) {
    return null;
  }

  // Obtém as imagens do primeiro SKU
  const images =
    productContext.product.items[0]?.images?.map((img) => img.imageUrl) || [];

  if (images.length === 0) {
    return null;
  }

  // Configurações do Slick Slider
  const sliderSettings = {
    dots: true, // Adiciona indicadores
    infinite: true, // Permite looping infinito
    speed: 500, // Velocidade da transição (em milissegundos)
    slidesToShow: 2.5, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides que mudam por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo entre os slides (em milissegundos)
    arrows: true, // Mostra setas de navegação
    responsive: [
      {
        breakpoint: 768, // Para telas menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-images-slider">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="product-image" style={{height:'650px'}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImages;

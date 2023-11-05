import Image from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Anuncios() {
  const images = [
    {
      original: "/images/casa.png",
      thumbnail: "/images/casa.png",
    },
    {
      original: "/images/casa.png",
      thumbnail: "/images/casa.png",
    },
    {
      original: "/images/casa.png",
      thumbnail: "/images/casa.png",
    },
    {
      original: "/images/casa.png",
      thumbnail: "/images/casa.png",
    },
  ];

  return (
    <>
      <article className="bg-gray-400 rounded-2xl mb-2 p-0.5 w-full md:w-1/2 lg:w-1/3">
        <label>
          <h3 className="rounded-2xl">Título do anúncio</h3>
        </label>
        <label>
          <h4 className="rounded-2xl">R$ 50.000,00</h4>
        </label>
        <label>
          <p>A descrição do anúncio aparecerá aqui.</p>
        </label>
        <label>
          <ImageGallery showThumbnails={false} autoPlay={true} items={images} />{" "}
        </label>
        <button className="rounded-2xl">
          <a
            href={`https://maps.google.com/?q=${"latitude"},${"longitude"}`}
            target="_blank"
          >
            Verificar localização no Google Maps
          </a>
        </button>
      </article>
    </>
  );
}

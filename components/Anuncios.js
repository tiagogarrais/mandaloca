import Image from "next/image";
import React from "react";
import { useGeolocated } from "react-geolocated";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
  {
    original: "/images/casa.png",
    thumbnail: "/images/casa.png",
  },
];

const CoordGps = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Seu navegador parece não suportar geolocalização</div>
  ) : !isGeolocationEnabled ? (
    <div>Habilite a geolocalização no seu navegador</div>
  ) : coords ? (
    <article className="bg-gray-400 rounded-2xl my-1 px-1 py-1 w-full md:w-1/2 lg:w-1/3">
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
          href={`https://maps.google.com/?q=${coords.latitude},${coords.longitude}`}
          target="_blank"
        >
          Verificar localização no Google Maps
        </a>
      </button>
    </article>
  ) : (
    <div>Aguarde...&hellip; </div>
  );
};

export default CoordGps;

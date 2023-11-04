import Image from "next/image";
import React from "react";
import { useGeolocated } from "react-geolocated";

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
    <div>Aguarde 5 segundos ou habilite a geolocalização no seu navegador</div>
  ) : coords ? (
    <div>
      <form>
        <h2>Todos os anúncios</h2>
        <div className="flex flex-wrap">
          <div className="my-1 px-1 w-full md:w-1/2 lg:w-1/3">
            <article>
              <label>
                <h3>Título do anúncio</h3>
              </label>
              <br />
              <label>
                <h4>R$ 50.000,00</h4>
              </label>
              <br />
              <label>
                <p>
                  A descrição do anúncio aparecerá aqui. Os detalhes devem ser
                  descritos de forma resumida, mas consistente.
                </p>
              </label>
              <br />
              <label>
                <Image src="/images/casa.png" width="400" height="400" />
              </label>
              <br />
              Casa para venda
              <br />
              Casa para aluguel
              <br />
              <button>
                <a
                  href={`https://maps.google.com/?q=${coords.latitude},${coords.longitude}`}
                  target="_blank"
                >
                  Verificar localização no Google Maps
                </a>
              </button>
            </article>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div>Buscando dados de localização&hellip; </div>
  );
};

export default CoordGps;

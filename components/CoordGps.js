import Link from "next/link";
import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";

const CoordGps = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled, timestamp } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 20000,
      watchPosition: true,
    });

  return !isGeolocationAvailable ? (
    <div>Seu dispositivo parece não suportar GPS</div>
  ) : !isGeolocationEnabled ? (
    <div>
      Para adicionar a localização é necessário habilitar o acesso ao GPS
    </div>
  ) : coords ? (
    <>
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
      <p>Última atualização: {Date(timestamp)}</p>
    </>
  ) : (
    <div>Buscando dados de localização&hellip; </div>
  );
};

export default CoordGps;

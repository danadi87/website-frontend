import React from "react";
import "../src/styles/directory/CarlosRodriguez.css";
import { Link, useNavigate } from "react-router-dom";
import CarlosProfile from "../src/assets/carlos-rodriguez-profile.png";

export function CarlosRodriguez() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="main-section">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <div className="section">
        <img className="profile-image" src={CarlosProfile}></img>
        <h2>Entrenador y Estratega de juego de Futbol</h2>
        <ul>
          <li>
            F.Nacim./Edad: <strong>10/11/1980 (44 años)</strong>
          </li>
          <li>
            Lugar de Nac.: <strong>El Prat de Llobregat</strong>
          </li>
          <li>
            Nacionalidad: <strong>España</strong>
          </li>
          <li>
            Licencia de entrenador:<strong></strong>
          </li>
          <li>
            Media de tiempo como entrenador: <strong></strong>
          </li>
          <li>
            Formación preferida: <strong></strong>
          </li>
          <li>
            Club actual: <strong></strong>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>Competencias clave:</p>
        <ul>
          <li>Análisis del Rendimiento en Competición </li>
          <li>Desarollo y Formación de Jugadores</li>
          <li>Estrategia y Tácticas de Juego</li>
          <li>Planes de partidos</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="section">
        <div className="description">
          <p>
            Carlos Rodriguez nació el 10 de Noviembre 1980 en El Prat de
            Llobregat (Barcelona). Es un exfutbolista y entrenador español,
            actualmente a cargo de [ ].
          </p>
          <p>
            Las tácticas y las estrategias en el juego en equipo son el corazón
            del fútbol hoy en día. A traves de ellas, Carlos pone el acento en
            fortalecer aquellas características que hace el equipo mas fuerte
            frente a sus oponentes.
          </p>
          <p>
            En la creación de los planes de partidos, considera múltiples
            factores, desde las fortalezas y debilidades del equipo propio y
            rival, hasta las condiciones que rodean cada partido. Aporta una
            visión clara a los jugadores de lo que se espera de ellos
            durantecada encuentro , para trabajar así de manera coordinada y
            efectiva, tanto a nivel individual como en colectivo.
          </p>
          <p>
            "Como entrenador busco constantemente métodos para mejorar el
            rendimiento de mi equipo."
          </p>
        </div>
      </div>
    </div>
  );
}

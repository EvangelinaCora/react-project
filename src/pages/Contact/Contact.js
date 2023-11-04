import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contacto">
        <div className="div-contacta">
          <h1 className="h1-contacto content flex animate__animated animate__bounceInRight">
            Informacion
          </h1>
        </div>

        <div
          className="accordion accordion-flush contacto-acordion"
          id="accordionFlushExample"
        >
          <div className="accordion-item ">
            <h2 className="accordion-header " id="flush-headingOne">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Numero telefonico
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                {" "}
                11 2201 2004
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Direccion del local
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                {" "}
                Av. de mayo 360 - Ramos Mejia
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Direccion de correo electronico
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                AppleStoreArgentina@gmail.com
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Hacen cambios?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                {" "}
                Tu dispositivo cuenta con una garantia de un año para que puedas
                cambiarlo ante cualquier inconveniente{" "}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Aceptan efectivo en pesos?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                {" "}
                No, por el momento solo nos manejamos con pesos{" "}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Cuales son las formas de pago?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                {" "}
                Podes abonar en efectivo, tarjeta de credito o debito, y
                transferencia{" "}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button
                className="accordion-button collapsed contacto-acordion-texto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                Que cuotas hay disponibles?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                Podés pagar hasta en 6 cuotas sin interés
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

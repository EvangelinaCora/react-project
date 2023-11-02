import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contacto">
        <h1 className="h1-contacto">Contacta a Apple</h1>

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
                Cómo encontrar distribuidores autorizados?
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
                Visita nuestro Localizador de Distribuidores para encontrar un
                distribuidor autorizado de Apple en Argentina
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
                Cómo encontrar proveedores de servicio autorizados?
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
                Visita nuestro Localizador de Proveedores de Servicio para
                encontrar un proveedor de servicio autorizado de Apple en
                Argentina
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
                Opciones de soporte en línea
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body contacto-acordion-texto">
                La Base de Conocimientos es la nueva base de datos de soporte de
                Apple que contiene información técnica actualizada y reciente
                sobre productos, descargas de software, consejos para resolver
                problemas y artículos de apoyo.
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
                A que numero podes llamar?
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
                Podes contactarnos al 11 2201 2004{" "}
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
                Donde puedo encontrar una sucursal?
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
                Av. Córdoba 456 PB – CABA{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

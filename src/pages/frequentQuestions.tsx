import Layout from "@/components/Layout";
import React from "react";

export default function frequentQuestions() {
  return (
    <Layout>
      <div className=" col-12 text-center row container-Pivacy pt-5 m-auto pb-5 ">
        <div className="col-11 col-lg-8  m-auto text-start ">
          <h5 className="title-preguntasFrecuentes">Preguntas frecuentes</h5>
          <p className="text-Questions">
            Esta es una lista de las preguntas que más recibimos frecuentemente.
            Para mayor información, o si necesitas soporte técnico, por favor
            utiliza nuestro servicio de Ayuda en Línea.
          </p>

          <div className="  m-auto containerText-questions  mt-2   p-5 ">
            <h5 className="subtitle-questions lh-1">Información General</h5>
            <div className="horizontal-bar mb-2"></div>

            <h6 className="subtitles-QuestionsFrequent mt-3 ">
              ¿Por qué mi usuario está bloqueado?
            </h6>
            <p className="text-Questions">
              En caso de ingresar y que su usuario se encuentre bloqueado es
              indispensable que se comunique al área de Crédito y Cobranza al
              teléfono 5345-6000 con Rodolfo Sánchez Moreno Ext. 6540 o Mara
              López Méndez Ext. 6017 quienes le proporcionaran mayor
              información.
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              ¿Qué puedo hacer si olvide mi contraseña?
            </h6>
            <p className="text-Questions">
              En la página principal debajo de los datos de usuario y
              contraseña, se ubica la liga que dice “He olvidado mi contraseña”,
              debe dar clic y el sistema le dará las indicaciones que debe
              seguir para recuperarla
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              ¿A quién me dirijo para solicitar una aclaración de mi estado de
              cuenta?
            </h6>
            <p className="text-Questions">
              Para cualquier aclaración se podrá contactar con Rodolfo Sánchez
              Moreno Ext. 6540 quien con gusto le apoyará
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              ¿Qué puedo hacer si mi crédito está suspendido?
            </h6>
            <p className="text-Questions">
              Puede enviar mensaje a través del portal con la finalidad de que
              se le indique el motivo de la suspensión de la cuenta y poderle
              indicar que necesita para habilitarla nuevamente o marcar
              directamente a Rodolfo Sánchez Moreno al teléfono 5345-6000 ext.
              6540 quién podrá orientarlo
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              {" "}
              ¿Cómo puedo consultar una cuenta especifica de todas las de mi
              grupo?
            </h6>
            <p className="text-Questions">
              En la pantalla inicial que le muestra un resumen de su cuenta en
              el lado superior derecho se ubica una barra que despliega la lista
              de todas las cuentas de su grupo, ahí podrá seleccionar la cuenta
              o cuentas que necesita visualizar
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              ¿Cómo puedo visualizar el detalle de los documentos que integran
              mi estado de cuenta?
            </h6>
            <p className="text-Questions">
              En el resumen de su estado de cuenta usted pueda dar clic sobre el
              importe del cual necesita el detalle y este será mostrado en
              pantalla. Otra opción es dar clic sobre los iconos que se
              encuentran en la parte superior de página principal (facturas,
              notas de crédito y pagos) lo que le mostrara el detalle de su
              cuenta
            </p>
            <h6 className="subtitles-QuestionsFrequent">
              ¿Por qué se puede suspender mi cuenta?
            </h6>
            <ul className="text-Questions">
              Existen varios motivos de suspensión
              <li> 1.- Saldo Vencido.</li>
              <li>2.- Que haya agotado su línea de crédito</li>
              <li>3.- Negociaciones incumplidas.</li>
              <li>4.- Aclaraciones pendientes</li>
              <li>5.- Expediente incompleto</li>
              <li>6.- No ha tenido movimientos en el ultimo año.</li>
            </ul>
            <h6 className="subtitles-QuestionsFrequent">
              ¿Cómo puedo tramitar una ampliación de crédito?
            </h6>
            <p className="text-Questions">
              Es necesario que se ponga en contacto con su representante de
              ventas quien le proporcionara la información del proceso de debe
              seguir su solicitud.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

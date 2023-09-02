import React, { useRef, useEffect } from "react";

import Image from "next/image";

import portadarifa1 from "@/assets/img/portada-rifa1.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNotificationStore } from "@/store/zustand/NotificationStore";

export default function ModalNotification({
  showNotification,
  setShowNotification,
}: any) {
  const modalRef = useRef();
  const isLoading = useNotificationStore((state) => state.isLoading);
  const error = useNotificationStore((state) => state.error);
  const notifications = useNotificationStore((state) => state.notifications);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowNotification(false); // llamada a la función de cierre del modal
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    // Limpiar la escucha de evento antes de desmontar el componente:
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []); // Volver a ejecutar si el método onClose cambia

  return (
    <>
      {showNotification && (
        <div
          ref={modalRef}
          className="container-modalNotification rounded-3 shadow"
        >
          <div className=" contenedor border-bottom border rounded-3">
            <div className=" d-flex justify-content-around  pt-2 ">
              <p className=" z-3 notification ">
                Notificaciones ({notifications.length})
              </p>
              <p className="z-3 leido-notification ">marcar todo como leido</p>
            </div>
          </div>

          {/* <div className=" border-bottom my-2 w-100"></div> */}
          <div className="mt-3 row m-0 border-bottom">
            {!!isLoading && <p className="m-0">Cargando...</p>}
            {!!error && (
              <p className="m-0 text-danger ">
                Error al cargar las notificaciones
              </p>
            )}
            {!isLoading &&
              !error &&
              notifications.map((notifications: any) => (
                <section onClick={() => {}} key={notifications.id}>
                  <p className="name-notifications m-0">
                    {notifications.subject}
                  </p>
                  <div className="d-flex justify-content-between   row m-0 ">
                    <div className="col-4  p-0   ">
                      <Image
                        className=" mt-1 size-imagenNotifications w-100 h-auto  rounded"
                        src={portadarifa1}
                        alt="portadarifa1"
                      />
                    </div>
                    <p className="col-6 px-1 parraf-notifications mt-1 mt-lg-0 ">
                      {notifications.message}
                    </p>

                    <div
                      className="col-1 p-0 d-flex justify-content-center rounded   bg-white align-items-center mb-5"
                      style={{
                        width: "30px",
                        height: "30px",
                        border: "1px solid #70707036",
                      }}
                    >
                      <AiOutlineCheckCircle
                        size={20}
                        style={{ color: "#707070" }}
                      />
                    </div>
                  </div>
                </section>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

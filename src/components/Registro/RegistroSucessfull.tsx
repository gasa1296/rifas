import React from 'react'

export default function RegistroSucessfull() {
    return (
        <section className='text-center mt-5'>
            <h3 className='tittle-registroSucessfull'>¡Gracias por registrarte!</h3>
            <h3 className='tittle-registroSucessfull'>Ya puedes rifarte apoyando a causas benéficas comprando tus boletos o incluso donando premios para apoyar a las asociaciones.</h3>
            <h3 className='subtitle-registroSucessfull my-3'>¿Qué deseas hacer a continuación ?</h3>

            <div className='row m-0 d-flex justify-content-center mt-5 mb-3 '>

                <div className='col-12  col-lg-4 me-0 me-lg-5 shadow rounded p-3'>
                    <p className='text-registroSucessfull mt-3'>Quiero empezar a rifarme apoyando a alguna causa o donando algún premio.</p>
                    <button className='btn btn-border-pink col-12 mt-5 '> Participar en una rifa</button>
                    <button className=' btn btn-pink col-12  mt-3 mb-4'>Donar un premio</button>
                    <p className='volver-inicio'>prefiero volver al inicio</p>


                </div>
                <div className='col-12  col-lg-4 ms-0 ms-lg-5 mt-4 mt-lg-0 shadow rounded p-4'>

                    <p className='text-registroSucessfull mt-3'>Quiero dar de alta mi Asociación Civil para empezar a crear mis rifas y contribuir a causas benéfica</p>
                    <p className='createRegistro'>Para poder crear rifas es necesario completar este paso.</p>
                    <button className='btn btn-purple col-12 mb-4 '>Continuar con el alta</button>
                    <p className='volver-inicio '>prefiero volver al inicio</p>

                </div>
            </div>
        </section>
    )
}

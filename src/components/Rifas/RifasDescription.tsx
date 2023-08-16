import React from 'react'
import Image from 'next/image'
import logo from "@/assets/img/fondoPremio.svg"
import imagenRifaDesceiption from "@/assets/img/Premio-donar.jpg";



export default function RifasDescription() {
    return (
        <div className='  mb-5 mt-5  mx-0 mx-lg-5 mb-5'>
            <h3 className='title-RifaDescription my-2'>Acerca de la rifa</h3>
            <div className=" border-bottom border-1  my-2 w-50  "></div>
            <h5 className='subtitle-rifDescription'>¿Cómo voy a utilizar el dinero?</h5>
            <p className='col-6 text-rifaDescription opacity-75'>Cada centavo recaudado durante esta rifa será destinado a APAC, para proporcionar asistencia médica, apoyo emocional y recursos necesarios para pacientes con cáncer y sus familias. Queremos asegurarnos de que nadie enfrente esta batalla solo y que cada persona afectada reciba el amor y el apoyo que necesita. Esperamos contar con tu valiosa presencia en nuestra rifa benéfica. Tu participación marcará una diferencia significativa en la vida de aquellos que necesitan esperanza y fuerza para vencer al cáncer. ¡Juntos, podemos hacer posible el cambio!</p>
            <div className=" border-bottom border-1  my-2 w-50  "></div>
            <h5 className='subtitle-rifDescription'>¿Cuál es el premio?</h5>
            <div className='d-block  justify-content-between d-md-flex  row col-12 col-lg-7 '>
                <div className='col-4'>
                    <Image src={imagenRifaDesceiption} alt="fondoDescription" className='w-100 h-75' />
                </div>
                <p className='col-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 '>¡El Gran Premio de nuestra rifa benéfica es un espectacular iPhone de última generación! El afortunado ganador tendrá en sus manos el codiciado iPhone, un dispositivo de vanguardia que combina la elegancia del diseño con el rendimiento excepcional. Este iPhone cuenta con lo último en tecnología, ofreciendo una experiencia única a su usuario. ¡El Gran Premio de nuestra rifa benéfica es un espectacular iPhone de última generación! El afortunado ganador tendrá en sus manos el codiciado iPhone, un dispositivo de vanguardia que combina la elegancia del diseño con el rendimiento excepcional. Este iPhone cuenta con lo último en tecnología, ofreciendo una experiencia única a su usuario.</p>
            </div>
            {/*  <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>¿Cómo y cuándo se llevará a cabo la rifa?</h5>
            <p className=' opacity-50 col-6'>IPhone master cleanse in, migas est green juice literally cliche. Glossier aliqua pariatur, officia irony woke exercitation raclette ut kombucha do mixtape adipisicing ad. Nisi vice hella messenger bag hoodie hammock, franzen organic. Shabby chic skateboard you probably haven’t heard of them pariatur tonx jean shorts. Eiusmod shoreditch +1 gochujang leggings trust fund waistcoat reprehenderit kale chips cillum. Dolore mukbang small batch artisan street art salvia pork belly +1 bicycle rights tonx taxidermy. Roof party organic artisan hella culpa post-ironic aesthetic.</p>
 */}
        </div>
    )
}

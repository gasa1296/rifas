import React from 'react'
import Image from 'next/image'
import logo from "@/assets/img/fondoPremio.svg"

export default function RifasDescription() {
    return (
        <div className='mx-5 mb-5 '>
            <h3 className='fs-2 my-2'>Acerca de la rifa</h3>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5 className=''>¿De que trata?</h5>
            <p className='col-6 opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perferendis dolor illum obcaecati amet in. Officia repellat voluptatem omnis numquam perspiciatis enim vero laborum ut hic, deleniti et, odit ipsam!</p>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>¿Cómo voy a utilizar el dinero?</h5>
            <p className=' col-6 opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perferendis dolor illum obcaecati amet in. Officia repellat voluptatem omnis numquam perspiciatis enim vero laborum ut hic, deleniti et, odit ipsam!</p>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>¿Cuál es el premio?</h5>
            <div className='d-block  justify-content-between d-md-flex  row col-12 col-md-5'>
                <div className='col-6'><Image src={logo} alt="fondoDescriotion" /></div>
                <p className='col-6 mt-4 mt-md-0 opacity-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur tenetur deserunt iure beatae odit dolor fugit impedit, nam labore porro corporis molestiae? Harum tempora unde nesciunt quidem. Aperiam, qui!</p>
            </div>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>¿Cómo y cuándo se llevará a cabo la rifa?</h5>
            <p className=' opacity-50 col-6'>IPhone master cleanse in, migas est green juice literally cliche. Glossier aliqua pariatur, officia irony woke exercitation raclette ut kombucha do mixtape adipisicing ad. Nisi vice hella messenger bag hoodie hammock, franzen organic. Shabby chic skateboard you probably haven’t heard of them pariatur tonx jean shorts. Eiusmod shoreditch +1 gochujang leggings trust fund waistcoat reprehenderit kale chips cillum. Dolore mukbang small batch artisan street art salvia pork belly +1 bicycle rights tonx taxidermy. Roof party organic artisan hella culpa post-ironic aesthetic.</p>

        </div>
    )
}

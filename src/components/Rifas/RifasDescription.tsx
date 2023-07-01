import React from 'react'
import Image from 'next/image'
import logo from "@/assets/img/Logo.svg"

export default function RifasDescription() {
    return (
        <div className='mx-5  text-secondary '>
            <h3 className='text-secondary '>Acerca de la rifa</h3>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>De que trata</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perferendis dolor illum obcaecati amet in. Officia repellat voluptatem omnis numquam perspiciatis enim vero laborum ut hic, deleniti et, odit ipsam!</p>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>Como voy a utilizar el dinero</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perferendis dolor illum obcaecati amet in. Officia repellat voluptatem omnis numquam perspiciatis enim vero laborum ut hic, deleniti et, odit ipsam!</p>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>Cual es el premio?</h5>
            <div className='d-flex justify-content-between  row col-12 col-md-5'>
                <div className='col-6'>
                    <Image src={logo} alt=".." />
                </div>
                <p className='col-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur tenetur deserunt iure beatae odit dolor fugit impedit, nam labore porro corporis molestiae? Harum tempora unde nesciunt quidem. Aperiam, qui!</p>
            </div>
            <div className=" border-bottom border-2  my-2 w-50  "></div>
            <h5>Como y cuando se llevara la rifa?</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, alias? Totam quis nam consequuntur sunt dolorum dolor necessitatibus repellat omnis error minima, perspiciatis voluptatibus voluptatem odio culpa porro. Eveniet, cumque.</p>

        </div>
    )
}

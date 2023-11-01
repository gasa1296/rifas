import React from 'react'
import FooterMicrositio from './FooterMicrositio'
import HeaderMicrositio from './HeaderMicrositio'
import RifasActivas from '../Rifas/RifasActivas'
import RifasTerminadas from './RifasTerminadas'
import NavMicrositio from './NavMicrositio'
import GalleryMicrositio from './GalleryMicrositio'

export default function index() {
    return (
        <section>
            <NavMicrositio />
            <HeaderMicrositio />
            <RifasActivas all />
            <RifasTerminadas all />
            <GalleryMicrositio />
            <FooterMicrositio />

        </section>
    )
}

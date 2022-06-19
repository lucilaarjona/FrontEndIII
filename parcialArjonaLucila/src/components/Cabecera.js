import React from 'react'
import { CabeceraStyle } from '../styles/styles'

const Cabecera = ({productos}) => {
    return (
        <CabeceraStyle>
            <h1>Carrito de compras</h1>
            <p>Cantidad de productos: <span>{productos}</span></p> 
        </CabeceraStyle>
    )
}

export default Cabecera;
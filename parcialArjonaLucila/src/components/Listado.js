import React from 'react'
import { ListadoStyle } from '../styles/styles';
import data from './data.json';
import Item from './Item';

const Listado = ({incrementoCantidadTotal}) => {
  return (
    <ListadoStyle>
        {
            data.map(item => (
                <Item key={item.id} incrementoCantidadTotal={incrementoCantidadTotal} nombre={item.producto.nombre} descripcion={item.producto.descripcion} img={item.producto.img} itemStock={item.stock} />
            ))
        }
    </ListadoStyle>
  )
}

export default Listado;
import React, {useState} from 'react';
import { ItemStyle, ButtonStyle } from '../styles/styles';

const Item = ({incrementoCantidadTotal , nombre, descripcion, img , itemStock}) => {
    const [stock, sumaCantidadTotal] = useState(itemStock);

    const comprar = () => {
        sumaCantidadTotal(stock - 1);
        incrementoCantidadTotal();
    }
    return (
        <ItemStyle>
            <h3>{nombre}</h3>
            <img src={img} alt='img' />
            <p>{descripcion}</p>
            <h4>En stock: <span>{stock < 1 ? "Agotado" : stock }</span></h4>
            <ButtonStyle disabled={stock < 1} onClick={() => {comprar();}}>
                {stock <= 0 ? "Sin stock" : "Comprar"}
            </ButtonStyle>
        </ItemStyle>
    )
}

export default Item;
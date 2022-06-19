import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import { BodyStyle } from './styles/styles';

function App() {
    const [cantidadTotal, sumaCantidadTotal] = useState(0);

    const incrementoCantidadTotal = () => {
        sumaCantidadTotal(cantidadTotal + 1);
    }

    return (
        <BodyStyle>
            <Cabecera productos={cantidadTotal}/>
            <Listado incrementoCantidadTotal={incrementoCantidadTotal}/>
        </BodyStyle>
    );
}

export default App;
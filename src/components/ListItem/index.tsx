import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

//Sempre que for criar em um componente com typescript, props especificas, é preciso criar um type para essas props
//Aqui está especificado tudo que vai receber
type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) =>{

    const [isChecked, setIsChecked] = useState(item.done); // aqui vai receber o atributo boolean para o useState

    return(
        <C.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/> {/*definir se o valor esta marcado */}
            <label>{item.nome}</label>

        </C.Container>
    );
}
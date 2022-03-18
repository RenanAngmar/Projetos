import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item'
import {ListItem} from './components/ListItem'; // como aqui está especificado só a pasta ele procura um aruivo index
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    
   {id: 1, nome:"Planning Sprint 1", done: true},
    {id: 2, nome:"Planning Sprint 2", done: false},

  ]); // variavel mutavel utiliza-se o useState do React, aqui no caso coloca-se uma lista de objeto

//função para adicionar uma nova tarefa na lista
  const handleAddTask = (taskName: string)=> {

    let newList = [...list];
    newList.push({
      id: list.length +1,
      nome: taskName,
      done: false
    });
    setList(newList);
  }

  return(
   
    <C.Container>

      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
          
          {/* Area de adicionar nova tarefa  */}
          <AddArea onEnter={handleAddTask}/>

          {/* Area de exibir lista  */}
          {list.map((item, index)=>(
            //uma necessidade do proprio javascript, precisa de um key no map
            <ListItem key={index} item={item}/>

          ))}

      </C.Area>

    </C.Container>

  );


}

export default App;
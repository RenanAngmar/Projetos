import styled from "styled-components";




type ContainerProps = {

    done: boolean;
}

//container da lista, item ao lado, cor, espaço..
//todo componente no typescript que eu recebo props preciso tipar
export const Container = styled.div(({done}: ContainerProps)=>(
 `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-itens: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    
    label{

        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }
`
)); // todo componente deve ter uma area que abrange ele
import styled from 'styled-components';


// container de estilos que envolvera toda a aplicação - background - cor da fonte - visualização hori
export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
`;

//area de uso da tela --- margin para centralizar, largura max, padding para o mobile não enconstar nas telas
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px

`;

// Header da aplicação -- cor branca --- texto no meio-- borda na parte de baixo -- padding bottom para descolar o texto da borda
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;

`;
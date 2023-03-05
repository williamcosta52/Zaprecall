import logo from "../src/assets/logo.png";
import CaixaPergunta from "./components/CaixaPergunta/CaixaPergunta";
import perguntas from "./perguntas";
import styled from "styled-components";
import { useState } from "react";

export default function App() {

  const numeroPerguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];
  const [contador, setContador] = useState(0);

  const novaArrPerguntas = [...numeroPerguntas];

  return (
      <Container>
        <Cabecalho>
          <img alt="logo" src={logo} />
          <h1>ZapRecall</h1>
        </Cabecalho>
        <Rodape>
            <p>{contador}/{numeroPerguntas.length}</p>
        </Rodape>
        {numeroPerguntas.map((pergunta, index) => {
        return (
          <CaixaPergunta 
          key={index}
          pergunta={pergunta}
          perguntas={perguntas}
          novaArrPerguntas={novaArrPerguntas}
          setContador={setContador}
          contador={contador}
      />
      )
    })}
      </Container>
  );
}
//-----------------------------------------------------------------Styles----------------------------------------------------------------
const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: #FB6B6B;
    position: relative;
    margin-bottom: 70px;
    overflow: auto;
`
const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 58px;
      img {
        width: 52px;
        height: 60px;
        margin-top: 40px;
        margin-left: 59px;
      }
      h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    font-family: 'Righteous', cursive;
    margin-top: 40px;
    margin-left: 30px;
}
`
const Rodape = styled.div`
    width: 100vw;
    height: 70px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        font-family: 'Recursive', sans-serif;
      }
`
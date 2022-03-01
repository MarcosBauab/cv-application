import styled from 'styled-components'
import Header from './components/Header/Header'

const ContainerGeral = styled.div`

  background-color: #1b1b1b;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  //nesting components, awesome
  div.wrapper{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius: 8px;
    background-color: #dddddd;
    width: 70%;
    height: 90vh;
    color: black;

    display: flex;
    flex-direction: column;

    padding: 20px;
  }

`

function App() {
  //jsx = emmet ajuda a criar as tags HTML :O

  return (
    <ContainerGeral>
      
      <div className="wrapper">
        <Header />
      </div>
      
    </ContainerGeral>
  )
}

export default App

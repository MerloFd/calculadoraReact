import { Container, Content } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button"

const App = () => {
  console.log("App renderizado!");
  return (
    <Container>
      <Content>
        <Input/>
      </Content>
    </Container>
  )
}

export default App

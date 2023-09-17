import { Container } from './components/Container'
import { FormModal } from './components/FormModal'

function App() {
  const addItemHandler = (item) => {
    console.log('Its App.js');
      console.log(item);
  }
  return (
    <>
      <FormModal onAddItem={addItemHandler} />
      <Container />
    </>
  )
}

export default App

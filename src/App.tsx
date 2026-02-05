import AddIcon from './assets/icons/add_circle.svg?react'
import Button from "./components/Button"
import Input from './components/InputText'
import Tag from './components/Tag'
import Text from './components/Text'

function App() {

  return (
    <>
    <Text as='h1'>Texto</Text>
    <Button size={'md'} icon={AddIcon} variant={'primary'}>Adicionar evento</Button>
    <Input id={"1"} name={'nome'} placeholder={'teste'}/>
    <Tag>FRONT-END</Tag>
    </>
  )
}

export default App

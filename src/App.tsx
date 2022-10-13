import './styles/global.css';
import { Text } from './components/Text';

export function App() {

  return (
    <>

      <h1 className='font-bold text-2xl text-violet-500'> Olá Mundo </h1>
      <button className='bg-cyan-500 hover:bg-cyan-300'>
        Enviar
      </button>
    </>
  )
}


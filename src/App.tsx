import './styles/global.css';
import { Text } from './components/Text';
import { Logo } from './Logo'
import { Heading } from './components/Heading';
import { TextInput } from './components/TextInput';
import { Envelope } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { CheckBox } from './components/CheckBox';
import { Button } from './components/Button';
import Sapo from './Party-Frog.svg'



export function App() {

  return (
    <div className='w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        {/* <img src={Sapo} className="h-24 w-24"></img> */}
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça o login e comece a usar!
        </Text>
      </header>

      <form className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-4'>
        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text className='font-semibold'>
            Endereço de email
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id='email' placeholder='digite seu email' />
          </TextInput.Root>

        </label>

        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text className='font-semibold'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id='password' placeholder='********' />
          </TextInput.Root>

        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <CheckBox id='remember' />
          <Text size='sm' className='text-gray-200'> Lembrar de mim por 30 dias</Text>

        </label>

        <Button type="submit"> Entrar na plataforma </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>

        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>

        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? crie uma agora!</a>
        </Text>


      </footer>

    </div>
  )
}


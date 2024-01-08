import * as S from './styled'
import logo from './logo.svg'

const Home = () => {
  return (
    <S.AppContainer>
      <S.AppHeaderWrapper>
        <S.LogoWrapper src={logo} alt={'logo'} />
        <p>
          {'Edit '}
          <code>{'src/App.tsx'}</code> {'and save to reload.'}
        </p>
        <S.AppLink
          href={'https://reactjs.org'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          {'Learn React'}
        </S.AppLink>
      </S.AppHeaderWrapper>
    </S.AppContainer>
  )
}

export default Home

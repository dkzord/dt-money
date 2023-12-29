import logoImg from '@/assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

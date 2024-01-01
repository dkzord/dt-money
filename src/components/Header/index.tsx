import logoImg from '@/assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/NewTransactionModal'

import * as S from './styles'
import { useContext } from 'react'
import { TransactionContext } from '@/contexts/TransactionContext'

export const Header = () => {
  const { handleOpenModal, isModalOpen } = useContext(TransactionContext)

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root onOpenChange={handleOpenModal} open={isModalOpen}>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

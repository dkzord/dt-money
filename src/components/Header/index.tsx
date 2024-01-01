import logoImg from '@/assets/logo.svg'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '@/contexts/TransactionContext'
import { NewTransactionModal } from '@/components/NewTransactionModal'

import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Header = () => {
  const handleOpenModal = useContextSelector(TransactionContext, (context) => {
    return context.handleOpenModal
  })

  const isModalOpen = useContextSelector(TransactionContext, (context) => {
    return context.isModalOpen
  })

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

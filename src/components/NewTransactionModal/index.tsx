import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'

import * as S from './styles'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="Number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </S.TransactionButton>
            <S.TransactionButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionButton>
          </S.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}

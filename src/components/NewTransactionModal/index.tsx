import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import { X } from '@phosphor-icons/react'

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

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}

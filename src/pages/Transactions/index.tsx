import { useContext } from 'react'
import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary/index'
import { SearchForm } from './components/SearchForm'
import { TransactionContext } from '@/contexts/TransactionContext'

import * as S from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <S.TransationsContainer>
        <SearchForm />

        <S.TransationsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight
                    variant={
                      transaction.type === 'income' ||
                      transaction.type === 'outcome'
                        ? transaction.type
                        : undefined
                    }
                  >
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR', {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(new Date(transaction.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </S.TransationsTable>
      </S.TransationsContainer>
    </div>
  )
}

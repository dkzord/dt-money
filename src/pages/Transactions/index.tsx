import { useContext } from 'react'
import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary/index'
import { SearchForm } from './components/SearchForm'
import { dataFormatter, priceFormatter } from '@/utils/formatter'
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
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.TransationsTable>
      </S.TransationsContainer>
    </div>
  )
}

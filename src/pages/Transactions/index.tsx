import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary/index'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

export const Transactions = () => {
  const [transaction, setTransaction] = useState<Transaction[]>([])

  const loadTransaction = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransaction(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <S.TransationsContainer>
        <SearchForm />

        <S.TransationsTable>
          <tbody>
            {transaction.map((transaction) => (
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

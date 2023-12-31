import { createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  const fetchTransaction = async (query?: string) => {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransaction(data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

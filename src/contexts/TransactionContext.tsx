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
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  const loadTransaction = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransaction(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}

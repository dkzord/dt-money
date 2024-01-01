import { api } from '@/lib/axios'
import { createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: Date
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransaction = async (query?: string) => {
    const reponse = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(reponse.data)
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { description, category, price, type } = data

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [...state, response.data])
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransaction, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

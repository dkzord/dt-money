import { api } from '@/lib/axios'
import { useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

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
  handleOpenModal: (value: boolean) => void
  isModalOpen: boolean
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (value: boolean) => {
    setIsModalOpen(value)
  }

  const fetchTransaction = useCallback(async (query?: string) => {
    const reponse = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(reponse.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, category, price, type } = data

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      handleOpenModal(false)
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransaction,
        createTransaction,
        handleOpenModal,
        isModalOpen,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

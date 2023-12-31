import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Transactions } from '@/pages/Transactions'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from './contexts/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

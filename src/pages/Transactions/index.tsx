import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary/index'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransationsContainer>
        <SearchForm />

        <S.TransationsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/01/2021</td>
            </tr>
            <tr>
              <td width="50%">Sanduba</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 1.200,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>15/01/2021</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/01/2021</td>
            </tr>
          </tbody>
        </S.TransationsTable>
      </S.TransationsContainer>
    </div>
  )
}

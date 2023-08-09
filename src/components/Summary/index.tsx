import { useContext } from 'react';
import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg'
import totalIMG from '../../assets/total.svg'
import { Container } from "./style";
import { TransactionContext } from '../../transactionsContext';


export function Summary () {

    const { transactions } = useContext(TransactionContext)

    console.log(transactions)

    return(
       <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeIMG} alt="Entradas" />
            </header> 
            <strong> R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeIMG} alt="Saidas" />
            </header>
            <strong>- R$500,00</strong>
        </div>
        <div className='highlight-background'>
            <header>
                <p>Total</p>
                <img src={totalIMG} alt="Total" />
            </header>
            <strong>R$500,00</strong>
        </div>
       </Container>     
    )
}
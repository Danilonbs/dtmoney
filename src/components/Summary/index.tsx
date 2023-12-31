import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg'
import totalIMG from '../../assets/total.svg'
import { Container } from "./style";
import { useTransactions } from '../../hooks/useTransactions';


export function Summary () {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount; 
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return  acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
       <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeIMG} alt="Entradas" />
            </header> 
            <strong> 
            {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
            }).format(summary.deposits)}
                
            </strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeIMG} alt="Saidas" />
            </header>
            <strong>
                - 
            {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
            }).format(summary.withdraws)}
                
                </strong>
        </div> 
        <div className='highlight-background'>
            <header>
                <p>Total</p>
                <img src={totalIMG} alt="Total" />
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BRL'
            }).format(summary.total)}

            </strong>
        </div>
       </Container>     
    )
}
import { useContext } from "react";
import { Container } from "./style";
import { TransactionContext } from "../../transactionsContext";



export function TransactionsTable() {
    const transactions = useContext(TransactionContext)
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
        </Container>
    )
}
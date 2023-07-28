import Modal from 'react-modal'
import incomeIMG from '../../assets/income.svg'
import outcomeIMG from '../../assets/outcome.svg'
import closeIMG from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; 
}

export function NewTransactionModal ({isOpen, onRequestClose } : NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

                <button type="button" 
                onClick={onRequestClose} 
                className='react-modal-close'
                >
                    <img src={closeIMG} alt="Fechar modal" />
                </button>
                <Container>
                    <h2>Cadastrar transação</h2>

                    <input 
                    placeholder='Título'
                    />

                    <input 
                    type='number'
                    placeholder='Valor'
                    />

                    <TransactionTypeContainer>
                        <RadioBox
                            type='button'
                            onClick={() => { setType ('deposit'); }}
                            isActive={type === 'deposit'}
                            
                        >
                            <img src={incomeIMG} alt="Entrada" />
                            <span>Entrada</span>

                        </RadioBox>
                        <RadioBox
                            type='button'
                            onClick={() => setType('withdraw')}
                            isActive={type === 'withdraw'}
                        >
                            <img src={outcomeIMG} alt="Saida" />
                            <span>Saida</span>

                        </RadioBox>

                    </TransactionTypeContainer>

                    <input 
                    placeholder='Categoria'
                    />

                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>
                

        </Modal>
    )
}
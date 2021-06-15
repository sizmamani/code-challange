import { Table } from '../../components/elements/styles';
import { TransactionType } from '../../types/Transaction.Types';
import {
    CloseButton, Container,
    Content
} from './styles';

interface TransactionModalProps {
    transactions: [TransactionType]
    closeModal: () => void
}

export const TransactionModal = (props: TransactionModalProps) => {
    const { transactions, closeModal } = props;
    return (
        <Container>
            <CloseButton className='animate__animated animate__fadeIn' onClick={closeModal}>&#10006;</CloseButton>
            <Content className='animate__animated animate__fadeInUp'>
                <Table>
                    <thead>
                        <tr>
                            <th>ver</th>
                            <th>vin_sz</th>
                            <th>size</th>
                            <th>weight</th>
                            <th>fee</th>
                            <th>relayed_by</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            transactions.map((transaction) => {
                                const { ver, vin_sz, size, weight, fee, relayed_by } = transaction;
                                return (
                                    <tr>
                                        <td>{ver}</td>
                                        <td>{vin_sz}</td>
                                        <td>{size}</td>
                                        <td>{weight}</td>
                                        <td>{fee}</td>
                                        <td>{relayed_by}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Content>
        </Container>
    )
}
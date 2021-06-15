import moment from 'moment';
import React, { useState } from 'react';
import { Query, QueryResult } from 'react-apollo';
import Loader from 'react-loader-spinner';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from '../components/elements/styles';
import { TransactionModal } from '../components/transaction';
import { GET_BLOCK_DETAIL } from '../query';
import {
    Container,
    LoaderContainer
} from './styles';

interface MatchParams {
    hash: string;
}

interface BlockDetailPageProps extends RouteComponentProps<MatchParams> {
}

export const BlockDetailPage = (props: BlockDetailPageProps) => {
    const { match } = props;
    const [showModal, setModal] = useState(false);
    const hash = match?.params?.hash;

    const handleShowModal = () => {
        setModal(true);
    }

    const handleCloseModal = () => {
        setModal(false);
    }

    return (
        <Query query={GET_BLOCK_DETAIL} variables={{ hash }}>
            {({ loading, error, data }: QueryResult) => {
                if (loading) {
                    return (
                        <LoaderContainer>
                            <Loader
                                type='Puff'
                                color='#00adee'
                                height={85}
                                width={85}

                            />
                        </LoaderContainer>
                    )
                }
                if (error) {
                    //TODO: should have a nice error display component
                    return 'error';
                }
                const { size, block_index, time, prev_block, hash, tx } = data?.block || {};
                return (
                    <React.Fragment>
                        <Container>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            <Link
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                                to={{
                                                    pathname: '/',
                                                }}
                                            >{`< Back`}
                                            </Link>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Hash
                                        </td>
                                        <td>
                                            {hash}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Size
                                        </td>
                                        <td>
                                            {size}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Index
                                        </td>
                                        <td>
                                            {block_index}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Previous Block
                                        </td>
                                        <td>
                                            {prev_block}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Time
                                        </td>
                                        <td>
                                            {moment(new Date(time as any * 1000)).format('MM.DD.YY hh:mm')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Transactions
                                        </td>
                                        <td>
                                            <Button onClick={handleShowModal}>Show</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                        {
                            showModal && (
                                <TransactionModal transactions={tx} closeModal={handleCloseModal} />
                            )
                        }
                    </React.Fragment>
                )
            }}
        </Query >
    )
};


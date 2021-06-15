import moment from 'moment';
import queryString from 'query-string';
import { useCallback, useState } from 'react';
import { Query, QueryResult } from 'react-apollo';
import Loader from 'react-loader-spinner';
import { RouteComponentProps } from 'react-router-dom';
import shortid from 'shortid';
import {
    Table
} from '../components/elements/styles';
import { GET_BLOCKS } from '../query';
import { BlockType } from '../types/Block.Types';
import { history } from '../utils/history';
import {
    Container, LoaderContainer, NextButton, Pagination, PaginationContainer, PrevButton
} from './styles';

const PAGE_SIZE = 10;

interface MatchParams {
    name: string;
}

interface BlockListingPageProps extends RouteComponentProps<MatchParams> {
}

export const BlockListingPage = (props: BlockListingPageProps) => {
    const params = queryString.parse(props.location.search);
    const [page, setPage] = useState(Number(params?.page) || 0);

    const handlePrevClick = useCallback(() => {
        const currentPageNumber = page === 0 ? 1 : page;
        history.replace(`?page=${currentPageNumber - 1}`);
        setPage(currentPageNumber - 1);
    }, [page])

    const handleNextClick = useCallback(() => {
        const currentPageNumber = page === 0 ? 1 : page;
        history.replace(`?page=${currentPageNumber + 1}`);
        setPage(currentPageNumber + 1);
    }, [page])

    return (
        <Query query={GET_BLOCKS}>
            {(dataProp: QueryResult) => {
                const { data, loading, error } = dataProp;
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
                const allData = data?.blocks?.length > 0 ? data?.blocks : [];
                const pageData = data?.blocks?.length > 0 && data?.blocks.slice(page * PAGE_SIZE, (page * PAGE_SIZE) + PAGE_SIZE);
                return (
                    <Container>
                        <Table>
                            <thead>
                                <tr>
                                    <th>hash</th>
                                    <th>time</th>
                                    <th>height</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pageData.map((block: BlockType) => {
                                        const { hash, height, time } = block;
                                        console.log(block)
                                        return (
                                            <tr key={shortid.generate()} onClick={() => {
                                                history.push(`/${hash}/`);
                                            }}>
                                                <td>{hash}</td>
                                                <td>{moment(new Date(time as any * 1000)).format('MM.DD.YY hh:mm')}</td>
                                                <td>{height}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <PaginationContainer>
                            <Pagination>
                                <PrevButton
                                    disabled={page === 0}
                                    onClick={handlePrevClick}
                                >
                                </PrevButton>
                                {`${(page * PAGE_SIZE) + 1} - ${(page * PAGE_SIZE) + PAGE_SIZE <= allData?.length ? (page * PAGE_SIZE) + PAGE_SIZE : allData?.length
                                    } of ${allData?.length}`}
                                <NextButton
                                    disabled={(page * PAGE_SIZE) + PAGE_SIZE >= allData?.length}
                                    onClick={handleNextClick}
                                >
                                </NextButton>
                            </Pagination>
                        </PaginationContainer>
                    </Container>

                )

            }}
        </Query>
    )
};

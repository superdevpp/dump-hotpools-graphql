export const GRAPHQL_BASE_ENDPOINT = 'https://thegraph.com/explorer/api/playground/';


export const GRAPHQL_QUERY_DUMP_POOLS_UNISWAPV2 = `
            query MyQuery {
                pairs(first: 1000, orderBy: txCount, orderDirection: desc) {
                    reserve0
                    reserve1
                    token0 {
                        name
                        symbol
                        decimals
                        id
                    }
                    token1 {
                        decimals
                        name
                        symbol
                        id
                    }
                    txCount
                    id
                }
            }
        `;
export const GRAPHQL_QUERY_DUMP_POOLS_SUSHISWAP = `
            query MyQuery {
                pairs(first: 500, orderBy: txCount, orderDirection: desc) {
                    reserve0
                    reserve1
                    token0 {
                        name
                        symbol
                        decimals
                        id
                    }
                    token1 {
                        decimals
                        name
                        symbol
                        id
                    }
                    txCount
                    id
                }
            }
        `;
  
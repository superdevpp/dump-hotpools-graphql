import 'dotenv/config';
import fetch from 'node-fetch';

import * as constants from '../constants.js';

/**
 * getHotPools
 * @returns 
 */
export async function getHotPools() {
    const query = `
            query MyQuery {
                pairs(first: ${constants.POOLS_SHIBASWAP}, orderDirection: desc, orderBy: syncAtTimestamp) {
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
                    id
                }
            }
        `;

    const response = await fetch(constants.GRAPHQL_BASE_ENDPOINT + process.env.GRAPHQL_API_KEY_SHIBASWAP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const json = await response.json();

    if (json.errors) {
        console.error(constants.MESSAGE_ERR_GRAPHQL, json.errors);
        return [];
    }

    const pools = json.data.pairs;

    // Format rows
    const rows = pools
        .filter(pool =>
            pool.id &&
            pool.token0 && pool.token0.id && pool.token0.decimals !== undefined && pool.token0.symbol && pool.token0.name &&
            pool.token1 && pool.token1.id && pool.token1.decimals !== undefined && pool.token1.symbol && pool.token1.name
        )
        .map(pool => {
            return `${pool.id},${constants.DEX_NAME_SHIBASWAP},${constants.DEX_PROTOCOL_UNI_V2_STYLE},${pool.token0.symbol}/${pool.token1.symbol},${pool.token0.id},${pool.token0.decimals},${pool.token0.symbol},${pool.token0.name},${pool.token1.id},${pool.token1.decimals},${pool.token1.symbol},${pool.token1.name}`;
        });

    console.log(`✔️ ${constants.DEX_NAME_SHIBASWAP}`);
    // id | dex_name | dex_protocol | pair | token0_id | token0_decimals | token0_symbol | token0_name | token1_id | token1_decimals | token1_symbol | token1_name
    return rows;
}

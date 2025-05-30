export const GRAPHQL_BASE_ENDPOINT = 'https://thegraph.com/explorer/api/playground/';

export const CSV_HEADER = 'dex_name,pool_id,pair,token0_id,token0_decimals,token0_symbol,token0_name,token1_id,token1_decimals,token1_symbol,token1_name';

// Uniswap V2 Style
export const POOLS_UNISWAP_V2 = 200;//1000;
export const POOLS_SUSHISWAP = 100;//500;
export const POOLS_SHIBASWAP = 100;//200;

export const DEX_NAME_UNISWAP_V2 = 'uniswap-v2';
export const DEX_NAME_SUSHISWAP = 'sushiswap';
export const DEX_NAME_SHIBASWAP = 'shibaswap';

// Uniswap V3 Style
export const POOLS_UNISWAP_V3 = 200;//1000;

export const DEX_NAME_UNISWAP_V3 = 'uniswap-v3';

// MESSAGES
export const MESSAGE_START = '▶️ Starting the process...';
export const MESSAGE_END = '✅ CSV file written: ';
export const MESSAGE_ERR_GRAPHQL = '❌ GraphQL Error:';
export const MESSAGE_FILENAME = './out/hotpools';

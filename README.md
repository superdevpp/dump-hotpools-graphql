# dump-hotpools-graphql

**Dump hot pools with GraphQL**

This tool allows you to fetch and analyze hot liquidity pools using a GraphQL endpoint from The Graph protocol. It specifically targets the Uniswap V2 subgraph and is configured to work with your personal API key.

---

## 🚀 Features

- Query hot pools from Uniswap V2 using GraphQL
- Easy configuration via `.env`
- Lightweight and dependency-minimal

---

## ⚙️ Setup

1. **Clone the repository**

    ```bash
    git clone git@github.com:superdevpp/dump-hotpools-graphql.git
    cd dump-hotpools-graphql
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add your GraphQL API keys:

    ```env
    GRAPHQL_API_KEY_UNISWAP_V3 = xxx
    GRAPHQL_API_KEY_UNISWAP_V2 = xxx
    GRAPHQL_API_KEY_SUSHISWAP = xxx
    GRAPHQL_API_KEY_SHIBASWAP = xxx
    ```

    🔐 This API keys should be fetched via The Graph. You can obtain your own from The Graph Hosted Service.


## ▶️ Running the Project
Start the app using:

```bash
npm start
```

## 📧 Contact
For support or inquiries, contact: superdevpp@gmail.com


# IRCC Pay

IRCC's payment API.

## Running the code

This project can be run with the following command:

```sh
API_TOKEN="yesguy" API_HOST="esqa.moneris.com" STORE_ID="store3" yarn start
```

The environment variables above are the ones Moneris uses for it's QA environment.
When that runs visit the page at `localhost:3000/graphql` to explore the api.

Currently this only supports a simple payment, which can be made this:

```graphql
mutation {
  purchase(
    expiry: "16/11"
    orderID: "ircc-21342"
    primaryAccountNumber: "4242424242424242"
    amount: 1.00
    description: "Test"
  ){
    receipt_id
    reference_number
    response_code
    iso
    auth_code
    transaction_time
    transaction_date
    transaction_type
    complete
    message
    card_type
    transaction_id
    bank_totals
  }
}
```

## Running the tests

```sh
> yarn test
```

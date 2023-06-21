import React from 'react'
import Alert from 'react-bootstrap/Alert';

const FetchProductsError = () => {
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>something went wrong!</Alert.Heading>
      <p>
        something there is an network error while fetching data we are sorry for that but we will fix it soon!
      </p>
    </Alert>
  )
}

export default FetchProductsError
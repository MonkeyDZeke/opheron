import React from 'react'
import { PayPalButton } from "react-paypal-button-v2"

const PayPalBtn = ({ amount, onSuccess, currency }) => 
  <PayPalButton
    amount={amount}
    currency={currency}
    onSuccess={(details, data) => onSuccess(details, data)}
    options={{
      clientId: "Af9FnAxZeHcO_xGHBwZ0p46kwoEwLtzmFUfuMME7gqu78b70uuAPbXCPV0-o0-G6M95HsD2lmXXv0Ukx"
    }}
  />

export default PayPalBtn

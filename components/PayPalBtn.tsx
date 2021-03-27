import { PayPalButton } from 'react-paypal-button-v2'

const PayPalBtn = ({ amount, onSuccess, currency }) => (
  <PayPalButton
    amount={amount}
    currency={currency}
    onSuccess={(details, data) => onSuccess(details, data)}
    options={{
      clientId: 'ATSt4CKT7oHby4Jo_o8ehAeKJOUeVB1NqvmOB8cfprYVh4dLMv3EODlCFZA8I78OpEKJE799z_SE_ozS',
    }}
  />
)

export default PayPalBtn

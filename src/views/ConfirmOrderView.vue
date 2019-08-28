<template>
  <div>
    <OrderInformation />
    <BillingInformation />
    <ShippingInformation />
    <PaymentInformation />
  </div>
</template>

<script>
import BillingInformation from '../components/BillingInformation';
import ShippingInformation from '../components/ShippingInformation';
import PaymentInformation from '../components/PaymentInformation';
import OrderInformation from '../components/OrderInformation';

export default {
  components: {
    BillingInformation,
    ShippingInformation,
    PaymentInformation,
    OrderInformation,
  },
};
</script>

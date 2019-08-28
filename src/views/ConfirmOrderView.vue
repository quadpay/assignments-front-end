<template>
  <div>
    confirm order
    <BillingInformation />
    <ShippingInformation />
    <PaymentInformation />
  </div>
</template>

<script>
import BillingInformation from '../components/BillingInformation';
import ShippingInformation from '../components/ShippingInformation';
import PaymentInformation from '../components/PaymentInformation';

export default {
  components: {
    BillingInformation,
    ShippingInformation,
    PaymentInformation,
  },
};
</script>

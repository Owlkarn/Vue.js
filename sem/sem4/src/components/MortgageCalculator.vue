<!--1. Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.-->
<!--2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной-->
<!--ставки и срока кредита, а также элементы для отображения ежемесячного платежа-->
<!--и общей суммы выплаты.-->
<!--3. Используйте директиву v-model для связывания введенных пользователем-->
<!--значений с соответствующими свойствами в компоненте.-->
<!--4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять-->
<!--ежемесячный платеж на основе введенных значений суммы кредита, процентной-->
<!--ставки и срока кредита.-->
<!--5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую-->
<!--сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.-->
<!--6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах-->
<!--шаблона.-->
<script>
export default {
  name: "MortgageCalculator",
  data() {
    return {
      loanAmount: null,
      interestRate: null,
      loanTerm: null,
    };
  },
  computed: {
    monthlyPayment() {
      const monthlyInterestRate = this.interestRate / 100 / 12;
      const totalPayments = this.loanTerm * 12;
      return ((monthlyInterestRate * this.loanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))).toFixed(2);
    },
    totalPayment() {
      return (this.monthlyPayment * this.loanTerm * 12).toFixed(2);
    }
  }
}
</script>

<template>
  <div>
    <input type="number" v-model="loanAmount" required>
    <input type="number" v-model="interestRate" required>
    <input type="number" v-model="loanTerm" required>
    <div>Ежемесячный платеж {{ monthlyPayment }}</div>
    <div>Общая сумма выплаты {{ totalPayment }}</div>
  </div>
</template>

<style scoped lang="scss">

</style>
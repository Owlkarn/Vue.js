<script>
export default {
  name: "CalcComponent",


  data() {
    return {
      result: '',
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs: ['+', '-', '*', '/'],
    }
  },
  methods: {
    addButton(char) {
      this.result = this.result.toString();
      this.result += char;
    },
    calcResult() {
      this.result = eval(this.result);
    },
    reset() {
      this.result = '';
    }
  }
}
</script>

<template>
<div>
  <div class="calc">
    <input class="input" type="text" v-model="result">
    <button v-for="(num, index) in nums" :key="index" @click="addButton(num)">{{ num }}</button>
    <button v-for="tab in tabs" :key="tab.id" @click="addButton(tab)">{{ tab }}</button>
    <button @click="calcResult">=</button>
    <button class="reset" @click="reset">Reset</button>
  </div>
</div>
</template>

<style scoped>
.calc {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  justify-content: center;
}

.input {
  grid-column: 1/-1;
  text-align: right;
}
.reset {
  grid-column: 1/-1;
}

</style>
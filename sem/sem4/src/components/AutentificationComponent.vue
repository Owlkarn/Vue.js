<template>
  <div>
    <h2>Аутентификация</h2>
    <div v-if="isAuthenticated">
      <p>Успешная аутентификация! Добро пожаловать!</p>
    </div>
    <div v-else>
      <form @submit="login">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutentificationComponent',
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      logins: {
        1: '1',
        2: '2',
        3: '3',
      }
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      if (this.username in this.logins && this.logins[this.username] === this.password){
        this.isAuthenticated = true;
      }
// Здесь можно добавить логику для проверки аутентификации
// При успешной аутентификации установите значение isAuthenticated на true

// Очистить поля ввода
      this.username = '';
      this.password = '';
    }
  }
};
</script>
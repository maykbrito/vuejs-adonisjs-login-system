<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="login">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control"
            name="email" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control"
            name="password" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';
import router from '../router';
import { login } from '../services/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const { data } = await api.post('/user/login',
        {
          email: this.email,
          password: this.password,
        });

      login(data.token);

      this.resetFields();

      router.push({ name: 'Profile' });
    },
    resetFields() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control"
            name="email" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control"
            name="password" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Register!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';
import router from '../router';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      await api.post('/user/register',
        {
          email: this.email,
          password: this.password,
        });
      router.push({ name: 'Login' });
    },
  },
};
</script>

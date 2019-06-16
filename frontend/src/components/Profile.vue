<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode';
import api from '../services/api';

export default {
  data() {
    return {
      email: '',
    };
  },
  async mounted() {
    const decoded = jwtDecode(localStorage.usertoken);

    const { data } = await api.get(`/user/${decoded.uid}`);
    this.email = data.email;
  },
};
</script>

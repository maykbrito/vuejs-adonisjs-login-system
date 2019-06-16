
<template>
  <b-navbar class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav >
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item v-if="auth===''" to="/login">Login</b-nav-item>
        <b-nav-item v-if="auth===''" to="/register">Register</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="User" right  v-if="auth==='loggedin'">
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="doLogout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>

<script>

import {
  BNavbar, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavItemDropdown,
} from 'bootstrap-vue';
import { logout } from '../services/auth';
import router from '../router';

export default {
  components: {
    'b-navbar': BNavbar,
    'b-navbar-toggle': BNavbarToggle,
    'b-collapse': BCollapse,
    'b-navbar-nav': BNavbarNav,
    'b-nav-item': BNavItem,
    'b-nav-item-dropdown': BNavItemDropdown,
  },
  data() {
    return {
      auth: '',
      user: '',
    };
  },
  mounted() {
    this.showAsLoggedInWhenGoDirectToPath();
    this.listenToLoginWhenBusEmitIt();
  },
  methods: {
    doLogout() {
      logout();
      this.auth = '';
      router.push({ name: 'Login' });
    },
    showAsLoggedInWhenGoDirectToPath() {
      this.auth = window.auth;
    },
    listenToLoginWhenBusEmitIt() {
      window.bus.$on('logged-in', () => {
        this.auth = 'loggedin';
      });
    },
  },

};
</script>

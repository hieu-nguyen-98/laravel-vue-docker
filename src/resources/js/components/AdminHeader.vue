<template>
    <div class="admin-header">
      <nav>
        <ul>
          <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
          <li><router-link to="/admin/users">Users</router-link></li>
          <li><router-link to="/admin/settings">Settings</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "admin-header",
  };
  </script>
  
  <style scoped>
  .admin-header {
    background-color: #343a40;
    color: white;
    padding: 15px;
  }
  
  .admin-header nav ul {
    display: flex;
    list-style-type: none;
  }
  
  .admin-header nav ul li {
    margin-right: 20px;
  }
  
  .admin-header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
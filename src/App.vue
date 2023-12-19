<template>
  <div class="flex min-h-[50vh]">
    <div class="left-sidebar bg-gray-900 flex flex-col">
      <div class="heading p-8 bg-green-900">
        <h1 class="text-2xl text-green-200 text-center">
          Christine Anne A. Añosa
        </h1>
        <div class="text-xl text-gray-300 text-center">
          Final Project
        </div>
      </div>
      <nav class="nav-links text-gray-300 text-center">
        <a class="nav-link" :class="{ 'active': $route.path === '/employee' }"><RouterLink to="/employee">Employees</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/shift' }"><RouterLink to="/shift">Shifts</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/attendance' }"><RouterLink to="/attendance">Attendances</RouterLink></a>
      </nav>
      <div class="p-8 bg-gray-800 text-gray-500 text-center">
        This is a laboratory file 
        intended for training students
        in the use of VueJS 3 created by
        Benjie B. Lenteria for the 
        students of Mater Dei College <br />
        Copyright &copy; 2023.<br />All rights reversed.
      </div>
    </div>
    <div class="main-content bg-green-200 flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.left-sidebar {
  width: 320px; 
  height: 100vh;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #ff6b6b, #48dbfb, #feca57);
}

.heading {
  border-bottom: 2px solid #38a169;
  background: linear-gradient(to right, #fdcb6e, #6ab04c, #00cec9);
}

.nav-links {
  flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.nav-link {
  padding: 12px;
  background: linear-gradient(to right, #ff7675, #74b9ff, #ffeaa7);
  color: #2d3436;
  text-decoration: none;
  border-bottom: 1px solid #2d3748;
  transition: background 0.3s, color 0.3s;
}

.nav-link:hover {
  background: linear-gradient(to right, #2d3748, #4a5568);
  color: #fff;
}

.active {
  background: linear-gradient(to right, #2d3748, #4a5568);
  font-weight: bold;
  border-right: 4px solid #38a169;
}

.main-content {
  border-left: 2px solid #38a169;
  background: linear-gradient(to bottom right, #fdcb6e, #6ab04c, #00cec9);
  color: #2d3436;
}
</style>



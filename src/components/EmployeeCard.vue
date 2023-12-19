<template>
    <div class="employee-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Id:</span>
          <span>{{ employee.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">First Name:</span>
          <span>{{ employee.firstName }}</span>
        </div>
        <div class="card-row">
          <span class="label">Last Name:</span>
          <span>{{ employee.lastName }}</span>
        </div>
        <div class="card-row">
          <span class="label">Position:</span>
          <span>{{ employee.position }}</span>
        </div>
        <div class="card-row">
          <span class="label">Date of Birth:</span>
          <span>{{ employee.dateOfBirth }}</span>
        </div>
        <div class="card-row">
          <span class="label">Hire Date:</span>
          <span>{{ employee.hireDate }}</span>
        </div>
        <!-- <div class="card-row">
          <span class="label">Created At:</span>
          <span>{{ employee.created_at }}</span>
        </div>
        <div class="card-row">
          <span class="label">Updated At:</span>
          <span>{{ employee.updated_at }}</span>
        </div> -->
      </div>
    </div>
</template>
  
<script setup>
  const props = defineProps({
    employee: {
      id: Number,
      firstName: String,
      lastName: String,
      position: String,
      dateOfBirth: String,
      hireDate: String,
      created_at: String,
      updated_at: String,
    },
});
</script>
  
<style scoped>
.employee-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-left: 10px;
    background-color: bisque;
}
  
.card-details {
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
  
.card-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
  
.label {
    font-weight: bold;
    margin-right: 5px;
}
</style>
  
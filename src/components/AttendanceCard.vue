<template>
    <div class="attendance-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Id:</span>
          <span>{{ attendance.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Employee Id:</span>
          <span>{{ attendance.employee_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Shift Id:</span>
          <span>{{ attendance.shift_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Attendance Status:</span>
          <span>{{ attendance.attendanceStatus }}</span>
        </div>
        <div class="card-row">
          <span class="label">Attendance Date:</span>
          <span>{{ attendance.attendanceDate }}</span>
        </div>
        <div class="card-row">
          <span class="label">Notes:</span>
          <span>{{ attendance.notes }}</span>
        </div>
        <!-- <div class="card-row">
          <span class="label">Created At:</span>
          <span>{{ attendance.created_at }}</span>
        </div>
        <div class="card-row">
          <span class="label">Updated At:</span>
          <span>{{ attendance.updated_at }}</span>
        </div> -->
      </div>
    </div>
</template>
  
<script setup>
  const props = defineProps({
    attendance: {
      id: Number,
      employee_id: Number,
      shift_id: Number,
      attendanceStatus: String,
      attendanceDate: String,
      notes: String,
      created_at: String,
      updated_at: String,
    },
});
</script>
  
<style scoped>
.attendance-card {
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
    padding: 5px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
  
.card-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
}
  
.label {
    font-weight: bold;
    margin-right: 3px;
}
</style>
  
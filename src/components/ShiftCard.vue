<template>
    <div class="shift-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Id:</span>
          <span>{{ shift.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Employee Id:</span>
          <span>{{ shift.employee_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Start Time:</span>
          <span>{{ shift.startTime }}</span>
        </div>
        <div class="card-row">
          <span class="label">End Time:</span>
          <span>{{ shift.endTime }}</span>
        </div>
        <div class="card-row">
          <span class="label">Date:</span>
          <span>{{ shift.date }}</span>
        </div>
        <div class="card-row">
          <span class="label">Breaks Taken:</span>
          <span>{{ shift.breaksTaken }}</span>
        </div>
        <!-- <div class="card-row">
          <span class="label">Created At:</span>
          <span>{{ shift.created_at }}</span>
        </div>
        <div class="card-row">
          <span class="label">Updated At:</span>
          <span>{{ shift.updated_at }}</span>
        </div> -->
      </div>
    </div>
</template>
  
<script setup>
  const props = defineProps({
    shift: {
      id: Number,
      employee_id: Number,
      startTime: String,
      endTime: String,
      date: String,
      breaksTaken: Number,
      created_at: String,
      updated_at: String,
    },
});
</script>
  
<style scoped>
.shift-card {
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
  
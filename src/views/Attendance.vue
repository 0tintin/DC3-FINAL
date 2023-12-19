<template>
    <div class="container">
      <AttendanceCard v-for="attendance in attendances" :key="attendance.id" :attendance="attendance" />
    </div>
  </template>
  
  <script setup>
  import AttendanceCard from '../components/AttendanceCard.vue';
  
  const attendances = [
        {
            "id": 1,
            "employee_id": 4,
            "shift_id": 5,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-06-28",
            "notes": "A supportive and positive workplace encourages regular attendance.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 2,
            "employee_id": 8,
            "shift_id": 1,
            "attendanceStatus": "Absent",
            "attendanceDate": "2023-06-25",
            "notes": " Personal health problems are a common cause of absenteeism.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 3,
            "employee_id": 10,
            "shift_id": 6,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-08-19",
            "notes": "Strong organizational commitment often leads to higher attendance rates.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 4,
            "employee_id": 5,
            "shift_id": 10,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-07-13",
            "notes": "Employees who are satisfied with their jobs are more likely to be present and engaged.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 5,
            "employee_id": 4,
            "shift_id": 8,
            "attendanceStatus": "Absent",
            "attendanceDate": "2023-10-09",
            "notes": "Employees may be absent if they feel their job is not secure.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 6,
            "employee_id": 2,
            "shift_id": 6,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-09-23",
            "notes": "Providing flexibility can lead to increased attendance and job satisfaction.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 7,
            "employee_id": 3,
            "shift_id": 8,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-05-17",
            "notes": " Recognition for good work and appropriate rewards can boost attendance.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 8,
            "employee_id": 4,
            "shift_id": 7,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-12-02",
            "notes": "A positive team environment encourages employees to be present and contribute.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 9,
            "employee_id": 1,
            "shift_id": 1,
            "attendanceStatus": "Absent",
            "attendanceDate": "2023-10-30",
            "notes": "Inclement weather or natural disasters can prevent employees from reaching the workplace.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 10,
            "employee_id": 1,
            "shift_id": 2,
            "attendanceStatus": "Present",
            "attendanceDate": "2023-05-08",
            "notes": "Strong leadership can inspire and motivate employees to be present and productive.",
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        }
    ];
</script>
  
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>
  
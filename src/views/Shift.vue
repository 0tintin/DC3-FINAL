<template>
    <div class="container">
      <ShiftCard v-for="shift in shifts" :key="shift.id" :shift="shift" />
    </div>
  </template>
  
  <script setup>
  import ShiftCard from '../components/ShiftCard.vue';
  
  const shifts = [
        {
            "id": 1,
            "employee_id": 9,
            "startTime": "08:53:42",
            "endTime": "03:46:52",
            "date": "2023-01-22",
            "breaksTaken": 0,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 2,
            "employee_id": 9,
            "startTime": "13:49:56",
            "endTime": "23:17:45",
            "date": "2023-02-08",
            "breaksTaken": 2,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 3,
            "employee_id": 1,
            "startTime": "23:49:37",
            "endTime": "05:47:59",
            "date": "2023-06-25",
            "breaksTaken": 0,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 4,
            "employee_id": 8,
            "startTime": "21:05:25",
            "endTime": "04:35:42",
            "date": "2023-09-27",
            "breaksTaken": 2,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 5,
            "employee_id": 4,
            "startTime": "05:19:21",
            "endTime": "19:04:48",
            "date": "2023-03-13",
            "breaksTaken": 1,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 6,
            "employee_id": 6,
            "startTime": "01:30:12",
            "endTime": "14:54:57",
            "date": "2023-12-10",
            "breaksTaken": 1,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 7,
            "employee_id": 4,
            "startTime": "06:44:13",
            "endTime": "15:24:44",
            "date": "2023-06-22",
            "breaksTaken": 2,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 8,
            "employee_id": 7,
            "startTime": "18:24:29",
            "endTime": "02:23:06",
            "date": "2023-11-15",
            "breaksTaken": 1,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
        {
            "id": 9,
            "employee_id": 8,
            "startTime": "08:43:04",
            "endTime": "17:55:01",
            "date": "2023-07-24",
            "breaksTaken": 1,
            "created_at": "2023-12-12T07:35:54.000000Z",
            "updated_at": "2023-12-12T07:35:54.000000Z"
        },
          {
            "id": 10,
            "employee_id": 7,
            "startTime": "10:20:53",
            "endTime": "21:26:47",
            "date": "2023-02-15",
            "breaksTaken": 0,
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
  
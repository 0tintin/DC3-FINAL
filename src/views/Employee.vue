<template>
    <div class="container">
      <EmployeeCard v-for="employee in employees" :key="employee.id" :employee="employee" />
    </div>
  </template>
  
  <script setup>
  import EmployeeCard from '../components/EmployeeCard.vue';
  
  const employees = [
        {
            "id": 1,
            "firstName": "Alfred",
            "lastName": "Beatty",
            "position": "Cashier",
            "dateOfBirth": "2016-10-23",
            "hireDate": "2016-08-23",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 2,
            "firstName": "Hazel",
            "lastName": "Gottlieb",
            "position": "Assistant Manager",
            "dateOfBirth": "2018-03-24",
            "hireDate": "2016-03-14",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 3,
            "firstName": "Paxton",
            "lastName": "Hintz",
            "position": "Cook",
            "dateOfBirth": "2022-11-13",
            "hireDate": "2014-09-21",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 4,
            "firstName": "Khalid",
            "lastName": "O'Keefe",
            "position": "Maintenance Technician",
            "dateOfBirth": "2019-01-02",
            "hireDate": "2017-09-10",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 5,
            "firstName": "Rebeka",
            "lastName": "Mayert",
            "position": "Marketing Coordinator",
            "dateOfBirth": "2016-11-30",
            "hireDate": "2015-09-12",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 6,
            "firstName": "Nyasia",
            "lastName": "Balistreri",
            "position": "Trainer",
            "dateOfBirth": "2017-10-30",
            "hireDate": "2021-03-03",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 7,
            "firstName": "Connor",
            "lastName": "Marquardt",
            "position": "Maintenance Technician",
            "dateOfBirth": "2017-11-17",
            "hireDate": "2016-02-06",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 8,
            "firstName": "Erwin",
            "lastName": "Cruickshank",
            "position": "Store Manager",
            "dateOfBirth": "2015-01-24",
            "hireDate": "2022-01-18",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 9,
            "firstName": "Roosevelt",
            "lastName": "Shanahan",
            "position": "Crew Member",
            "dateOfBirth": "2022-03-23",
            "hireDate": "2019-08-27",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        },
        {
            "id": 10,
            "firstName": "Bessie",
            "lastName": "Altenwerth",
            "position": "Drive-Thru Operator",
            "dateOfBirth": "2018-03-31",
            "hireDate": "2021-05-08",
            "created_at": "2023-12-12T07:35:53.000000Z",
            "updated_at": "2023-12-12T07:35:53.000000Z"
        }
    ];
</script>
  
<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
}
</style>
  
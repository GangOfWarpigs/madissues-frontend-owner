<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const coursesData = {
  "Primer año": {
    labels: ['ASR', 'PWM', 'Mates'],
    data: [40, 20, 12]
  }
}

const chartData = {
  labels: coursesData["Primer año"].labels,
  datasets: [ {
    label: "Issues per courses",
    data: coursesData["Primer año"].data,
    backgroundColor: [
      "rgba(102, 179, 255, 0.2)",
    ],
    borderColor: [
      "rgb(102, 179, 255)",
    ],
    borderWidth: 1
  } ],
}


</script>

<template>
  <div class="bg-gray-100 p-2 rounded-3xl h-full w-full">
    <Bar :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" />
  </div>
  </template>

<style scoped>

</style>
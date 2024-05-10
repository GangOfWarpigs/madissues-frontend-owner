<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ref, watch} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const selectedCourse = ref("Primer año")

const coursesData = {
  "Primer año": {
    labels: ['ASR', 'PWM', 'Mates'],
    data: [40, 20, 12]
  },
  "Segundo año": {
    labels: ['Matemáticas', 'Inglés', 'Historia'],
    data: [30, 50, 20]
  },
  "Tercer año": {
    labels: ['Biología', 'Química', 'Física'],
    data: [20, 35, 45]
  },
  "Cuarto año": {
    labels: ['Literatura', 'Arte', 'Música'],
    data: [25, 40, 35]
  }
}

const chartData = {
  labels: coursesData[selectedCourse.value].labels,
  datasets: [ {
    label: "Issues per courses",
    data: coursesData[selectedCourse.value].data,
    backgroundColor: [
      "rgba(102, 179, 255, 0.2)",
    ],
    borderColor: [
      "rgb(102, 179, 255)",
    ],
    borderWidth: 1
  } ],
}

watch(selectedCourse, (newCourse) => {
  chartData.labels = coursesData[newCourse].labels
  chartData.datasets[0].data = coursesData[newCourse].data
})

</script>

<template>
  <div class="bg-gray-100 p-2 rounded-3xl h-full w-full">
    <Bar :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" />
  </div>
  </template>

<style scoped>

</style>
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: [ 'Administrativos', 'Profesorado', 'Proyectos Docentes', 'Genérico', 'Fechas de exámenes', 'Evaluaciones' ],
  datasets: [ {
    label: "Issues per courses",
    data: [7, 10, 12, 21, 15, 2],
    backgroundColor: [
      "rgba(255, 99, 132, 0.5)",
      "rgba(255, 159, 64, 0.5)",
      "rgba(255, 205, 86, 0.5)",
      "rgba(75, 192, 192, 0.5)",
      "rgba(54, 162, 235, 0.5)",
      "rgba(153, 102, 255, 0.5)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
    ],
    borderWidth: 1
  } ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'Issues en 2023-2024',
    font: {
      size: 20,
    },
  },
}

</script>

<template>
  <div class="">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>

</style>
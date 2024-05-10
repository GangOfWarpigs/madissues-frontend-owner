<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {Chart as ChartJS, LineElement, PointElement} from 'chart.js'

ChartJS.register(PointElement, LineElement)

const chartData = {
  labels: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo'],
  datasets: [{
    label: '',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

</script>

<template>
  <div class="bg-gray-100 p-2 rounded-3xl h-full w-full">
  <Line :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" />
  </div>
</template>

<style scoped>

</style>
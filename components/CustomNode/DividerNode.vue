<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'
import { ref } from 'vue'


const selectedDivider = ref()
const dividers = ref([
  {name: '/1', code: '/1', value: '1'},
  {name: '/2', code: '/2', value: '2'},
  {name: '/4', code: '/4', value: '4'},
  {name: '/8', code: '/8', value: '8'},
])

</script>

<template>
  <div class="custom-node">
    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
    <div class="card flex justify-content-center">
      <Dropdown v-model="selectedDivider" :options="dividers" optionLabel="name" placeholder="Select a divider" class="w-full md:w-14rem" />
    </div>
  </div>
</template>

<style scoped>
.custom-node {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
}
</style>

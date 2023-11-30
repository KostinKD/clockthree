<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'
import { ref } from 'vue'


const clockNumber = ref()


</script>

<template>
  <div class="custom-node">
    <Handle id="a" type="target" :position="Position.Top" />
    <Handle id="b" type="source" :position="Position.Bottom" />
    <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
        <InputNumber v-model="clockNumber" inputId="integeronly" />
      </div>
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

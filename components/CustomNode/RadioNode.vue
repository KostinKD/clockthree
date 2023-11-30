<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'
import { ref } from 'vue'


const selectedRadio = ref()
const radioType = ref([
  {name: 'Type1', key: 1},
  {name: 'Type2', key: 2},
  {name: 'Type3', key: 3},
])

</script>

<template>
  <div class="custom-node">
    <div class="card flex justify-content-center">
      <div class="flex flex-column gap-3">
        <div v-for="radio in radioType" :key="radio.key" class="flex align-items-center">
          <RadioButton v-model="selectedRadio" :inputId="radio.key" name="dynamic" :value="radio.name" />
          <label :for="radio.key" class="ml-2">{{ radio.name }}</label>
        </div>
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

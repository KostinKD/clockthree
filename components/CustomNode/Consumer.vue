<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'
import { ref } from 'vue'


const props = defineProps(['data', 'node'])

const selectedDivider = ref()

const consumerNode = ref(props)

console.log('d', props)

</script>

<template>
  <div class="custom-node">
    <Handle type="target" :position="Position.Top" />
    <div class="card flex justify-content-center">
      {{consumerNode}}
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

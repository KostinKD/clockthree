<script lang="ts" setup>
import {getIncomers, getOutgoers, Handle, Position} from '@vue-flow/core'
import { ref } from 'vue'


const selectedRadio = ref()
const radioType = ref([
  {name: 'Type1', key: 1},
  {name: 'Type2', key: 2},
  {name: 'Type3', key: 3},
])

const targetHandleStyleA = computed(() => ({
  filter: 'invert(100%)',
  top: '10px',

}))

const targetHandleStyleB = computed(() => ({
  filter: 'invert(100%)',
  top: '50px',
}))

const targetHandleStyleC = computed(() => ({
  filter: 'invert(100%)',
  top: '90px',

}))

</script>

<template>
  <div class="custom-node">
    <Handle id="a" type="target" :position="Position.Left" :style="targetHandleStyleA" />
    <Handle id="b" type="target" :position="Position.Left" :style="targetHandleStyleB" />
    <Handle id="c" type="target" :position="Position.Left" :style="targetHandleStyleC" />
    <Handle type="source" :position="Position.Right" />
    <div class="card flex justify-content-center">
      <div class="flex flex-column gap-3">
        <div v-for="radio in radioType" :key="radio.key" class="flex align-items-center">
          <RadioButton v-model="selectedRadio" :inputId="radio.key" name="dynamic" :value="radio.name" @change="console.log(getIncomers())"/>
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

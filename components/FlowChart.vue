<template>
  <VueFlow v-model="initialElements" class="basicflow" :default-viewport="{ zoom: 1.5 }"  no :min-zoom="0.2" :max-zoom="4" snap-to-grid="true" :snap-grid="snapGrid">
    <Background :pattern-color="dark ? '#FFFFFB' : '#aaa'" gap="8" />

    <MiniMap />

    <Controls />

    <Panel position="top-right">
      <button type="button" @click="addNode">add node</button>
    </Panel>

    <template #node-custom="nodeProps">
      <CustomNode v-bind="nodeProps" />
    </template>

    <template #edge-custom="edgeProps">
      <CustomEdge v-bind="edgeProps" />
    </template>

  </VueFlow>
</template>

<script setup>

import {VueFlow, Panel, isNode, useVueFlow} from "@vue-flow/core";
import {Background} from "@vue-flow/background";
import {Controls} from "@vue-flow/controls";
import {MiniMap} from "@vue-flow/minimap";
import CustomNode from "~/components/CustomNode/CustomNode.vue";
import CustomEdge from "~/components/CustomEdge/CustomEdge.vue";

import {ref} from "vue"


const { onPaneReady, nodes, onNodeDragStop, addNodes, onConnect, addEdges, dimensions, setTransform, toObject } = useVueFlow()
onPaneReady(({ fitView }) => {
  fitView()
})
onNodeDragStop((e) => console.log('drag stop', e))
onConnect((params) => addEdges(params))


const connectionLineStyle = { stroke: '#fff' }
const snapGrid = [16, 16]

function updatePos() {
  return elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 400,
        y: Math.random() * 400,
      }
    }
  })
}


function addNode() {
  const nodeId = (nodes.value.length + 1).toString()

  const newNode = {
    id: nodeId,
    label: `Node: ${nodeId}`,
    position: { x: Math.random() * dimensions.value.width/2, y: Math.random() * dimensions.value.height/2 },
    type: 'custom'
  }

  addNodes([newNode])
}


const initialElements = [
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 0 }, class: 'light' },

]

</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>
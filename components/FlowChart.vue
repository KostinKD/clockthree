<template >
  <div @drop="onDrop" class="dndflow">
  <Navbar></Navbar>
  <VueFlow @dragover="onDragOver" v-model="initialElements" class="basicflow" :default-viewport="{ zoom: 1.5 }"  :node-types="nodesTypes" :min-zoom="0.2" :max-zoom="4" snap-to-grid="true" :snap-grid="snapGrid">
    <Background :pattern-color="dark ? '#FFFFFB' : '#aaa'" gap="8" />

    <MiniMap />

    <Controls />

    <Panel position="top-right">
      <button type="button" @click="addNode('divider')">add divider</button>
      <button type="button" @click="addNode('clock')">add node</button>
    </Panel>



    <template #edge-custom="edgeProps">
      <CustomEdge v-bind="edgeProps" />
    </template>

  </VueFlow>
  </div>

</template>

<script setup>

import {VueFlow, Panel, isNode, useVueFlow} from "@vue-flow/core";
import {Background} from "@vue-flow/background";
import {Controls} from "@vue-flow/controls";
import {MiniMap} from "@vue-flow/minimap";
import CustomNode from "~/components/CustomNode/CustomNode.vue";
import CustomEdge from "~/components/CustomEdge/CustomEdge.vue";

import {ref} from "vue"
import DividerNode from "~/components/CustomNode/DividerNode.vue";
import ClockBox from "~/components/CustomNode/ClockBox.vue";
import RadioNode from "~/components/CustomNode/RadioNode.vue";


const { onPaneReady, nodes, onNodeDragStop, addNodes, onConnect, addEdges, project, findNode, vueFlowRef, dimensions, setTransform, toObject } = useVueFlow()
onPaneReady(({ fitView }) => {
  fitView()
})
onNodeDragStop((e) => console.log('drag stop', e))
onConnect((params) => addEdges(params))


const connectionLineStyle = { stroke: '#fff' }
const snapGrid = [16, 16]
const nodesTypes = {
  divider: DividerNode,
  counter: CustomNode,
  clock: ClockBox,
  radio: RadioNode,
}

let id = 0
function getId() {
  return `dndnode_${id++}`
}
// DRAG AND DROP
function onDragOver(event) {
  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}
function onDrop(event) {
  const type = event.dataTransfer?.getData('application/vueflow')

  const { left, top } = vueFlowRef.value.getBoundingClientRect()

  const position = project({
    x: event.clientX - left,
    y: event.clientY - top,
  })

  const newNode = {
    id: getId(),
    type,
    position,
  }
  addNodes([newNode])

  // align node position after drop, so it's centered to the mouse
  nextTick(() => {
    const node = findNode(newNode.id)
    const stop = watch(
        () => node.dimensions,
        (dimensions) => {
          if (dimensions.width > 0 && dimensions.height > 0) {
            node.position = { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 }
            stop()
          }
        },
        { deep: true, flush: 'post' },
    )
  })
}

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


function addNode(type) {
  const nodeId = (nodes.value.length + 1).toString()

  switch (type){
    case 'divider':
      console.log('divider')
      const divider = {
        id: nodeId,
        label: `Node: ${nodeId}`,
        position: { x: Math.random() * dimensions.value.width/2, y: Math.random() * dimensions.value.height/2 },
        type: 'divider'
      }
      addNodes([divider])
      break
    case 'clock':
      console.log('cloc')
        const custom = {
          id: nodeId,
          label: `Node: ${nodeId}`,
          position: { x: Math.random() * dimensions.value.width/2, y: Math.random() * dimensions.value.height/2 },
          type: 'counter'
        }
        addNodes([custom])
        break;
    }


}


const initialElements = [
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 0 }, class: 'light' },

]

</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.dndflow{flex-direction:column;display:flex;height:100%}.dndflow aside{color:#fff;font-weight:700;border-right:1px solid #eee;padding:15px 10px;font-size:12px;background:rgba(16,185,129,.75);-webkit-box-shadow:0px 5px 10px 0px rgba(0,0,0,.3);box-shadow:0 5px 10px #0000004d}.dndflow aside .nodes>*{margin-bottom:10px;cursor:grab;font-weight:500;-webkit-box-shadow:5px 5px 10px 2px rgba(0,0,0,.25);box-shadow:5px 5px 10px 2px #00000040}.dndflow aside .description{margin-bottom:10px}.dndflow .vue-flow-wrapper{flex-grow:1;height:100%}@media screen and (min-width: 640px){.dndflow{flex-direction:row}.dndflow aside{min-width:25%}}@media screen and (max-width: 639px){.dndflow aside .nodes{display:flex;flex-direction:row;gap:5px}}
</style>
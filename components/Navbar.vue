<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{item,props}">
                <aside>
                  <div class="description">You can drag these nodes to the pane.</div>
                  <div class="nodes">
                    <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Input Node</div>

                    <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'divider')">Civider Node</div>

                    <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'counter')">Counter Node</div>

                    <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'clock')">Clock box</div>
                    <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'radio')">Radio box</div>
                  </div>
                </aside>
      </template>
    </Menubar>

  </div>

</template>

<script setup>



const router = useRouter()

function onDragStart(event, nodeType) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',

  },

])

</script>
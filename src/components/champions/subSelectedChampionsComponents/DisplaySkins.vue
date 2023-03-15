<template>
  <h1>Skins</h1>
  <ul v-for="skin in skins" :key="skin.id"> {{ skin }}

  </ul>
</template>

<script>
export default {
  props: ['name', 'champKey', 'skins']
}

</script>
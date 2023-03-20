<template>
  <div class="add-entries">
    <form>
      <input type="text"
             v-model="editItem.title"
             id="title"
             name="title"
             placeholder="Website name"
             required> <br>
      <input type="text"
             v-model="editItem.url"
             id="url"
             name="url"
             placeholder="Website link"
             required> <br>
      <input type="file"
             accept="image/png, image/jpeg"
             id="canvas-bg"
             name="canvas-bg"
             placeholder="Add an image"
             @change=uploadPhoto
             required> <br>
      <button  @click="addItem"> Add item</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm"
}
</script>

<style scoped>

</style>
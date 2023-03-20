<template>
  <div class="add-entries">
    <form method="post">
      <label for="title">Website name: </label>
      <input type="text" v-model="title" id="title" name="title"> <br>
      <label for="name">Website link: </label>
      <input type="text" v-model="url" id="url" name="url"> <br>
<!--      <input type="file" id="image">-->
      <button type="submit" @click="addItem">Add item</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      item: {
        title: '',
        url: '',
      }
    }
  }
}
</script>

<style scoped>

</style>
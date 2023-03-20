<template>
  <div class="home">
    <h1 class="center-text">WELCOME TO MY PROJECTS PORTFOLIO</h1>
    <h4 class="center-text">DASHBOARD</h4>
    
    <Entries :entries="entries"
             @toggle-active="toggleActive"
             @handle-delete="handleDelete"/>

    <div class="add-section">
      <button v-if="!addForm"
          class="add-button" @click="handleForm">
        <img src="../assets/icons8-macos-maximize-90.png">
        <span>Add project</span>
      </button>

      <div v-if="addForm"
           class="add-entries">
        <form>
          <input type="text"
                 v-model="item.title"
                 id="title"
                 name="title"
                 placeholder="Website name"
                 required> <br>
          <input type="text"
                 v-model="item.url"
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
    </div>

  </div>
</template>

<script>

import Entries from "@/components/Entries";
export default {
  components: {Entries},

  data() {
    return {
      addForm: false,
      item: {
        id:'',
        title: '',
        url: '',
        image: null,
        isActive: true
      },
      oldEntries:[]
    }
  },

  computed: {
    entries() {
      return JSON.parse(localStorage.getItem('entries'))
    }
  },

  methods: {
    setOldEntries() {
      if(this.entries)
      this.oldEntries = this.entries
    },

    updateEntries() {
      localStorage.setItem('entries', JSON.stringify(this.oldEntries))
    },

    uploadPhoto(e) {
      const img = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = e =>{
        this.item.image = e.target.result
      }
    },

    addItem() {
      this.setOldEntries()
      this.oldEntries.unshift(this.item)
      this.updateEntries()
      this.addForm = false
    },

    toggleActive(index) {
      this.setOldEntries()
      this.oldEntries[index].isActive = !this.oldEntries[index].isActive
      this.updateEntries()
      location.reload();
    },

    handleDelete(index) {
      this.setOldEntries()
      this.oldEntries.splice(index,1)
      this.updateEntries()
      location.reload();
    },

    handleForm() {
      this.addForm = true
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/main";

  @media only screen and (min-width: 0) {

    .home {

      h1 {
        font-size: 19px;
      }

      h4 {
        margin-bottom: 40px;
      }

      .add-section {
        display: flex;
        justify-content: center;
        align-items: center;

        .add-button {
          background-color: white;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          span {
            text-transform: uppercase;
            font-weight: bold;
            color: #183153;
          }
        }

        .add-entries {
          background-color: #183153;
          color: white;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

          input, button {
            width: 100%;
            padding: 6px 12px;
            margin-bottom: 10px;
            border-radius: 5px;
          }

          button {
            background-color: white;
            text-transform: uppercase;
            color: #183153;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .home {
      h1 {
        font-size: 30px;
      }

      h4 {
        margin-bottom: 100px;
      }
    }
  }


</style>

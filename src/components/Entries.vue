<template>
  <div class="flex-center wrap">
    <div v-for="(item,index) in entries"
          class="entries flex-center wrap">
      <div class="entries__item">
        <header class="functionality">
          <button :class="{active:item.isActive, hidden:!item.isActive}"
                  @click="toggleActive(index)">
            {{item.isActive ? 'ACTIVE' : 'HIDDEN'}}
          </button>


          <div>
            <button type="button"
                    @click="handleDelete(index)">Delete</button>
          </div>

        </header>

        <img :src=item.image alt="website-img">
      </div>

      <a :href="item.url" class="entries__link">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "entries",
  props: {
    entries: Array
  },

  data() {
    return {
      isActive: true
    }
  },

  methods: {
    toggleActive(index) {
      this.$emit('toggle-active', index)
    },

    handleDelete(index) {
      this.$emit('handle-delete', index)

    }
  }
}
</script>

<style lang="scss">
 @import "../styles/main";

 @media only screen and (min-width: 0) {

     .entries {
       width: 410px;
       height: 465px;
       padding: 0 20px 45px;
       margin-bottom: 50px;

       &__item {
         width: 300px;
         height: 90%;
         background-color: #183153;
         border: solid 3px #183153;
         border-radius: 5px;
         overflow: hidden;

         .functionality {
           z-index: 1;
           display: flex;
           justify-content: space-between;
           align-items: center;

           button {
             padding: 2px 6px;
             border-radius: 5px;
             margin: 0 2px;
             border: none;
             background-color: inherit;
             color: white;
           }

           .active, .hidden {
             color: white;
             font-size: 11px;
             font-weight: bold;
             border-radius: 3px;
           }

           .active {
             background-color: green;
           }

           .hidden {
             background-color: red;
           }
         }

         img {
           width: 100%;
           height: 100%;
         }
       }

       &__link {
         width: 300px;
         max-height: 54px;
         padding: 14px 22px;
         margin-top: 10px;
         border-radius: 5px;
         color: white;
         font-size: 14px;
         font-weight: bold;
         text-decoration: none;
         text-transform: uppercase;
         text-align: center;
         background-color: #183153;
       }
     }
   }

 @media only screen and (min-width: 1024px) {

 }
</style>
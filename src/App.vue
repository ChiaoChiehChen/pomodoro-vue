<template>
  <div id="app">
    <b-container>
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="12" class="mt-5 d-flex justify-content-center align-items-center">
          <b-form-input id="newinput" v-model="newinput" :state="newinputstate" @keydown.enter="additem"></b-form-input>
          <b-button size="sm" class="plus_btn" @click="additem">
              <b-icon icon="plus" font-scale="3"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newinput: ''
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    }
  }
}
</script>

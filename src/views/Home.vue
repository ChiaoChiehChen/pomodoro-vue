<template>
  <div id="home">
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" class="hamburger">
          <b-button class="hamburgerBtn" to="/list">
            <b-icon icon="list" font-scale="5"></b-icon>
          </b-button>
        </b-col>
      </b-row>
      <b-row class="h-50 d-flex justify-content-center align-items-center flex-column content">
        <b-col cols="12" class="mt-5 d-flex justify-content-center align-items-center">
          <b-button class="square" v-if="status !== 1" @click="start">
            <p class="start">Start</p>
          </b-button>
          <b-button class="square" v-else @click="pause">
            <p class="start">Stop</p>
          </b-button>
        </b-col>
        <b-col cols="12" class="d-flex justify-content-center">
          <div class="timetxt text-center">
            <h1> {{timeText}}</h1>
          </div>
        </b-col>
        <b-col cols="4" class="items">
          <ul>
            <!-- <li v-for="(item, idx) in items" :key="idx"> {{ item.name }}</li> -->
            <li>{{ currentText }}</li>
          </ul>
        </b-col>
        <b-col cols="3" class="txt">
          <p>.....Only show the first four tasks.....</p>
        </b-col>
      </b-row>
      <b-row class="mt-4 d-flex justify-content-center align-items-center txt2">
        <h2>Work</h2>
        <h2>Break</h2>
      </b-row>
      <b-row class="p-0 bottom fixed-bottom"></b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // newinput: ''
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0,
      muted: false
    }
  },
  computed: {
    // newinputstate () {
    //   return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    // },
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      // 目前倒數 有東西
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finished(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finished (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }

      if (this.items.length > 0) {
        this.start()
      }
    }
  }
}
</script>

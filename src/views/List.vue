<template>
  <div id="list" class="text-white w-100 overflow-hidden">
    <b-container>
      <b-row>
        <b-col cols="12" class="back">
          <b-button class="backBtn" to="/">
            <b-icon icon="x" font-scale="5"></b-icon>
          </b-button>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center align-items-center listitem">
        <b-col cols="5">
          <h1>All Tasks</h1>
          <b-table :items="items" :fields="fields" show-empty class="tablelist">
            <template #empty>
              <p>沒有項目</p>
            </template>
            <template #cell(name)="data">
              <b-form-input class="w-75"
              v-if="data.item.edit"
              v-model="data.item.model"
              :state="data.item.state"
              @keydown.enter="submitedit(data.index)"
              @keydown.esc="canceledit(data.index)"></b-form-input>
              <span v-else>{{ data.value }}</span>
            </template>
            <template #cell(action)="data">
              <span v-if="data.item.edit">
                <b-btn variant="transparent">
                  <b-icon icon="check" font-scale="1" class="colorWhite" @click="submitedit(data.index)"></b-icon>
                </b-btn>
                <b-btn variant="transparent">
                  <b-icon icon="arrow-counterclockwise" font-scale="1" class="colorWhite" @click="canceledit(data.index)"></b-icon>
                </b-btn>
              </span>
              <span v-else>
                <b-btn variant="transparent">
                  <b-icon icon="pencil" font-scale="1" class="colorWhite" @click="edititem(data.index)"></b-icon>
                </b-btn>
                <b-btn variant="white">
                  <b-icon icon="trash" font-scale="1" class="colorWhite" @click="delitem(data.index)"></b-icon>
                </b-btn>
              </span>
            </template>
          </b-table>
        </b-col>
        <b-col cols="1">
          <div class="d-flex align-items-center line"></div>
        </b-col>
        <b-col cols="5" class>
          <h1>Had Done</h1>
          <b-table-simple class="tablelist">
            <thead>
              <th>操作</th>
              <th>名稱</th>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in finished" :key="idx">
                <td>
                  <b-button class="dotbtn">
                    <p @click="delfinish(idx)">●</p>
                  </b-button>
                </td>
                <td> {{ item }}</td>
              </tr>
              <tr v-if="finished.length === 0">
                <td>沒有項目</td>
              </tr>
            </tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // newinput: '',
      fields: [
        { key: 'action', label: '操作' },
        { key: 'name', label: '名稱' }
      ]
    }
  },
  computed: {
    // newinputstate () {
    //   return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    // },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    }

  }
}
</script>

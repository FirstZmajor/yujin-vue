<template>
  <section id="about" class="wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</p>
        <br/> 
        <div>
          <div class="col-lg-12">
            <el-input placeholder="Image URL" v-model="inputURL">
              <el-button v-on:click="addRow()" slot="append" icon="el-icon-plus" ></el-button>
            </el-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 about-img">
            <!-- <img src="../assets/img/about-img.png" alt=""> -->
            <img src="../../assets/img/mj.png" alt="">
        </div>
        <div class="col-lg-8 content">
            <br/>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            <h3>Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident</h3>
            <!-- <ul>
                <li><i class="icon ion-ios-checkmark-outline"></i> Dolores quae porro consequatur aliquam, incidunt fugiat culpa.</li>
                <li><i class="icon ion-ios-checkmark-outline"></i> Dolores quae porro consequatur aliquam, culpa esse aute nulla.</li>
                <li><i class="icon ion-ios-checkmark-outline"></i> Dolores quae porro esse aute nulla. malis nulla duis fugiat</li>
            </ul>  -->

            <div v-for="(item, index) in listUrl" :key="index" class="text item" style="margin: 5px;">
              <el-card shadow="always" class="my-card1">
                <div class="row">
                  <div class="col-md-10 text-left">
                    <span>

                      <el-link :underline="false">
                        <i :class="{'el-icon-circle-check Success': item.status , 'el-icon-circle-close': !item.status}"
                        :style="{color: '#67C23'}"
                        @click="updateRow(index, item.status)"></i> 
                      </el-link>

                      <!-- <i v-bind:class="[item.status ? 'el-icon-circle-check Success' : 'el-icon-circle-close']" 
                      v-on:click="updateRow(index, item.status)"></i>  -->
                      {{ item.message }}
                    </span>
                  </div>
                  <div class="col-md-2 text-right">
                    <el-link :underline="false"><i class="el-icon-edit-outline" v-on:click="updateRow(index)"></i></el-link>
                    <el-link :underline="false"><i class="el-icon-close" v-on:click="removeRow(index)"></i></el-link>
                  </div>
                </div>
              </el-card>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase, { firestore } from 'firebase/app'
export default {
    name: 'AboutSection',
    data() {
      return {
        inputURL: '',
        output: '',
        listUrl: {},
        focused: {},
      }
    },
    async mounted () {
      firebase.database().ref('todos').on('child_added', snapshot => {
        this.listUrl = {
          ...this.listUrl,
          [snapshot.key]: snapshot.val()
        }
      })
      firebase.database().ref('todos').on('child_changed', snapshot => {
        this.listUrl = {
          ...this.listUrl,
          [snapshot.key]: snapshot.val()
        }
      })
    },
    methods: {
      addRow(){
        firebase.database().ref('todos').push( { message: this.inputURL, status: false } )
      },
      removeRow(index){
        firebase.database().ref('todos').child(index).remove()
      },
      updateRow(index, status){
        status = !status
        firebase.database().ref('todos').child(index).update( {status: status} )
      },
    }
}
</script>
<style scoped>
  .el-icon-circle-check {
    color: #67C23A
  }
</style>
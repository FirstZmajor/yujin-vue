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
                  <div class="col-md-11 text-left">
                    <span><i class="el-icon-circle-check Success" ></i> {{item.url }}</span>
                  </div>
                  <div class="col-md-1 text-right">
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
export default {
    name: 'AboutSection',
    data() {
      return {
        inputURL: '',
        output: '',
        listUrl: [
          { url: 'https://pbs.twimg.com/media/EDl18eXUwAACN9E?format=jpg&name=360x360'}
        ]
      }
    },
    methods: {
      addRow(){
        this.listUrl.push({url: this.inputURL })
        // let position = this.inputURL.indexOf("&name=")
        // if (position == -1) {
        //   this.$notify.error({
        //     title: 'Sorry!',
        //     message: 'We not found URL.',
        //     position: 'bottom-right',
        //     offset: 100
        //   });
        // } else {
        //   let cutting = this.inputURL.slice(0, position)
        //   this.listUrl.push({url: cutting + '&name=large' })
        // }
      },
      removeRow(index){
          this.listUrl.splice(index,1); // why is this removing only the last row?
      }
    }
}
</script>
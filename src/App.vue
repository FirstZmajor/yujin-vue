<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="header-sticky-wrapper" class="sticky-wrapper is-sticky" style="height: 81px;">
      <MyHeader />
    </div>
    <HeroSession />
    <main id="main">
      <MainSection />
    </main>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import HeroSession from './components/HeroSession.vue'
import MainSection from './components/MainSection.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'app',
  components: {
    MyHeader,
    HeroSession,
    MainSection,
    MyFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700');

</style>

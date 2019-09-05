<template>
 <header id="header" style="width: 1920px; position: fixed; top: 0px; z-index: 50;">
    <div class="container">
      <div id="logo" class="pull-left">
        <h1><a href="#body" class="scrollto">ADMIRER</a></h1> 
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li class="menu-has-children"><a href="">Dropdown</a>
            <ul>
              <li><a href="#">Link Item 1</a></li>
              <li><a href="#">Link Item 3</a></li>
              <li><a href="#">Link Item 4</a></li>
              <li><a href="#">Link Item 5</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header>
  
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

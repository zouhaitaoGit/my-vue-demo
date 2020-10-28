<template>
  <div class="imgBox">
    <div class="imgList" v-for="item in list" :key="item">
      <img :src="require('../assets/logo.png')" alt="">
      </div>
  </div>
</template>

<script>
import Photo from '../util/photo'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Photo('.imgList', '.imgBox')
    // let photo1 = new
    // console.log(photo1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, html {
  width: 100%;
  height: 100%;
  background-color: black;
}
.imgBox {
  width: 200px;
  height: 150px;
  position: relative;
  margin: 100px auto;
  transform-origin: center center;
  transform-style: preserve-3d;
  transform: rotateX(20deg);
}
.imgList {
  position: absolute;
  left: 0;
  top: 0;
}
.imgList img {
  /*
      倒影
  */
  -webkit-box-reflect:below 0 -webkit-linear-gradient(transparent,transparent 20%,rgba(255,255,255,.3));
}
</style>

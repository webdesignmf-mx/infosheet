<template>
  <div id="app">
    <div class="container">
      <!-- <img src="./assets/logo.png"> -->
      <h2 class="text-center">Infosheet</h2>
      <div class="row justify-content-center">
        <div class="col-12">Testing
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    axios.get('https://website.managerfashion.net/api/emsproducoes/complement/getLanguages/'+this.lang+'/null').then(response=>{
      this.$set(this.optionList, 'languages', response.data)
    })
    axios.get('https://website.managerfashion.net/api/emsproducoes/complement/getSkills/'+this.lang+'/null').then(response=>{
      this.$set(this.optionList, 'skills', response.data)
    })
    axios.get('https://website.managerfashion.net/api/emsproducoes/cities').then(response=>{
      this.$set(this.optionList, 'cities', response.data)
    })
  },
  data () {
    return {
      lang:'en',
      optionList:{}
    }
  }
}
</script>

<style lang="scss">
</style>

<template>
  <div class="hello">
    <div class="nav">网易健康</div>
    <p v-if="flag">正在加载，请稍候......<br />如果长时间未显示页面内容，请尝试手动刷新页面</p>
    <ul>
      <li v-for="(item,index) in newslist" :key="index">
        <a :href=item.url>
          <img :src=item.image />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "网易健康",
      newslist:[]
    };
  },
  mounted(){
    this.$axios
      .get(
        "../../static/health.json"
      )
      .then(res=>{
        this.newslist=res.data;
      })
      .catch(err=>{
        console.log(err);
      });
  }
};
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.hello{
  width: 100%;
}
h1{
  font-size: 18px;
  width:100%;
  padding-left: 15px;
  height: 35px;
  line-height: 35px;
  background:greenyellow;
  margin-bottom: 20px;
}
.img li{
  margin-left: 4%;
  width:20%;
  float: left;
  list-style: none;
}
.img img{
      width: 100%;
}

.nav {
  width: 1200px;
  height: 45px;
  line-height: 45px;
  background-color: #43c7a8;
  text-indent: 2em;
  color: #fff;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
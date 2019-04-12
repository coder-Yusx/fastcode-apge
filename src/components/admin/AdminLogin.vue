<style scoped>

</style>
<template>
  <div>
    <el-form lable="" style="border: gray dotted 1px;border-radius: 5px;width: 250px;padding:35px 20px 0 20px;margin:100px auto;box-shadow: 5px 5px 10px #888888;">
      <div style="text-align: center;font:italic bold 20px arial,sans-serif;">后台管理系统</div>
      <div style="text-align: right;color: red;font-size: 10px;margin-top: 5px;">{{msg}}</div>
      <el-form-item label="账号" style="margin-top: 22px">
        <el-input v-model="username" placeholder="请输入用户名" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="password" show-password style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 240px" @click="adminLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data:function(){
      return{
        username:'',
        password:'',
        msg:''
      }
    },
    methods:{
      adminLogin:function () {
        var _this = this;
        if(this.username && this.password){
         this.$api.login(this.username,this.password).then(function(data){
           console.log(data)
           if(data.meta.message == 'ok'){
             //_this.$store.commit("initMenus",data.data)
             _this.$router.push('/admin/index')
           }else{
             _this.username = ''
             _this.password = ''
             _this.msg = '用户名或密码错误'
           }
         })

        }else{
          alert("用户名或密码不能为空")
        }
        //this.$router.push('/admin/index')
      }
    }
  }
</script>

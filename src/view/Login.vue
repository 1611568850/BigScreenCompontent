<template>
  <div class="LoginContainer">
    <header class="headTitleContainer">
      <p class="HeaderTitle">黄帝故里数字孪生运营服务平台</p>
    </header>
    <main class="formContainer">
        <form class="formContent" action="http://localhost:8080/login" method="get">
          <ul class="fromUl">
            <li class="formLi">
              <img class="LiImg" src="../assets/images/user.png" alt="">
              <input class="LiInp" ref="inp1" type="text"  placeholder="请输入用户名">
            </li>
            <li class="formLi">
              <img class="LiImg" src="../assets/images/pass.png" alt="">
              <input class="LiInp" ref="inp2" type="password" placeholder="请输入密码">
            </li>
          </ul>
          <button class="fromButton" @click="toLOgin">登 录</button>
        </form>
    </main>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'LoginPage',
  data(){
   return {
    username:'admin',
    password:'123456'
   }
  },
  methods:{
    toLOgin(){
      if(this.$refs.inp1.value===this.username&&this.$refs.inp2.value===this.password){

        this.$router.push('/home')
      }else{
        alert('密码错误')
      }
    }
  }
}
</script >
<style lang="less" scoped>

.LoginContainer{
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../assets/images/loginbg.png);
  background-size: cover;
  background-repeat: no-repeat;
  .headTitleContainer{
    height: 80px;
    // width: 100%;
    
    background-image: url(../assets/images/top_title.png);
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    background-position: center;
    .HeaderTitle{
      font-size: 35px;
      line-height: 80px;
      letter-spacing: 5px;
      color: #72bdda;
    }
  }
  .formContainer{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 542px;
    height: 483px;
    background-image: url(../assets/images/loginmenu.png);
    background-size: cover;
    background-repeat: no-repeat;
    .formContent{
      width: 542px;
      height: 483px;
      // background-color: pink;
      // opacity: 0.3;
      position: relative;
      .fromUl{
        z-index: 1;
        position: absolute;
        top: 125px;
        left: 120px;
        // background-color: red;
        .formLi{
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          height: 50px;
          // background: yellow;
          .LiImg{
            font-size: 10px;
            height: 30px;
            // background: blue;
          }
          .LiInp{
            
            // background: pink;
            padding-left:20px ;
            color: #fff;
            font-size: 18px;
            outline: none;
            background: none;
            border: none;
            width: 300px;
            height: 50px;
            &::placeholder{
              color: #fff;
            }
          }
        }
      }
      .fromButton{
        position: absolute;
        width: 350px;
        bottom: 90px;
        left: 110px;
        text-align: center;
        // letter-spacing: 10px;
        font-size: 30px;
        background: none;
        border: none;
      }
    }
  }
}
</style>

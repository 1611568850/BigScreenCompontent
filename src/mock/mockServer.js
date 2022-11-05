import Mock from 'mockjs'


// 提供广告位轮播数据的接口
Mock.mock('/mock/login', 'post', function (option) {
  let $username=JSON.parse(option.body).username;
  let $password=JSON.parse(option.body).password;
  if($username==='admin'&&$password==='123456'){
      return Mock.mock({
          status: 200,
          message: '提交成功！！！'
      })
  }else{
      return Mock.mock({
          status: 400,
          message: '密码错误'
      })
  }
})
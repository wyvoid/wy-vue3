<template>
  <header>
    <div class="logo-container">
      <img class="logo1" src="../assets/img/logo01.png" alt="logo01">
      <img class="logo2" src="../assets/img/logo02.png" alt="logo02">   
      <div class="link">
        <p>欢迎访问临沂大学传媒学院官方网站</p>
        <p class="homepage">学校首页 · ENGLISH</p>
      </div>
    </div>
    <nav>
      <ul>
        <li class="nav-item">学院主页</li>
        <li class="nav-item">
          <a href="#">学院概况</a>
          <ul class="nav-sub">
            <li class="nav-sub-item">学院简洁</li>
            <li class="nav-sub-item">信息公开</li>
            <li class="nav-sub-item">机构设置</li>
            <li class="nav-sub-item">岗位职责</li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#">建党思想</a>
          <ul class="nav-sub">
            <li class="nav-sub-item">党政专栏</li>
            <li class="nav-sub-item">思政专栏</li>
          </ul>          
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="less" scoped>
  header {
    background-color: #A70C18;
    background-image: url(../assets/img/bginner.jpg);
    height: 150px;
    .logo-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-align: center;
      .logo1 {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 80px;
        transform: translate(0, -50%);
      }
      .logo2 {
        position: absolute;
        width: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
      }
      .link {
        width: 200px;
        height: 54px;
        position: absolute;
        right: 80px;
        top: 50%;
        transform: translate(0, -50%);
        color: #fff;
        p {
          text-align: right;
          font-size: 10px;
          margin: 0;
          padding: 0;
          cursor: default;
        }
        .homepage {
          font-size: 12px;
          margin-top: 20px;
        } 
      }
    }

    nav {
      width: 100%;
      height: 48px;
      margin: 0 auto;
      background-color: #A70C18;
      color: #fff;
      >ul {
        display: inline-block;
        width: 74%;
        margin: 0;
        font-size: 18px;
        >li {
          position: relative;
          width: 140px;
          height: 48px;
          line-height: 48px;
          list-style: none;
          float: left;
          cursor: pointer;
          &:hover {
            font-weight: 600;
            transform: scale(1.1);
          }
          &:hover .nav-sub {
            display: block;
          }
          .nav-sub {
            position: absolute;
            top: 40px;
            left: 0;
            z-index: 2;
            display: none;
            width: 136px;
            margin: 0;
            padding: 0;
            font-size: 14px;
            color: #fff;
            .nav-sub-item {
              height: 34px;
              line-height: 34px;
              background-color: #A70C18;
              border-top: 1px solid #fff;  
              &:hover {
                background: #991919;
              }
            }
          }
        }
      }
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:active {
    color: #fff;
  }
  a:hover {
    color: #fff;
  }
</style>
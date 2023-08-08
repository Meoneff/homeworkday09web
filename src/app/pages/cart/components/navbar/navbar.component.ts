import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private loginService: LoginService,  private router: Router, public userInfoService: UserInfoService){
    this.userInfoService.userInfo.subscribe((user)=>{
      if(user){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }
  isLogin: boolean = false;
  async login(){
    let loginResult = await this.loginService.loginWithGoogle();
    if(loginResult==null){
      console.log('login failed');

    }else{
      console.log('login sucess');

    }
  }
  async logout(){
    this.loginService.logout();
  }
  toAdmin(){
    if(this.userInfoService.userInfo.value?.name)
    {
      this.router.navigate(['/admin']);
    }
    else{
      alert('đăng nhập đi !!!!')
    }

  }
}

import { HttpException, HttpStatus, Injectable, Request } from '@nestjs/common';
import { SignUpDto } from './Dto/signup.dto';
import { LoginDto } from './Dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadDto } from './Dto/payload.dto';

@Injectable()
export class UserService {

  constructor(
    private readonly jwtservice: JwtService
  ) { }

  async create(signup: SignUpDto) {

    const res = await fetch('http://localhost:3003/user/signup', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(signup)
    })

    const response = await res.json()

    return response
  }

  async login(loginDto: LoginDto) {

    const res = await fetch('http://localhost:3003/user/findByEmail', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(loginDto)
    });
    const user = await res.json()
    

    if(user.message == 'not found'){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if(user && user.password !== loginDto.password){
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }

    const access = this.jwtservice.sign({email: user.email}, {secret: 'access', expiresIn: "15m"});
    const refresh = this.jwtservice.sign({email: user.email}, {secret: 'refresh', expiresIn: "15m"});


    const response = {
      accessToken: access,
      refreshToken: refresh
    }
    return response

  }


  async getme(user: PayloadDto ){

    const res = await fetch('http://localhost:3003/user/findByEmail', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(user)
    });
    const userInfo = await res.json()
    
    return userInfo
  }


}

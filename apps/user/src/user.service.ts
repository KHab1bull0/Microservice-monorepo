import { Injectable } from '@nestjs/common';
import { SignUpDto } from './Dto/signup.dto';

@Injectable()
export class UserService {

  async create(signup: SignUpDto){
    
    const res = await fetch('http://localhost:3003/user/signup', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(signup)
    })


    // console.log(res);
    
    const response = {
      status: res.status,
      message: res.statusText,
    }
    return response
  }
}

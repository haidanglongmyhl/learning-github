import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
  ) {}
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findOneById(1234); // ✅ Không truyền chuỗi
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}

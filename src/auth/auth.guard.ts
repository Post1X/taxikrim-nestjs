import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization = '' } = request.headers;
    const token = authorization.replace('Bearer ', '');
    if (!token) {
      return false;
    }
    const decoded = this.authService.verifyToken(token);
    request.user = decoded;
    if (!decoded) {
      return false;
    }
    return true;
  }
}

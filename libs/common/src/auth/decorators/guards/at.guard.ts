import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class AtGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(private reflector: Reflector) {
        super()
    }
    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride('isPublic', [
            context.getHandler(),
            context.getClass(),
        ])

        if (isPublic) {
            return true
        }


        return super.canActivate(context)

    }
}
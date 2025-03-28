import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUserId = createParamDecorator((data: undefined, context: ExecutionContext) => {
    const request = context.switchToRpc().getData()
    return request['userId']
})
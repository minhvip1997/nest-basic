import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('hello tran nhat minh acoount');
        const { valid } = req.headers;
        if (valid) {
            next()
        } else {
            res.status(403).send({ error: 'account is invalid' })
        }

    }
}

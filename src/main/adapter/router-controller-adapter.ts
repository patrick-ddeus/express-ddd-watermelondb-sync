import { Request, Response } from 'express';
import { IController } from '@/infra/protocols/IController';
import { isHttpRequestFailure } from '@/helpers/asserts';

export default function (controller: IController) {
  return async (req: Request, res: Response) => {
    const flatRequest = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {}),
    };

    const response = await controller.handle(flatRequest);

    if (isHttpRequestFailure(response)) {
      res.status(response.statusCode).json({
        error: response.statusCode,
        body: response.body,
      });

      return;
    }

    res.status(response.statusCode).json(response.body);
  };
}

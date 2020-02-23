import { Response, Request, NextFunction } from 'express';

export default function(req: Request, res: Response, next: NextFunction) {
  res.ok = function<T = {}>(data: T) {
    return res.json({ ok: 1, ...data });
  };
  res.fail = function(message: string) {
    return res.json({ ok: 0, message });
  };
  next();
}

export abstract class ApiError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
  abstract getCode(): number;
}

export class NotFoundException extends ApiError {
  getCode(): number {
    return 404;
  }
}

export class BadRequestException extends ApiError {
  getCode(): number {
    return 400;
  }
}

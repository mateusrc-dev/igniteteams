export class AppError {
  message: string;

  constructor(message: string) { // is called the moment the class is instantiated
    this.message = message
  }
}
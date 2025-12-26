export interface AxmHttpResponse<T> {
      timeStamp: string;
  httpStatus: string;
  httpCode: number;
  message: string;
  developerMessage: string;
  reason: string;
  data: T;
}
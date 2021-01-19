import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(protected http: HttpClient) { }

  protected url = '/api/v1.0/';
  protected urlmerch = '/api/test/';
  protected apiParam = '?app_id=5&app_secret=MOSTMONEY&lang=MN';
  // app_id=5&app_secret=MOSTMONEY&lang=MN
  send(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      lang: this.getLang()
    });

    // const data = request.data == null ? [] : flatten([request.data]);
    return this.http
      .post(this.url, JSON.stringify(data), { headers })
      .pipe(
        map(res => {
          return res as any;
        }),
        catchError(err => this.convertError(err))
      );
  }

  retrieve(operation: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      lang: this.getLang()
    });

    return this.http
      .get(this.url + operation, { headers })
      .pipe(
        map(res => (res as any)),
        catchError(err => this.convertError(err))
      );
  }
  uploadImage(file: File): Observable<any> {
    if (file) {
      const uploadFile: FormData = new FormData();
      uploadFile.append('uploadFile', file, file.name);
      return this.http
        .post('/api/application/upload', uploadFile);
    }
    return throwError('Файл алдаатай байна');
  }
  uploadFile(file: File): Observable<any> {
    if (file) {
      const uploadFile: FormData = new FormData();
      uploadFile.append('uploadFile', file, file.name);
      return this.http
        .post('/api/application/upload', uploadFile);
    }
    return throwError('Файл алдаатай байна');
  }
  private getLang(): string {
    return sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'mn';
  }

  // checkIpLocation(): Observable<any> {
  //   return this.http
  //     .get('/location')
  //     .pipe(
  //       map(res => (res as any)),
  //       catchError(err => this.convertError(err))
  //     );
  // }

  private convertError(httpError: HttpErrorResponse) {
    const { status, message, error } = httpError;
    let msg = error;
    switch (status) {
      case 504:
      case 413:
        msg = status + ' ' + message;
        break;
      case 404:
        msg = 'Сервер ачаалагдаагүй байна. Системийн админд хандана уу';
        break;
      default:
        msg = error;
    }

    // this.events.emit(new ApiEvent(status, request, error));
    return throwError(msg);
  }

    /**
     * Post хүсэлт - Insert хийнэ
     * @category HTTP хүсэлтүүд
     * @param operation : Хандах хаяг (URL)
     * @param body : Хүсэлтийн body
     * @returns Observable буцаана
     */
    post(operation: string, body: any): Observable<any> {
       var res = this.http
          .post(
              this.url + operation + this.apiParam,
              JSON.stringify(body, (_, value) => {
                  if (value !== null) {
                      return value;
                  }
              }),
              {
                  headers: { 'Content-Type': 'application/json; charset=utf-8' }
              }
          )
          .pipe(catchError(err => this.convertError(err)));
          console.log(res);
          return res;
    }

    
    postMerch(operation: string, body: any): Observable<any> {
      console.log(this.urlmerch + operation + this.apiParam);
      var res = this.http
         .post(
             this.urlmerch + operation + this.apiParam,
             JSON.stringify(body, (_, value) => {
                 if (value !== null) {
                     return value;
                 }
             }),
             {
                 headers: { 'Content-Type': 'application/json; charset=utf-8' }
             }
         )
         .pipe(catchError(err => this.convertError(err)));
         console.log(res);
         return res;
   }
}

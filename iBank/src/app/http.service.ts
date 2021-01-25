import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MgLoginRes } from './core/model/login';
import { ApiHelper } from './core/services/api-helper';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(protected http: HttpClient) { }

  protected url = '/api/v1.0/';
  protected urlmerch = '/api/merchant/';
  protected apiParamMerch = '?app_id=16&app_secret=ARD_DIGITAL&lang=MN';
  protected apiParam = '?app_id=16&app_secret=ARD_DIGITAL&lang=MN';
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
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    var sessionToken = sessionStorage.getItem("sessionToken");

    if (operation != ApiHelper.login && operation != ApiHelper.getDictionary && sessionToken != null && sessionToken.length > 0) {
      headers = headers.set('Cookie', sessionToken);
    }
    var res = this.http
      .post(
        this.url + operation + this.apiParam,
        JSON.stringify(body, (_, value) => {
          if (value !== null) {
            return value;
          }
        }),
        {
          headers: headers
        }
      )
      .pipe(catchError(err => this.convertError(err)));
    if (operation == ApiHelper.login) {
      res.toPromise().then(data => {
        var loginRes = data as MgLoginRes;
        if(loginRes.responseCode == 0){
          sessionStorage.setItem("sessionToken",loginRes.sessionId)
        }
      }
      );
    }
    return res;
  }

  /**
  * Post хүсэлт - Insert хийнэ
  * @category HTTP хүсэлтүүд
  * @param operation : Хандах хаяг (URL)
  * @param body : Хүсэлтийн body
  * @returns Observable буцаана
  */
  postMerch(operation: string, body: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    var sessionToken = sessionStorage.getItem("sessionToken");

    if (operation != ApiHelper.login && operation != ApiHelper.getDictionary && sessionToken != null && sessionToken.length > 0) {
      headers = headers.set('Cookie', sessionToken);
    }
    var res = this.http
      .post(
        this.urlmerch + operation + this.apiParamMerch,
        JSON.stringify(body, (_, value) => {
          if (value !== null) {
            return value;
          }
        }),
        {
          headers: headers, withCredentials: true
        }
      )
      .pipe(catchError(err => this.convertError(err)));
    console.log(res);
    return res;
  }
}

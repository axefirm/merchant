import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';
@Injectable({
  providedIn: 'root'
})
export class EncrService {
  constructor(protected http: HttpClient,) { }
  encrypted;
  //The set method is use for encrypt the value.
  async set(value) {
    var encrypted;
    await this.http.get("assets/cert/public.pem", { responseType: 'text' }).subscribe(data => {
      var encrypt = new JSEncrypt();
      encrypt.setPublicKey(data);
      this.encrypted = encrypt.encrypt(value);
      console.log(encrypted);
      return this.encrypted;
    })
    console.log(this.encrypted);
    return this.encrypted;
  }

  //The get method is use for decrypt the value.
  get(keys, value) {

  }
}

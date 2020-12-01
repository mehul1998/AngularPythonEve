import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private url = 'api/dogs'

  public getAll() {
    return this.httpClient.get(`${this.url}`)
}

public add(data: any) {
    return this.httpClient.post(`${this.url}`, data)
}

public update(id: any,data: any) {
    return this.httpClient.patch(`${this.url}/${id}`,data)
}

public delete(id: any) {
    return this.httpClient.delete(`${this.url}/${id}`)
}
}
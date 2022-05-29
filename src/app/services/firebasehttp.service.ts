import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebasehttpService {
  baseUrl: string = 'https://fir-project-23456-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) {}

  storeTodoList(data: any) {
    return this.http.post(`${this.baseUrl}/todos.json`, data);
  }

  fetchTodoList() {
    return this.http.get(`${this.baseUrl}/todos.json`).pipe(
      map(responseData => {
        const responses: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            console.log(key);
            responses.push({
              ...responseData[key as keyof typeof responseData],
              id: key
            });
          }
        }
        return responses;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  clearTodoList() {
    return this.http.delete(`${this.baseUrl}/todos.json`);
  }
}

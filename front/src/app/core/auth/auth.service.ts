// src/app/core/auth/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { tap } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   constructor(private http: HttpClient) {}

//   login(credenciales: any) {
//     return this.http.post('/user/login', credenciales).pipe(
//       tap((res: any) => {
//         localStorage.setItem('token', res.token);
//       })
//     );
//   }

//   getToken() {
//     return localStorage.getItem('token');
//   }

//   logout() {
//     localStorage.removeItem('token');
//   }
// }

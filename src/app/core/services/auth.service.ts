import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private readonly STORAGE_KEY = 'isLoggedIn';

  constructor() {
    // Check if user was previously logged in
    const storedAuth = localStorage.getItem(this.STORAGE_KEY);
    if (storedAuth) {
      this.isLoggedInSubject.next(JSON.parse(storedAuth));
    }
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulate API call
    return new Observable(subscriber => {
      // Mock authentication - replace with real API call
      if (username === 'admin' && password === 'password') {
        this.isLoggedInSubject.next(true);
        localStorage.setItem(this.STORAGE_KEY, 'true');
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
      subscriber.complete();
    });
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}

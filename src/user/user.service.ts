// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];
  private currentId = 1;

  constructor() {
    // Beispiel: Dummy-Daten beim Initialisieren hinzufügen
    this.users.push({
      id: 1,
      vorname: 'Max',
      nachname: 'Mustermann',
      username: 'maxmuster',
      password: 'password123',
      enddatum: '2023-01-01',
      isAdmin: false,
      loggedIn: false,
    });
  }
  

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    console.log('Aktueller Datenbestand:', this.users);
    console.log(`Suche nach Benutzer mit ID ${id}`);
    const user = this.users.find(user => user.id === +id); // Das Pluszeichen wandelt die ID in eine Zahl um
    console.log('Gefundener Benutzer:', user);
    return user;
  }
  
  
  

  createUser(user: User): User {
    const newUser: User = {
      ...user,
      id: this.currentId++, // Incrementing the id for each new user
    };
    this.users.push(newUser);
    console.log('Neuer Benutzer hinzugefügt:', newUser);
    return newUser;
  }
  

  updateUser(id: number, updatedUser: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updatedUser,
      };
      return this.users[userIndex];
    }
    return undefined;
  }
}

import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'maiconsander10@gmail.com',
      name: 'Maicon Sander',
      whatsApp: 'https://wa.link/appt79',
      LinkedIn: 'https://www.linkedin.com/in/maicon-martins-/'
    }

    return profile;
  }
 
}
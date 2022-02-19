import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
// tslint:disable-next-line: max-line-length
    { url: 'https://firebasestorage.googleapis.com/v0/b/mysongapp-c68c7.appspot.com/o/1.mp3?alt=media', 
      name: '1',
      artist: 'Monika Talwar',
      image: 'https://firebasestorage.googleapis.com/v0/b/mysongapp-c68c7.appspot.com/o/1.jpeg?alt=media'
    },
  ];

  getFiles() {
   return of(this.files);
  }
}
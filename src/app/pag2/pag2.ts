import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pag2',
  imports: [],
  templateUrl: './pag2.html',
  styleUrl: './pag2.css'
})
export class Pag2 {
  protected readonly title = signal('WhratCode');
}

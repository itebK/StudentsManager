import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestionEtudiantPolytech';
  Accept = true;
  //lastUpdate = new Date();
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout( () => {resolve(date); }, 2000 );  });


  etudiants = [
    { name: 'Khayati iteb', statut: 'refusé' },
    { name: 'Khayati Ghazi', statut: 'accepté' },
    { name: 'Khayati Sara', statut: 'accepté' }
  ];


  onAccepter() {
    console.log('On accepte tous  !');
  }


}

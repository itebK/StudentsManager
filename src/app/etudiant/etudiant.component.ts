import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  @Input() etudiantName: string;
  @Input() statut: string;

  constructor() { }

  ngOnInit() {
  }
  getColor() {
    if (this.statut === 'accepté') { return 'green'; }
    else if (this.statut === 'refusé') { return 'red'; }
  }


}

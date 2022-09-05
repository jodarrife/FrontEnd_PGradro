import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
  //Variable
  hide = true;
  private _mobileQueryListener: () => void;
  user: any;
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {}
  //Visitante
  public allPages = [
    {
      title: 'Inicio',
      url: '/home',
      iconMaterial: 'home',
      iconFa: null,
    },
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      iconMaterial: 'home',
      iconFa: null,
    },
    {
      title: 'Elementos Laboratorio',
      url: '/AdminElementos',
      iconMaterial: 'home',
      iconFa: null,
    },
    {
      title: 'Canastas',
      url: '/AdminCanastas',
      iconMaterial: 'home',
      iconFa: null,
    },
    {
      title: 'Espacios Fisicos',
      url: '/AdminEspacios',
      iconMaterial: 'home',
      iconFa: null,
    },
  ];
}

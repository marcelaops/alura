import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavortios: Pensamento[] = [];
  titulo: string = 'Meu mural'

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    // faz parte do ciclo de vida do componente. toda lógica que entra aqui é o q vc quer q aconteça assim q a página carrega. 

    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos);
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if(!listaPensamentos.length) this.haMaisPensamentos = false;
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      });
  }

  listarFavoritos() {
    this.titulo = 'Meus favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos
        this.listaFavortios = listaPensamentosFavoritos
      })
  }

  recarregarComponente() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.paginaAtual = 1
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}

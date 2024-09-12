import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love ANgular',
    autoria: 'ma',
    modelo: 'modelo1',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []; /* a listaFavortios vai receber do componente Pensamento */

  constructor(private service: PensamentoService) { } /* p pdoer utilizar os métodos q tem dentro do service */

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) return 'pensamento-g';
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) return 'inativo';
    return 'ativo';
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1));
  }
}

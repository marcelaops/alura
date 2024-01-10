import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    // faz parte do ciclo de vida do componente. toda lógica que entra aqui é o q vc quer q aconteça assim q a página carrega. 

    this.service.listar().subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos);
  }

}

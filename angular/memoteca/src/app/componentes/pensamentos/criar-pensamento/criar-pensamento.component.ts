import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => this.router.navigate([['/listarPensamento']]))
    // a rota fornecida estará dentro de um Event Binding.
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])

  }
}

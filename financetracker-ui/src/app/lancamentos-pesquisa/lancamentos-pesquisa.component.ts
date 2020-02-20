import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {


  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Teste1', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 55.55, pessoa: 'Teste1' },
      { tipo: 'RECEITA', descricao: 'Teste2', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 444.44, pessoa: 'Teste2' },
      { tipo: 'DESPESA', descricao: 'Teste3', dataVencimento: '30/09/2020',
      dataPagamento: '21/09/2020', valor: 99.99, pessoa: 'Teste3' }
    ];

}
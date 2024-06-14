import { CurrencyPipe } from '@angular/common';
import { Component, Input, computed, input } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //results = input();//SIGNAL INPUT

  //@Input({ required: true }) results?: InvestmentResult[];//USING INPUT DECORATOR

  constructor(private investmentService: InvestmentService){}

  results = computed(() => this.investmentService.annualData());

  // get results() {
  //   return this.investmentService.annualData;
  // }
}

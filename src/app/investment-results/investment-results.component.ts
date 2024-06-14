import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //results = input();//SIGNAL INPUT

  @Input({ required: true }) results?: InvestmentResult[];//USING INPUT DECORATOR
}

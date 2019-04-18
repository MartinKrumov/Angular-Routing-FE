import {BudgetResponseModel} from './BudgetResponseModel';
import {TransactionResponseModel} from './TransactionResponseModel';

export interface WalletInfoResponseDTO {
  id: number;
  name: string;
  amount: number;
  initialAmount: number;
  transactions: TransactionResponseModel[];
  budgets: BudgetResponseModel[];
}

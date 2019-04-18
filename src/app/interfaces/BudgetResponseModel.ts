export interface BudgetResponseModel {
  id: number;
  name: string;
  initialAmount: number;
  amount: number;
  fromDate: Date;
  toDate: Date;
}

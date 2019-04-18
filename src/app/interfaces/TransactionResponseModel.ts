export interface TransactionResponseModel {
  id: number;
  type: string;
  amount: number;
  date: Date;
  description: string;
  categoryName: string;
}

export interface Transaction {
  id: number;
  userId: number;
  type: string;
  title: string;
  value: number;
  date: string;
  category: string;
}

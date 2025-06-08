export type CellValue = 'X' | 'O';

export interface Match {
  players: Record<CellValue, string>;
  field: (CellValue | null)[];
  date: string;
  winner: string | null;
}

export type gamers = string[];

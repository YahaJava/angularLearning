interface Child {
  name: string;
}

interface Bagage {
  key: string;
  value: string;
}

export interface Passenger {
  id: number;
  name: string;
  checked: boolean;
  checkedInDate: number | null;
  baggage: Bagage;
  children: Child[] | null;
}

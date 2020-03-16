interface Child {
  name: string;
}

export interface Passenger {
  id: number;
  name: string;
  checked: boolean;
  checkedInDate: number | null;
  children: Child[] | null;
}

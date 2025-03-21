export interface AtmUserInterface {
    pin: number;
    name: string;
    balance: number;
    funds: number;
    cardNumber: string;
    error?: string;
}
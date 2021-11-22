export class createInvoiceDTO {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly documentId: number;
    readonly products: [];
    readonly orderDate: Date;     
}
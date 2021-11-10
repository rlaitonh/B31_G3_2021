import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInvoice } from './interfaces/invoice.interface';
import { createInvoiceDTO } from './dto/create_invoice.dto';

@Injectable()
export class InvoiceService {
    constructor(@InjectModel('Invoice') private readonly invoiceModel: Model<IInvoice>){}
}

import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { createInvoiceDTO } from './dto/create_invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService ){}
    @Get()
    async getInvoice(@Res() res){
        const invoice = await this.invoiceService.getInvoices();
        
        return res.status(HttpStatus.OK).json({
            message:'Invoice listed',
            data: invoice
        });
    }  
    @Post("/create")
    async createInvoice(@Res() res, @Body() createInvoiceDTO: createInvoiceDTO){

        const Invoice = await this.invoiceService.createInvoice(createInvoiceDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Invoice created',
            data: Invoice
        });
    }
    @Delete('/:invoiceId')

    async deleteInvoice(@Res() res, @Param('invoiceId') id){
        
        const invoice = await this.invoiceService.deleteInvoice(id);

        if(!invoice){
            throw new NotFoundException('Invoice does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Invoice deleted',
            data: invoice
        });
    }  
}

import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomerDto } from 'src/customers/dtos/customer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) { }
  @Get('')
  getCustomer() {
    return this.customerService.findCustomer();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customers = this.customerService.findCustomerbyId(id);
    if (customers) {
      res.send(customers);
    } else {
      res.status(400).send({ msg: 'Customer not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerId(@Param('id', ParseIntPipe) id: number) {
    console.log('minh');

    const customers = this.customerService.findCustomerbyId(id);
    if (customers) {
      return customers;
    } else {
      throw new HttpException('customer not found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() dto: CustomerDto) {
    return this.customerService.createCustomer(dto);

  }
}

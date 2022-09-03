import { Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/customers/dtos/customer.dto';
import { Customer } from 'src/customers/type/customer';

@Injectable()
export class CustomersService {
  private users: Customer[] = [
    {
      id: 1,
      email: 'dany@email.com',
      name: 'minh1',
    },
    {
      id: 2,
      email: 'dany2@email.com',
      name: 'minh2',
    },
    {
      id: 3,
      email: 'dany3@email.com',
      name: 'minh3',
    },
  ];
  findCustomer() {
    return this.users;
  }
  findCustomerbyId(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createCustomer(customerDto: CustomerDto) {
    return this.users.push(customerDto);
  }
}

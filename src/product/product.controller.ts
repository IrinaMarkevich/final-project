/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import { Controller, Post, Body, Get, Put, Delete, Param, UsePipes } from '@nestjs/common'
import { ProductService } from './product.service'
// import { CreateProductDto } from './create-product.dto'
// import { ValidationPipe } from '../common/validation.pipe'
// import { ApiTags } from '@nestjs/swagger'
import { Product } from './product.entity'

// @ApiTags('product')
@Controller('product')
export class ProductController {
  constructor (private readonly productService: ProductService) {}

//   @Get()
//   findAll () {
//     return this.productService.getProducts()
//   }

//   @Get(':userId')
//   getProduct (@Param() params) {
//     return this.productService.getProduct(params.userId)
//   }

//   @Post()
// //   @UsePipes(new ValidationPipe())
//   createProduct (@Body() product: Product) {
//     return this.productService.createProduct(product)
//   }

//   @Delete(':id')
//   deleteProduct (@Param() params) {
//     return this.productService.deleteProduct(params.id)
//   }
}

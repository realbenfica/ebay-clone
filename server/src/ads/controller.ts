import { JsonController, Get, Param, Body, Post, HttpCode } from 'routing-controllers'
import Ad from './entity'

@JsonController()
export default class PageController {
  @Get('/ads')
  async allPages() {
      const ads = await Ad.find()
      return { ads }
  }

    @Get('/ads/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Ad.findOne(id)
    }

    @Post('/ads')
    @HttpCode(201)
    createPage(
        @Body() ad: Ad
    ) {
        return ad.save()
    }
}
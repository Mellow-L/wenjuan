import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Post,
  Delete,
  Query,
  Request
} from '@nestjs/common';
import { SurveyDto } from './dto/survey.dto';
import { SurveyService } from './survey.service';
import { Public } from 'src/auth/decorators/public.decorator';
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}
  // 获取所有问卷
  @Get()
  async findAll(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Query('isDeleted') isDeleted: boolean = false,
    @Query('isStar') isStar: boolean | undefined,
    @Request() req
  ) {
    const { username } = req.user;
    const list = await this.surveyService.findAllList({
      isDeleted,
      isStar,
      author: username,
      keyword,
      page,
      pageSize
    });
    const total = await this.surveyService.countAll({
      keyword,
      author: username,
      isDeleted,
      isStar
    });
    return {
      list,
      total
    };
  }
  // 获取单个问卷
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyService.findOne(id);
  }
  //  创建问卷
  @Post()
  async create(@Request() req) {
    const { username } = req.user;
    const survey = await this.surveyService.create(username);
    return { id: survey._id };
  }
  // 修改问卷
  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateSurveyDto: SurveyDto,
    @Request() req
  ) {
    const { username } = req.user;
    return this.surveyService.updata(id, username, updateSurveyDto);
  }
  // 删除单个问卷
  @Delete(':id')
  deleteOne(@Param('id') id: string, @Request() req) {
    const { username } = req.user;
    return this.surveyService.delete(id, username);
  }
  //删除多个问卷
  @Delete()
  deleteMany(@Body() body, @Request() req) {
    const { username } = req.user;
    const { ids = [] } = body;
    return this.surveyService.deleteMany(ids, username);
  }
  //复制问卷
  @Post('duplicate/:id')
  async duplicate(@Param('id') id: string, @Request() req) {
    const { username } = req.user;
    const survey = await this.surveyService.duplicate(id, username);
    return { id: survey._id };
  }
}

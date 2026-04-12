import { Injectable } from '@nestjs/common';
import { Survey } from './schemas/survey.schema';
import { InjectModel } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';
@Injectable()
export class SurveyService {
  constructor(@InjectModel(Survey.name) private readonly surveyModel) {}
  async findOne(id: string) {
    return await this.surveyModel.findById(id);
  }
  async delete(id: string, author: string) {
    return await this.surveyModel.findOneAndDelete({
      _id: id,
      author
    });
  }
  async updata(id: string, author, updataData) {
    return await this.surveyModel.updateOne({ _id: id, author }, updataData);
  }
  async create(username: string) {
    const survey = new this.surveyModel({
      title: 'title' + Date.now(),
      desc: 'desc',
      isStar: false,
      isPublished: false,
      isDeleted: false,
      author: username,
      componentsList: [
        {
          fe_id: nanoid(),
          type: 'SurveyInfo',
          title: '问卷信息',
          isHidden: false,
          isLocked: false,
          props: {
            title: '问卷标题',
            description: '问卷描述'
          }
        }
      ]
    });

    return await survey.save();
  }
  async findAllList({
    keyword = '',
    page = 1,
    pageSize = 10,
    isDeleted = false,
    isStar,
    author = ''
  }) {
    const whereOpt: any = {
      author,
      isDeleted
    };
    if (isStar != null) whereOpt.isStar = isStar;
    if (keyword) {
      //模糊搜索
      const reg = new RegExp(keyword, 'i');
      whereOpt.title = { $regex: reg };
    }
    return await this.surveyModel
      .find(whereOpt)
      .sort({ _id: -1 }) //倒序
      .skip((page - 1) * pageSize) //分页
      .limit(pageSize);
  }
  async countAll({ keyword = '', isDeleted = false, isStar, author = '' }) {
    const whereOpt: any = {
      author,
      isDeleted
    };
    if (isStar != null) whereOpt.isStar = isStar;
    if (keyword) {
      //模糊搜索
      const reg = new RegExp(keyword, 'i');
      whereOpt.title = { $regex: reg };
    }
    return await this.surveyModel.countDocuments(whereOpt);
  }
  async deleteMany(ids: string[], author) {
    return await this.surveyModel.deleteMany({
      author,
      _id: { $in: ids }
    });
  }
  //复制问卷
  async duplicate(id: string, author) {
    const survey = await this.surveyModel.findById(id);
    const newSurvey = await this.surveyModel.create({
      ...survey.toObject(),
      _id: new mongoose.Types.ObjectId(),
      author,
      title: survey.title + '副本',
      isPublished: false,
      isStar: false,
      componentsList: survey.componentsList.map((item) => ({
        ...item,
        fe_id: nanoid()
      }))
    });
    return await newSurvey.save();
  }
}

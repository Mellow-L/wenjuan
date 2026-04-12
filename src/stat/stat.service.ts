import { Injectable } from '@nestjs/common';
import { SurveyService } from 'src/survey/survey.service';
import { AnswerService } from 'src/answer/answer.service';
@Injectable()
export class StatService {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly answerService: AnswerService
  ) {}
  private _getRadioOptText(value, props: any = []) {
    const { options = [] } = props;
    const length = options.length;
    for (let i = 0; i < length; i++) {
      const item = options[i];
      if (item.value === value) {
        return item.label;
      }
    }
    return '';
  }
  private _getCheckBoxOptText(value, props: any = []) {
    const { options = [] } = props;
    const length = options.length;
    for (let i = 0; i < length; i++) {
      const item = options[i];
      if (item.value === value) {
        return item.label;
        break;
      }
    }
    return '';
  }
  private _genAnswerInfo(survey: any, answerList: any[] = []) {
    const res: Record<string, string> = {};
    const { componentsList = [] } = survey;

    answerList.forEach((answer) => {
      const { componentFeId, value } = answer;

      // 获取组件信息
      const comp = componentsList.find((c: any) => c.fe_id === componentFeId);
      if (!comp) return;

      const { type, props = {} } = comp;

      let valueArray: string[] = [];

      if (type === 'SurveySelectCheckbox') {
        if (!value) {
          valueArray = [];
        } else if (typeof value === 'string') {
          valueArray = value.split(',').filter((v) => v.trim() !== '');
        } else if (Array.isArray(value)) {
          valueArray = value;
        } else {
          valueArray = [];
        }
      } else {
        valueArray = Array.isArray(value) ? value : [String(value)];
      }

      if (type === 'SurveySelectRadio') {
        res[componentFeId] = valueArray
          .map((v) => this._getRadioOptText(v, props))
          .toString();
      } else if (type === 'SurveySelectCheckbox') {
        if (valueArray.length === 0) {
          res[componentFeId] = '';
        } else {
          res[componentFeId] = valueArray
            .map((v) => this._getCheckBoxOptText(v, props))
            .filter((text) => text !== '')
            .toString();
        }
      } else {
        res[componentFeId] = valueArray.toString();
      }
    });

    return res;
  }
  async getSurveyStatListAndCount(
    surveyId: string,
    opt: { page: number; pageSize: number }
  ) {
    const noData = { count: 0, list: [] };
    if (!surveyId) return noData;
    const q = await this.surveyService.findOne(surveyId);
    if (q == null) return noData;

    const total = await this.answerService.count(surveyId);
    if (total === 0) return noData;

    const answers = await this.answerService.findAll(surveyId, opt);

    const list = answers.map((a) => {
      return {
        _id: a._id,
        ...this._genAnswerInfo(q, a.answerList)
      };
    });
    return { total, list };
  }
  //获取单个组件的统计数据
  async getComponentStat(surveyId: string, componentFeId: string) {
    if (!surveyId || !componentFeId) return [];

    //获取问卷信息
    const q = await this.surveyService.findOne(surveyId);
    if (q == null) return [];

    //获取组件
    const { componentsList = [] } = q;
    const comp = componentsList.find((c) => c.fe_id === componentFeId); // 修复1：移除[0]
    if (comp == null) return [];

    const { type, props } = comp;
    if (type !== 'SurveySelectRadio' && type !== 'SurveySelectCheckbox') {
      return [];
    }

    //获取答卷列表
    const total = await this.answerService.count(surveyId);
    if (total === 0) return [];

    const answers = await this.answerService.findAll(surveyId, {
      page: 1,
      pageSize: total
    });

    //累加各个value数量
    const countInfo = {};
    answers.forEach((answer) => {
      const { answerList = [] } = answer;
      answerList.forEach((answerItem) => {
        if (answerItem.componentFeId !== componentFeId) return;

        // 修复2：正确处理复选框的字符串值
        let values: string[] = [];
        if (
          type === 'SurveySelectCheckbox' &&
          typeof answerItem.value === 'string'
        ) {
          values = answerItem.value.split(',').filter((v) => v.trim() !== '');
        } else if (Array.isArray(answerItem.value)) {
          values = answerItem.value;
        } else {
          values = [answerItem.value];
        }

        values.forEach((value) => {
          if (value == null || value === '') return; // 过滤空值
          if (countInfo[value] == null) countInfo[value] = 0;
          countInfo[value]++;
        });
      });
    });

    //整理数据
    const list: { name: string; count: number }[] = [];
    for (const val in countInfo) {
      let text = '';
      if (type === 'SurveySelectRadio') {
        text = this._getRadioOptText(val, props);
      }
      if (type === 'SurveySelectCheckbox') {
        text = this._getCheckBoxOptText(val, props);
      }
      // 如果找不到对应文本，使用原始值
      if (!text) text = val;

      list.push({
        name: text,
        count: countInfo[val]
      });
    }

    return list;
  }
}

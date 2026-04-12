import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({
  timestamps: true
})
export class Answer {
  @Prop({ required: true })
  surveyId: string; //对应问卷fe_id

  @Prop()
  answerList: {
    componentFeId: string;
    value: string[];
  }[];
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
// id: string;
// 		title: string;
// 		desc?: string;
// 		css?: string;
// 		js?: string;
// 		isDeleted: boolean;
// 		isPublished: boolean;
// 		componentsList: Array<any>;

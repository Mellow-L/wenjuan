import SurveyInfo from "./SurveyInfo"
import SurveyInput from "./SurveyInput"
import SurveyInputPara from "./SurveyInputPara"
import SurveyParagraph from "./SurveyParagraph"
import SurveySelectCheckbox from "./SurveySelectCheckbox"
import SurveySelectRadio from "./SurveySelectRadio"
import SurveyTitle from "./SurveyTitle"


type ComponentInfoType = {
  fe_id: string
  type: string
  // title: string
  isHidden: boolean | string
  props: any
}

export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, isHidden, props = {} } = comp
  const type = comp.type

  if (isHidden === true || isHidden === 'true') return null

  if (type === 'SurveyInput') {
    return <SurveyInput fe_id={fe_id} props={props} />
  }

  if (type === 'SurveySelectRadio') {
    return <SurveySelectRadio fe_id={fe_id} props={props} />
  }

  if (type === 'SurveyTitle') {
    return <SurveyTitle {...props} />
  }

  if (type === 'SurveyParagraph') {
    return <SurveyParagraph {...props} />
  }

  if (type === 'SurveyInfo') {
    return <SurveyInfo {...props} />
  }

  if (type === 'SurveyInputPara') {
    return <SurveyInputPara fe_id={fe_id} props={props} />
  }

  if (type === 'SurveySelectCheckbox') {
    return <SurveySelectCheckbox fe_id={fe_id} props={props} />
  }
  
  return null
}

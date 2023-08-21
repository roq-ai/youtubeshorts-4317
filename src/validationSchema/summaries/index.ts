import * as yup from 'yup';

export const summaryValidationSchema = yup.object().shape({
  content: yup.string().required(),
  video_id: yup.string().nullable().required(),
});

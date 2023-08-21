import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  youtube_link: yup.string().required(),
  transcript: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

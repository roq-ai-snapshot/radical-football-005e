import * as yup from 'yup';
import { coachPlayerValidationSchema } from 'validationSchema/coach-players';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_player: yup.array().of(coachPlayerValidationSchema),
});

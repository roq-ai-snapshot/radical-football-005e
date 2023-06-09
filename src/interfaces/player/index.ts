import { CoachPlayerInterface } from 'interfaces/coach-player';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  status: string;
  user_id: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  coach_player?: CoachPlayerInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    coach_player?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  user_id?: string;
  academy_id?: string;
}

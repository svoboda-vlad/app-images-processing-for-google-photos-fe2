import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getDaysDiffFromTodayDayjs(comparedDate: dayjs.Dayjs): number {
    const todayDay = dayjs(dayjs().format('YYYY-MM-DD'));
    const comparedDateDay = dayjs(comparedDate.format('YYYY-MM-DD'));
    return comparedDateDay.diff(todayDay, 'days');
  }

  getDaysDiffFromTodayDate(comparedDate: Date): number {
    const todayDay = dayjs(dayjs().format('YYYY-MM-DD'));
    const comparedDateDay = dayjs(dayjs(comparedDate).format('YYYY-MM-DD'));
    return comparedDateDay.diff(todayDay, 'days');
  }

}

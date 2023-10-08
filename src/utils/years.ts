import type { DATE } from '../constants/dates'

export const years = (date: DATE): number => {
  const _date = new Date(date)
  const today = new Date()
  let years = new Date().getFullYear() - _date.getFullYear()
  if (
    today.getMonth() < _date.getMonth() ||
    (today.getMonth() == _date.getMonth() && today.getDate() < _date.getDate())
  ) {
    years--
  }

  return years
}

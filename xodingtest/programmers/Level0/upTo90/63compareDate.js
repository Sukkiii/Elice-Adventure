const solution = (date1, date2) => {
  const [y1, m1, d1] = date1
  const [y2, m2, d2] = date2

  const day1 = new Date(y1, m1, d1)
  const day2 = new Date(y2, m2, d2)

  return day1 < day2 ? 1 : 0
}

const solution2 = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0)

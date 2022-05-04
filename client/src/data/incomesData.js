const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const hamDate = new Date(" 5 July 2022 12:30")

const currentYear = hamDate.getUTCFullYear().toLocaleString()
const currentMonth = monthNames[hamDate.getUTCMonth()].toLocaleString()
const currentDay = (hamDate.getUTCDay() + 1).toLocaleString()
const currentHour = hamDate.getHours().toLocaleString()
const currentMin = hamDate.getUTCMinutes().toLocaleString()
// const currentSec = hamDate.getUTCSeconds().toLocaleString()
// const currentMili = hamDate.getUTCMilliseconds().toLocaleString()
const currentExact =
  currentDay + currentMonth + currentYear + currentHour + currentMin

export const incomesData = [
  {
    title: currentDay + currentMonth, //"24 April",
    data: [
      {
        id: 1,
        amount: 5,
        incomeType: true,
        description: "car",
        exactTime: currentDay + currentMonth,
      },
      {
        id: 2,
        amount: 10,
        incomeType: false,
        description: "stuff",
        exactTime: currentDay + currentMonth,
      },
    ],
  },
  // {
  //   title: new Date("July 5 2022 12:30"), //"24 June",
  //   data: [
  //     {
  //       id: 3,
  //       amount: 15,
  //       incomeType: true,
  //       description: "expense",
  //       exactTime: new Date("July 5 2022 12:30"),
  //     },
  //     {
  //       id: 4,
  //       amount: 20,
  //       incomeType: false,
  //       description: "rent",
  //       exactTime: new Date("July 5 2022 12:30"),
  //     },
  //     {
  //       id: 5,
  //       amount: 25,
  //       incomeType: false,
  //       description: "other",
  //       exactTime: new Date("July 5 2022 12:30"),
  //     },
  //   ],
  // },
]

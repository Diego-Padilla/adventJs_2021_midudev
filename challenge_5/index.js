 function daysToXmas(date) {

   let now_date = date
   let chrismas = new Date("December 25, 2025 00:00:00")
    
   now_date = now_date.getTime()

   let to_xmas = chrismas.setTime(Date.parse("December 25, 2021 00:00:00"))

   return  Math.ceil((to_xmas - now_date)/1000/60/60/24)
  }

  
  
  const date4 = new Date("December 20, 2021 03:24:00")

  console.log(daysToXmas(date4))

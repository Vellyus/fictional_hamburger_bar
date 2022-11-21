//Select element function
const selectElement = function (element)
{
  return document.querySelector(element)
}

let menuToggler = selectElement(".menu-toggle"),
  body = selectElement("body"),
  menu = selectElement()

menuToggler.addEventListener("click", function ()
{
  body.classList.toggle("open")
})

body.addEventListener("click", function (event)
{
  if (event.target.parentElement != menuToggler && body.classList.contains("open")) body.classList.toggle("open")
})


// Scroll reveal
window.sr = ScrollReveal()

sr.reveal(".animate-left",
  {
    origin: "left",
    duration: 1000,
    distance: "25rem",
    delay: 300
  })

sr.reveal(".animate-right",
  {
    origin: "right",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })

sr.reveal(".animate-top",
  {
    origin: "top",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })

sr.reveal(".animate-bottom",
  {
    origin: "bottom",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })

sr.reveal(".rotate-up",
  {
    rotate: {
      x: -90,
    },
    duration: 2000,
    delay: 300
  })


sr.reveal(".rotate-left",
  {
    rotate: {
      y: 90,
    },
    duration: 2000,
    delay: 800
  })

sr.reveal(".rotate-down",
  {
    rotate: {
      x: 90,
    },
    duration: 2000,
    delay: 1300
  })

sr.reveal(".rotate-right",
  {
    rotate: {
      y: -90,
    },
    duration: 2000,
    delay: 1800
  })


sr.reveal(".rotate-right2",
  {
    rotate: {
      y: -90,
    },
    duration: 2000,
    delay: 300
  })

sr.reveal(".rotate-left2",
  {
    rotate: {
      y: 90,
    },
    duration: 2000,
    delay: 300
  })






// isOpen function
function isOpen()
{
  class Day
  {
    constructor(name, isOpen, openHour, openMinutes, closeHour, closeMinutes)
    {
      this.name = name
      this.isOpen = isOpen
      this.openHour = openHour
      this.openMinutes = openMinutes
      this.closeHour = closeHour
      this.closeMinutes = closeMinutes
      this.openTime = openHour + openMinutes / 100
      this.closeTime = closeHour + closeMinutes / 100
    }
  }

  const openHours =
    [
      new Day("Vasárnap", true, 11, 0, 22, 0),
      new Day("Hétfőn", true, 7, 30, 22, 0),
      new Day("Kedden", true, 7, 30, 22, 0),
      new Day("Szerdán", true, 7, 30, 22, 0),
      new Day("Csütörtökön", true, 7, 30, 22, 0),
      new Day("Pénteken", true, 7, 30, 22, 0),
      new Day("Szombaton", true, 10, 0, 22, 0),
    ],
    now = new Date,
    time = now.getHours() + now.getMinutes() / 100,
    today = openHours[now.getDay()],
    tomorrow = openHours[now.getDay() + 1],
    message =
    {
      status: "",
      text: ""
    }

  if (today.isOpen && today.openTime <= time && today.closeTime > time)
  {
    message.status = "Nyitva"
    if (today.closeMinutes < 10) today.closeMinutes = "0" + today.closeMinutes
    message.text = `${today.closeHour}:${today.closeMinutes}-ig`
  }
  else
  {
    message.status = "Zárva"
    if (tomorrow.openMinutes < 10) tomorrow.openMinutes = "0" + tomorrow.openMinutes
    if (today.openMinutes < 10) today.openMinutes = "0" + today.openMinutes

    if (tomorrow.isOpen)
    {
      if (today.closeTime <= time)
      {
        message.text = `Holnap ${tomorrow.openHour}:${tomorrow.openMinutes}-kor nyitunk`
      }
      else
      {
        message.text = `${today.openHour}:${today.openMinutes}-kor nyitunk`
      }
    }
    else
    {
      let newOpenHours = openHours
      newOpenHours.forEach(e => newOpenHours.push(e))
      console.log(newOpenHours)
      for (let i = 0; true; i++)
      {
        console.log(i)
        if (newOpenHours[now.getDay() + i].isOpen)
        {
          if (newOpenHours[now.getDay() + i].openMinutes < 10) newOpenHours[i].openMinutes = "0" + newOpenHours[now.getDay() + i].openMinutes

          message.text = `${newOpenHours[now.getDay() + i].name} ${newOpenHours[now.getDay() + i].openHour}:${newOpenHours[i].openMinutes}-kor nyitunk`
          break
        }
      }

    }
  }
  return message
}

const isOpenStatus = document.querySelector(".isOpen-status"),
  isOpenText = document.querySelector(".isOpen-text")

isOpenStatus.innerText = isOpen().status
isOpenText.innerText = isOpen().text

// Get year for copyright
const copyright = document.querySelector(".copyright span")
const now = new Date
const year = now.getFullYear()
copyright.innerText = year
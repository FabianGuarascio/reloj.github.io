let hora = document.querySelector('[data-hour-hand]')
let minuto = document.querySelector('[data-minute-hand]')
let segundo = document.querySelector('[data-second-hand]')
let container = document.querySelector('.containerOfRelojes')


setInterval(horas,1000)

function horas(){
    const date= new Date();
    let seconds = (date.getSeconds() /60)
    let minutes = ((date.getMinutes()+seconds) /60)
    let hours = ((date.getHours()+minutes) /12)
    rotation(segundo,seconds)
    rotation(minuto,minutes)
    rotation(hora,hours)
    
}

function rotation(element,ratio){
    element.style.setProperty('--rotation', ratio * 360)
}

class Reloj {
    constructor(horarioRegion) {
      // creacion de los elementos
      this.clock = document.createElement('div');
      this.clock.setAttribute("class","clock")

      this.hoursHand=document.createElement('div')
      this.hoursHand.setAttribute("class","hours hand")
      this.hoursHand.setAttribute("data-hour-hand","")
      
      this.minutesHand=document.createElement('div')
      this.minutesHand.setAttribute("class","minutes hand")
      this.minutesHand.setAttribute("data-minute-hand","")


      this.secondHand = document.createElement('div')
      this.secondHand.setAttribute("class","seconds hand")
      this.secondHand.setAttribute("data-second-hand","")
      
      this.ball = document.createElement('div')
      this.ball.setAttribute("class","ball")




      this.number1=document.createElement('p')
      this.number1.setAttribute("class","number number1")
      this.number1.textContent="1"
      
      this.number2=document.createElement('p')
      this.number2.setAttribute("class","number number2")
      this.number2.textContent="2"

      this.number3=document.createElement('p')
      this.number3.setAttribute("class","number number3")
      this.number3.textContent="3"

      this.number4=document.createElement('p')
      this.number4.setAttribute("class","number number4")
      this.number4.textContent="4"

      this.number5=document.createElement('p')
      this.number5.setAttribute("class","number number5")
      this.number5.textContent="5"

      this.number6=document.createElement('p')
      this.number6.setAttribute("class","number number6")
      this.number6.textContent="6"

      this.number7=document.createElement('p')
      this.number7.setAttribute("class","number number7")
      this.number7.textContent="7"

      this.number8=document.createElement('p')
      this.number8.setAttribute("class","number number8")
      this.number8.textContent="8"

      this.number9=document.createElement('p')
      this.number9.setAttribute("class","number number9")
      this.number9.textContent="9"

      this.number10=document.createElement('p')
      this.number10.setAttribute("class","number number10")
      this.number10.textContent="10"

      this.number11=document.createElement('p')
      this.number11.setAttribute("class","number number11")
      this.number11.textContent="11"

      this.number12=document.createElement('p')
      this.number12.setAttribute("class","number number12")
      this.number12.textContent="12"


      this.clock.append(this.hoursHand,this.minutesHand,this.secondHand,this.ball,this.number1,this.number2,this.number3,this.number4,this.number5,this.number6,this.number7,this.number8,this.number9,this.number10,this.number11,this.number12)
      // finalizacion de la creacion de los elementos

      //atributos
      this.horarioRegion= horarioRegion
      //funciones
      function rotation(element,ratio){
        element.style.setProperty('--rotation', ratio * 360)
        }
        function horas(){
          const date= new Date();
          let seconds = (date.getSeconds() /60)
          let minutes = ((date.getMinutes()+seconds) /60)
          let hours = ((date.getHours()+minutes) /12)
            // console.log(date.toLocaleString('en-GB', { timeZone: this.horarioRegion }) + " desde la funcion")
            rotation(this.secondHand,seconds)
            rotation(this.minutesHand,minutes)
            rotation(this.hoursHand,hours)
        }
        setInterval(horas.bind(this),1000)
    }
      agregar(element){
        element.append(this.clock)
      }

}

  const relojin = new Reloj('Europe/Vienna');
  const relojin2= new Reloj('Asia/Kabul');
  
  relojin.agregar(container)
  relojin2.agregar(container)

  const date2= new Date()
  let q = 'Europe/Vienna'
  let date3 =date2.toLocaleString('en-GB', { timeZone: 'America/New_York' })
  let date4 =date2.toLocaleString('en-GB', { timeZone: 'Asia/Kabul' })
  let date5 =date2.toLocaleString('en-GB', { timeZone: 'America/Argentina/Jujuy' })
  let date6 =date2.toLocaleString('en-GB', { timeZone: q })
  let date7 =date2.toLocaleString('en-GB', { timeZone: 'America/New_York' })


 



 

  


// task 0 

// 

let customers = [
    {
      name: 'Avi Cohen',
      pin: 1234,
      amount: 1000
    },
    {
      name: 'Yossi barujan',
      pin: 5678,
      amount: 2000
    },
    {
      name: 'Shaul bugi',
      pin: 9012,
      amount: 1500
    }
  ];


for (let i = 0; i < customers.length; i++) {
  let customer = customers[i];
  console.log(`User: ${customer.name}, Pin: ${customer.pin}, Amount: ${customer.amount}`);
}


window.onload = function(){
  
}
// task 1

const headline = document.querySelector("#id_h2")
headline.textContent= `Welcome ${customers[0].name}`


// task 2


const User = document.querySelector('#id_input');
User.placeholder = 'Please enter your name or enter your credit card number';
User.style.width = "310px"
User.style.position = "absolute"
User.style.left = "40px"

// task 3,5,6
const conscreen = document.querySelector('#content');
const imgCard = document.querySelector("#id_card");

const optionA = document.querySelector("#option1");
const optionB = document.querySelector("#option2");
const optionC = document.querySelector("#option3");
const optionD = document.querySelector("#option4");
const optionE = document.querySelector("#option5");
const optionF = document.querySelector("#option6");

const buttonD = document.querySelector('#opbut1');
const buttonC = document.querySelector('#opbut3'); 
const buttonQ = document.querySelector('#opbut6');

const enterBtn = document.querySelector("#enter");
let balance = "";

const buttonW = document.querySelector('#opbut2');
const CurrentAmount = 15000

const Number5button = document.querySelector('#button5');
const Number0button = document.querySelector('#button0');
const Number1button = document.querySelector('#button1');
const Number2button = document.querySelector('#button2');
const Number3button = document.querySelector('#button3');
const Number4button = document.querySelector('#button4');
let currentamount ;

const welcome = () => {
    
  imgCard.addEventListener("click",function(){
    imgCard.style.animationName ='example';
  })
  User.addEventListener("click",function(){
    if (User.value.length == 4) {
        alert("Continue the action")
        User.style.background = "green"
        User.style.color = "white"
        conscreen.innerHTML = `<h2> hellow ${customers[0].name}</h2>`
        User.remove();
        optionA.innerHTML = "Press button D to Deposite Money"
        optionB.innerHTML = "Press button w to Withdraw Money"
        optionC.innerHTML = "Press button c to Check your Balace"
        optionF.innerHTML = "Press button q to Quit"
        optionF.style.marginTop = "44px";

        buttonD.addEventListener("click", function() {
          
          conscreen.innerHTML = `<h2> How much would you like to deposit?</h2><br><input type="number">`
          const idinput = conscreen.querySelector('input')
          idinput.style.color = 'green'
          enterBtn.addEventListener('click',function(){
          if (idinput.value % 20 === 0 || idinput.value % 50 === 0 || idinput.value % 100 === 0){
            alert("Your current balance in the bank is: "+ idinput.value + balance)
          }
            else {
              alert ("The amount you displayed is incorrect, you return to the ATM MENU")
              conscreen.remove()
              idinput.remove()

            }
            
          }) 
        });

        buttonW.addEventListener("click",function(){
          
          conscreen.innerHTML = `<h2> How much money would you like to withdraw please?</h2><br><input type="number">`
          let input2 = document.querySelector('input');
          input2.placeholder = "OP:1=300 ,OP:1=150,OP:1=100,OP:1=50 "
          input2.style.width ="279px"
          input2.style.position = "relative"
          input2.style.left = "51px"
          input2.style.top = "68px"
          

          Number0button.addEventListener('click',function(){
            input2.value = (input2.value + '0')
          })
          Number1button.addEventListener('click',function(){
            input2.value = (input2.value + '1')
            enterBtn.addEventListener('click',function(){
              if(input2.value==1){
                alert ("Your situation at the bank is: "+ (customers[0].amount-50))
              }
            })
          })
          Number2button.addEventListener('click',function(){
            input2.value = (input2.value + '2')
            enterBtn.addEventListener('click',function(){
              if(input2.value==2){
                alert ("Your situation at the bank is: "+ (customers[0].amount-100))
              }
            })
          })
          Number3button.addEventListener('click',function(){
            input2.value = (input2.value + '3')
            enterBtn.addEventListener('click',function(){
              if(input2.value==3){
                alert ("Your situation at the bank is: "+ (customers[0].amount-150))
              }
            })
          })
          Number4button.addEventListener('click',function(){
            input2.value = (input2.value + '4')
            enterBtn.addEventListener('click',function(){
              if(input2.value==4){
                alert ("Your situation at the bank is: "+ (customers[0].amount-300))
              }
            })
          })
          Number5button.addEventListener('click',function(){
            input2.value = (input2.value + '5')
            enterBtn.addEventListener('click',function(){
              if(input2.value==5){
                conscreen.innerHTML="you will be prompted to give your own amount"
                conscreen.style.color = "green"
                conscreen.style.background = "white"
                conscreen.style.position = "relative"
                conscreen.style.top = "50px"
                conscreen.style.left = "130px"
                alert("You cannot have a negative balance in the bank, please insert the card and we will check you")
                imgCard.addEventListener('click', function(){
                  imgCard.style.animationName ='example';
                  if(customers[0].name = "Avi Cohen"){
                    alert(`sorry operation could happen
                    insufficient amount you don't have enough balance for this operation`)
                  }
                  else
                  {customers[1].name = "Yossi barujan"}
                  alert('very good')

                })
              }
            })
          })
        })

        buttonC.addEventListener('click', ()=> {
          alert('Your current Balance is 950 NIS')
        })

        buttonQ.addEventListener('click', ()=> {
          alert('GOODBBY, HAVE A NICE DAY')
        })
    }
    else {
        alert('Try again, smartass')
        User.style.background = "red"
        User.style.color = "white"
    }
  })
};

welcome()

// task 4

const checkUserPin = function (userPin) {
  for (let i = 0; i < customers.length; i++) {
    if (userPin === customers[i].pin) {
      return true;
    }
  }
  return false; 
};


const userEnteredPin1 = 5678; 
const isPinValid1 = checkUserPin(userEnteredPin1);
console.log(isPinValid1); 

const userEnteredPin2 = 2525; 
const isPinValid2 = checkUserPin(userEnteredPin2);
console.log(isPinValid2);

const userEnteredPin3 = 1234; 
const isPinValid3 = checkUserPin(userEnteredPin3);
console.log(isPinValid3);



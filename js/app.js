// card-1
const donate=document.getElementById('donate-btn');
const totalAmount=document.getElementById('total-amount')
const inputField=document.getElementById('input-1')
const currentAmount=document.getElementById('current-amount')
const history=document.getElementById('history-section')
const title1=document.getElementById('title-1')
const sucessfull=document.getElementById("btn-continue")




document.getElementById('donate-btn').addEventListener('click',function(){
      //console.log('donate btn connected')
      const donationAmount=getInputValue('input-1')
      // console.log(donationAmount)
      const totalBalance=parseFloat(totalAmount.innerText);
      

      if(isNaN(donationAmount) || donationAmount<0 || donationAmount==''|| donationAmount>totalBalance)
      {
         alert('Invalid Donation Amount');
         inputField.value='';
         return;
         
      }
      else 
      {
      //    const currentDonation=currentAmount.innerText;
        currentAmount.innerText=(parseFloat(currentAmount.innerText)+donationAmount).toFixed(2);
        const currentBalance=totalBalance-donationAmount;
        totalAmount.innerText=currentBalance.toFixed(2);
        inputField.value=''
        //console.log(currentAmount.innerText)
        const currentDate=new Date();
        const div=document.createElement('div')
        div.classList.add('p-5')
        div.classList.add('border-[#1111111A]')
        div.classList.add('border-2')
        div.classList.add('rounded-lg')
        div.classList.add('mb-4')
        div.innerHTML=`
         <p class='text-[#111111] text-[16px] md:text-xl font-bold'>${donationAmount} Taka is Donated for ${title1.innerText}</p>
         <p class="text-[#111111B3] font-medium text-[12px]">${currentDate}</p>
        `
        history.appendChild(div)
        document.getElementById('my_modal_1').showModal()
      //   my_modal_1.showModal()
      
      }

})

//card-2

const donate1=document.getElementById('donate-btn-1');
const inputField1=document.getElementById('input-2')
const currentAmount1=document.getElementById('current-amount-1')
const title2=document.getElementById('title-2')

document.getElementById('donate-btn-1').addEventListener('click',function(){
      //console.log('donate btn 1 connected')
      const donationAmount=getInputValue('input-2')
      // console.log(donationAmount)
      const totalBalance=parseFloat(totalAmount.innerText);
      

      if(isNaN(donationAmount) || donationAmount<0 || donationAmount==''|| donationAmount>totalBalance)
      {
         alert('Invalid Donation Amount');
         inputField1.value='';
         return;
         
      }
      else 
      {
      //    const currentDonation=currentAmount.innerText;
        currentAmount1.innerText=(parseFloat(currentAmount1.innerText)+donationAmount).toFixed(2);
        const currentBalance=totalBalance-donationAmount;
        totalAmount.innerText=currentBalance.toFixed(2);
        inputField1.value=''
        //console.log(currentAmount.innerText)
        const currentDate=new Date();
        const div=document.createElement('div')
        div.classList.add('p-5')
        div.classList.add('border-[#1111111A]')
        div.classList.add('border-2')
        div.classList.add('rounded-lg')
        div.classList.add('mb-4')
        div.innerHTML=`
         <p class='text-[#111111] text-[16px] md:text-xl font-bold'>${donationAmount} Taka is Donated for ${title2.innerText}</p>
         <p class="text-[#111111B3] font-medium text-[12px] md:text-[16px]">${currentDate}</p>
        `
        history.appendChild(div)
        document.getElementById('my_modal_1').showModal()
      
      
      }

})

//card-3
const donate2=document.getElementById('donate-btn-2');
const inputField2=document.getElementById('input-3')
const currentAmount2=document.getElementById('current-amount-2')
const title3=document.getElementById('title-3')

document.getElementById('donate-btn-2').addEventListener('click',function(){
      //console.log('donate btn 1 connected')
      const donationAmount=getInputValue('input-3')
      // console.log(donationAmount)
      const totalBalance=parseFloat(totalAmount.innerText);
      

      if(isNaN(donationAmount) || donationAmount<0 || donationAmount==''|| donationAmount>totalBalance)
      {
         alert('Invalid Donation Amount');
         inputField2.value='';
         return;
         
      }
      else 
      {
      //    const currentDonation=currentAmount.innerText;
        currentAmount2.innerText=(parseFloat(currentAmount2.innerText)+donationAmount).toFixed(2);
        const currentBalance=totalBalance-donationAmount;
        totalAmount.innerText=currentBalance.toFixed(2);
        inputField2.value=''
        //console.log(currentAmount.innerText)
        const currentDate=new Date();
        const div=document.createElement('div')
        div.classList.add('p-5')
        div.classList.add('border-[#1111111A]')
        div.classList.add('border-2')
        div.classList.add('rounded-lg')
        div.classList.add('mb-4')
        div.innerHTML=`
         <p class='text-[#111111] text-[16px] md:text-xl font-bold'>${donationAmount} Taka is Donated for ${title3.innerText}</p>
         <p class="text-[#111111B3] font-medium text-[12px] md:text-[16px]">${currentDate}</p>
        `
        history.appendChild(div)
        document.getElementById('my_modal_1').showModal()
      //   my_modal_1.showModal()
      
      }

})

//common function-1
function getInputValue(id){
      const input=Number(document.getElementById(id).value);
      return input;
      
      
      
}


const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
const donation=document.getElementById('cards');


historyBtn.addEventListener('click', function () {
    //console.log('history connected');
    
    
    showSection('history-section');
    
    
    historyBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.border = 'none';
    donationBtn.style.backgroundColor = 'rgb(229 231 235)';
});


donationBtn.addEventListener('click', function () {
   // console.log('donation connected');
    showSection('cards');
    donationBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.backgroundColor = 'rgb(229 231 235)';
});

//common function-2
function showSection(id) {
    
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
   
    document.getElementById(id).classList.remove('hidden');

}




  





function showError(){
    const ErrorHeading = document.getElementById('error-heading')
    ErrorHeading.innerHTML = 'please fill in all the boxes'
    console.log(ErrorHeading)

    
  
   //setTimeout(clearError, 3000)

}
 
 document.getElementById('loading').style.display = 'none'

document.getElementById('odd-form').addEventListener('submit', function(e){

    //hide results
   document.getElementById('returns').style.display = 'none'
    // show loader
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculateResult, 2000)

    e.preventDefault()

})

//calculate result
function calculateResult(){
 
    const stake = document.getElementById('stake')
    const oddsNumerator = document.getElementById('numerator')
    const oddsDenominator = document.getElementById('denominator')
    const returns = document.getElementById('returns')

    if (stake != '' && oddsNumerator != '' && oddsDenominator != ''){  
        
     
        document.getElementById('loading').style.display = 'none';
        document.getElementById('returns').style.display = 'block';
        const firstCalculation = stake.value * oddsNumerator.value
        const secondCalculation = firstCalculation / oddsDenominator.value
        document.getElementById('returns').value = secondCalculation
        
       
      

    }else {console.log('hello')


    }
}

//function clearError(){
//  document.querySelector('.error').removeTextNode()
    
//}

   
   

 
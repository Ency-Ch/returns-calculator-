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

    if (stake.value !== ''  &&  oddsNumerator.value !== ''  &&  oddsDenominator.value !== ''){  
        
     
        document.getElementById('loading').style.display = 'none';
        document.getElementById('returns').style.display = 'block';
        const firstCalculation = stake.value * oddsNumerator.value
        const secondCalculation = firstCalculation / oddsDenominator.value
        document.getElementById('returns').value = secondCalculation
        
         console.log('hello')
      

    }else { document.getElementById('loading').style.display = 'none';
            document.getElementById('returns').style.display = 'block'; 
            var errorheading = document.getElementById('error-heading')
            errorheading.innerHTML = 'please fill all fields before calculation'
            
            setTimeout(removeError, 2000)

            console.log('hello')
    

    }

}

   
 function  removeError(){
     var errorheading = document.getElementById('error-heading')
     errorheading.innerHTML = ''

  } 

 
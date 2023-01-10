$(document).ready(function () {
    $("#Prime_or_not").on("click", function () {


        let data = gatherdata();
        var result;
        let halve = data.first / 2;
        var stringx = "its prime";
        let number = data.first
        let isPrime = true;

        // check if number is equal to 1
        if (number === 1) {
            result = ("1 is neither prime nor composite number.");
            $("#result").val(result);
        }

        // check if number is greater than 1
        else if (number > 1) {

            // looping through 2 to number
            for (let i = 2; i < number/2; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    
                    break;
                }
                else{}
            }   
            if (isPrime == false) {
                result = ("not a prime")
                $("#result").val(result);
            }
               

            
            else {
                result = ("its prime");
                $("#result").val(result); 
            
            } 
            
        }  

    

        else{}


        function gatherdata() {

            let data = {
                first: 0,
                valid: true
            }
            const pattern = /^[0-9 ]*$/;
            if (pattern.test($("#prime_check").val())) {
                data.first = parseInt($("#prime_check").val());


            }
            else {
                data.valid = false

             }
            return data


        }



    })
})

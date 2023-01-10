$(document).ready(function () {
    $("#remove_vowels").on("click", function () {
        

            let data = gatherdata();
            let result = 0;
            let newString ="";
            if (data.valid == true) {
                let i = 0;
                while (i < data.first.length){
                    if (data.first[i] == ("a" || "e" || "i" || "o" ||"u" )){
                        
                        newString += ""
                        i++
                    }
                    else if (data.first[i] == ("A" || "E" || "I" || "O" ||"U")){
                        newString += ""
                        i++

                    }

                    else{
                        newString += data.first[i]
                        i++
                    }
                    
                }
                

                result = newString
                $("#result").val(result)
            } 




        

        function gatherdata() {

            let data = {
                first : 0,
                valid : true
            }
            const pattern = /[a-zA-Z]+/;
            if (pattern.test($("#vString").val())) {
                data.first = $("#vString").val();
                

            }
            else {
                data.valid = false

            }
            return data


        }



    })
})

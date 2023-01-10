$(document).ready(function () {
    $("#ASCIIvalue").on("click", function () {
        

            let data = gatherdata();
            let result = 0;
            let a = 0;
            let b = 0
            if (data.valid == true) {
                let i = 0;
                while (i < data.first.length){
                    a = data.first.charCodeAt(i)
                    b = b + a
                    i++
                    

                    
                }
                
                result = b
                $("#result").val(b)
            } 

        function gatherdata() {

            let data = {
                first : 0,
                valid : true
            }
            const pattern = /[a-zA-Z]+/;
            if (pattern.test($("#ASCII").val())) {
                data.first = $("#ASCII").val();

            }
            else {
                data.valid = false

            }
            return data


        }



    })
})
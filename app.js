
    var op;
    function fun(){
    var res;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (op){
        case '+':
            res=num1+num2;
            break;
        case '-':
            res=num1-num2;
            break;
        case '*':
            res=num1*num2;
            break;
        case '/':
            res=num1/num2;
            break;
        
            
    }
        const button = document.getElementById('myButton');
        button.click(0);
        document.getElementById("result").innerHTML = res;
    }
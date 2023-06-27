let string = "";
const ip_area = document.querySelector('#input');
const btns = document.querySelectorAll('button');
btns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            if(string==undefined){
                string = "";
                ip_area.value = string;
            }
            else if(string==Infinity){
                string = "E";
                ip_area.value = string;
            }
            ip_area.value = string;
        }
        else if(string.length==0 && (e.target.innerHTML=='=')){
            string = "";
            ip_area.value = string;
        }
        else if(string.length==0 &&((e.target.innerHTML=='/')||(e.target.innerHTML=='*')||(e.target.innerHTML=='%'))){
            string = "";
            ip_area.value = string;
        }
        else if(e.target.innerHTML=='C'){
            string = "";
            ip_area.value = string;
        }
        else if(e.target.innerHTML=='D'){
            if(string.length!=0){
                string = string.slice(0,string.length-1);
                ip_area.value = string;
            }
        }
        else if(e.target.innerHTML=='()'){
            if(string.indexOf('(')!=-1){
                string = string + ')';
                ip_area.value = string;
            }
            else{
                string = string + '(';
                ip_area.value = string;
            }
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            ip_area.value = string;
        }
    });
});

interface cseD{
    name: string;
    email: string;
}

let info = (type:cseD):void =>{
    console.log(type.name+' '+type.email);
}

let det = {
    name: 'asif',
    email: 'asifs.cse@gmail.com'
}

info(det);
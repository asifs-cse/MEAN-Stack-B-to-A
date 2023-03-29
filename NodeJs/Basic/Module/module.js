const getName =()=>{
    return "Asif Shahriar";
}
const getAge = ()=>{
    return "23";
}

const getRoll =()=>{
    return "20MH1A0504";
}

//directly export module
exports.getId =function(){
    return "20MH1A0504";
}
const cgpa = 3.90;

// export sing modeul
// exports.name = getName;
// exports.age = getAge;
// exports.roll = getRoll;

//export multipole module or variable
module.exports={
    getName,
    getAge,
    getRoll,
    cgpa,
};
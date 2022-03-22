function getData(){

    let kg = document.getElementById("int-kg").value
    let cm = document.getElementById("int-cm").value

    return {
        kg: kg, 
        cm: cm
    }
}

function calculateBMI(){

    let result = getData()
    let m = result.cm / 100
    let bmi = ((result.kg) / (m*m))

    return bmi

}

function outputData(){

    document.getElementById("output-bmi").innerHTML = calculateBMI().toFixed(2)

}

function valueBmi(){
    getData()
    calculateBMI()
    outputData()
}

function check(){

    let result = getData()
    if(result.kg == ""){
        alert("กรุณากรอกข้อมูล")
    }else if(result.cm == ""){
        alert("กรุณากรอกข้อมูล")
    }else if(result.kg <= 0){
        alert("กรุณากรอกน้ำหนัก มากกว่า 0")
    }else if(result.cm <= 0){
        alert("กรุณากรอกส่วนสูงมากกว่า มากกว่า 0")
    }else{
        valueBmi()
    }

}

function main(){
    check()
}
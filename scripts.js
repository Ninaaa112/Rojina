let foo = 0;
let bar = 0;

function performDivision() {
    console.log("divide");
    
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    
    foo = parseFloat(input1.value) || 0;
    bar = parseFloat(input2.value) || 0;
    
    console.log(`foo = ${foo}, bar = ${bar}`);
    
    const result = foo / bar;
    
    console.log(`Division result: ${result}`);
    
    if (!isFinite(result) || isNaN(result)) {
        alert("You cant divide us!");
        document.getElementById('result').innerHTML = '<span style="color: red;">Invalid calculation!</span>';
    } else {
        document.getElementById('result').innerHTML = `<span style="color: green;">Result: ${result}</span>`;
    }
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performDivision();
    }
});
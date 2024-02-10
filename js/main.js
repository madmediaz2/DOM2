var box1 = document.getElementById('b1');
var box2 = document.getElementById('b2');
var box3 = document.getElementById('b3');

var resetButton = document.getElementById('reset');


function resetStyle(...boxes) {
    boxes.forEach(box => {
        if (box) box.style = '';
    });
}


function eventLogger(event, Event){
    console.log(`${event.id} ${Event}`);
}

box1.addEventListener('click', function(event) {
    eventLogger(box1, event.type);
    box1.style.backgroundColor = 'blue';
    });


box2.addEventListener('click', function(event) {
    eventLogger(box2, event.type);
    box2.style.display = 'none';
    });

box3.addEventListener('click', function(event) {
    eventLogger(box3, event.type);
    box3.style.height = '400px';
    box3.style.width = '400px';
    });

resetButton.addEventListener('click', function(event) {
    eventLogger(resetButton, event.type);
    resetStyle(box1, box2, box3);
    });


/*
box1.addEventListener('mouseover', function() {
    eventLogger(box1, 'mouseover');
    box1.style.backgroundColor = 'yellow';
    });

box2.addEventListener('mouseover', function() { 
    eventLogger(box2, 'mouseover');
    box2.style.backgroundColor = 'yellow';
    });

box3.addEventListener('mouseover', function() { 
    eventLogger(box3, 'mouseover');
    box3.style.backgroundColor = 'yellow';
    });

resetButton.addEventListener('mouseover', function() { 
    eventLogger(resetButton, 'mouseover');
    resetButton.style.backgroundColor = 'yellow';
    });


box1.addEventListener('mouseout', function() {
    eventLogger(box1, 'mouseout');
    resetStyle(box1);
    });


box2.addEventListener('mouseout', function() {
    eventLogger(box2, 'mouseout');
    resetStyle(box2);
    });

box3.addEventListener('mouseout', function() {
    eventLogger(box3, 'mouseout');
    resetStyle(box3);
    }); 

resetButton.addEventListener('mouseout', function() {
    eventLogger(resetButton, 'mouseout');
    resetStyle(resetButton);
    }); */
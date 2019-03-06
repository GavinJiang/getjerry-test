// Example run

function addDisplay(id, str, result = false) {
    let main = document.getElementById(id);
    if (result)
        main.innerHTML +=  '<div class="result">=> [' + str + ']</div>';
    else
        main.innerHTML += '<div class="expression">' + str + '</div>';
}

function formatResult(array) {
    return array.sort((a, b) => { return a - b; }).join(', ');
}

function run(rc, displayId) {
    let display = document.getElementById(displayId);

    display.innerHTML += '<h3>' + rc.constructor.name + '</h3>';

    let startTime = new Date().getTime();

    rc.add([1, 5]);
    addDisplay(displayId,'add [1, 5)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 5)

    rc.add([10, 20]);
    addDisplay(displayId, 'add [10, 20)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 5) [10, 20)

    rc.add([20, 20]);
    addDisplay(displayId, 'add [20, 20)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 5) [10, 20)

    rc.add([20, 21]);
    addDisplay(displayId, 'add [20, 21)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 5) [10, 21)

    rc.add([2, 4]);
    addDisplay(displayId, 'add [2, 4)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 5) [10, 21)

    rc.add([3, 8]);
    addDisplay(displayId, 'add [3, 8)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 8) [10, 21)

    rc.remove([10, 10]);
    addDisplay(displayId, 'remove [10, 10)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 8) [10, 21)

    rc.remove([10, 11]);
    addDisplay(displayId, 'remove [10, 11)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 8) [11, 21)

    rc.remove([15, 17]);
    addDisplay(displayId, 'remove [15, 17)');
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 8) [11, 15) [17, 21)

    rc.remove([3, 19]);
    addDisplay(displayId, 'remove [3, 19)')
    addDisplay(displayId, formatResult(rc.toArray()), true);
    // Should display: [1, 3) [19, 21)

    let costTime = new Date().getTime() - startTime;
    console.log('Cost time', costTime);

    display.innerHTML += '<h5> Cost ' + costTime + ' million seconds</h5>';
}

run(new RangeCollection(), 'display1');
run(new RangeCollection2(), 'display2');


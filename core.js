function timed(ms) {
    setTimeout(function() {
        nextStep();
        timed(ms);
    }, ms);
}

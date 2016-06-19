var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }

    var max = 0;

    for (var i = 0; i < envelopes.length; i++) {
        var potentials = [];
        for (var j = 0; j < envelopes.length; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                potentials.push(envelopes[j]);
            }
        }
        var res = maxEnvelopes(potentials) + 1;
        if (res > max) {
            max = res;
        }
    }
    return max;
};

console.log(maxEnvelopes([ [5,4],[6,4],[6,7],[2,3] ]));
console.log(maxEnvelopes([ [5,4],[6,4],[6,4],[2,3] ]));
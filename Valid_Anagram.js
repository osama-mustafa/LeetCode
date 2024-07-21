var isAnagram = function (s, t) {

    if (s.length != t.length) {
        return false;
    }

    let firstObject = {};

    for (const char of s) {
        firstObject[char] ? firstObject[char] += 1 : firstObject[char] = 1;
    }

    for (const char of t) {
        if (firstObject[char]) {
            firstObject[char] -= 1;
            if (firstObject[char] == 0) {
                delete firstObject[char];
            }
        }
    }

    if (Object.keys(firstObject).length == 0) {
        return true;
    }
    return false;
};


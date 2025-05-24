function solution(priorities, location) {
    const arr = priorities.map((value, index) => ({ value, index }));
    let count = 0;

    while (arr.length > 0) {
        const current = arr.shift();
        const hasPri = arr.some(ele => ele.value > current.value);
        if (hasPri) {
            arr.push(current);
        } else {
            count++;
            if (current.index === location) {
                return count;
            }
        }
    }
}

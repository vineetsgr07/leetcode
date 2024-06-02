function asteroidCollision(asteroids: number[]): number[] {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else {
            let collision = false;
            while (stack.length > 0 && stack[stack.length - 1] > 0) {
                let lastStack = stack.pop();
                if (lastStack + asteroids[i] === 0) {
                    collision = true;
                    break;
                } else if (lastStack + asteroids[i] > 0) {
                    stack.push(lastStack);
                    collision = true;
                    break;
                }
            }
            if (!collision) {
                stack.push(asteroids[i]);
            }
        }
    }

    return stack;
}
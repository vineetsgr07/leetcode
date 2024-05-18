/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    if (image[sr][sc] == color) return image;

    let cur = image[sr][sc]

    const fill = (sr, sc) => {
        if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

        if (cur != image[sr][sc]) return;

        image[sr][sc] = color

        fill(sr - 1, sc);
        fill(sr + 1, sc);
        fill(sr, sc - 1);
        fill(sr, sc + 1);
    }

    fill(sr, sc)

    return image


};
const fill = (image, x, y, oldColor, newColor) => {
  if (x < 0 || y < 0 || x >= image.length || y >= image[x].length
     || image[x][y] === newColor || image[x][y] !== oldColor) {
    return;
  }
  image[x][y] = newColor;
  fill(image, x + 1, y, oldColor, newColor);
  fill(image, x, y + 1, oldColor, newColor);
  fill(image, x - 1, y, oldColor, newColor);
  fill(image, x, y - 1, oldColor, newColor);
};
const floodFill = function (image, sr, sc, newColor) {
  return image;
};
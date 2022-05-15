/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  let area = 0; const row = grid.length; const
    col = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= row || c >= col || !grid[r][c]) return 0;
    grid[r][c] = 0;
    return (1 + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1));
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) area = Math.max(area, dfs(i, j));
    }
  }
  return area;
};
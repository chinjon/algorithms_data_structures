// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/forum/comments/1018266?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function miniMaxSum(arr) {
  let results = new Set(), totals = 0;
  
  arr.sort((a, b) => {
      
      let min = arr.reduce((c, d) => c + d, -a)
      
      let max = arr.reduce((c, d) => c + d, -b)
      
      results.add(min);
      results.add(max);
      
  })
  
  totals = [...results];
  
  console.log(Math.min(...totals), Math.max(...totals));
}
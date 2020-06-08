module.exports = (str) => {
  let ans = [];
  let sentence = str.replace(/\s/g, '').toLowerCase()
  let forward = sentence.split('')
  let backward = sentence.split('').reverse()
  
forward[0] === backward[0] || forward[0] === backward[1]?
    ans.push(forward.join('').replace(/[,!.*+\-?^${}()|[\]\\]/g,""))
  :
  ans
  
  return ans

};

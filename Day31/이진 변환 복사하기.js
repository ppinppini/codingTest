function solution(s) {
  let delCount = 0;
  let results = []; 

  while (s.includes("0")) {
    s = s.replace("0", ""); 
    delCount += 1; 
    let sLength = s.length; 
    let binaryLength = sLength.toString(2); 
    results.push(binaryLength); 
  }
  
  return results
}


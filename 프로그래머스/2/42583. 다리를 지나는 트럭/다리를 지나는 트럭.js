function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  let totalWeight = 0;
  while(truck_weights.length > 0 || totalWeight > 0){
      time++;
      const truck = bridge.shift()
      totalWeight = totalWeight - truck;
      if(bridge.length > 0 && totalWeight+truck_weights[0] <= weight){
          let outTruck =  truck_weights.shift()
          bridge.push(outTruck)
          totalWeight = totalWeight + outTruck
      }else{
          bridge.push(0)
      }
  }
  return time;
}

function solution(nums) {

    const uniquePokemons = [...new Set(nums)];
    

    const maxPokemons = nums.length / 2;
    

    const availablePokemons = Math.min(uniquePokemons.length, maxPokemons);
    
    return availablePokemons;
}

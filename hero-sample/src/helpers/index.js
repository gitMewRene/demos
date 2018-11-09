
/**
 * 
 * @param {*} d 
 * @return Array collection of tag strings
 */
export const getTags = (d = []) => {
  return d.map( o => o.tags )
}
export const incrementKey = (k, s = {} ) => {

  if(s[k]) return s[k] + 1;
  return 1;
}
/**
 * hash available tags from defined source
 * s:Array is a list of strings
 * @return Object 
 */
export const availableTags = ( s = []) => {
  return s.reduce((o, key) => (
    //tally keys as a possible ordering option
    {...o, [key]:incrementKey(key, o)}
  ), {});
}
/**
 * support memoization with a hash, note that this approach returns
 * an object with the updated hash and result
 * @param {*} tag 
 * @param {*} hash
 * @return {
 *  {Array} result,
 *  {Object} hash
 * }
 */
export const filterByTag = (tag = '', source = [], hash = {}) =>{
  if(hash.hasOwnProperty(tag)){
    return hash[tag];
  }
  const result = '';
  return {
    hash:{...hash, [tag]:result},
    result
  }
}
/**
 * Take an array of objects each presumed to contain tags property
 * 
 * @param {*} data 
 */
export const getAvailableTags = ( data = []) => {
  return data.reduce(( o, key) => (
    {...o, ...availableTags(key.tags)}
  ),{});
}

export const filteredCards = (activeKeys = [], cards = []) => {
  return cards.filter( c => {
      const strings = c.tags.join();
      //activeKeys is likely to be smaller than iterating through all tags
      
      //reduce supports AND query
      return activeKeys.reduce((o, key ) => {
        
        return strings.includes(key)
      }, false )

})
}

export const setActiveTags = (activeKeys = '', tags = []) => {
  
  return tags;
}
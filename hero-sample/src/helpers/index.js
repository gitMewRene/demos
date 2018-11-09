/* data-card.helper */
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
    //tally keys as a possible ordering option?
    {...o, [key]:incrementKey(key, o)}
  ), {});
}

/** container.helper */
/**
 * Take an array of objects each presumed to contain tags property
 * 
 * @param {*} data 
 */
export const getAvailableTags = ( data = []) => {
  //reducing to object means not having to splice
  //but outputting the keys array means you blow out the indexes in aavailableTags..
  return Object.keys(data.reduce(( o, key) => (
    {...o, ...availableTags(key.tags)}
  ),{}));
}

export const filterCardsByTags = (activeKeys = [], cards = []) => {
  //cards are filtered out if any of the keys don't match
  return cards.filter( c => (activeKeys.every( o => c.tags.includes(o))));
}

/** filter.helper */
export const createToggleTree = ( keys = [], toggle = false) => {
  //using set to exclude duplicate keywords, shouldn't happen but one less headache
  const dedupe = Array.from(new Set(keys));
  return dedupe.reduce( (out, o) => ( [...out, {name:o, toggle}]),[])
}

/**
 * support memoization with a hash, note that this approach returns
 * an object with the updated hash and result
 * bleh...
 * @param {*} tag 
 * @param {*} hash
 * @return {
 *  {Array} result,
 *  {Object} hash
 * }
 */
export const toggleElement = (idx = -1, source = []) =>{
  if(idx >= 0 && source[idx] !== undefined){
    source[idx] = {...source[idx], toggle:(!source[idx].toggle)};
  }
  return source;
}
/**
 * return an array of keyword strings 
 */
export const filterByToggleState = (state = false, source = []) => {
  //could also use reduce to generate a clean array of strings..
  //return source.filter(o => o.toggle === state );
  return source.reduce( (out, o) => {
      if(o.toggle === state){ 
        return [...out, o.name];
      }
      return out; 
    },
    []);
}

export const isSelected = (q = {}) => {
  if(q.hasOwnProperty('toggle')){
    return q.toggle === true;
  }
  return false;
}

export const isMobile = () => {
  return window.innerWidth < 767;
}
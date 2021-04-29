const compose = (...funcs) => (component) => {
   return funcs.reduceRight((prev, f) => {
      return f(prev);
   }, component);
}

export default compose;
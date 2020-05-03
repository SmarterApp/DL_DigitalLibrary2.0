// This is our minimal definition of the MathJax API (only describing what we
// use). See src/app/common/mathjax.ts for details on why we need this.
interface MathJax {
  typesetPromise(): Promise<void>;
}

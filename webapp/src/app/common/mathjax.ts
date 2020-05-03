/* This is a little bit magical. MathJax doesn't really behave like a standard
 * library does. It still creates its object instance as a global on the
 * window object. However, the MathJax startup code is not re-entrant. The
 * first time MathJax runs, it expects the global window.MathJax variable to
 * contain configuration information (as a convenience for configuring it). It
 * then replaces fills that object out with the full instance. If it gets
 * executed again, it now takes that already instantiated object and inspects
 * it for configuration. This leads to an infinite regression and dies with
 * "too much recursion." This is a great example of the kinds of unexpected
 * errors that happen easily when you depend on global state.
 *
 * Because of this, we have to be very careful how MathJax is referenced. If we
 * import MathJax in our components it gets pulled in via Webpack. At first
 * this works, as Webpack sets things up so the code for each module runs only
 * once. However, if we use this method we miss other source files that are
 * included dynamically by MathJax as needed (the primary MathJax package
 * doesn't actually deliver the source code, but rather the compiled JS output.
 * So we lose all the dependency information from the original TypeScript
 * source).  For example, the sre/sre_browser.js file required for the a11y
 * features. We could include these manually via the scripts option in the
 * Angular build architect configuration but this feels brittle and we don't
 * have a difinitive list of what all we should include.
 *
 * To fix the above, we need to load MathJax via an external script. That way
 * when it does its own dynamic inspection of its origin path it gets something
 * it can use to actually find the dependencies it's expecting. With this
 * approach we would include a link to the version published on CDNJS. This
 * would also means we *cannot* `import` the MathJax library (because then
 * we'll have it loaded and executed it twice: via Webpack and from CDNJS,
 * leading to the re-entrant setup bug described above).
 *
 * The correct solution would be to either refactor MathJax to use modern JS
 * library packaing or write a wrapper that sandboxes it (keeping it out of the
 * global window object) and exposes a way to get at the sandboxed instance.
 * However, both of these options require non-trivial effort that is not in
 * scope and a greater maintenance commitment than I think this project can
 * support long-term.
 *
 * The solution we're using is to use MathJax the way it wants to be used:
 * loaded once and accessed via the global window object. In order to make that
 * play nice with Angular we are:
 *
 * 1. including the via index.html, and *never* importing in TypeScript,
 * 2. creating a bare-bones interface in globals.d.ts to enable static type
 *    checking for our use-cases (and satisfying the TypeScript compiler),
 * 3. hiding/wrapping the global variable access behind a factory function, and
 * 4. using that factory function to expose the MathJax instance to the rest of
 *    our app in a standard manner (via Angular dependency injection).
 */

import {InjectionToken} from '@angular/core';

// This is the injection token that will be used to ID the MathJax instance in
// the Angular DI framework.
export const MATHJAX_INST = new InjectionToken<MathJax>('MathJax');

// This is the factory function that wraps the global window access and
// provides the MathJax instance.
export function getMathJax(): MathJax {
  if (typeof window !== undefined) {
    if ((window as any).MathJax !== undefined) {
      return (window as any).MathJax;
    }
  }
}

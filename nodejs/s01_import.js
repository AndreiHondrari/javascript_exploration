// Must be executed with --experimental-modules flag
// and --no-warnings to supress ESM warnings regarding experimental stuff.

import xalias from "./modules/module1.js";
import * as module2_alias1 from "./modules/module2.js";
import dohfunc, * as module2_alias2 from "./modules/module2.js";
import "./modules/module3.js";

// aliases module1:x as xalias (because it's a default export)
console.log("xalias [module1:x]: " + xalias);

// module2_alias1 calls
console.log("\nALIAS 1 CALLS");
console.log(`module2_alias1.varTheOne [module2:var1]: ${module2_alias1.varTheOne}`);
console.log(`module2_alias1.var2 [module2:var2]: ${module2_alias1.var2}`);

// module2_alias2 calls
console.log("\nALIAS 2 CALLS");
dohfunc();
console.log(`module2_alias2.varTheOne [module2:var1]: ${module2_alias2.varTheOne}`);
console.log(`module2_alias2.var2 [module2:var2]: ${module2_alias2.var2}`);

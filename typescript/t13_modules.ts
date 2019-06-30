import {p} from "./ut";

import xalias from "./modules/module1";
import * as module2_alias1 from "./modules/module2";
import dohfunc, * as module2_alias2 from "./modules/module2";
import "./modules/module3";
import {mod4bla} from "./modules/module4";

// aliases module1:x as xalias (because it's a default export)
console.log("xalias [module1:x]: " + xalias);

// module2_alias1 calls
p("ALIAS 1 CALLS");
console.log(`module2_alias1.varTheOne [module2:var1]: ${module2_alias1.varTheOne}`);
console.log(`module2_alias1.var2 [module2:var2]: ${module2_alias1.var2}`);

// module2_alias2 calls
p("ALIAS 2 CALLS");
dohfunc();
console.log(`module2_alias2.varTheOne [module2:var1]: ${module2_alias2.varTheOne}`);
console.log(`module2_alias2.var2 [module2:var2]: ${module2_alias2.var2}`);

// module 4
p("MOD 4")
mod4bla();

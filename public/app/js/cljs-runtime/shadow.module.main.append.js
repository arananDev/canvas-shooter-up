
shadow.cljs.devtools.client.env.module_loaded('main');

try { game.app.init(); } catch (e) { console.error("An error occurred when calling (game.app/init)"); throw(e); }
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));

Route.group(() => {
  Route.post('login', 'UserController.login');
  Route.post('register', 'UserController.register');
}).prefix('user');

Route.get('user/:id', 'UserController.show').middleware(['auth']);
Route.get('user/', 'UserController.index').middleware(['auth']);

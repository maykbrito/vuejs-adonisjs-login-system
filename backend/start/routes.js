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
  Route.get(':id', 'UserController.show');
  Route.get('/', 'UserController.index');
}).prefix('user');

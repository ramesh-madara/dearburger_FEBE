<?php
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Headers, Authorization, observe, enctype, Content-Length, X-Csrf-Token");
    header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    // header("Access-Control-Max-Age: 3600");
    header('content-type: application/json; charset=utf-8');

    header("HTTP/1.1 200 OK CORS");
    exit;
}

use CodeIgniter\Router\RouteCollection;


/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'UserLogin::index');

header('Access-Control-Allow-Origin: *');

// $routes->get('/example', 'Examples::offices_management');



$routes->group('categories', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'Examples::offices_management');
    $routes->get('edit/(:any)', 'Examples::offices_management');
    $routes->post('update_validation/(:any)', 'Examples::offices_management');
    $routes->post('update/(:any)', 'Examples::offices_management');
    $routes->get('read/(:any)', 'Examples::offices_management');
    $routes->get('delete/(:any)', 'Examples::offices_management');
    $routes->get('add', 'Examples::offices_management');
    $routes->post('insert_validation', 'Examples::offices_management');
    $routes->post('insert', 'Examples::offices_management');
    $routes->get('success/(:any)', 'Examples::offices_management');
    $routes->get('success', 'Examples::offices_management');
});
$routes->group('crud', function ($routes) {
    $routes->get('/', 'TableController::index');
    $routes->post('table/insert', 'TableController::insert');
});

$routes->group('inventory', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'ExpensesController::index');
    $routes->get('edit/(:any)', 'ExpensesController::index');
    $routes->post('update_validation/(:any)', 'ExpensesController::index');
    $routes->post('update/(:any)', 'ExpensesController::index');
    $routes->get('read/(:any)', 'ExpensesController::index');
    $routes->get('delete/(:any)', 'ExpensesController::index');
    $routes->get('add', 'ExpensesController::index');
    $routes->post('insert_validation', 'ExpensesController::index');
    $routes->post('insert', 'ExpensesController::index');
    $routes->get('success/(:any)', 'ExpensesController::index');
    $routes->get('success', 'ExpensesController::index');

    $routes->get('categories', 'ExpensesController::categories', ['filter' => 'authFilterView']);
    $routes->get('categories/edit/(:any)', 'ExpensesController::categories');
    $routes->post('categories/update_validation/(:any)', 'ExpensesController::categories');
    $routes->post('categories/update/(:any)', 'ExpensesController::categories');
    $routes->get('categories/read/(:any)', 'ExpensesController::categories');
    $routes->get('categories/delete/(:any)', 'ExpensesController::categories');
    $routes->get('categories/add', 'ExpensesController::categories');
    $routes->post('categories/insert_validation', 'ExpensesController::categories');
    $routes->post('categories/insert', 'ExpensesController::categories');
    $routes->get('categories/success/(:any)', 'ExpensesController::categories');
    $routes->get('categories/success', 'ExpensesController::categories');
});


$routes->group('expenses', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'ExpensesController::expences');
    $routes->get('edit/(:any)', 'ExpensesController::expences');
    $routes->post('update_validation/(:any)', 'ExpensesController::expences');
    $routes->post('update/(:any)', 'ExpensesController::expences');
    $routes->get('read/(:any)', 'ExpensesController::expences');
    $routes->get('delete/(:any)', 'ExpensesController::expences');
    $routes->get('add', 'ExpensesController::expences');
    $routes->post('insert_validation', 'ExpensesController::expences');
    $routes->post('insert', 'ExpensesController::expences');
    $routes->get('success/(:any)', 'ExpensesController::expences');
    $routes->get('success', 'ExpensesController::expences');
});

$routes->group('addExpenses', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'Expenses::index', ['filter' => 'authFilterView']);
    $routes->get('stats', 'Expenses::stats', ['filter' => 'authFilterView']);
    $routes->post('save', 'Expenses::save');
});
$routes->group('menuitemoptions', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'Examples::menu_item_options_view', ['filter' => 'authFilterView']);
    $routes->get('edit/(:any)', 'Examples::menu_item_options_view');
    $routes->post('update_validation/(:any)', 'Examples::menu_item_options_view');
    $routes->post('update/(:any)', 'Examples::menu_item_options_view');
    $routes->get('read/(:any)', 'Examples::menu_item_options_view');
    $routes->get('delete/(:any)', 'Examples::menu_item_options_view');
    $routes->get('add', 'Examples::menu_item_options_view');
    $routes->post('insert_validation', 'Examples::menu_item_options_view');
    $routes->post('insert', 'Examples::menu_item_options_view');
    $routes->get('success/(:any)', 'Examples::menu_item_options_view');
    $routes->get('success', 'Examples::menu_item_options_view');
});

$routes->group('menuitems', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'Examples::menu_items_view', ['filter' => 'authFilterView']);
    $routes->get('edit/(:any)', 'Examples::menu_items_view');
    $routes->post('update_validation/(:any)', 'Examples::menu_items_view');
    $routes->post('update/(:any)', 'Examples::menu_items_view');
    $routes->get('read/(:any)', 'Examples::menu_items_view');
    $routes->get('delete/(:any)', 'Examples::menu_items_view');
    $routes->get('add', 'Examples::menu_items_view');
    $routes->post('insert_validation', 'Examples::menu_items_view');
    $routes->post('insert', 'Examples::menu_items_view');
    $routes->get('success/(:any)', 'Examples::menu_items_view');
    $routes->get('success', 'Examples::menu_items_view');
});
$routes->group('addons', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'Examples::addons_view');
    $routes->get('edit/(:any)', 'Examples::addons_view');
    $routes->post('update_validation/(:any)', 'Examples::addons_view');
    $routes->post('update/(:any)', 'Examples::addons_view');
    $routes->get('read/(:any)', 'Examples::addons_view');
    $routes->get('delete/(:any)', 'Examples::addons_view');
    $routes->get('add', 'Examples::addons_view');
    $routes->post('insert_validation', 'Examples::addons_view');
    $routes->post('insert', 'Examples::addons_view');
    $routes->get('success/(:any)', 'Examples::addons_view');
    $routes->get('success', 'Examples::addons_view');
});





$routes->group('itemprices', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'PriceView::item_price_view', ['filter' => 'authFilterView']);
    $routes->get('edit/(:any)', 'PriceView::item_price_view');
    $routes->post('update_validation/(:any)', 'PriceView::item_price_view');
    $routes->post('update/(:any)', 'PriceView::item_price_view');
    $routes->get('read/(:any)', 'PriceView::item_price_view');
    $routes->get('delete/(:any)', 'PriceView::item_price_view');
    $routes->get('add', 'PriceView::item_price_view');
    $routes->post('insert_validation', 'PriceView::item_price_view');
    $routes->post('insert', 'PriceView::item_price_view');
    $routes->get('success/(:any)', 'PriceView::item_price_view');
    $routes->get('success', 'PriceView::item_price_view');
});



$routes->group('apidb', function ($routes) {
    $routes->get('/', 'GetCategories::index', ['filter' => 'authFilter']);
    $routes->options('categories', 'GetCategories::index',  ['filter' => 'authFilter']);
    $routes->get('categories', 'GetCategories::index', ['filter' => 'authFilter']);
    $routes->get('menuitems', 'GetMenuItems::index', ['filter' => 'authFilter']);
    $routes->get('menuItemCategory/(:any)', 'GetMenuItems::get_menu_items_by_category/$1', ['filter' => 'authFilter']);
    $routes->get('menuItemsWithAddons', 'GetMenuItems::get_menu_items_with_addons', ['filter' => 'authFilter']);
    $routes->get('menuItemsWithAddonsCategorized/(:any)', 'GetMenuItems::get_menu_items_with_addons_by_category/$1', ['filter' => 'authFilter']);


    $routes->post('orders', 'OrdersAPIController::add', ['filter' => 'authFilter']);
    $routes->get('orders/(:any)', 'OrdersAPIController::getHoldOrders/$1', ['filter' => 'authFilter']);
    $routes->PATCH('orders/updateStatus', 'OrdersAPIController::updateOrderStatus',  ['filter' => 'authFilter']);
    $routes->PATCH('orders/updateOrder', 'OrdersAPIController::updateOrder',  ['filter' => 'authFilter']);

    $routes->get('getPaymentMethods', 'OrdersAPIController::getPaymentMethods', ['filter' => 'authFilter']);

    $routes->get('getTable', 'OrdersAPIController::getTable');
});

$routes->group('orders', ['filter' => 'authFilterView'], function ($routes) {
    $routes->get('/', 'OrdersViewController::index', ['filter' => 'authFilterView']);
    $routes->get('edit/(:any)', 'OrdersViewController::index');
    $routes->post('update_validation/(:any)', 'OrdersViewController::index');
    $routes->post('update/(:any)', 'OrdersViewController::index');
    $routes->get('read/(:any)', 'OrdersViewController::index');
    $routes->get('delete/(:any)', 'OrdersViewController::index');
    $routes->get('add', 'OrdersViewController::index');
    $routes->post('insert_validation', 'OrdersViewController::index');
    $routes->post('insert', 'OrdersViewController::index');
    $routes->get('success/(:any)', 'OrdersViewController::index');
    $routes->get('success', 'OrdersViewController::index');
});

$routes->group("user", function ($routes) {
    $routes->get("/", "UserLogin::index");
    $routes->get("login", "UserLogin::index");
    $routes->get("register", "UserLogin::register");
});


$routes->group("api", function ($routes) {
    $routes->post("register", "Register::index", ['filter' => 'authFilter']);

    // $routes->options('login');
    $routes->post("login", "Login::index");

    $routes->get("logout", "Login::logout");
    $routes->get("users", "User::index", ['filter' => 'authFilter']);
});

$routes->post('test', 'Test::test');

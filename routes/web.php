<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::post(
    'api/team/store',
    [
        'as' => 'api.team.store',
        'uses' => 'TeamController@store'
    ]
);

Route::get(
    'api/team/overview',
    [
        'as' => 'api.team.overview',
        'uses' => 'TeamController@overview'
    ]
);

Route::get(
    'api/team/{teamId}',
    [
        'as' => 'api.team.show',
        'uses' => 'TeamController@show'
    ]
);

Route::patch(
    'api/team/update/{teamId}',
    [
        'as' => 'api.team.update',
        'uses' => 'TeamController@update'
    ]
);

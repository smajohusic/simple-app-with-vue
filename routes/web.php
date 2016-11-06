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


/*
|------------------------------------------------------------------------------------------------------------------
| Player routes
|------------------------------------------------------------------------------------------------------------------
*/

Route::post(
    'api/player/store',
    [
        'as' => 'player.create',
        'uses' => 'PlayerController@store'
    ]
);

Route::get(
    'api/player/overview',
    [
        'as' => 'player.overview',
        'uses' => 'PlayerController@overview'
    ]
);

Route::get(
    'api/player/{playerId}',
    [
        'as' => 'api.player.show',
        'uses' => 'PlayerController@show'
    ]
);

Route::patch(
    'api/player/update/{playerId}',
    [
        'as' => 'api.player.update',
        'uses' => 'PlayerController@update'
    ]
);

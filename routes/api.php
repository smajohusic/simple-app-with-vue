<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

/*
|------------------------------------------------------------------------------------------------------------------
| Team
|------------------------------------------------------------------------------------------------------------------
*/
Route::post(
    'team/store',
    [
        'as' => 'api.team.store',
        'uses' => 'TeamController@store'
    ]
);

Route::get(
    'team/overview',
    [
        'as' => 'api.team.overview',
        'uses' => 'TeamController@overview'
    ]
);

Route::get(
    'team/{teamId}',
    [
        'as' => 'api.team.show',
        'uses' => 'TeamController@show'
    ]
);

Route::patch(
    'team/update/{teamId}',
    [
        'as' => 'api.team.update',
        'uses' => 'TeamController@update'
    ]
);

/*
|------------------------------------------------------------------------------------------------------------------
| Player
|------------------------------------------------------------------------------------------------------------------
*/
Route::post(
    'player/store',
    [
        'as' => 'player.create',
        'uses' => 'PlayerController@store'
    ]
);

Route::get(
    'player/overview',
    [
        'as' => 'player.overview',
        'uses' => 'PlayerController@overview'
    ]
);

Route::get(
    'player/{playerId}',
    [
        'as' => 'api.player.show',
        'uses' => 'PlayerController@show'
    ]
);

Route::patch(
    'player/update/{playerId}',
    [
        'as' => 'api.player.update',
        'uses' => 'PlayerController@update'
    ]
);

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $guarded = 'id';

    protected $fillable = ['name', 'description', 'nickname'];

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Relationships
    |------------------------------------------------------------------------------------------------------------------
    */
    public function player()
    {
        $this->hasMany(Player::class, 'team_player_pivot');
    }
}

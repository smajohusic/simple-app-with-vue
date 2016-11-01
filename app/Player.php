<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $guarded = 'id';

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Relationships
    |------------------------------------------------------------------------------------------------------------------
    */
    public function team()
    {
        $this->belongsTo(Team::class, 'team_player_pivot');
    }
}

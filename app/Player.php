<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = ['name', 'age', 'nickname', 'team_id'];

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Relationships
    |------------------------------------------------------------------------------------------------------------------
    */
    public function team()
    {
        return $this->belongsTo(Team::class, 'team_id');
    }
}

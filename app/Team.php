<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name', 'description', 'nickname'];

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Relationships
    |------------------------------------------------------------------------------------------------------------------
    */
    public function player()
    {
        return $this->hasMany(Player::class);
    }
}

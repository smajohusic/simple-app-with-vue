<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = ['name', 'age', 'nickname'];

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Relationships
    |------------------------------------------------------------------------------------------------------------------
    */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function related()
    {
        return $this->morphTo();
    }
}

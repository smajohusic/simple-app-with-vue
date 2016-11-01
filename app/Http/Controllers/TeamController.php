<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * @var Team
     */
    private $team;

    public function __construct(Team $team)
    {
        $this->team = $team;
    }

    public function store(StoreTeamRequest $request)
    {
        $this->team->create([
            'name' => $request->name,
            'description' => $request->description,
            'nickname' => $request->nickname
        ]);
    }
}

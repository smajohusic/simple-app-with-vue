<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Team;

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

    public function overview()
    {
        return $this->team->all();
    }

    public function show($teamId)
    {
        return $this->team->findOrFail($teamId);
    }

    public function update($teamId, UpdateTeamRequest $request)
    {
        $team = $this->team->findOrFail($teamId);

        $team->update([
            'name' => $request->name,
            'nickname' => $request->nickname,
            'description' => $request->description
        ]);
    }
}

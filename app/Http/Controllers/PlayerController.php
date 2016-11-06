<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayerRequest;
use App\Http\Requests\UpdatePlayerRequest;
use App\Player;

class PlayerController extends Controller
{
    /**
     * @var Player
     */
    private $player;

    public function __construct(Player $player)
    {
        $this->player = $player;
    }

    public function store(StorePlayerRequest $request)
    {
        $this->player->create([
            'name' => $request->name,
            'age' => $request->age,
            'nickname' => $request->nickname,
            'team_id' => $request->teamId
        ]);
    }

    public function overview()
    {
        return $this->player->all();
    }

    public function show($playerId)
    {
        return $this->player->with('team')->findOrFail($playerId);
    }

    public function update($playerId, UpdatePlayerRequest $request)
    {
        $player = $this->player->findOrFail($playerId);

        $player->update([
            'name' => $request->name,
            'age' => $request->age,
            'nickname' => $request->nickname
        ]);
    }
}

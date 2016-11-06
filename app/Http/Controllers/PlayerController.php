<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayerRequest;
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

    public function create(StorePlayerRequest $request)
    {
        $this->player->create([
            'name' => $request->name,
            'age' => $request->age,
            'nickname' => $request->nickname
        ]);
    }

    public function overview()
    {
        return $this->player->all();
    }
}

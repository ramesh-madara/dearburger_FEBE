<?php

namespace App\Controllers;

class UserLogin extends BaseController
{
    public function index(): string
    {
        return view('login');
    }

    
}

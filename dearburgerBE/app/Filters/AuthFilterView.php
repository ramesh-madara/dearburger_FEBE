<?php

namespace App\Filters;


use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;
use Config\Services;

class AuthFilterView implements FilterInterface
{


    public function before(RequestInterface $request, $arguments = null)
    {
        $request = Services::request();
        $key = getenv('JWT_SECRET');
        $cookieName = 'jwt_token';
        $cookieValue = $request->getCookie($cookieName);

        if (!isset($cookieValue)) {
            return redirect()->to('/user/login');
        }

        $cookie = $cookieValue;

        try {
            $decoded = JWT::decode($cookie, new Key($key, 'HS256'));
        } catch (Exception $ex) {
            return redirect()->to('/user/login');
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}

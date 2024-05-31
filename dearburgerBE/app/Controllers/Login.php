<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
use \Firebase\JWT\JWT;

class Login extends BaseController
{
    use ResponseTrait;

    public function index()

    {

        $userModel = new UserModel();

        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        $user = $userModel->where('email', $email)->first();

        if (is_null($user)) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }

        $pwd_verify = password_verify($password, $user['password']);

        if (!$pwd_verify) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }

        $key = getenv('JWT_SECRET');
        $iat = time();
        $exp = $iat + 360000;

        $payload = array(
            "iss" => "Issuer of the JWT",
            "aud" => "Audience that the JWT",
            "sub" => "Subject of the JWT",
            "iat" => $iat,
            "exp" => $exp,
            "email" => $user['email'],
        );

        $encoding_algo = 'HS256';

        $token = JWT::encode($payload, $key, $encoding_algo);

        // $response = [
        //     'message' => 'Login Succesful',
        //     'token' => $token
        // ];

        // return $this->respond($response, 200);

        //Set Cookie

        setcookie('jwt_token', $token, $exp, '/', '', false, true);

        $responseData = [
            'message' => 'Login Succesful!',
            'token' => $token
        ];

        return $this->respond($responseData, 200);
    }
    public function logout()
    {
        setcookie('jwt_token', '', time() - 3600, '/', '', false, true);

        return $this->respond(['message' => 'Logout successful'], 200);
    }
}

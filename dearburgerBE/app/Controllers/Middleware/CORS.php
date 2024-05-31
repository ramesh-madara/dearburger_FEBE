<?php


namespace App\Controllers\Middleware;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;

class CORS implements \CodeIgniter\HTTP\Middleware
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Add CORS headers
        $response = Services::response()
            ->setHeader('Access-Control-Allow-Origin', '*')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // If it's an OPTIONS request, we send an empty body with the correct CORS headers and exit
        if ($request->getMethod() === 'OPTIONS') {
            return $response->setBody('');
        }

        return $response;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // No action needed here, so just return the response
        return $response;
    }
}

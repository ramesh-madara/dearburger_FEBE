<?php

namespace App\Controllers;

use App\Models\CategoriesModel;
use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;

class GetCategories extends Controller
{
    use ResponseTrait;

    public function index()
    {
        $model = new CategoriesModel();
        $categories = $model->findAll();

        // Add CORS headers


        return $this->respond($categories);
    }
}

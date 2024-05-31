<?php

namespace App\Controllers;

use App\Models\InventoryCategorizedModel;
use App\Models\ExpensesModel;
use App\Models\InventoryManageModel;
use App\Models\InventoryModel;
use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;


class Expenses extends Controller
{
    use ResponseTrait;

    public function index()
    {
        $inventoryModel = new InventoryCategorizedModel();
        $data['items'] = $inventoryModel->getInventoryItemsWithCategory();

        return view('expenses_form', $data);
        // print_r($data);
    }
    public function stats()
    {
        $expensesModel = new ExpensesModel();
        $data['items'] = $expensesModel->findAll();

        return view('expenses_stats', $data);
    }

    public function save()
    {
        $expensesModel = new ExpensesModel();
        $inventoryModel = new InventoryModel();

        $items = $this->request->getVar('items');
        $qtys = $this->request->getVar('qtys');
        $prices = $this->request->getVar('prices');
        $descriptions = $this->request->getVar('descriptions');
        $date = $this->request->getVar('date');

        foreach ($items as $key => $item) {
            $data = [
                'inventoryItemID' => $item,
                'qty' => $qtys[$key],
                'price' => $prices[$key],
                'description' =>  $descriptions[$key],
                'date' => $date
            ];
            if ($data['qty'] > 0) {
                $result = $expensesModel->insert($data);
                if ($result) {
                    $response = $inventoryModel->addQuantity($data['inventoryItemID'], $data['qty']);

                    $tblInvAllowedFields = ['itemName', 'qty', 'repurchaseStatus'];
                    $inventoryManageModel = new InventoryManageModel('tblinventory', 'inventoryItemID', $tblInvAllowedFields);

                    $id = $data['inventoryItemID'];
                    $inventoryManageModel->updateRepurchaseStatus($id);

                    if (!$response['status']) {
                        log_message('error', 'Failed to update quantity for item ID ' . $data['inventoryItemID'] . ': ' . $response['message']);
                    }
                }
            }
        }

        return $this->respond($response, 200);
    }
}

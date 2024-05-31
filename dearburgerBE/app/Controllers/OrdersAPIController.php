<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;
use App\Models\OrdersModel;
use App\Models\OrderItemsModel;
use App\Models\KOTModel;
use App\Models\KOTItmesModel;
use App\Models\DynamicModel;
use Exception;

class OrdersAPIController extends BaseController

{
    use ResponseTrait;
    public function add()
    {
        $ordersModel = new OrdersModel();
        $orderItemsModel = new OrderItemsModel();
        $jsonData = $this->request->getJSON();
        $orderStatus = $this->request->getVar('orderStatus');
        $orderDatetime = $this->request->getVar('orderDatetime');
        $orderItems = $this->request->getVar('orderItems');
        $tableNo = $this->request->getVar('tableNo');

        $data = [
            'orderStatus'   => $orderStatus,
            'orderDatetime' => $orderDatetime,
            'tableNo'       => $tableNo,
        ];
        $resultOrder = $ordersModel->insert($data);
        $OrderId = $ordersModel->insertID();

        if ($resultOrder) {
            $resultOrderItem = [];
            foreach ($orderItems as $key => $item) {
                $item->orderID = $OrderId;
                $resultOrderItem[$key] = $orderItemsModel->insert($item);
            }

            try {
                $KotID = $this->createKOT($OrderId);
                if (!$KotID) {
                    throw new Exception("Failed to create KOT");
                }

                foreach ($resultOrderItem as $key => $value) {
                    $kotResult = $this->addKOTItems([
                        'kotID' => $KotID,
                        'tblorderitemsID' => $value
                    ]);
                    if (!$kotResult) {
                        throw new Exception("Failed to add KOT item for tblorderitemsID: " . $value);
                    }
                }

                echo "KOT and items added successfully.";
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
        }


        if ($resultOrder === false) {
            return $this->failServerError('Failed to insert data');
        }

        //remove from table

        helper('inventory_manage');

        $result = [];
        foreach ($orderItems as $value) {
            $menuID = $value->menuItemID;
            $qty = $value->orderQty;

            $result[] = removeFromInventory($menuID, $qty);
        }

        return $this->respondCreated(['message' => 'Data Inert Successful', 'orderId' => $OrderId, 'order' => $jsonData]);
    }


    public function getHoldOrders($OrderStatus)
    {
        $ordersModel = new OrdersModel();
        helper('sortorders_helper');

        $unsortedOrderItems = $ordersModel->getOrdersByCategory($OrderStatus);
        $sortedOrderItems = sort_orders($unsortedOrderItems);
        return $this->respond($sortedOrderItems);
    }
    public function updateOrderStatus()
    {
        $ordersModel = new OrdersModel();
        $input = $this->request->getJSON();

        if (!isset($input->orderId) ||  !isset($input->status)) {
            return $this->fail('Invalid input', 400);
        }

        //check if order exists
        if (!$ordersModel->orderExists($input->orderId)) {
            return $this->fail('OrderId ' . $input->orderId . ' Not Found');
        }


        $result =  $ordersModel->updateOrderStatus($input->orderId, $input->status);
        if ($result) {
            return $this->respond(['message' => 'Order status updates successfully'], 200);
        } else {
            return $this->fail(['message' => 'Failed to update order status'], 500);
        }
    }

    public function updateOrder()
    {
        $orderItemsModel = new OrderItemsModel();
        $ordersModel = new OrdersModel();

        $input = $this->request->getJSON();
        $OrderId = $this->request->getVar('orderId');
        $orderItems = $this->request->getVar('foodItems');


        //check if order exists
        if (!$ordersModel->orderExists($input->orderId)) {
            return $this->fail('OrderId ' . $input->orderId . ' Not Found');
        }


        $insertIDs = [];
        foreach ($orderItems as $key => $item) {
            $item->orderID = $OrderId;
            $insertIDs[$key] = $orderItemsModel->insert($item);
        }
        //create new kot kotid, issued

        $KotID = $this->createKOT($OrderId);
        foreach ($insertIDs as $key => $value) {
            $this->addKOTItems([
                'kotID' => $KotID,
                'tblorderitemsID' => $value
            ]);
        }

        //remove from table

        helper('inventory_manage');

        $result = [];
        foreach ($orderItems as $value) {
            $menuID = $value->menuItemID;
            $qty = $value->orderQty;

            $result[] = removeFromInventory($menuID, $qty);
        }

        //add kot items kotid, orderitemsIds
        return $this->respond([
            'kot' => $KotID,
            'orderID' => $OrderId
        ], 200);
    }

    public function getPaymentMethods()
    {
        $paymentMethodModel = new DynamicModel('tblpaymenttypes', 'paymentTypeID');
        return $this->response->setJSON($paymentMethodModel->getAllValues());
    }

    public function getTable()
    {
        $tableName = $this->request->getGet('table');
        $primaryKey = $this->request->getGet('primaryKey');
        $columnName = $this->request->getGet('columnName');
        $searchKey = $this->request->getGet('searchKey');

        if (!$tableName) {
            return $this->fail('Table name is required', 400);
        }

        $model = new DynamicModel($tableName, $primaryKey);
        if ($columnName !== null && $searchKey === null) {
            $results = $model->getColumn($columnName);
        } else if ($columnName !== null && $searchKey !== null) {
            $results = $model->getValuesByKey($columnName, $searchKey);
        } else {
            $results = $model->getAllValues();
        }

        return $this->respond($results);
    }


    public function createKOT($orderID)
    {
        $KOTModel = new KOTModel();
        $KOTId = $KOTModel->insert(['orderID' => $orderID]);

        if (!$KOTId) {
            return $this->fail('KOT for ' . $KOTId . ' could not be created');
        } else {
            return $KOTId;
        }
    }
    public function addKOTItems($orderItemsID)
    {
        $KOTItmesModel = new KOTItmesModel();

        if (!$KOTItmesModel->insert($orderItemsID)) {
            return false;
        } else {
            return true;
        }
    }
}

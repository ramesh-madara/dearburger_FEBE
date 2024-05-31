<?php

namespace App\Models;

use CodeIgniter\Model;

class OrdersModel extends Model
{
    protected $table            = 'tblorder';
    protected $primaryKey       = 'orderID';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ["orderStatus", "orderDatetime", 'tableNo'];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;

    protected array $casts = [];
    protected array $castHandlers = [];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    public function __construct()
    {
        parent::__construct();
    }
    public function orderExists($orderId)
    {
        return $this->where('orderID', $orderId)->countAllResults() > 0;
    }

    public function getOrdersByCategory(?string $OrderStatus = null)
    {
        $builder = $this->db->table($this->table);
        $builder->select('tblorder.*,tblorderitems.*');
        $builder->join('tblorderitems', 'tblorder.orderID = tblorderitems.orderID');

        if ($OrderStatus !== null) {
            $builder->where('OrderStatus', $OrderStatus);
        }
        return $builder->get()->getResultArray();
    }
    public function updateOrderStatus($orderId, $status)
    {
        return $this->where('orderID', $orderId)
            ->set(['orderStatus' => $status])
            ->update();
    }
}

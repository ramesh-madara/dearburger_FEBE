<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTblPaymentTypes extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'paymentTypeID' => [
                'type'           => 'INT',
                'constraint'     => 5,
                'auto_increment' => true,
            ],
            'paymentTypeName' => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
            ]
        ]);
        $this->forge->addPrimaryKey('paymentTypeID');
        $this->forge->createTable('tblPaymentTypes');
    }

    public function down()
    {
        $this->forge->dropTable('tblPaymentTypes');
    }
}
